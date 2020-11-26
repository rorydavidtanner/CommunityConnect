// On submit of post task form.
$("#post-form").on("submit", async function (event) {

    event.preventDefault();

    // Get the user id.
    let userId;
    await $.get('/api/user_data').then(function (data) {
        userId = data.id;
    });


    // Get the form data.
    const taskData = {
        title: $('#inputTaskTitle').val().trim(),
        description: $('#inputTaskDescription').val().trim(),
        categoryId: $('#categories').children('option:selected').data('id'),
        ownerId: userId
    }

    // Call postTask to create the task.
    postTask(taskData);

    // Reset the form.
    $('#post-form').trigger('reset');

})

function postTask(taskData) {

    // Make a post request to add the new task to the database.
    $.post('/api/tasks', taskData)
    .then(() => {
        $("#postModalText").text("Your task has been created!");
        $("#postModal").modal("show");
    })
    .catch((err) => {
        $("#postModalText").text("Something went wrong creating your task. Please try again.");
        $("#postModal").modal("show");
    });

}

// Function to populate category list.
function renderCategories() {
    $.get('/api/categories', function (data) {
            data.forEach(category => {
                // Create a new option for the selector
                let newOption = $('<option>');
                newOption.attr('data-id', category.id);
                newOption.text(category.name);
                $('#categories').append(newOption);
            });
        }
    );
}

renderCategories();
