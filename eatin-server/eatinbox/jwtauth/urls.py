from django.urls import path
from rest_framework_jwt.views import verify_jwt_token, refresh_jwt_token, obtain_jwt_token
from .views import refresh_token

from django.contrib import admin
from . import views

urlpatterns = [
        path('login/', views.AuthView.as_view()),
        path('register/', views.RegisterView.as_view()),
        path('refresh_token/', refresh_token),
        path('verify_token/', verify_jwt_token),
        path('refresh/', refresh_jwt_token),
        path('obtain/', obtain_jwt_token),

        # Only for development purpose.
        # path('register/<int:id>', views.RetrieveView.as_view()),
]
