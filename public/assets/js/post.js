var db = require("../../models");

// on load of page
$(document).ready(function () {

    const categoriesListEl = $("#categories");

    // returns all categories from database
    db.Category.findAll({
        attributes: name
    }).then(function (categories) {
        for (var i = 0; i < categories.length; i++) {
            let listOptionEl = `<option>${categories[i]}</option>`;
            categoriesListEl.append(listOptionEl);
        }
    })
})

