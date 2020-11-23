// Activating Application

// Dependencies
const express = require('express');
const exphbs = require('express-handlebars');
const db = require('./models');

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Static directory
app.use(express.static('public'));

// Set Handlebars as the default templating engine.
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
app.set('view engine', 'handlebars');

// Request handler to get page browse.handlebars
app.get('/', (req, res) => {
  res.render('browse');
});

// Import routes
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes')

apiRoutes(app);
htmlRoutes(app);

// Sync the database then start our server so that it can begin listening to client requests.
db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
