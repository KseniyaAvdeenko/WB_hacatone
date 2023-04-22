from rest_flex_fields import FlexFieldsModelViewSet
from rest_framework import viewsets
from .models import *
from .serializers import ProductSerializer, TransactionsSerializer, ClientSerializer


class ProductViewSet(FlexFieldsModelViewSet):
    queryset = Product.objects.all()
    serializer_class = ProductSerializer


class TransactionViewSet(FlexFieldsModelViewSet):
    queryset = Transactions.objects.all()
    serializer_class = TransactionsSerializer


class ClientViewSet(FlexFieldsModelViewSet):
    queryset = Client.objects.all()
    serializer_class = ClientSerializer
