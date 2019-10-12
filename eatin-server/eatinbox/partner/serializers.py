from rest_framework import serializers
from partner.models import Partner, PartnerOrder, PartnerLocation
from vendors.serializers import MenuSerializer


class PartnerInfoSerializer(serializers.ModelSerializer):
    person_info = serializers.SlugRelatedField(read_only=True, slug_field='person_info')

    class Meta:
        model = Partner
        fields = ('pk', 'person_info', 'rating', )


class currentOrderSerializer(serializers.ModelSerializer):
    partner_info = PartnerInfoSerializer(read_only=True)
    latitude = serializers.SerializerMethodField()
    longitude = serializers.SerializerMethodField()
    vendor_coords = serializers.SerializerMethodField()
    menu = serializers.SerializerMethodField()
    polypath = serializers.SerializerMethodField()

    class Meta:
        model = PartnerOrder
        fields = ['partner_info', 'latitude', 'longitude',
                  'duration', 'menu', 'order_status', 'polypath', 'vendor_coords']

    def get_latitude(self, ob):
        return PartnerLocation.objects.get(partner=ob.partner).latitude

    def get_longitude(self, ob):
        return PartnerLocation.objects.get(partner=ob.partner).longitude

    def get_vendor_coords(self, ob):
        return ob.assigned_order.menus.all()[0].menu.vendor.get_coords()

    def get_menu(self, ob):
        return MenuSerializer(ob.assigned_order.menus.all()[0].menu).data

    def get_polypath(self, ob):
        return self.context['polypath']
