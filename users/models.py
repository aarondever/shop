from django.db import models
from django.contrib.auth.models import AbstractUser

from utils.models import BaseModel

class User(AbstractUser):
    pass

    class Meta:
        db_table = 'user'

class Country(BaseModel):
    name = models.CharField(max_length=20)

    class Meta:
        db_table = 'country'

class Address(BaseModel):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    country = models.ForeignKey(Country, on_delete=models.CASCADE)
    full_name = models.CharField(max_length=30)
    phone_number = models.CharField(max_length=20)
    street_address = models.CharField(max_length=255)
    city = models.CharField(max_length=20)
    state = models.CharField(max_length=20)
    zip_code = models.IntegerField(null=True)

    class Meta:
        db_table = 'address'
