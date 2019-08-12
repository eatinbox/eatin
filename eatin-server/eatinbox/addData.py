from django.contrib.auth.models import User
from base.models import Item, Person
from users.models import Customer, Orders, OrderMenuItem
from vendors.models import Vendor, MenuItem, Menu

import datetime


User.objects.create_superuser(username="saumi", email="", password="1")

for i in range(5):
        user = User(username="Csaumi{}".format(str(i)), password="123", first_name="Csaumi{}".format(str(i)))
        user.save()
        person = Person(user=user, latitude=0, longitude=0, contact="1234567890")
        person.save()
        cust = Customer(person_info=person, favorites="x")
        cust.save()

for i in range(5):
        user = User(username="Vsaumi{}".format(str(i)), password="123", first_name="Vsaumi{}".format(str(i)))
        user.save()
        person = Person(user=user, latitude=0, longitude=0, contact="1234567890")
        person.save()
        vendor = Vendor(person_info=person, description="x", rating=str(i))
        vendor.save()
        menu = Menu(vendor=vendor, menu_name="Chiken{}".format(str(i)), menu_date='1999-1-1', type='1')
        menu.save()
        item = Item(item_name="roti{}".format(str(i)))
        item.save()
        item.vendor.add(vendor)
        item.save()
        menu_item = MenuItem(menu=menu, item_name=item)
        menu_item.save()

saumi = Customer.objects.get(id=1)
order_menu = Menu.objects.get(id=1)
Orders.objects.create(customer_info=saumi,
                      menu_infos=order_menu,
                      total_credits=50)

