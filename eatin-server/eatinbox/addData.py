import django
import os
import random
import requests

os.environ.setdefault("DJANGO_SETTINGS_MODULE", "eatinbox.settings")
django.setup()

PLACES1 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=18.4537525,73.8488212\
&rankby=distance&type=restaurant&key=AIzaSyCg0693hHjd0Pl9qMR8euPqK6N5DG_9FA8'
PLACES2 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=18.5073958,73.7871018\
&rankby=distance&type=school&key=AIzaSyCg0693hHjd0Pl9qMR8euPqK6N5DG_9FA8'
PLACES3 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=18.5073958,73.7871018\
&rankby=distance&type=restaurant&key=AIzaSyCg0693hHjd0Pl9qMR8euPqK6N5DG_9FA8'

from django.contrib.auth import get_user_model

from users.models import *
from vendors.models import *
from partner.models import *

User = get_user_model()

User.objects.create_superuser(email="saumitra@gmail.com", password="1")

# for i in range(5):
#     latitude = round(random.uniform(18.4, 18.6), 6)
#     longitude = round(random.uniform(73, 74.1), 6)
#     user = User.objects.create_user(email="Csdaumi{}@gmail.com".format(str(i)), password="123",
#                                     first_name="Csaumi{}".format(str(i)), is_user="customer")
#
#     person = Person(user=user, latitude=latitude, longitude=longitude, contact="1234567890")
#     person.save()
#     cust = Customer(person_info=person)
#     cust.save()

r = requests.get(PLACES3)
res = r.json()['results']

for i in range(10):
    latitude = res[i]['geometry']['location']['lat']
    longitude = res[i]['geometry']['location']['lng']

    user = User.objects.create_user(email="Vfsaumi{}@gmail.com".format(str(i)), password="123",
                                    first_name="Vsaumi{}".format(str(i)), is_user="vendor")

    person = Person(user=user, latitude=latitude, longitude=longitude, contact="1234567890")
    person.save()
    vendor = Vendor(person_info=person, description="x", rating=str(i))
    vendor.save()
    menu = Menu(vendor=vendor, menu_name="Chiken{}".format(str(i)), type='1')
    menu.save()
    item1 = Item(item_name="Roti")
    item2 = Item(item_name="Rice")
    item3 = Item(item_name="Daal")
    item4 = Item(item_name="Sabji")
    item1.save()
    item2.save()
    item3.save()
    item4.save()
    item1.vendor.add(vendor)
    item2.vendor.add(vendor)
    item3.vendor.add(vendor)
    item4.vendor.add(vendor)

    menu_item1 = MenuItem(menu=menu, item_name=item1)
    menu_item2 = MenuItem(menu=menu, item_name=item2)
    menu_item3 = MenuItem(menu=menu, item_name=item3)
    menu_item4 = MenuItem(menu=menu, item_name=item4)

    menu_item1.save()
    menu_item2.save()
    menu_item3.save()
    menu_item4.save()

r1 = requests.get(PLACES1)
r2 = requests.get(PLACES2)


results = r1.json()['results'] + r2.json()['results']


for i in range(len(results)):

    latitude = results[i]['geometry']['location']['lat']
    longitude = results[i]['geometry']['location']['lng']

    user = User.objects.create_user(
        email="Pagrtner{}@gmail.com".format(str(i)), password="123",
        first_name="Partnn{}".format(str(i)), is_user="partner")
    person = Person(user=user, latitude=latitude, longitude=longitude, contact="1234567890")
    person.save()
    part = Partner(person_info=person, rating=1)
    part.save()
    part_loc = PartnerLocation(partner=part, latitude=latitude, longitude=longitude)
    part_loc.save()



