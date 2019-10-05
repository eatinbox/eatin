from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from rest_framework.views import APIView
from base.models import Person
from partner.models import partnerLocation
from partner.serializers import partnerInfo
from .models import Orders
from .serializers import UserSerializer, OrdersSerializer
from rest_framework_jwt.views import obtain_jwt_token
from restconf.permissions import IsAllowed
from django.contrib.auth import *
from math import sin, cos, sqrt, atan2, radians
import googlemaps

class UserListApiView(generics.ListAPIView):
    queryset = Person.objects.all()
    serializer_class = UserSerializer


class PastOrdersListApiView(generics.ListAPIView):
    permission_classes = [IsAllowed]
    authentication_classes = []
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer

class assignPartner(APIView):
    permission_classes      = []
    authentication_classes  = []

    ''' Assuming LAtLng of Vendor will be in the request'''
    '''Filters entire data and calculates closest'''
    def get(self,request,format = None):
        
        v_longitude = request.GET.get('longitude')
        v_latitude = request.GET.get('latitude')
        v_area     = request.GET.get('area')
        partner_list = partnerLocation.objects.filter(area=v_area)


        shortestDistance = 0
        assignedPartner =  partnerLocation.objects.get(pk=1)

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

            a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
            c = 2 * atan2(sqrt(a), sqrt(1 - a))

            distance = R * c

            if(distance < shortestDistance):
                shortestDistance = distance
                assignedPartner  = partner_location


        partnerDetails = assignedPartner.Partner
        partner_Details = partnerInfo(partnerDetails)

        return Response(partner_Details.data)

'''Filters with area'''
class assignPartnernew(APIView):
    permission_classes      = []
    authentication_classes  = []

    ''' Assuming LAtLng of Vendor will be in the request'''
    def get(self,request,format = None):
        
        v_longitude = request.GET.get('longitude')
        v_latitude = request.GET.get('latitude')
        v_area     = request.GET.get('area')
        partner_list = partnerLocation.objects.filter(area=v_area)



        shortestDistance = 0
        assignedPartner =  partnerLocation.objects.get(pk=1)

        for partner_location in partner_list:
            p_longitude = partner_location.longitude
            p_latitude = partner_location.latitude

            source = v_longitude + v_latitude
            destination = p_longitude + p_latitude

            gmaps = googlemaps.Client(key = 'AIzaSyCg0693hHjd0Pl9qMR8euPqK6N5DG_9FA8')
            result = gmaps.directions(source,destination, mode = "transit", departure_time = "now")

            distance_parsed = result[0]['legs'][0]['distance']['text']
            distance = int(distance_parsed)

            if(distance<shortestDistance):
                shortestDistance = distance
                assignedPartner    = partner_location



        partnerDetails = assignedPartner.Partner
        partner_Details = partnerInfo(partnerDetails)

        return Response(partner_Details.data)

'''Filters within a radius of 10km'''
class assignPartner_radius(APIView):
    
    permission_classes      = []
    authentication_classes  = []

    def get(self,request,format = None):

        v_longitude = request.GET.get('longitude')
        v_latitude  = request.GET.get('latitude')


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
        
        ''',[v_latitude,v_longitude,v_latitude])

        shortestDistance = 0
        assignedPartner = None

        for partner_location in partner_list:
            p_longitude = partner_location.longitude
            p_latitude = partner_location.latitude

            source = v_longitude + v_latitude
            destination = p_longitude + p_latitude

            gmaps = googlemaps.Client(key = 'AIzaSyCg0693hHjd0Pl9qMR8euPqK6N5DG_9FA8')
            result = gmaps.directions(source,destination, mode = "transit", departure_time = "now")

            distance_parsed = result[0]['legs'][0]['distance']['text']
            distance = int(distance_parsed)

            if(distance<shortestDistance and partner_location.currentStatus == 0):
                shortestDistance = distance
                assignedPartner    = partner_location


        if(assignedPartner != None):
            partnerDetails = assignedPartner.Partner
            partner_Details = partnerInfo(partnerDetails)

            return Response(partner_Details.data)

        else:
            content = {'Details': 'Partner not Found'}
            return Response(content, status=status.HTTP_404_NOT_FOUND)



            



