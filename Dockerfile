# syntax=docker/dockerfile:1
FROM python:3
ENV PYTHONUNBUFFERED=1

COPY . /code

#python dependencies
WORKDIR /code
RUN pip install pipenv
RUN pipenv install --system --deploy --ignore-pipfile

#database creation
WORKDIR /code/polaire
ENV DJANGO_SETTINGS_MODULE=polaire.settings
RUN python ./manage.py migrate
RUN python -c "import django;django.setup();from django.contrib.auth.models import User;User.objects.create_superuser('admin', 'admin@polaire.com', 'admin')" 
#standard user/pw: admin/admin            please change in all environments

#node dependencies
WORKDIR /code/polaire/angular
RUN apt-get update 
RUN apt-get install nodejs -y
RUN apt-get install npm -y
RUN npm install
RUN npm run-script build

#entry
WORKDIR /code
EXPOSE 8000
CMD python polaire/manage.py runserver 0.0.0.0:8000

