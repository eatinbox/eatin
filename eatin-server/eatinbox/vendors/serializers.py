from rest_framework import serializers
from .models import (Menu, Vendor, MenuItem)


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


class MenuItemCustomSerializer(serializers.ModelSerializer):
    item_name = serializers.SlugRelatedField(read_only=True, slug_field="item_name")

    class Meta:
        model = MenuItem
        fields = ['item_name', 'quantity']


class MenuSerializer(serializers.ModelSerializer):
    vendor = VendorCustomSerializer(read_only=True)
    menu_items = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = Menu
        fields = ["pk", "vendor", "menu_name", "menu_date", "type", 'menu_items']

    def get_menu_items(self, obj):
        qs = obj.menuitem_set.all()
        return MenuItemCustomSerializer(qs, many=True).data
