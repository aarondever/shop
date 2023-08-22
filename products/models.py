from django.db import models

from utils.models import BaseModel

class Category(BaseModel):
    name = models.CharField(max_length=20)
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.CASCADE)

    class Meta:
        db_table = 'product_category'
    
    def __str__(self):
        return self.name

class Product(BaseModel):
    name = models.CharField(max_length=255)
    category = models.ForeignKey(Category, on_delete=models.PROTECT)
    price = models.DecimalField(max_digits=10, decimal_places=2)
    stock = models.IntegerField(default=0)
    sales = models.IntegerField(default=0, verbose_name="sales per month")
    comments = models.IntegerField(default=0, verbose_name="comments count")
    default_image = models.ImageField(null=True, blank=True)

    class Meta:
        db_table = 'product'

    def __str__(self):
        return '%s: %s' % (self.id, self.name)

class Image(models.Model):
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    image = models.ImageField()

    class Meta:
        db_table = 'product_image'
