from django.urls import path
from django.contrib import admin
from . import views

urlpatterns = [
        path('login/', views.AuthView.as_view()),
        path('register/', views.RegisterView.as_view()),
        # Only for development purpose.
        path('register/<int:id>', views.RetrieveView.as_view()),
]
