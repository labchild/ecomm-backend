# E-commerce Back End
![license](https://img.shields.io/github/license/labchild/ecomm-backend) ![issues](https://img.shields.io/github/issues/labchild/ecomm-backend)

Back end access for ecommerce retail business with SQL database.

### Table of Contents
* [Description](#description)
* [Installation](#installation)
  * [Prerequisites](#prerequisites)
  * [Getting Started](#getting-started)
* [Usage](#usage)
  * [GET](#get-routes)
  * [POST](#post-routes)
  * [PUT](#put-routes)
  * [DELETE](#delete-routes)
* [Contributions](#contributions)
* [License](#license)
* [Questions & Contact](#questions-and-contact)
* [Acknowledgements &#x2763;](#acknowledgements)

## Description
E-commerce Back End provides access to the back end for an e-commerce site. It uses an Express.js server, RESTful APIs, and Sequelize to interact with a MySQL database. It offers create, read, update, and delete functionality.

## Installation
### Prequisites
This application requires that you have Node.js, MySQL server, and the MySQL shell. The server and database connection also require _environment variables_, so create ```.env``` file in the root folder of the project, then add the following information:
```
DB_NAME='ecommerce_db'
DB_USER='<your_user>'
DB_PW='<your_password>'
```

Now the server can connect to your database automatically on launch.

### Getting Started
Navigate to the root folder of the application from you CLI. Install the dependencies with the command ```npm i```. Once the project is intalled, connect to your database:
```
mysql -u <your_user> -p
```

Leave out ```-p``` if you're not using a password. Next, create the database. From the mysql shell, run the folowing command:
```
source db/schema.sql
```

Close the mysql shell. Ecommerce Backend is now installed and your database is ready to use. If you'd like to use the example records included with this project, run the command  ```npm run seed```.

## Usage
Watch this [walkthrough video](https://drive.google.com/file/d/1r3WPJoLPORg7pBDonU8xLQYxkwxwuZSt/view?usp=sharing) for a detailed view of each route and request body.

To launch the app, navigate to the root folder of the project from your CLI. Run the command ```npm start``` or ```node server.js```.

Next, launch your API testing client (like Insomnia) and enter the HTTP address where your server is running, most likely http://localhost:3001 (the port will be logged to the console once the server starts), with the route you'd like to use (for example /api/categories). Get and delete routes do not require a request body. Put and post routes (update and create, respectively), require a JSON request body.

Here are some examples of the API in action:

#### GET Routes
There are two Read options available: GET all and GET one by id. To get a single record, simply add the record id to the end of the HTTP address.

![get preview](./src/images/get-preview.png)

#### POST Routes
New categories require ```category_name``` in the request body. Tags take ```tag_name``` as the request body. Products require more information; include ```prduct_name```, ```price```, and ```stock```. If stock is left blank, it will default to 10. You may optionally include ```category_id``` and ```tagIds``` (as an array), but they are not required for product creation.

![post preview](./src/images/post-preview.png)

#### PUT Routes
You cannot change a record's id. You can make changes to any other field. Products do not require that your enter every property into the JSON request, only the propeties that you wish to alter. Remember to include the record's id at the end of the HTTP address.

![put preview](./src/images/put-preview.png)

#### DELETE Routes
To delete a record, include the record's id at the end of the HTTP address.

![delete preview](./src/images/delete-preview.png)

## Contributions
This project uses the following packages:
* [Express](https://www.npmjs.com/package/express)
* [MySQL 2](https://www.npmjs.com/package/mysql2)
* [Sequelize](https://www.npmjs.com/package/sequelize)

Code for the server was provided in the curricullum for Columbia University's Full-Stack Bootcamp.

## License ![license](https://img.shields.io/github/license/labchild/ecomm-backend)
This is an open source project and falls under an [ISC license](./LICENSE.md).

## Questions and Contact
Back end written by Lelah Bates Childs.

You can find me on GitHub [@labchild](https://github.com/labchild) or [email me](mailto:labchilds@gmail.com). If you have any questions about this project, please reach out.

If you encounter any bugs or other problems, [submit an issue](https://github.com/labchild/ecomm-backend/issues).

### Want to Help?
Do you see something I missed or a more succint and effective way this code can be written? Great! Please reach out and let me know how I can improve. Thanks in advance for your tips, tricks, and pointers!

## Acknowledgements
Thank you to my bootcamp instructional team and cohort, for helping me along this journey to become a developer.
