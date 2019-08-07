from django.db import models
from django.contrib.auth.models import User


# Create your models here.

# Base class for items


class Item(models.Model):
    item_name = models.CharField(max_length=50)
    vendor = models.ManyToManyField("vendors.vendor")  # Displays all the existing items


class Person(models.Model):     # baseModel
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    latitude = models.DecimalField(max_digits=8, decimal_places=6, null=True)
    longitude = models.DecimalField(max_digits=8, decimal_places=6, null=True)
    contact = models.CharField(max_length=10, null=True, blank=True)

    def __str__(self):
        return self.user.username