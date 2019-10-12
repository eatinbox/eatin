import os
import json
import requests

AUTH_ENDPOINT = "http://127.0.0.1:8000/auth/obtaintoken/"
RETRIEVE_ENDPOINT = "http://127.0.0.1:8000/auth/register/14"
REFRESH_TOKEN = 'http://127.0.0.1:8000/auth/register/14'
PLACES1 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=18.4537525,73.8488212\
&rankby=distance&type=food&key=AIzaSyCg0693hHjd0Pl9qMR8euPqK6N5DG_9FA8'
PLACES2 = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?location=18.5073958,73.7871018\
&rankby=distance&type=food&key=AIzaSyCg0693hHjd0Pl9qMR8euPqK6N5DG_9FA8'

headers ={
    "Content-Type": "application/json",
    "Authorization": "JWT " + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNSwidXNlcm5hbWUiOiJmZkBmLmNvbSIsImlhdCI6MTU2OTc1NzA1NSwiZXhwIjoxNTY5NzU3NTU1LCJvcmlnX2lhdCI6MTU2OTc1NzA1NX0.Md6hYuSFAkOL5qeEtgZCC_r8O0g6lCfAB56hAkq_6SE'
}

headers1 ={
    "Content-Type": "application/json",
}

data = {
    'username': 'saumitra@gmail.com',
    'password': '1'
}

data2 = {
    'is_user': 'is_customer'
}

# r = requests.post(AUTH_ENDPOINT, data=json.dumps(data), headers=headers)
# print(r.json())

token = {
    'token': 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMiwidXNlcm5hbWUiOiJxQHEuY29tI\
    iwiaWF0IjoxNTY5NzQ5MzU2LCJleHAiOjE1Njk3NDk2NTYsIm9yaWdfaWF0IjoxNTY5NzQ5MzU2fQ.f7_jkGqHrVBzC2JvmrNzrrLoH\
    lbUwFl_-8flAb8sXC8'
}

r1 = requests.get(PLACES1)
r2 = requests.get(PLACES2)

results = r1.json()['results'] + r2.json()['results']

latitude = results[0]['geometry']['location']['lat']
longitude = results[0]['geometry']['location']['lng']


