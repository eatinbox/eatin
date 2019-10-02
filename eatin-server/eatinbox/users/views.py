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
    def get(self,request,format = None):
        partner_list = partnerLocation.objects.all()
        v_longitude = request.GET.get('longitude')
        v_latitude = request.GET.get('latitude')

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




