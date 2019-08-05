from django.contrib import admin
from .models import Vendor, VendorItem, Item, Menu

# Register your models here.

admin.site.register(Vendor)
admin.site.register(Menu)
admin.site.register(VendorItem)
