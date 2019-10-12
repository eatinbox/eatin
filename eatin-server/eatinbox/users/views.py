import googlemaps
from rest_framework import status, generics
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response

from base.models import Person
from jwtauth.permissions import IsValidUser
from partner.models import PartnerLocation
from partner.serializers import PartnerInfo
from .models import Orders
from .serializers import UserSerializer, OrdersSerializer, OrderMenuSerializer


class UserListApiView(generics.ListAPIView):
    queryset = Person.objects.all()
    serializer_class = UserSerializer


class PastOrdersListApiView(generics.ListCreateAPIView):
    permission_classes = [IsValidUser]
    # authentication_classes = []
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer

    def post(self, request, *args, **kwargs):
        # Since many to many field present so we need to override the default behaviour
        # since the instance needs to be created before adding
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

        # print(ob)

        assign_partner(ob)

        response = OrdersSerializer(ob).data

        return Response(data=response, status=status.HTTP_201_CREATED)


# Filters within a radius of 7km
def assign_partner(order):
    # Get just the first vendor cordinates from orderMenus as of now
    v_latitude = order.menus.all()[0].menu.vendor.get_coords()['latitude']
    v_longitude = order.menus.all()[0].menu.vendor.get_coords()['longitude']

    # print(v_latitude, v_longitude)

    filtered_partners = []
    sorted_partners = []

    partner_list = PartnerLocation.objects.raw(""" SELECT  * , 
    (
        6371 * 
        acos(cos( radians( %s ) ) * 
        cos( radians( latitude ) ) * 
        cos( radians( longitude ) - 
        radians( %s ) ) + 
        sin( radians( %s ) ) * 
        sin( radians( latitude ) ) ) 
    )   AS distance 
    
    FROM partner_partnerlocation 
    HAVING distance < 8
    ORDER BY distance; """, [v_latitude, v_longitude, v_latitude])

    # partner_list = PartnerLocation.objects.raw("SELECT * from partner_partnerlocation")

    for partner_location in partner_list:
        p_longitude = partner_location.longitude
        p_latitude = partner_location.latitude

        source = str(v_latitude) + ',' + str(v_longitude)
        destination = str(p_latitude) + ',' + str(p_longitude)

        gmaps = googlemaps.Client(key='AIzaSyCg0693hHjd0Pl9qMR8euPqK6N5DG_9FA8')
        result = gmaps.directions(source, destination, mode="transit", departure_time="now")

        if len(result) == 0:
            continue

        distance_dict = result[0]['legs'][0]['distance']
        duration_dict = result[0]['legs'][0]['duration']
        polyline = result[0]['overview_polyline']

        distance = int(distance_dict['value'])

        filtered_partners.append({
            'id': partner_location.partner,
            'distance': distance,
        })

        sorted_partners = sorted(filtered_partners, key=lambda k: k['distance'])

    print("Sorted", sorted_partners)
