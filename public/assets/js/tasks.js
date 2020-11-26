// Handler for accept task button.
$(".btn-accept").on("click", function (event) {

	event.preventDefault();

	// Get the task id.
	const taskId = $(this).data("id");

	// Send a PUT request to the accept api with the id as the last parameter.
	// The api endpoint will take care of the rest.
	$.ajax(
		`/api/accept/${taskId}`,
		{ method: "PUT" }
	)

	// Remove the card because it is no longer unassigned.
	$(this).parents(".card").remove();

});

// Handler for delete task and close task buttons.
$(".btn-delete, .btn-close").on("click", function (event) {

	event.preventDefault();

	// Get the task id.
	const taskId = $(this).data("id");

	// Send a PUT request to the accept api with the id as the last parameter.
	// The api endpoint will take care of the rest.
	$.ajax(
		`/api/tasks/${taskId}`,
		{ method: "DELETE" }
	)

	// Remove the card because it is no longer unassigned.
	$(this).parents(".card").remove();

});
