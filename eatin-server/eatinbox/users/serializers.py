
from rest_framework.serializers import ModelSerializer
from users.models import (Customer)
from rest_framework import serializers
from base.models import Person
from .models import Orders, OrderMenu


class UserSerializer(serializers.ModelSerializer):
    class Meta:
        model = Person
        fields = ('user', 'latitude', 'longitude', 'contact')


class CustomerSerializer(ModelSerializer):
    class Meta:
        model = Customer
        fields = ('favorites', 'user_info')


# change the fields and populate data with ids
class OrderMenuSerializer(ModelSerializer):
    class Meta:
        model = OrderMenu
        fields = '__all__'


# Need To Update This Serializer (change the OrderMenuSerializer to get appropriate data)
class OrdersSerializer(serializers.ModelSerializer):
    all_menus = serializers.SerializerMethodField()     # the method_name attribute defaults to get_<field_name>

    class Meta:
        model = Orders
        fields = ['pk', 'order_time', 'total_credits', 'all_menus']

    def get_all_menus(self, obj):
        menus = obj.menus.all()
        return OrderMenuSerializer(menus, many=True).data

