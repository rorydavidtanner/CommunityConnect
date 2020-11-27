// Handler for accept task button.
$(".btn-accept").on("click", function (event) {

	event.preventDefault();

	// Get the task id.
	const taskId = $(this).data("id");

	// Send a PUT request to the accept api with the id as the last parameter.
	// The api endpoint will take care of the rest.
	$.ajax({
		url: `/api/accept/${taskId}`,
		method: "PUT",

		// Remove the card because it is no longer unassigned.
		success: function () { $(event.target).parents(".card").remove() },

		// If the endpoint returns a 401 (not authorised), redirect to the login page.
		statusCode: { "401": function () { window.location.replace("/login") } }
	});

});

// Handler for delete task and close task buttons.
$(".btn-delete, .btn-close").on("click", function (event) {

	event.preventDefault();

	// Get the task id.
	const taskId = $(this).data("id");

	// Send a DELETE request to the tasks api with the id as the last parameter.
	$.ajax({
		url: `/api/tasks/${taskId}`,
		method: "DELETE",

		// Remove the card because it is no longer unassigned.
		success: function () { $(event.target).parents(".card").remove() },

	});

});
