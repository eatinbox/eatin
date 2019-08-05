from django.contrib import admin
from .models import Person, Customer, Address, CustomerItem, Orders

admin.site.register(Person)
admin.site.register(Address)
admin.site.register(Orders)
admin.site.register(CustomerItem)
admin.site.register(Customer)