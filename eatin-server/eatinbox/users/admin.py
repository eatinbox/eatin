from django.contrib import admin
from .models import Customer, Address, OrderItem, Orders


admin.site.register(Address)
admin.site.register(Orders)
admin.site.register(OrderItem)
admin.site.register(Customer)
