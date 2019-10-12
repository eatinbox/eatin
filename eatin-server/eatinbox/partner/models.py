from django.db import models

from base.models import Person
from users.models import OrderMenuItem, Orders


# Create your models here.


class Partner(models.Model):
    objects = models.Manager()

    person_info = models.OneToOneField(Person, on_delete=models.CASCADE)
    rating = models.IntegerField(null=True)
    """ When field is
              0:- Not doing anything,
              1:- On the way to pick up food,
              2:- Going for delivery
          This field can be used if he has food pick up spots and delivery spots in a single path """
    currentStatus = models.IntegerField(null=True, blank=True)

    def get_partner_name(self):
        return self.person_info.getPersonName()


class PartnerOrder(models.Model):
    partner = models.ForeignKey(Partner, on_delete=models.CASCADE)
    assigned_order = models.OneToOneField(Orders, on_delete=models.CASCADE)
    """ This field will tell us which transactions are currently active and which transactions are in process """
    is_active = models.BooleanField(default=False)
    duration = models.CharField(max_length=10)
    order_status = models.CharField(max_length=20)

    """ User gives rating to the partner this will be averaged to get overall partner rating """
    currentRating = models.IntegerField(null=True, blank=True)

    def get_customerName(self, obj):
        return self.assigned_order.cutomer_info.person_info.getPersonName()

    """ This provides a specific address to the order but addresses can change on subsequent orders """

    def get_customerAddress(self, obj):
        return self.assigned_order.cutomer_info.person_info.Address_set.all()


class PartnerLocation(models.Model):
    objects = models.Manager()

    partner = models.OneToOneField(Partner, on_delete=models.CASCADE)
    # area = models.CharField(max_length=15)

    latitude = models.DecimalField(max_digits=8, decimal_places=6)
    longitude = models.DecimalField(max_digits=8, decimal_places=6)

    def get_partner_latLng(self):
        # Phone Gps will continoulsy send its lat lng and we will update in current_latitude and current longitude
        # while calling directions api we will send userLatLng and partnerLatLng

        lat_lng = {'latitude': self.latitude, 'longitude': self.longitude}
        return lat_lng
