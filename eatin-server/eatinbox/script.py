import os, platform
import shutil

str1 = 'base/migrations/'
str2= 'users/migrations/'
str3 = 'vendors/migrations/'

apps = ["base", "users", "vendors"]


if os.path.exists(str1):
    shutil.rmtree('base/migrations/')

if os.path.exists(str2):
    shutil.rmtree('users/migrations/')

if os.path.exists(str3):
    shutil.rmtree('vendors/migrations/')

if os.path.exists("db.sqlite3"):
    os.remove("db.sqlite3")

python = "python"

cmd1 = " manage.py makemigrations base users vendors"
cmd2 = " manage.py migrate"
cmd3 = ' manage.py shell < string.txt'

if platform.system() == "Linux":
    python = python + 3
    cmd3 = ' shell <<< "ïmport addData"'

os.system(python + cmd1)
os.system(python + cmd2)
os.system(python + cmd3)
