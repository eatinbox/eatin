from django.db import models
from base.models import Item, Person
# Create your models here.


class Vendor(models.Model):
    user = models.OneToOneField(Person, on_delete=models.CASCADE)
    description = models.TextField()
    rating = models.IntegerField(null=True)


class Menu(models.Model):
    MENU_TYPE = [
        ('1', 'full'),
        ('2', 'half'),
    ]
    vendor = models.ForeignKey(Vendor, on_delete=models.CASCADE)
    menu_name = models.CharField(max_length=100)
    menu_date = models.DateField()
    type = models.CharField(max_length=1, choices=MENU_TYPE)


class MenuItem(models.Model):                             # for setting default quantities for items of menu
    menu = models.ForeignKey(Menu, on_delete=models.CASCADE)
    item_name = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    # vendor will get name of all the items .Now vendor will select some items and set its quantity
    # now we will fetch the item name and its quantity and create Menu item object
    # now we will create menu object by retrieving all the menu items by set_all
    # now menu can be associated by a particular vendor and displayed on customer_app front page



