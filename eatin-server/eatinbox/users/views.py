from rest_framework.response import Response
from rest_framework import status
from rest_framework.generics import ListAPIView
from base.models import Person
from users.serializers import UserSerializer


class UserListApiView(ListAPIView):
    queryset = Person.objects.all()
    serializer_class = UserSerializer
