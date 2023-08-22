from django.db import models
from django.contrib.auth.models import AbstractUser

class User(AbstractUser):
    pass

class Country(models.Model):
    name = models.CharField(max_length=20)

class Address(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=20)
    street_address = models.CharField(max_length=255)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    zip_code = models.IntegerField(null=True)
