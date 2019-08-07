from django.urls import path
from . import views

urlpatterns = [
        path('', views.UserListApiView.as_view(), name="userapilistview"),
]
