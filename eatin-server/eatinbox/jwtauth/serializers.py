from rest_framework import serializers
from base.models import User
from rest_framework_jwt.settings import api_settings
from .utils import jwt_response_payload_handler
from base.models import Person
from vendors.models import Vendor
from users.models import Customer


jwt_create_payload = api_settings.JWT_PAYLOAD_HANDLER
jwt_encode_handler = api_settings.JWT_ENCODE_HANDLER


class RegisterSerializer(serializers.ModelSerializer):
    password = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    # password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    token = serializers.SerializerMethodField(read_only=True)
    person = serializers.SerializerMethodField()

    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'password',
            'first_name',
            'customer',
            'vendor',
            'partner',
            'token',
            'person',
        ]

    def validate_email(self, value):
        request = self.context['request']
        if request == 'PUT':
            return value
        elif User.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError("User with this email already exists")
        return value

    def get_token(self, obj):
        user = obj
        payload = jwt_create_payload(user)
        token = jwt_encode_handler(payload)
        response = jwt_response_payload_handler(token=token,
                                                user=user,
                                                request=None
                                                )
        return response['token']

    def get_person(self, ob):
        return Person.objects.get(user=ob.id).pk

    def create(self, validated_data):
        user = User.objects.create_user(**self.initial_data)
        user.save()

        # person = Person(user=user, **person_data)
        person = Person(user=user)
        person.save()

        is_user = self.initial_data['is_user']

        if is_user == 'customer':
            customer = Customer(person_info=person)
            customer.save()
        elif is_user == 'vendor':
            vendor = Vendor(person_info=person)
            vendor.save()
        else:
            '''Here goes Partner'''

        return user


class RegisterDetailSerializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'first_name',
            'last_name',
            'customer',
            'vendor',
            'partner',
        ]
