from django.urls import path
from . import views

urlpatterns = [
        path('users/userslist/', views.UserListApiView.as_view()),
        path('users/pastorders/', views.PastOrdersListApiView.as_view()),
]
