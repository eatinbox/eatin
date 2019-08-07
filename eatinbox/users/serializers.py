from rest_framework.serializers import ModelSerializer
from base.models import Person


class UserSerializer(ModelSerializer):

    class Meta:
        model = Person
        fields = ('user', 'latitude', 'longitude', 'contact')