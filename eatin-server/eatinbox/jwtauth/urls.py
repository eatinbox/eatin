from django.urls import path
from django.contrib import admin
from rest_framework_jwt.views import obtain_jwt_token
from . import views

urlpatterns = [
        path('obtaintoken/', views.AuthView.as_view()),
]
