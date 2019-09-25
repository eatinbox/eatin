import os
import json
import requests

AUTH_ENDPOINT = "http://127.0.0.1:8000/auth/obtaintoken/"
RETRIEVE_ENDPOINT = "http://127.0.0.1:8000/auth/register/14"
REFRESH_TOKEN = 'http://127.0.0.1:8000/auth/refresh/'

headers ={
    "Content-Type": "application/json",
    "Authorization": "JWT " + "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxNSwidXNlcm5hbWUiOiJzYXVAZ21haWwuY29tIiwiZXhwIjoxNTY3ODM0MjUyLCJlbWFpbCI6InNhdUBnbWFpbC5jb20ifQ.Ks9tIg5G1j3dDtK6SLcVeF5gQnSzE2CZKhY6cMUVsjQ"
}

headers1 ={
    "Content-Type": "application/json",
}

data = {
    'username': 'saumitra@gmail.com',
    'password': '1'
}

#r = requests.post(AUTH_ENDPOINT, data=json.dumps(data), headers=headers)
#print(r.json())

token = {'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMSwidXNlcm5hbWUiOiJkQGQuY29tIiwiaWF0IjoxNTY5NDA4MzkwLCJleHAiOjE1Njk0MDg1MTAsIm9yaWdfaWF0IjoxNTY5NDA4MTczfQ.wzF9aBeUkZp6mogHmIsccmLclx_Mx4clBtvq0Ppae5I'
         }

r = requests.post(REFRESH_TOKEN, headers=headers1, data=json.dumps(token))
print(r.json())