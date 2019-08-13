from django.db import models
from django.contrib.auth import get_user_model

User = get_user_model()

# Create your models here.

'''DESCRIPTION - This model is for storing the Base Classes which will be either related or Inherited in
other classes'''


'''
PURPOSE -> Store all the items that will be added by all the different vendors
Now whatever items we are adding, we will associate them with different vendors so we have used ManyToMany
eg. Bendi Item should have same name in database and should have multiple vendors associated with it

PROBLEMS -> cases with items like roti will have large number of vendor ids assciated with it and should be general

FUTURE CHANGES -> have to handle general items case
'''


class Item(models.Model):
    item_name = models.CharField(max_length=50)
    vendor = models.ManyToManyField("vendors.vendor")  # ? Uncessary complexity??


''' 
PURPOSE -> Base model for Customers, Vendors, Partners oneToOne with User

PROBLEMS -> accessing user data from vendors etc has uneccesary extra calls all User fields should be 
present in Person and Not some other model

FUTURE CHANGES -> Should Convert Person model into single User model
'''


class Person(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    latitude = models.DecimalField(max_digits=8, decimal_places=6, null=True)
    longitude = models.DecimalField(max_digits=8, decimal_places=6, null=True)
    contact = models.CharField(max_length=10, null=True, blank=True)

    objects = models.Manager()

    def __str__(self):
        return self.getPersonName()

    def getPersonName(self):
        return self.user.first_name
