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
    password2 = serializers.CharField(style={'input_type': 'password'}, write_only=True)
    token = serializers.SerializerMethodField(read_only=True)

    class Meta:
        model = User
        fields = [
            'id',
            'email',
            'password',
            'password2',
            'first_name',
            'last_name',
            'customer',
            'vendor',
            'token',
        ]

    def validate_email(self, value):
        request = self.context['request']
        if request == 'PUT':
            return value
        elif User.objects.filter(email__iexact=value).exists():
            raise serializers.ValidationError("User with this email already exists")
        return value

    def validate(self, data):
        p1 = data.get('password')
        p2 = data.get('password2')
        if p1 != p2:
            raise serializers.ValidationError("Passwords didn't match")
        return data

    def create(self, validated_data):
        if validated_data.get('vendor'):
            user = User.objects.create_vendor(email=validated_data.get('email'),
                                              password=validated_data.get('password'),
                                              first_name=validated_data.get('first_name'),
                                              last_name=validated_data.get('last_name'),
                                              )
            user.save()
            person = Person(user=user,
                            latitude=validated_data.get('latitude'),
                            longitude=validated_data.get('longitude'),
                            contact=validated_data.get('contact'),
                            )
            person.save()
            vendor = Vendor(person_info=person,
                            description=validated_data.get('description'),
                            rating=validated_data.get('rating'),
                            )
            vendor.save()

        else:
            user = User.objects.create_user(email=validated_data.get('email'),
                                            password=validated_data.get('password'),
                                            first_name=validated_data.get('first_name'),
                                            last_name=validated_data.get('last_name'),
                                            )
            user.save()
            person = Person(user=user,
                            latitude=validated_data.get('latitude'),
                            longitude=validated_data.get('longitude'),
                            contact=validated_data.get('contact'),
                            )
            person.save()
            customer = Customer(person_info=person,
                                )
            customer.save()

        return user

    def get_token(self, obj):
        user = obj
        payload = jwt_create_payload(user)
        token = jwt_encode_handler(payload)
        response = jwt_response_payload_handler(token=token,
                                                user=user,
                                                request=None
                                                )
        return response
