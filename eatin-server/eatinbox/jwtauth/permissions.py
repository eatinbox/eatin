from rest_framework.permissions import BasePermission, SAFE_METHODS
from rest_framework_jwt.authentication import authenticate
from django.contrib.auth import get_user_model


User = get_user_model()


class IsValidUser(BasePermission):

    def has_permission(self, request, view):

        data = request.data
        is_user = data.get('is_user')

        if is_user is not None:

            user = authenticate(self, request)

            if user is not None:
                try:
                    flag = getattr(user, is_user)
                except AttributeError:
                    print("Attribute error from getattr")
                    return False

                return flag
            print("Error from authenticate no user")
            return False
        print("is_user is null")
        return False


class IsOwnerOrReadOnly(BasePermission):
    """
    Object-level permission to only allow owners of an object to edit it.
    Assumes the model instance has an `owner` attribute.
    """

    def has_object_permission(self, request, view, obj):
        # Read permissions are allowed to any request,
        # so we'll always allow GET, HEAD or OPTIONS requests.
        if request.method in SAFE_METHODS:
            return True

        # Instance must have an attribute named `owner`.
        return obj.user == request.user
