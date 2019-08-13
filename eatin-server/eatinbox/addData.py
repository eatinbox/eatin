from django.contrib.auth.models import User
from base.models import *
from users.models import *
from vendors.models import *

User.objects.create_superuser(username="saumi", email="", password="1")


for i in range(5):
        user = User(username="Csaumi{}".format(str(i)), password="123", first_name="Csaumi{}".format(str(i)))
        user.save()
        person = Person(user=user, latitude=0, longitude=0, contact="1234567890")
        person.save()
        cust = Customer(person_info=person)
        cust.save()

for i in range(5):
        user = User(username="Vsaumi{}".format(str(i)), password="123", first_name="Vsaumi{}".format(str(i)))
        user.save()
        person = Person(user=user, latitude=0, longitude=0, contact="1234567890")
        person.save()
        vendor = Vendor(person_info=person, description="x", rating=str(i))
        vendor.save()
        menu = Menu(vendor=vendor, menu_name="Chiken{}".format(str(i)), type='1')
        menu.save()
        item = Item(item_name="roti{}".format(str(i)))
        item.save()
        item.vendor.add(vendor)
        item.save()
        menu_item = MenuItem(menu=menu, item_name=item)
        menu_item.save()

saumi = Customer.objects.get(id=1)
order = Orders.objects.create(customer_info=saumi, total_credits=50)
_menu = Menu.objects.get(id=1)
_menu1 = Menu.objects.get(id=2)
order_menu = OrderMenu.objects.create(menu=_menu)
order_menu1 = OrderMenu.objects.create(menu=_menu1)
order.menus.add(order_menu, order_menu1)
order.save()
