from django.db import models
from django.contrib.auth.models import User
from vendors.models import Item

# Create your models here.


class Person(models.Model):     # baseModel
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location_coordinates_X = models.DecimalField(max_digits=8, decimal_places=6, null=True)
    location_coordinates_Y = models.DecimalField(max_digits=8, decimal_places=6, null=True)
    contact = models.CharField(max_length=10, null=True, blank=True)


class Address(models.Model):
    ADDRESS_TYPE = [
            ('1', 'HOME'),
            ('2', 'OFFICE'),
            ('3', 'OTHER'),
    ]
    user_info = models.ForeignKey(Person, on_delete=models.CASCADE)
    type = models.CharField(max_length=1, choices=ADDRESS_TYPE,
                            )
    flat_no = models.IntegerField()
    address = models.CharField(max_length=100)


class Customer(models.Model):
    user_info = models.OneToOneField(Person, on_delete=models.CASCADE)
    favorites = models.CharField(max_length=10)


class Orders(models.Model):
    user_info = models.ForeignKey(Customer, on_delete=models.CASCADE)
    vendor_info = models.ForeignKey('vendors.menu', on_delete=models.CASCADE)
    datetime = models.DateTimeField(auto_created=True, auto_now=True)
    total_credits = models.IntegerField()


class OrderItem(Item):       # Items related to customer
    current_order = models.ForeignKey(Orders, on_delete=models.CASCADE)
