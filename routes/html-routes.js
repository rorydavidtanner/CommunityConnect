const path = require('path');
const { Op } = require('sequelize');
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

	// Route to get the browse page. If logged in, show all unassigned
	// tasks except user's own. Otherwise show all unassigned.
	app.get('/browse', function (req, res) {

		// Create an object containing the WHERE clauses.
		const objSelectors = { isAssigned: 0 };

		// If the user is logged in, select only records where the user
		// is not the owner.
		if (req.user) {
			objSelectors.ownerId = { [Op.ne]: req.user.id }
		}

		// Query the database, pass in the selectors.
		db.Task.findAll({
			include: db.Category,
			where: objSelectors,
		}).then(function (dbTask) {
			res.render('tasks', { task: dbTask });
		});
	});

	// Route to load the mytasks page.
	app.get('/mytasks', isAuthenticated, function (req, res) {

		// Query the database to get all tasks where the current user is either owner or assignee.
		db.Task.findAll({
			include: db.Category,
			where: {
				[Op.or]: [
					{ ownerId: req.user.id },
					{ assigneeId: req.user.id }
				]
			}
		}).then(function (dbTask) {
			// Check if the current user is the owner of the task or not. Map the array to add a new
			// "isOwner" key which will be used by handlebars when rendering the page.
			dbTask.map((task) => {
				(task.ownerId === req.user.id) ? task.isOwner = true : task.isOwner = false;
			});

			// Render the view.
			res.render('mytasks', {
				userId: req.user.id,
				userName: `${req.user.first_name} ${req.user.last_name}`,
				task: dbTask,
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
