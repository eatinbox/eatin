from django.contrib import admin
from . import models

# Register your models here.

admin.site.register(models.Partner)
admin.site.register(models.partnerLocation)
admin.site.register(models.partnerOrder)
