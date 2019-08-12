from rest_framework import serializers
from .models import (Menu, Vendor)


class VendorSerializer(serializers.ModelSerializer):
    class Meta:
        model = Vendor
        fields = "__all__"


class VendorCustomSerializer(serializers.ModelSerializer):
    vendor_name = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Vendor
        fields = ['pk', 'person_info', 'vendor_name', 'rating']

    def get_vendor_name(self, obj):
        return obj.get_vendor_name()


class MenuSerializer(serializers.ModelSerializer):
    vendor = VendorCustomSerializer(read_only=True)

    class Meta:
        model = Menu
        fields = ["vendor", "menu_name", "menu_date", "type"]

