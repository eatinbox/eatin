from django.contrib import admin
from django.contrib.auth import get_user_model
from . import models

User = get_user_model()


class UserAdmin(admin.ModelAdmin):
    search_fields = ['email']

    class Meta:
        model = User


admin.site.register(User, UserAdmin)
admin.site.register(models.Person)
admin.site.register(models.Item)

