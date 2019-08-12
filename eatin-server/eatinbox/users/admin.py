from django.contrib import admin
from .models import Customer, Address, OrderMenuItem, Orders


admin.site.register(Address)
admin.site.register(Orders)
admin.site.register(OrderMenuItem)
admin.site.register(Customer)
