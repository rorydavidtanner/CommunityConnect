// On submit of signup form
$("#signupForm").on("submit", function (event) {
	event.preventDefault();

    // Get the form data
    const userData = {
        email: $('#inputEmail').val().trim(),
        password: $('#inputPassword').val().trim(),
        firstName: $('#inputFirstName').val().trim(),
        lastName: $('#inputLastName').val().trim(),
        phone: $('#inputPhone').val().trim(),
        address: $('#inputAddress').val().trim()
    }

    // Call signupUser to create the account.
    signupUser(userData);

    // Reset the form.
	$('#signupForm').trigger('reset');

})

function signupUser(userData) {

    // Make a post request to add the new task to the database.
    $.post('/api/users', userData)
    .then(() => {
        $("#signupModalText").text("Your account has been created!");
        $("#signupModal").modal("show");
    })
    .catch((err) => {
        $("#signupModalText").text("Something went wrong creating your account. Please try again.");
        $("#signupModal").modal("show");
    });

}
