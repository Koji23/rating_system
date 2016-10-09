
Start up instructions:
0. client fetch url update...
1.) create a MySQL database on Localhost
2.) input MySQL database connection details in ./server/config/secrets.js
    (this file will be ignored by git)
3.) npm install
4.) npm start
5.) Once the app is running you can choose to signup as a new user or login 
    with the default credentials provided below:
    username: 'anon'
    password: '1234' 

~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~


Build a rating system

Design a rating system that will be used to rate restaurants.

Show a list of restaurants with the ratings they've been given so far
Allow the user to submit their own rating
Average out all user ratings and display these to new users
This is just a code challenge, so don't worry about completeness, but you should have:

The basics of the UI
The basics of the API
A data schema
Basic requirements

use react for your UI
use node.js for your server
store the ratings on the server so they're available for multiple users.
We're sending you this to help us figure out how you architect and how you code. We'd like something we can click on, but treat this like a prototype not a finished product. We don't expect this to take more than a few hours.

Tips

It's OK to have only two restaurants; there doesn't need to be a way to add more.
Rating can be just a score; comments aren't necessary.
Don't worry user accounts, but ensure multiple ratings are averaged together.
The design isn't important.
Tests are always nice.
Don't be afraid to email us with questions.
