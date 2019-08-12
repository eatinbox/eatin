
from rest_framework.serializers import ModelSerializer
from base.models import (Person)
from users.models import (Customer)

from rest_framework import serializers
from base.models import Person
from .models import Orders
from vendors.models import Menu, Vendor



class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('user', 'latitude', 'longitude', 'contact')


class CustomerSerializer(ModelSerializer):

    class Meta:
        model = Customer
        fields = ('favorites', 'user_info')



class PastOrdersSerializer(serializers.ModelSerializer):
    menu_name = serializers.SerializerMethodField()     # the method_name attribute defaults to get_<field_name>
    vendor_name = serializers.SerializerMethodField()

    class Meta:
        model = Orders
        fields = ['pk', 'order_time', 'total_credits', 'menu_name', 'vendor_name']

    def get_menu_name(self, obj):
        return obj.menu_infos.menu_name

    def get_vendor_name(self, obj):
        menu = obj.menu_infos
        return menu.vendor.get_vendor_name()

