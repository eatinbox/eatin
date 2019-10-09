import os
import json
import requests

AUTH_ENDPOINT = "http://127.0.0.1:8000/auth/obtaintoken/"
RETRIEVE_ENDPOINT = "http://127.0.0.1:8000/auth/register/14"
REFRESH_TOKEN = 'http://127.0.0.1:8000/auth/register/14'

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

#r = requests.post(AUTH_ENDPOINT, data=json.dumps(data), headers=headers)
#print(r.json())

token = {'token':'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxMiwidXNlcm5hbWUiOiJxQHEuY29tIiwiaWF0IjoxNTY5NzQ5MzU2LCJleHAiOjE1Njk3NDk2NTYsIm9yaWdfaWF0IjoxNTY5NzQ5MzU2fQ.f7_jkGqHrVBzC2JvmrNzrrLoHlbUwFl_-8flAb8sXC8'
         }

r = requests.get(REFRESH_TOKEN, headers=headers, data=json.dumps(data2))
print(r.json())