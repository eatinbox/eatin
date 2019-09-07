import os
import json
import requests

AUTH_ENDPOINT = "http://127.0.0.1:8000/auth/obtaintoken/"
RETRIEVE_ENDPOINT = "http://127.0.0.1:8000/auth/register/14"

headers ={
    "Content-Type": "application/json",
    "Authorization": "JWT " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNSwidXNlcm5hbWUiOiJzYXVAZ21haWwuY29tIiwiZXhwIjoxNTY3ODM0MjUyLCJlbWFpbCI6InNhdUBnbWFpbC5jb20ifQ.Ks9tIg5G1j3dDtK6SLcVeF5gQnSzE2CZKhY6cMUVsjQ"
}

data = {
    'username': 'saumitra@gmail.com',
    'password': '1'
}

#r = requests.post(AUTH_ENDPOINT, data=json.dumps(data), headers=headers)
#print(r.json())

r = requests.get(RETRIEVE_ENDPOINT, headers=headers)
print(r.json())