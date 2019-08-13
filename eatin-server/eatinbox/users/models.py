from django.db import models
from base.models import Person, Item

# Create your models here.

# DESCRIPTION -> models related to the customer


class Address(models.Model):
    ADDRESS_TYPE = [
            ('1', 'HOME'),
            ('2', 'OFFICE'),
            ('3', 'OTHER'),
    ]

    # Multiple address associated with Persons hence foreignKey
    person_info = models.ForeignKey(Person, on_delete=models.CASCADE)
    type = models.CharField(max_length=1, choices=ADDRESS_TYPE)
    flat_no = models.IntegerField(null=True)
    address = models.CharField(max_length=100)

    class Meta:
        verbose_name_plural = "Address"


class Customer(models.Model):

    objects = models.Manager()

    person_info = models.OneToOneField(Person, on_delete=models.CASCADE)

    def getCustomerName(self):
        return self.person_info.getPersonName()


'''
DESCRIPTION -> This is the menu associated with orders of the customer and is in relation with vendor menu 
so we can fetch its info, and it will relate to orders with Many To Many field since Each order will have
multiple menus and same menus can be present on multiple orders. We need different menu which is associated with
the the customer orders hence this model.

PROBLEMS -> Remove the id of the OrderMenu, no need for it.
'''


class OrderMenu(models.Model):
    menu = models.OneToOneField('vendors.menu', on_delete=models.CASCADE)
    is_customized = models.BooleanField(default=False)


# DESCRIPTION -> Past Orders associated with users and will contain multiple menus
class Orders(models.Model):
    objects = models.Manager()

    customer_info = models.ForeignKey(Customer, on_delete=models.CASCADE)
    '''Removed the following attribute since , Menu should contain Orders id and not the converse
    (Menu will have Many To Many realtion with Orders and that menu will be OrderMenu'''
    # menu_infos = models.ForeignKey('vendors.menu', on_delete=models.CASCADE)
    menus = models.ManyToManyField(OrderMenu)
    order_time = models.DateTimeField(auto_created=True, auto_now=True)
    total_credits = models.IntegerField()

    class Meta:
        verbose_name_plural = "Orders"

    def __str__(self):
        return "Order No:- {}".format(self.pk)


'''
DESCRIPTION -> Related to base Item class so we can fetch name of that base Item, The only difference with MenuItem
(check MenuItem in vendor models) is that its quantity will be  different which will be customizable by customer hence
we need other model which is  related to OrderMenu
'''


class OrderMenuItem(models.Model):
    current_order = models.ForeignKey(OrderMenu, on_delete=models.CASCADE)
    item = models.ForeignKey(Item, on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)

