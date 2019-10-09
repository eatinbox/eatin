import datetime
from django.conf import settings
from django.utils import timezone
from rest_framework_jwt.settings import api_settings

expire_delta = api_settings.JWT_REFRESH_EXPIRATION_DELTA # This delta is for maximum time you can refresh the token provided at the time of register/login, before it gets invalid.
exp_delta = api_settings.JWT_EXPIRATION_DELTA # This delta is for maximum time before which u can refresh the token through previous token.


def jwt_response_payload_handler(token, user=None, request=None):
    return {
        'token': token,
        'user': user.email,
        'expires': timezone.now() + expire_delta - datetime.timedelta(seconds=500)
    }

