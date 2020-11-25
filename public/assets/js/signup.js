// On submit of signup form
$("#signupForm").on("submit", function (event) {
    event.preventDefault();

    // Get the form data
    const userData = {
        email: $('#inputTaskTitle').val().trim(),
        password: $('#inputTaskDescription').val().trim(),
        firstName: $('#inputTaskDescription').val().trim(),
        lastName: $('#inputTaskDescription').val().trim(),
        phone: $('#inputTaskDescription').val().trim(),
        address: $('#inputTaskDescription').val().trim()
    }

    // Make a post request to add the new user to the database.
    $.post('/api/tasks', taskData).then(function (data) {
        // this bit is for the login section once we have that
        // window.location.replace("members");
    });

    // Reset the form.
	$('signupForm').trigger('reset');

})