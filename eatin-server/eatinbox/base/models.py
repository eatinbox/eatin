from django.db import models
from django.contrib.auth.models import User

# Create your models here.

# Base class for items


class Item(models.Model):
    item_name = models.CharField(max_length=50)
    quatity = models.IntegerField(default=1)

    class Meta:
        abstract = True


class Person(models.Model):     # baseModel
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    location_coordinates_X = models.DecimalField(max_digits=8, decimal_places=6, null=True)
    location_coordinates_Y = models.DecimalField(max_digits=8, decimal_places=6, null=True)
    contact = models.CharField(max_length=10, null=True, blank=True)