from rest_framework.serializers import ModelSerializer
from rest_framework import serializers
from partner.models import Partner,partnerOrder



class partnerInfo(serializers.ModelSerializer):
    class Meta:
        model = Partner
        fields = ('person_info','rating')

''' used to grab partner info and his current orders '''
class partnerOrders(serializers.ModelSerializer):

    current_Orders = serializers.SerializerMethodField(read_only=True) 

    class Meta:
        model = Partner
        fields = ('person_info','current_Orders')
    
    def get_current_orders(self,obj):
        qs = obj.partnerOrder_set.all()
        return currentOrders(qs,many=True).data

'''Used in partner order to get currentOrder Data'''
class currentOrders(serializers.ModelSerializer):
    customerName = serializers.SerializerMethodField(read_only=True)
    customerAddress = serializers.SerializerMethodField(read_only=True)
    
    class Meta:
        model = partnerOrder
    fields = ('customerName','customerAddress','orderDetails')

    def get_customerName(self,obj):
        return obj.get_customerName()
    
    def get_customerAddress(self,obj):
        return obj.get_customerAddress()

