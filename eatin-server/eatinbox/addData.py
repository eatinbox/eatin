from django.contrib.auth import get_user_model
from base.models import *
from users.models import *
from vendors.models import *

User = get_user_model()

User.objects.create_superuser(email="saumitra@gmail.com", password="1")


for i in range(5):
        user = User.objects.create_user(email="Csaumi{}@gmail.com".format(str(i)), password="123", first_name="Csaumi{}".format(str(i)))
        
        person = Person(user=user, latitude=0, longitude=0, contact="1234567890")
        person.save()
        cust = Customer(person_info=person)
        cust.save()

for i in range(10):
        user = User.objects.create_user(email="Vsaumi{}@gmail.com".format(str(i)), password="123", first_name="Vsaumi{}".format(str(i)))
        
        person = Person(user=user, latitude=0, longitude=0, contact="1234567890")
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

saumi = Customer.objects.get(id=1)
order = Orders.objects.create(customer_info=saumi, total_credits=50)
_menu = Menu.objects.get(id=1)
_menu1 = Menu.objects.get(id=2)
order_menu = OrderMenu.objects.create(menu=_menu)
order_menu1 = OrderMenu.objects.create(menu=_menu1)
order.menus.add(order_menu, order_menu1)
order.save()
