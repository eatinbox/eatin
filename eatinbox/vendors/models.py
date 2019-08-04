from django.db import models
from users.models import Person

# Create your models here.


class Vendor(models.Model):
    user = models.OneToOneField(Person, on_delete=models.CASCADE)
