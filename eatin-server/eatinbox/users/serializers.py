from rest_framework.serializers import ModelSerializer
from base.models import (Person)
from users.models import (Customer)


class UserSerializer(ModelSerializer):

    class Meta:
        model = Person
        fields = ('user', 'latitude', 'longitude', 'contact')


class CustomerSerializer(ModelSerializer):

    class Meta:
        model = Customer
        fields = ('favorites', 'user_info')