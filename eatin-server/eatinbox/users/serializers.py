from users.models import (Customer, Address)
from rest_framework import serializers
from base.models import Person
from vendors.serializers import MenuSerializer
from .models import Orders, OrderMenu


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('user', 'latitude', 'longitude', 'contact')


class CustomerSerializer(serializers.ModelSerializer):
    class Meta:
        model = Customer
        fields = ('person_info',)


# change the fields and populate data with ids
class OrderMenuSerializer(serializers.ModelSerializer):
    # This field is required to poulate the id and store id as well for listRetrive view to work
    menu_ob = serializers.SerializerMethodField()

    class Meta:
        model = OrderMenu
        fields = ['menu', 'count', 'menu_ob']

    def get_menu_ob(self, obj):
        return MenuSerializer(obj.menu).data


class AddressSerializer(serializers.ModelSerializer):

    class Meta:
        model = Address
        fields = '__all__'


# Need To Update This Serializer (change the OrderMenuSerializer to get appropriate data)
class OrdersSerializer(serializers.ModelSerializer):
    menus = serializers.SerializerMethodField()     # the method_name attribute defaults to get_<field_name>

    class Meta:
        model = Orders
        fields = ['pk', 'customer_info', 'order_time', 'total_credits', 'menus']

    def get_menus(self, obj):
        menus = obj.menus.all()
        return OrderMenuSerializer(menus, many=True).data

