# Django + Vuejs + Bulma Boilerplate

## What we use
+ [Django REST framework](http://www.django-rest-framework.org/)
+ [Vue.js](vuejs.org)
+ [Bulma](https://bulma.io/documentation/overview/start/)

## Build Setup

#### Back-end
``` bash
python manage.py makemigrate mentor (optional)
python manage.py migrate
python manage.py createsuperuser --email admin@example.com --username admin (only for dev)
python manage.py runserver
```
Under development, you can go directly through the browser to check the endpoints, by going to: http://127.0.0.1:8000/

#### Front-end
``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```
