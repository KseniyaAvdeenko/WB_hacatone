from rest_framework import serializers
from .models import *
from rest_flex_fields import FlexFieldsModelSerializer


class CategorySerializer(FlexFieldsModelSerializer):
    class Meta:
        model = Category
        fields = '__all__'


class ProductSerializer(FlexFieldsModelSerializer):
    category = CategorySerializer(fields=['name'])

    class Meta:
        model = Product
        fields = ['title', 'description', 'category', 'quantity']


class ClientSerializer(FlexFieldsModelSerializer):
    product = ProductSerializer(many=True, fields=['title', 'category', 'quantity'])
    class Meta:
        model = Client
        fields = ['name', 'address', 'product', 'quantity']


class TransactionsSerializer(FlexFieldsModelSerializer):
    product = ProductSerializer(many=True, fields=['title', 'quantity'])
    client = ClientSerializer(fields=['name', 'address'])
    class Meta:
        model = Transactions
        fields = ['date', 'product', 'quantity', 'client']
