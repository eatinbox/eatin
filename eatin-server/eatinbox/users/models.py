from django.db import models
from base.models import Person, Item

# Create your models here.


class Address(models.Model):
    ADDRESS_TYPE = [
            ('1', 'HOME'),
            ('2', 'OFFICE'),
            ('3', 'OTHER'),
    ]
    user_info = models.ForeignKey(Person, on_delete=models.CASCADE)
    type = models.CharField(max_length=1, choices=ADDRESS_TYPE)
    flat_no = models.IntegerField()
    address = models.CharField(max_length=100)


class Customer(models.Model):
    objects = models.Manager()

    person_info = models.OneToOneField(Person, on_delete=models.CASCADE)
    favorites = models.CharField(max_length=10)

    def getCustomerName(self):
        return Person.objects.get(id=self.person_info).getPersonName()


class Orders(models.Model):
    objects = models.Manager()

    customer_info = models.ForeignKey(Customer, on_delete=models.CASCADE)
    menu_infos = models.ForeignKey('vendors.menu', on_delete=models.CASCADE)
    order_time = models.DateTimeField(auto_created=True, auto_now=True)
    total_credits = models.IntegerField()

    def __str__(self):
        return "Order No:- {}".format(self.pk)


class OrderMenuItem(Item):       # Items related to customer
    current_order = models.ForeignKey('vendors.menu', on_delete=models.CASCADE)
    quantity = models.IntegerField(default=1)
    # custom quantity after adding to cart can be changed by customer
