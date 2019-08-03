from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


def index(request):
    return Response(status=status.HTTP_200_OK)
