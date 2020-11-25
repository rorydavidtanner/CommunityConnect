const path = require('path');
const db = require('../models');

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
  app.get('/post', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/post.html'));
  });
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
