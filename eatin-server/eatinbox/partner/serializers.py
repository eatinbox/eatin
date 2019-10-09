from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from partner.models import Partner, PartnerOrder


class PartnerInfo(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ('person_info','rating')


''' used to grab partner info and his current orders '''


class PartnerOrders(serializers.ModelSerializer):

    current_Orders = serializers.SerializerMethodField(read_only=True) 

    class Meta:
        model = Partner
        fields = ('person_info', 'current_Orders')
    
    def get_current_orders(self, obj):
        qs = obj.partnerOrder_set.all()
        return CurrentOrders(qs, many=True).data


'''Used in partner order to get currentOrder Data'''


class CurrentOrders(serializers.ModelSerializer):
    customerName = serializers.SerializerMethodField(read_only=True)
    customerAddress = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = PartnerOrder
    fields = ('customerName', 'customerAddress', 'orderDetails')

    def get_customerName(self, obj):
        return obj.get_customerName()
    
    def get_customerAddress(self, obj):
        return obj.get_customerAddress()

