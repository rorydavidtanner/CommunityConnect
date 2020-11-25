// Activating Application

// Dependencies
const express = require('express');
const session = require('express-session');
const exphbs = require('express-handlebars');

const db = require('./models');
const passport = require('./config/passport');

// Create an instance of the express app.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static('public'));

// Set up passport and sessions
app.use(session({ secret: "ssshhhhhhh", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars as the default templating engine.
app.engine('handlebars', exphbs({
  defaultLayout: 'main',
  runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
  },
}));
app.set('view engine', 'handlebars');

// Import routes
const apiRoutes = require('./routes/api-routes');
const htmlRoutes = require('./routes/html-routes');

apiRoutes(app);
htmlRoutes(app);

// Sync the database then start our server so that it can begin listening to client requests.
db.sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => {
    // Log (server-side) when our server has started
    console.log(`Server listening on: http://localhost:${PORT}`);
  });
});
