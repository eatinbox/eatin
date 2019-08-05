from django.contrib import admin
from .models import Person, Customer, Address, CustomerItem, Orders

admin.site.register(Person, Orders)
admin.site.register(Address, CustomerItem)
admin.site.register(Customer)