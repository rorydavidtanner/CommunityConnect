// Get the logged in user and dynamically update the navbar.
$.get('/api/user_data').then((data) => {

    // If the user is logged in, add the name and a logout button to the navbar. Otherwise
    // add the sign up and login buttons.
    let navItems;

    const navBtns = `
        <a class="nav-link btn btn-dark text-white" href="/browse">Browse Tasks</a>
        <a class="nav-link btn btn-dark text-white mr-5" href="/post">Post a Task</a>`;

    if (data.id) {
        navItems = `
        ${navBtns}
        <a href="/mytasks" class="nav-link text-white">${data.firstName} ${data.lastName}</a>
        <a href="/logout" class="nav-link text-white">Logout</a>`;
    }
    else {
        navItems = `
        ${navBtns}
        <a class="nav-link text-white" href="/signup">Sign up</a>
        <a class="nav-link text-white" href="/login">Log in</a>`;
    }

    $("#navList").html(navItems);

});
