const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');

const app = express();

// Body Parser Middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

(async () => {
  const expressHandlebars = await import('express-handlebars');
  const hbs = expressHandlebars.create();

  // Set Handlebars as the template engine
  app.engine('handlebars', hbs.engine);
  app.set('view engine', 'handlebars');

  // Define a static folder
  app.use(express.static(path.join(__dirname, 'public')));

  // Define a route to render a view
  app.get('/', (req, res) => {
    res.render('home', { title: 'Home Page' });
  });

  const PORT = process.env.PORT || 5437;
  app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
})();
