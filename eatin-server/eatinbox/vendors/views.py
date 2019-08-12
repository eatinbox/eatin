from rest_framework import filters
from .serializers import (MenuSerializer, VendorSerializer)
from rest_framework.generics import (ListCreateAPIView)
from .models import *
# Create your views here.


class MenuListApiView(ListCreateAPIView):
    permission_classes = []
    authentication_classes = []
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['menu_date']


class VendorListApiView(ListCreateAPIView):
    permission_classes = []
    authentication_classes = []
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer
    filter_backends = [filters.OrderingFilter]
    ordering_fields = ['rating']