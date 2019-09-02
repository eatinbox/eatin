from django.contrib.auth import get_user_model
from base.models import Person


def jwt_response_payload_handler(token, user=None, request=None):
    User = get_user_model()
    person = Person.objects.get(person_info=user)
