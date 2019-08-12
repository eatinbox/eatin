from django.urls import path
from . import views

urlpatterns = [
        path('', views.UserListApiView.as_view()),
        path('userslist/', views.UserListApiView.as_view()),
        path('pastorders/', views.PastOrdersListApiView.as_view()),
]
