from rest_framework.filters import SearchFilter, OrderingFilter
from .serializers import (MenuSerializer, VendorSerializer)
from rest_framework.generics import (ListCreateAPIView)
from .models import *
# Create your views here.


class MenuListApiView(ListCreateAPIView):
    permission_classes = []
    authentication_classes = []
    queryset = Menu.objects.all()
    serializer_class = MenuSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['menu_name', 'vendor__get_vendor_name()']
    ordering_fields = ['rating']  # delivery_time will be added later.


class VendorListApiView(ListCreateAPIView):
    permission_classes = []
    authentication_classes = []
    queryset = Vendor.objects.all()
    serializer_class = VendorSerializer
    filter_backends = [SearchFilter, OrderingFilter]
    search_fields = ['get_vendor_name()', 'categories']
    ordering_fields = ['rating']  # delivery_time will be added later.




