import os
import json
import requests

AUTH_ENDPOINT = "http://127.0.0.1:8000/auth/obtaintoken/"
RETRIEVE_ENDPOINT = "http://127.0.0.1:8000/auth/register/14"

headers ={
    "Content-Type": "application/json",
    "Authorization": "JWT " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMywidXNlcm5hbWUiOiJWc2F1bWk2QGdtYWlsLmNvbSIsImV4cCI6MTU2NzQyNTg3MiwiZW1haWwiOiJWc2F1bWk2QGdtYWlsLmNvbSJ9.JGkGWvrclvS3JD73P8r_r8opVSwbHjinFuRV0-ZDF4A"
}
data = {
    'username': 'saumitra@gmail.com',
    'password': '1'
}

#r = requests.post(AUTH_ENDPOINT, data=json.dumps(data), headers=headers)
#print(r.json())

r = requests.get(RETRIEVE_ENDPOINT, headers=headers)
print(r.json())