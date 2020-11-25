const path = require('path');
const db = require('../models');
const isAuthenticated = require('../config/middleware/isAuthenticated');

module.exports = function (app) {

  // Route to get the landing page.
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // Route to load the landing page when browsing to /index.
  app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });

  // Route to load the post task page.
  app.get('/post', isAuthenticated, function (req, res) {
    res.sendFile(path.join(__dirname, '../public/post.html'));
  });

  // Route to load the browse tasks page.
  app.get('/browse', function (req, res) {
    db.Task.findAll({
      include: db.Category,
      where: {
        isAssigned: 0,
      },
    }).then(function (dbTask) {
      res.render('tasks', { task: dbTask });
    });
  });

  // Route to load the mytasks page.
  app.get('/mytasks', isAuthenticated, function (req, res) {
    db.Task.findAll({
      include: db.Category,
      where: {
        ownerId: req.user.id,
      },
    }).then(function (dbTask) {
      res.render('mytasks', {
        task: dbTask,
        userName: `${req.user.first_name} ${req.user.last_name}`
      });
    });
  });

  // Route to get the signup page.
  app.get('/signup', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/signup.html'))
  });

  // Route to get the login page.
  app.get('/login', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/login.html'))
  });

  // Route to get the about page.
  app.get('/about', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/about.html'))
  });

  // Route to get the team page.
  app.get('/team', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/team.html'))
  });

}
