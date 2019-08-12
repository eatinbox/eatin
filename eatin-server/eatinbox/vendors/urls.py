from django.urls import path
from . import views

urlpatterns = [
        path('', views.VendorListApiView.as_view()),
        path('vendorslist/', views.VendorListApiView.as_view()),
        path('menulist/', views.MenuListApiView.as_view()),
]
