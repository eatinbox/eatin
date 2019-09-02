from rest_framework.permissions import BasePermission

class IsAllowed(BasePermission):
    def has_permission(self, request, view):


        # When permission is denied a dictionary with error in it will be send with a booleann value 0
        message = {
            'error':0
        }
    
        return request.user.is_authenticated()