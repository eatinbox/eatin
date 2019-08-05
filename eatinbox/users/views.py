from django.shortcuts import render
from rest_framework.response import Response
from rest_framework import status

# Create your views here.


def index(request):
    return Response(data={}, status=status.HTTP_202_ACCEPTED)
