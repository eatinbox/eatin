from rest_framework.response import Response
from rest_framework import status
from rest_framework import generics
from base.models import Person
from .models import Orders
from .serializers import UserSerializer, PastOrdersSerializer


class UserListApiView(generics.ListAPIView):
    queryset = Person.objects.all()
    serializer_class = UserSerializer


class PastOrdersListApiView(generics.ListAPIView):
    queryset = Orders.objects.all()
    serializer_class = PastOrdersSerializer

