from django.db import models
from django.contrib.auth.models import User, AbstractBaseUser

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
    ]
    user_profile = models.ForeignKey(Person, on_delete=models.CASCADE)
    type = models.CharField(max_length=1, choices=ADDRESS_TYPE)
    flat_no = models.IntegerField()
    address = models.CharField(max_length=100)


class Customer(models.Model):
    user = models.OneToOneField(Person, on_delete=models.CASCADE)
    favorites = models.CharField(max_length=10)
