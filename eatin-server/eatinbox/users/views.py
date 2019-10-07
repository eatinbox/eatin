from rest_framework.response import Response
from rest_framework import generics, permissions, status
from rest_framework.exceptions import ValidationError
from base.models import Person
from .models import Orders, OrderMenu
from vendors.models import Menu
from .serializers import UserSerializer, OrdersSerializer, OrderMenuSerializer
from rest_framework_jwt.views import obtain_jwt_token
from restconf.permissions import IsAllowed
from django.contrib.auth import *


class UserListApiView(generics.ListAPIView):
    queryset = Person.objects.all()
    serializer_class = UserSerializer


class PastOrdersListApiView(generics.ListCreateAPIView):
    permission_classes = [permissions.AllowAny]
    authentication_classes = []
    queryset = Orders.objects.all()
    serializer_class = OrdersSerializer

    def post(self, request, *args, **kwargs):
        # Since many to many field present so we need to override the default behaviour
        # since the instance needs to be created before adding
        print(request.data)
        instance = OrdersSerializer(data=request.data, context={'request': self.request})
        try:
            # Pops the many to many field data present in request.data magically
            instance.is_valid()
        except ValidationError:
            return Response(data=instance.errors, status=status.HTTP_400_BAD_REQUEST)

        ob = instance.save()

        # Create many OrderMenu Objects at once first
        serializer = OrderMenuSerializer(data=request.data['menus'], many=True)
        try:
            serializer.is_valid()
        except ValidationError:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        menu_instances = serializer.save()
        # Dont use for loop since this saves the database hit and uses bulkcreate method instead of create method
        ob.menus.add(*menu_instances)   # spread all the list objects in add method
        ob.save()

        response = OrdersSerializer(ob).data

        return Response(data=response, status=status.HTTP_201_CREATED)

