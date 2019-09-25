from django.shortcuts import render
import json
import datetime
from django.utils import timezone
from rest_framework import permissions
from rest_framework.views import APIView
from rest_framework.response import Response
from django.contrib.auth import authenticate, get_user_model
from rest_framework_jwt.settings import api_settings
from rest_framework_jwt.views import refresh_jwt_token
# Here ListCreate is used just for development purpose to view users.
# Each time u GET the register url new tokens will be generated
# Same is the case with retrieve
from rest_framework.generics import CreateAPIView
from .utils import jwt_response_payload_handler
from .serializers import RegisterSerializer

User = get_user_model()
exp_delta = api_settings.JWT_EXPIRATION_DELTA   # This delta is for maximum time before which u can refresh the token through previous token.


jwt_create_payload = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


# Login view, which checks that token is valid or not(i.e expired or not)

class AuthView(APIView):

    permission_classes = [permissions.AllowAny]
    # authentication_classes = []

    def post(self, request, *args, **kwargs):
        print(request.user)
        # if request.user.is_authenticated:
        #     print('f')
        #     return Response({'token': 'nibba'})
        data = request.data
        email = data.get('email')
        password = data.get('password')
        user = authenticate(email=email, password=password)
        print(user)
        if user is not None:
            payload = jwt_create_payload(user)
            token = jwt_encode_handler(payload)
            response = jwt_response_payload_handler(token, user, request=request)
            return Response(response)
        else:
            return Response("Invalid Credentials")


# Register View for any user. Here token will be generated for first time.

class RegisterView(CreateAPIView):
    queryset = User.objects.all()
    serializer_class = RegisterSerializer
    permission_classes = [permissions.AllowAny]

    def get_serializer_context(self):
        return {'request': self.request}

# The following view will give us the detailed view.
# Here token will be generated again.


# class RetrieveView(RetrieveUpdateDestroyAPIView):
#     queryset = User.objects.all()
#     serializer_class = RegisterSerializer
#     # permission_classes = [permissions.IsAuthenticated]
#     permission_classes = [permissions.AllowAny]
#     lookup_field = 'id'
#
#     def get_serializer_context(self):
#         return {'request': self.request}


def refresh_token(request):
    token = refresh_jwt_token(request)
    print(token)
    exp = timezone.now() + exp_delta - datetime.timedelta(seconds=300)
    response = {
        'token': token,
        'exp': exp,
    }
    return Response(response, status=200)
