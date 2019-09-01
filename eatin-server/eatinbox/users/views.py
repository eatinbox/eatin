from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from base.models import Person
from .models import Orders
from .serializers import UserSerializer, OrdersSerializer
from rest_framework_jwt.views import obtain_jwt_token
from restconf.permissions import IsAllowed
from django.contrib.auth import *


class UserListApiView(generics.ListAPIView):
    queryset = Person.objects.all()
    serializer_class = UserSerializer


class PastOrdersListApiView(generics.ListAPIView):
    permission_classes = [IsAllowed]
    authentication_classes = []
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer

