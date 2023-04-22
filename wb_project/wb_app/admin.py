from django.contrib import admin
from .models import *


class CategoryAdmin(admin.ModelAdmin):
    list_display = ['name', 'description']


class DestinationAdmin(admin.ModelAdmin):
    list_display = ['destination']


class DepartureAdmin(admin.ModelAdmin):
    list_display = ['departure']


class ClientAdmin(admin.ModelAdmin):
    list_display = ['name', 'product', 'quantity']


class ProductAdmin(admin.ModelAdmin):
    list_display = ['title', 'description', 'category', 'quantity']


class TransactionsAdmin(admin.ModelAdmin):
    list_display = ['date', 'product', 'quantity', 'client', 'departure', 'destination']


admin.site.register(Category, CategoryAdmin)
admin.site.register(Destination, DestinationAdmin)
admin.site.register( Departure, DepartureAdmin)
admin.site.register(Client, ClientAdmin)
admin.site.register(Product, ProductAdmin)
admin.site.register(Transactions, TransactionsAdmin)
