const express = require('express');
const path = require('path');

const app = express();

// Set up Pug as the view engine
app.set('view engine', 'pug');
app.set('views', path.join(__dirname, 'views'));

// Define a route
app.get('/', (req, res) => {
  res.render('home', { title: 'Home Page' });
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
