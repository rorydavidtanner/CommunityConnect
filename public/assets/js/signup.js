// On submit of signup form
$("#signupForm").on("submit", function (event) {
	event.preventDefault();

	console.log("button clicked");

    // Get the form data
    const userData = {
        email: $('#inputEmail').val().trim(),
        password: $('#inputPassword').val().trim(),
        firstName: $('#inputFirstName').val().trim(),
        lastName: $('#inputLastName').val().trim(),
        phone: $('#inputPhone').val().trim(),
        address: $('#inputAddress').val().trim()
    }

    // Make a post request to add the new user to the database.
    $.post('/api/users', userData).then(function (data) {
        // this bit is for the login section once we have that
        // window.location.replace("members");
    });

    // Reset the form.
	$('signupForm').trigger('reset');

})
