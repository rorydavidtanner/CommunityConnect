var db = require("../../models");

var taskTitleInput = $("#inputTaskTitle");
var taskDescriptionInput = $("#");
var categoryInput = $("#categories");

// // on load of page
// $(document).ready(function () {

//     const categoriesListEl = $("#categories");

//     // returns all categories from database
//     db.Category.findAll({
//         attributes: name
//     }).then(function (categories) {
//         for (var i = 0; i < categories.length; i++) {
//             let listOptionEl = `<option>${categories[i]}</option>`;
//             categoriesListEl.append(listOptionEl);
//         }
//     })
// })

// on click of post button on form
$(".post-form").on("submit", function (event) {
    event.preventDefault();

    // saves data inputs on form
    let taskData = {
        title = taskTitleInput.val().trim(),
        description = taskDescriptionInput.val().trim(),
        category = categoryInput.val()
    };

    // if any of the form inputs are blank, nothing happens
    if (!taskData.title || !taskData.description || !taskData.category) {
        return;
    }

    addTask(taskData.title, taskData.description, taskData.category);
    taskTitleInput.val("");
    taskDescriptionInput.val("");
    category.val("");
})

// posts the entered data to the post route
function addTask(taskTitle, taskDescription, taskCategory) {
    $.post("/api/post", {
        title = taskTitle,
        description = taskDescription,
        category = taskCategory
    }).then(function (data) {
        // this bit is for the login section once we have that 
        //window.location.replace("members");
    })
}
