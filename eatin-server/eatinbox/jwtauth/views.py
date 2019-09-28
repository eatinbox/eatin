from django.shortcuts import render
import json

from rest_framework import permissions, status
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, get_user_model, login
from rest_framework_jwt.settings import api_settings
from rest_framework.exceptions import ValidationError
# Here ListCreate is used just for development purpose to view users.
# Each time u GET the register url new tokens will be generated
# Same is the case with retrieve
from rest_framework.generics import ListCreateAPIView, RetrieveUpdateDestroyAPIView
from .utils import jwt_response_payload_handler
from .serializers import RegisterSerializer

User = get_user_model()


jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class AuthView(APIView):
    permission_classes = [permissions.IsAuthenticated]
    permission_classes = [permissions.AllowAny]
    # authentication_classes = []

    def post(self, request, *args, **kwargs):
        print(request.user)
        if request.user.is_authenticated:
            print('f')
            return Response({'token': 'nibba'})
        data = request.data
        email = data.get('email')
        password = data.get('password')
        user = authenticate(email=email, password=password)
        print(user)
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        response = jwt_response_payload_handler(token, user, request=request)
        return Response(response)


class RegisterView(ListCreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def get_serializer_context(self):
        return {'request': self.request}

    def post(self, request, *args, **kwargs):
        # Overrided this method for understanding purposes only.
        instance = RegisterSerializer(data=request.data, context=self.get_serializer_context())
        try:
            instance.is_valid()
        except ValidationError:
            return Response(data=instance.errors, status=status.HTTP_400_BAD_REQUEST)

        instance.save()
        return Response(data=instance.data, status=status.HTTP_201_CREATED)

# The following view will give us the detailed view.
# Here token will be generated again.


class RetrieveView(RetrieveUpdateDestroyAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.IsAuthenticated]
    # permission_classes = [permissions.AllowAny]
    lookup_field = 'id'

    def get_serializer_context(self):
        return {'request': self.request}
