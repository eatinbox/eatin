from django.db import models

from base.models import Person
from users.models import OrderMenuItem,Orders

# Create your models here.
class Partner(models.Model):

    objects = models.Manager();

    person_info = models.OneToOneField(Person, on_delete=models.CASCADE)
    rating = models.IntegerField(null=True)

    def get_partner_name(self):
        return self.person_info.getPersonName()


class partnerOrder(models.Model):

    partner         = models.ForeignKey(Partner,on_delete=models.CASCADE)
    orderDetails    = models.ForeignKey(OrderMenuItem,on_delete=models.CASCADE)

    '''this field will tell us which transactions are currently active and which transactions are in process'''

    is_active = models.BooleanField();

    '''USer gives rating to the partner this will be averaged to get overall partner rating '''

    currentRating = models.IntegerField(null=True)

    def get_customerName(self,obj):
        return self.orderDetails.current_order.cutomer_info.person_info.getPersonName()

    '''This provides a specific address to the order but addresses can change on subsequent orders'''

    def get_customerAddress(self,obj):
        return self.orderDetails.current_order.customer_info.person_info.Address_set.all()
    

class partnerLocation(models.Model):

    partner         = models.OneToOneField(Partner,on_delete=models.CASCADE)
    currentLatitude = models.IntegerField()
    currentLongitude = models.IntegerField()

    def get_partner_latLng(self):

        '''Phone Gps will continoulsy send its lat lng and we will update in currentlatitude and current longitude 
           while calling directions api we will send userLatLng and partnerLatLng '''

        Latlng = {'Latitude':self.currentLatitude,'Longitude':self.currentLongitude}
        return Latlng