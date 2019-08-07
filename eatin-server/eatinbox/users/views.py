from django.shortcuts import render
from rest_framework.response import Response
from rest_framework.decorators import api_view
from rest_framework import status
from django.http import JsonResponse
from rest_framework.generics import ListAPIView
from base.models import Person
from users.serializers import UserSerializer

# Create your views here.


# @api_view(['GET'])
# def index(request):
#    return Response(data={
#        'test': 'successful'
#    }, status=status.HTTP_200_OK)


class UserListApiView(ListAPIView):
    queryset = Person.objects.all()
    serializer_class = UserSerializer
