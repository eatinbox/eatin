import os
import sys
import platform
import shutil

if sys.argv[1] == 'yeet':
    apps = ["base", "users", "vendors", "partner"]

    for i in apps:
        if os.path.exists(i + '/migrations/'):
            shutil.rmtree(i + '/migrations/')

    if os.path.exists("db.sqlite3"):
        os.remove("db.sqlite3")

    os.system("mysql -u eatinbox -h eatinbox.mysql.pythonanywhere-services.com -pembrace98 'eatinbox$eatinbox' < freshDataPythonanywhere.sql")

cmd1 = " manage.py makemigrations base users vendors partner"
cmd2 = " manage.py migrate"
cmd3 = " addData.py"

python = "python"

if platform.system() == "Linux":
    python = "python3"

os.system(python + cmd1)
os.system(python + cmd2)
os.system(python + cmd3)