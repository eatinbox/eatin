rm -r base/migrations/*
touch base/migrations/__init__.py
rm -r users/migrations/*
touch users/migrations/__init__.py
rm -r vendors/migrations/*
touch vendors/migrations/__init__.py

rm db.sqlite3

python3 manage.py makemigrations
python3 manage.py migrate

python3 manage.py shell <<< "import addData"
