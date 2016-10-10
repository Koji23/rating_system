
Start up instructions:

1.) Rename the file at by removing the 'x' character on ./server/config/xsecrets.js 
    to ./server/config/secrets.js

2.) Populate secrets.js with database connection details (provided)

3.) npm install

4.) npm start

5.) Once the app is running you can choose to signup as a new user or login 
    with the default credentials provided below:
    username: 'user'
    password: '1234' 

6.) Rudimentary testing framework is setup for client. 
    npm test (while app is running)


Data Schema:

Users
- id *
- username
- password

Restaurants
- id *
- name
- imageURL

Ratings
- id
- user_id * 
_ restaurant_id *


Usage Notes:

- database is hosted remotely on AWS
- jwt and signout are not yet implemented so to place more ratings just refresh in order to 'signout'
