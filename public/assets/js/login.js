// Handler for form submit
$('#loginForm').on('submit', (event) => {

    event.preventDefault();

	// Get the form data
	const userData = {
		email: $("#inputEmail").val().trim(),
		password: $("#inputPassword").val()
	}

	// Call the loginUser function and reset the form.
	loginUser(userData);
	$('#loginForm').trigger("reset");

});

// Function to login the user. If successful, redirects to the members page, otherwise
// displays an error.
function loginUser({ email, password }) {

    $.post('/api/login', {
        email: email,
        password: password,
    })
        .then(() => {
			toastMessage('success', `Login successful`);
			window.location.replace('/mytasks');
        })
        .catch((err) => {
            toastMessage('error', err.responseText);
		});

}
