from django.urls import path
from . import views
from rest_framework_jwt.views import obtain_jwt_token 

urlpatterns = [
        # path('', views.UserListApiView.as_view()),
        # path('userslist/', views.UserListApiView.as_view()),
        path('pastorders/', views.PastOrdersListApiView.as_view()),
        path('login/', obtain_jwt_token),
        path('address/', views.AddressApiView.as_view(),)
]
