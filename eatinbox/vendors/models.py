from django.db import models

# Create your models here.
class Vendor(models.Model):
    user = models.OneToOneField()