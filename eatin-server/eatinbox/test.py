import os
import json
import requests

AUTH_ENDPOINT = "http://127.0.0.1:8000/auth/obtaintoken/"

headers ={
    "Content-Type": "application/json",
    "Authorization": "JWT " + 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1c2VyX2lkIjoxLCJ1c2VybmFtZSI6InNhdW1pIiwiZXhwIjoxNTY3OTMxMTg1LCJlbWFpbCI6IiIsIm9yaWdfaWF0IjoxNTY3MzI2Mzg1fQ.J6R7xxrdq_OgACiBL1O0p_kLRZ6ZZIbiGnrikCQUe3Y',
}

data = {
    'username': 'saumi',
    'password': '1'
}

r = requests.post(AUTH_ENDPOINT, data=json.dumps(data), headers=headers)
print(r.json())
