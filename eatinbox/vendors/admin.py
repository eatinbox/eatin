from django.contrib import admin
from .models import Vendor, VendorItem, Item, Menu

# Register your models here.

admin.site.register(Vendor, Menu)
admin.site.register(VendorItem, Item)