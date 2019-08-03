from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status

# Create your views here.
# This is a test comment


def index(request):
    return Response(status=status.HTTP_201_CREATED)
