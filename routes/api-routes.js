const db = require('../models');
const passport = require('../config/passport');


module.exports = function (app) {
	// Route to get all unassigned tasks.
	app.get('/api/tasks', function (req, res) {
		db.Task.findAll({
			include: db.Category,
			where: {
				isAssigned: 0,
			},
		}).then((dbTask) => {
			res.json(dbTask);
		});
	});

	// Route to get all tasks assigned to a user.
	app.get('/api/usertasks/:userId', function (req, res) {
		db.Task.findAll({
			include: db.Category,
			where: {
				ownerId: req.params.userId,
			},
		}).then((dbTask) => {
			res.json(dbTask);
		});
	});

	// Route to add a task.
	app.post('/api/tasks', function (req, res) {
		db.Task.create({
			title: req.body.title,
			CategoryId: req.body.categoryId,
			description: req.body.description,
			createdAt: new Date(),
			updatedAt: new Date(),
		}).then(function (dbTask) {
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

	// Route to add a user.
	app.post('/api/users', function (req, res) {
		db.User.create({
			email: req.body.email,
			password: req.body.password,
			first_name: req.body.firstName,
			last_name: req.body.lastName,
			phone: req.body.phone,
			address: req.body.address,
			createdAt: new Date(),
			updatedAt: new Date(),
		}).then(function (dbUser) {
			console.log(dbUser);
			res.json(dbUser);
		});
	});

	// Route to delete a user.
	app.delete('/api/users/:id', function (req, res) {
		db.User.destroy({
			where: {
				id: req.params.id
			}
		}).then(function (dbUser) {
			res.json(dbUser);
		});
	});

	// Route to login a user.
	app.post('/api/login', passport.authenticate('local'), (req, res) => {
		res.json(req.user);
	});

	// Route to get logged in user data. If no user is logged in send back an empty object.
	// Otherwise send back user data.
	app.get('/api/user_data', (req, res) => {
		if (!req.user) {
			res.json({});
		}
		else {
			res.json({
				id: req.user.id,
				firstName: req.user.first_name,
				lastName: req.user.last_name,
			});
		}
	});

	// Route for logging user out.
	app.get('/logout', (req, res) => {
		req.logout();
		res.redirect('/');
	});

};
