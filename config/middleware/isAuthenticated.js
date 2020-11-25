// Function to check if the user is logged in before accessing restricted routes.
module.exports = (req, res, next) => {

	if (req.user) {
        return next();
    }

	// Redirect to the login page if not logged in.
	return res.redirect('/login');

};
