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

		$("#loginModalText").text("Login successful.");
		$("#loginModal").modal("show");
		setTimeout(() => window.location.replace('/mytasks'), 3000);
	})
	.catch((err) => {
		$("#loginModalText").text("Login failed.Please try again.");
		$("#loginModal").modal("show");
	});

}
