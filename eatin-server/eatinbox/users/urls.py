from django.urls import path
from . import views

urlpatterns = [
        path('get-user-list/', views.UserListApiView.as_view(), name="userapilistview"),
]
