from rest_framework.response import Response
from rest_framework import permissions, status
from rest_framework.exceptions import ValidationError
from .serializers import OrderMenuSerializer
from rest_framework import status
from rest_framework import generics
from rest_framework.views import APIView
from base.models import Person
from partner.models import partnerLocation
from partner.serializers import partnerInfo
from .models import Orders
from .serializers import UserSerializer, OrdersSerializer
from math import sin, cos, sqrt, atan2, radians
import googlemaps


class UserListApiView(generics.ListAPIView):
    queryset = Person.objects.all()
    serializer_class = UserSerializer


class PastOrdersListApiView(generics.ListCreateAPIView):
    permission_classes = [permissions.AllowAny]
    authentication_classes = []
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer

    def post(self, request, *args, **kwargs):
        # Since many to many field present so we need to override the default behaviour
        # since the instance needs to be created before adding
        print(request.data)
        instance = OrdersSerializer(data=request.data, context={'request': self.request})
        try:
            # Pops the many to many field data present in request.data magically
            instance.is_valid()
        except ValidationError:
            return Response(data=instance.errors, status=status.HTTP_400_BAD_REQUEST)

        ob = instance.save()

        # Create many OrderMenu Objects at once first
        serializer = OrderMenuSerializer(data=request.data['menus'], many=True)
        try:
            serializer.is_valid()
        except ValidationError:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        menu_instances = serializer.save()
        # Dont use for loop since this saves the database hit and uses bulkcreate method instead of create method
        ob.menus.add(*menu_instances)  # spread all the list objects in add method
        ob.save()

        response = OrdersSerializer(ob).data

        return Response(data=response, status=status.HTTP_201_CREATED)


class assignPartner(APIView):
    permission_classes = []
    authentication_classes = []

    ''' Assuming LAtLng of Vendor will be in the request'''
    '''Filters entire data and calculates closest'''

    def get(self, request):

        v_longitude = request.GET.get('longitude')
        v_latitude = request.GET.get('latitude')
        v_area = request.GET.get('area')
        partner_list = partnerLocation.objects.filter(area=v_area)

        shortestDistance = 0
        assignedPartner = partnerLocation.objects.get(pk=1)

        for partner_location in partner_list:
            p_longitude = partner_location.longitude
            p_latitude = partner_location.latitude

            R = 6373.0

            lat1 = radians(v_latitude)
            lon1 = radians(v_longitude)
            lat2 = radians(p_latitude)
            lon2 = radians(p_longitude)

            dlon = lon2 - lon1
            dlat = lat2 - lat1

            a = sin(dlat / 2) ** 2 + cos(lat1) * cos(lat2) * sin(dlon / 2) ** 2
            c = 2 * atan2(sqrt(a), sqrt(1 - a))

            distance = R * c

            if distance < shortestDistance:
                shortestDistance = distance
                assignedPartner = partner_location

        partnerDetails = assignedPartner.Partner
        partner_Details = partnerInfo(partnerDetails)

        return Response(partner_Details.data)


'''Filters with area'''


class assignPartnernew(APIView):
    permission_classes = []
    authentication_classes = []

    ''' Assuming LAtLng of Vendor will be in the request'''

    def get(self, request):

        v_longitude = request.GET.get('longitude')
        v_latitude = request.GET.get('latitude')
        v_area = request.GET.get('area')
        partner_list = partnerLocation.objects.filter(area=v_area)

        shortestDistance = 0
        assignedPartner = partnerLocation.objects.get(pk=1)

        for partner_location in partner_list:
            p_longitude = partner_location.longitude
            p_latitude = partner_location.latitude

            source = v_longitude + v_latitude
            destination = p_longitude + p_latitude

            gmaps = googlemaps.Client(key='AIzaSyCg0693hHjd0Pl9qMR8euPqK6N5DG_9FA8')
            result = gmaps.directions(source, destination, mode="transit", departure_time="now")

            distance_parsed = result[0]['legs'][0]['distance']['text']
            distance = int(distance_parsed)

            if distance < shortestDistance:
                shortestDistance = distance
                assignedPartner = partner_location

        partnerDetails = assignedPartner.Partner
        partner_Details = partnerInfo(partnerDetails)

        return Response(partner_Details.data)


'''Filters within a radius of 10km'''


class assignPartner_radius(APIView):
    permission_classes = []
    authentication_classes = []

    def get(self, request, format=None):

        v_longitude = request.GET.get('longitude')
        v_latitude = request.GET.get('latitude')

        partner_list = partnerLocation.objects.raw(''' SELECT
        partner, (
        6371 * acos (
         cos ( radians(%s) )
        * cos( radians( currentLatitude ) )
        * cos( radians( currentLongitude ) - radians(%s) )
        + sin ( radians(78.3232) )
        * sin( radians( %s ) )
        )
        ) AS distance
        FROM partner_partnerLocation
        HAVING distance < 10
        ORDER BY distance;
        
        ''', [v_latitude, v_longitude, v_latitude])

        shortestDistance = 0
        assignedPartner = None

        for partner_location in partner_list:
            p_longitude = partner_location.longitude
            p_latitude = partner_location.latitude

            source = v_longitude + v_latitude
            destination = p_longitude + p_latitude

            gmaps = googlemaps.Client(key='AIzaSyCg0693hHjd0Pl9qMR8euPqK6N5DG_9FA8')
            result = gmaps.directions(source, destination, mode="transit", departure_time="now")

            distance_parsed = result[0]['legs'][0]['distance']['text']
            distance = int(distance_parsed)

            if distance < shortestDistance and partner_location.currentStatus == 0:
                shortestDistance = distance
                assignedPartner = partner_location

        if assignedPartner:
            partnerDetails = assignedPartner.Partner
            partner_Details = partnerInfo(partnerDetails)

            return Response(partner_Details.data)

        else:
            content = {'Details': 'Partner not Found'}
            return Response(content, status=status.HTTP_404_NOT_FOUND)
