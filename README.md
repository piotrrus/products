# Products

The project was divided into two parts: backend and front.
Data for cart are keep until refresh site. They're not stored in this moment in local storage or session storage. But they should to keep the data until for example user will remove. It's possible to add choosen product to cart or clear all or remove selected. 

## Front app
Front part of project was generated with Angular CLI version 8.3.8.

Instalation: run npm install in front directory

## Development server
Run npm install to install all modules listed as dependencies in package.json.

Run ng serve for a dev server. Navigate to http://localhost:4200/.

## Build
Run ng build to build the project. The build artifacts will be stored in the dist/ directory. Use the --prod flag for a production build.

## Backend
Created in Laravel.

Instalation: run composer install in backend directory.

Provide data from database and all operation such as add, get data, update or delete.

Mysql database structure covers Laravel migration files. Seeds files has data for database.

Creating database and import data is possible with Artisan commands:

php artisan migrate

php artisan db:seed

Database can also be imported via provided sql file.
