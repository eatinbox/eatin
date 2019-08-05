from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import JsonResponse

# Create your views here.


@api_view(['GET'])
def index(request):
    return Response(data={
        'test': 'successful'
    }, status=status.HTTP_200_OK)
