from django.shortcuts import render
import json
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, get_user_model
from rest_framework_jwt.settings import api_settings
from .utils import jwt_response_payload_handler


jwt_payload_handler = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class AuthView(APIView):
    #permission_classes = [permissions.IsAuthenticated]
    #permission_classes = [permissions.AllowAny]
    #authentication_classes = []

    def post(self, request, *args, **kwargs):
        print(request.user)
        if request.user.is_authenticated:
            print('f')
            return Response({'token': 'nibba'})
        data = request.data
        username = data.get('username')
        password = data.get('password')
        user = authenticate(username=username, password=password)
        print(user)
        payload = jwt_payload_handler(user)
        token = jwt_encode_handler(payload)
        response = jwt_response_payload_handler(token, user, request=request)
        return Response(response)
