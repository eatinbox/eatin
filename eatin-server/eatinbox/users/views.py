import googlemaps
from rest_framework import status, generics, permissions
from rest_framework.exceptions import ValidationError
from rest_framework.response import Response

from base.models import Person
from jwtauth.permissions import IsValidUser
from partner.models import PartnerLocation, PartnerOrder
from partner.serializers import currentOrderSerializer
from .models import Orders, Address, Customer
from .serializers import UserSerializer, OrdersSerializer, OrderMenuSerializer, AddressSerializer


class UpdatePersonInfo(generics.RetrieveUpdateAPIView):
    queryset = Person.objects.all()
    serializer_class = UserSerializer


class AddressApiView(generics.ListCreateAPIView):
    serializer_class = AddressSerializer
    permission_classes = [permissions.AllowAny]

    def get_queryset(self):
        person = Person.objects.get(user=self.request.user)
        return Address.objects.filter(person_info=person)

    def post(self, request, *args, **kwargs):
        ins = AddressSerializer(data=request.data)
        try:
            ins.is_valid()
        except ValidationError:
            print(ins.errors)
            return Response(data=ins.errors, status=status.HTTP_400_BAD_REQUEST)
        try:
            ins.save()
            return Response(data=AddressSerializer(self.get_queryset(), many=True).data, status=status.HTTP_201_CREATED)
        except:
            print(ins.errors)
            return Response(data=ins.errors, status=status.HTTP_400_BAD_REQUEST)


class PastOrdersListApiView(generics.ListCreateAPIView):
    # permission_classes = [IsValidUser]
    permission_classes = [permissions.AllowAny]
    # authentication_classes = []
    serializer_class = OrdersSerializer

    def get_queryset(self):
        # Filter works correctly fix from frontend
        person = Person.objects.get(user=self.request.user)
        customer = Customer.objects.get(person_info=person)
        # return Orders.objects.filter(customer_info=customer)
        return Orders.objects.all()

    def post(self, request, *args, **kwargs):
        # print(request.data)
        # Since many to many field present so we need to override the default behaviour
        # since the instance needs to be created before adding
        instance = OrdersSerializer(data=request.data, context={'request': self.request})
        try:
            # Pops the many to many field data present in request.data magically
            instance.is_valid()
        except ValidationError:
            return Response(data=instance.errors, status=status.HTTP_400_BAD_REQUEST)

        ob = instance.save()

        # Create many OrderMenu Objects at once first
        serializer = OrderMenuSerializer(data=request.data['menus'], many=True)
        try:
            serializer.is_valid()
        except ValidationError:
            return Response(data=serializer.errors, status=status.HTTP_400_BAD_REQUEST)

        menu_instances = serializer.save()
        # Dont use for loop since this saves the database hit and uses bulkcreate method instead of create method
        ob.menus.add(*menu_instances)  # spread all the list objects in add method
        ob.save()

        instance = assign_partner(ob)
        return Response(data=instance.data, status=status.HTTP_201_CREATED)


# Filters within a radius of 7km
def assign_partner(order):
    # Get just the first vendor cordinates from orderMenus as of now
    v_latitude = order.menus.all()[0].menu.vendor.get_coords()['latitude']
    v_longitude = order.menus.all()[0].menu.vendor.get_coords()['longitude']

    # print(v_latitude, v_longitude)

    filtered_partners = []
    sorted_partners = []
    duration_dict = {}

    partner_list = PartnerLocation.objects.raw(""" SELECT  * , 
    (
        6371 * 
        acos(cos( radians( %s ) ) * 
        cos( radians( latitude ) ) * 
        cos( radians( longitude ) - 
        radians( %s ) ) + 
        sin( radians( %s ) ) * 
        sin( radians( latitude ) ) ) 
    )   AS distance 
    
    FROM partner_partnerlocation 
    HAVING distance < 8
    ORDER BY distance; """, [v_latitude, v_longitude, v_latitude])

    # partner_list = PartnerLocation.objects.raw("SELECT * from partner_partnerlocation")
    gmaps = googlemaps.Client(key='AIzaSyCg0693hHjd0Pl9qMR8euPqK6N5DG_9FA8')

    destination = str(v_latitude) + ',' + str(v_longitude)

    for partner_location in partner_list:
        p_longitude = partner_location.longitude
        p_latitude = partner_location.latitude

        source = str(p_latitude) + ',' + str(p_longitude)

        result = gmaps.directions(source, destination, mode="driving", departure_time="now")

        if len(result) == 0:
            continue

        distance_dict = result[0]['legs'][0]['distance']
        duration_dict = result[0]['legs'][0]['duration']
        # polyline_vendor = result[0]['overview_polyline']['points']

        # polypath_vendor = decode_polyline(polyline_vendor)

        distance = int(distance_dict['value'])

        filtered_partners.append({
            'id': partner_location.partner,
            'distance': distance,
        })

        sorted_partners = sorted(filtered_partners, key=lambda k: k['distance'])

    cust_destination = str(order.get_customer_coords()['latitude']) + ',' + str(order.get_customer_coords()['longitude'])
    res = gmaps.directions(destination, cust_destination, mode="driving", departure_time="now")

    polyline = res[0]['overview_polyline']['points']
    polypath = decode_polyline(polyline)

    partner_order = PartnerOrder(
        partner=sorted_partners[0]['id'],
        assigned_order=order,
        duration=duration_dict['text'],
        order_status='Preparing Order',
    )

    instance = currentOrderSerializer(partner_order, context={
        'polypath': polypath
    })
    return instance


def decode_polyline(polyline_str):
    index, lat, lng = 0, 0, 0
    coordinates = []
    changes = {'latitude': 0, 'longitude': 0}

    # Coordinates have variable length when encoded, so just keep
    # track of whether we've hit the end of the string. In each
    # while loop iteration, a single coordinate is decoded.
    while index < len(polyline_str):
        # Gather lat/lon changes, store them in a dictionary to apply them later
        for unit in ['latitude', 'longitude']:
            shift, result = 0, 0

            while True:
                byte = ord(polyline_str[index]) - 63
                index += 1
                result |= (byte & 0x1f) << shift
                shift += 5
                if not byte >= 0x20:
                    break

            if result & 1:
                changes[unit] = ~(result >> 1)
            else:
                changes[unit] = (result >> 1)

        lat += changes['latitude']
        lng += changes['longitude']

        coordinates.append({
            'latitude': lat / 100000.0,
            'longitude': lng / 100000.0
        })

    return coordinates
