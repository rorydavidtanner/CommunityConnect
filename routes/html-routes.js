const path = require('path');
const db = require('../models');

module.exports = function (app) {
  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
  app.get('/index', function (req, res) {
    res.sendFile(path.join(__dirname, '../public/index.html'));
  });
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
}