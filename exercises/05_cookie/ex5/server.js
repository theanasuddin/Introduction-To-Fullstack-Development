// Import the Express module
const express = require('express');
const app = express();  // Create an Express application

// TODO: Create the request method route for the path "/", as instructed. You can use the skeleton code below as your starting point.
app.get('/', (req, res) => {
  res.send("Behold my Express.js server!");
});

// TODO: Create the GET request method route for the path "/about", as instucted
app.get("/about", (req, res) => {
  res.send("How About this page?");
});

// TODO: Create the GET request method route for the path "/contact-info", as instructed
// The JSON data should have the following format:
// {
//   email: 'contact@myserver.com',
//   phone: '123-456-7890'
// }
app.get("/contact-info", (req, res) => {
  res.json({
    email: "contact@myserver.com",
    phone: "123-456-7890",
  });
});

// TODO: Create a GET request method route for the path /user/:username with a query parameter age. Respond with "Hello, username! You are age years old." when the user visits /user/:username with a query parameter age. 
// If such query parameter is not provided, the route should respond with "Hello, username! Age not provided."
app.get("/user/:username", (req, res) => {
  const username = req.params.username;
  const age = req.query.age;
  if (age) {
    res.send(`Hello, ${username}! You are ${age} years old.`);
  } else {
    res.send(`Hello, ${username}! Age not provided.`);
  }
});


// DO NOT MODIFY BELOW THIS LINE
// Conditionally start the server if this script is run directly
if (require.main === module) {
  app.listen(3000, () => {
      console.log('Server is running on http://localhost:3000');
  });
}

// For Plussa grader
module.exports = app;