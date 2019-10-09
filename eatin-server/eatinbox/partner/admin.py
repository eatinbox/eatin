from django.contrib import admin
from . import models

# Register your models here.

admin.site.register(models.Partner)
admin.site.register(models.PartnerLocation)
admin.site.register(models.PartnerOrder)
