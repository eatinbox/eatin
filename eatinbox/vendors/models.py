from django.db import models
from users.models import Person

# Create your models here.


class Vendor(models.Model):
    user = models.OneToOneField(Person, on_delete=models.CASCADE)
    description = models.TextField()


class Menu(models.Model):
    MENU_TYPE = [
        ('1', 'full'),
        ('2', 'half'),
    ]
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    menu_name = models.CharField(max_length=100)
    menu_date = models.DateField()
    type = models.CharField(max_length=1, choices=MENU_TYPE)


class Item(models.Model):
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    item_name = models.CharField(max_length=50)
    quatity = models.IntegerField(default=1)
    # same menu to be used for customizable option, only quatity is to be changed hence quantity_custom
    quatity_custom = models.IntegerField(default=1)
