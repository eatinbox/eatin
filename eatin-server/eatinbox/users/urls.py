from django.urls import path
from . import views

urlpatterns = [
        path('', views.UserListApiView.as_view(), name="userapilistview"),  # Person model list
        path('customer/', views.CustomerListApiView.as_view(), name="customerapilistview"),  # Customer model list
]
