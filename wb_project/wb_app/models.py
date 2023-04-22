from django.contrib.auth.models import User
from django.db import models


# Create your models here.
class Destination(models.Model):
    destination = models.CharField(max_length=255)


class Departure(models.Model):
    departure = models.CharField(max_length=255)


class Client(models.Model):
    name = models.CharField(max_length=255)
    address = models.CharField(max_length=255)
    product = models.ForeignKey("Product", on_delete=models.CASCADE)
    quantity = models.IntegerField()


class Category(models.Model):
    name = models.CharField(max_length=255)
    description = models.CharField(max_length=1000)


class Product(models.Model):
    title = models.CharField(max_length=255)
    description = models.CharField(max_length=1000)
    category = models.ForeignKey(Category, on_delete=models.CASCADE)
    quantity = models.IntegerField()


class Transactions(models.Model):
    date = models.DateTimeField(auto_now_add=True)
    product = models.ForeignKey(Product, on_delete=models.CASCADE)
    quantity = models.IntegerField()
    client = models.ForeignKey(User, on_delete=models.CASCADE)
    departure = models.ForeignKey(Departure, on_delete=models.CASCADE)
    destination = models.ForeignKey(Destination, on_delete=models.CASCADE)
