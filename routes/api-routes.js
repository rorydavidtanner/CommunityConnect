const db = require('../models');

module.exports = function (app) {
  // Route to get all unassigned tasks.
  app.get('/api/tasks', (req, res) => {
    db.Task.findAll({
      include: db.Category,
      where: {
        isAssigned: 0,
      },
    }).then((dbTask) => {
      res.json(dbTask);
    });
  });

  // Route to add a task.
  app.post('/api/tasks', function (req, res) {
    console.log(req.body);
    // res.end();
    db.Task.create({
      title: req.body.title,
      CategoryId: req.body.category,
      description: req.body.description,
      createdAt: new Date(),
      updatedAt: new Date(),
    }).then(function (dbTask) {
      console.log(dbTask);
      res.json(dbTask);
    });
  });

  // Route to delete a task.
  app.delete('/api/tasks/:id', function (req, res) {
    db.Task.destroy({
      where: {
        id: req.params.id
      }
    }).then(function (dbTask) {
      res.json(dbTask);
    });
  });

  // Route to edit a task.
  app.put('/api/tasks/:id', function (req, res) {
    console.log(req.body);
    db.Task.update({
      title: req.body.title,
      CategoryId: req.body.category,
      description: req.body.description,
      updatedAt: new Date()
    }, {
      where: {
        id: req.params.id
      }
    }).then(function (dbTask) {
      res.json(dbTask);
    })
  });

  // Route to get categories.
  app.get('/api/categories', (req, res) => {
    db.Category.findAll({}).then(function (dbCategory) {
      res.json(dbCategory);
    });
  });
};
