from django.db import models
from django.contrib.auth.models import User
from users.models import Person

# Create your models here.


class Vendor(models.Model):
    user = models.OneToOneField(Person, on_delete=models.CASCADE)
    description = models.TextField()
    rating = models.IntegerField(max_length=1, null=True)


class Menu(models.Model):
    MENU_TYPE = [
        ('1', 'full'),
        ('2', 'half'),
    ]
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    menu_name = models.CharField(max_length=100)
    menu_date = models.DateField()
    type = models.CharField(max_length=1, choices=MENU_TYPE)


# Base class for items
class Item(models.Model):
    item_name = models.CharField(max_length=50)
    quatity = models.IntegerField(default=1)

    class Meta:
        abstract = True


class VendorItem(Item):
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    quatity = models.IntegerField(max_length=2, default=1)


