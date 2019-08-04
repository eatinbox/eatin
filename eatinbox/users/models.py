from django.db import models
from django.contrib.auth.models import User

# Create your models here.


class Customer(models.Model):
    favorites = models.CharField(max_length=10)


class Address(models.Model):
    ADDRESS_TYPE = [
        ('1', 'HOME'),
        ('2', 'OFFICE'),
    ]
    user_profile = models.ForeignKey(Customer, on_delete=models.CASCADE)
    type = models.CharField(max_length=1, choices=ADDRESS_TYPE)
    flat_no = models.IntegerField()
    address = models.CharField(max_length=100)

