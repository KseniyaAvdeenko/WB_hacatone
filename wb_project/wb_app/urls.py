from django.urls import path, include
from rest_framework.routers import SimpleRouter

from . import views
from .api import *
from .views import *

router = SimpleRouter()
router.register('/products', ProductViewSet, basename='products')
router.register('/transactions', TransactionViewSet, basename='transactions')
router.register('/clients', ClientViewSet, basename='client')

urlpatterns = [

    # path('login/', views.login_view, name='login'),
    # path('logout/', views.logout_view, name='logout'),
    # path('registration/', views.registration, name='registration'),
    # path('', views.start_page, name='start-page'),
    # path('', include(router.urls)),


]