from django.contrib.auth.models import User
from base.models import Item, Person
from users.models import Customer
from vendors.models import Vendor, MenuItem, Menu


User.objects.create_superuser(username="saumi", email="", password="1")

for i in range(5):
        user = User(username="Csaumi{}".format(str(i)), password="123")
        user.save()
        person = Person(user=user, latitude=0, longitude=0, contact="1234567890")
        person.save()
        cust = Customer(user_info=person, favorites="x")
        cust.save()

for i in range(5):
        user = User(username="Vsaumi{}".format(str(i)), password="123")
        user.save()
        person = Person(user=user, latitude=0, longitude=0, contact="1234567890")
        person.save()
        vendor = Vendor(user=person, description="x", rating=str(i))
        vendor.save()
        menu = Menu(vendor=vendor, menu_name="Chiken{}".format(str(i)), menu_date='1999-1-1', type='1')
        menu.save()
        item = Item(item_name="roti{}".format(str(i)))
        item.save()
        item.vendor.add(vendor)
        item.save()
        menu_item = MenuItem(menu=menu, item_name=item)
        menu_item.save()
