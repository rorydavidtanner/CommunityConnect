// Get the logged in user and dynamically update the navbar.
$.get('/api/user_data').then((data) => {

    // If the user is logged in, add the name and a logout button to the navbar. Otherwise
    // add the sign up and login buttons.
    let navItems;

    const navBtns = `
        <li class="nav-item">
            <a class="nav-link btn btn-dark text-white" href="/browse">Browse Tasks</a>
        </li>
        <li class="nav-item">
            <a class="nav-link btn btn-dark text-white" href="/post">Post a Task</a>
        </li>`;

    if (data.id) {
        navItems = `
        ${navBtns}
        <li class="nav-item dropdown">
            <a class="nav-link btn btn-outline-light text-dark dropdown-toggle" href="#" id="navUser" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            <span class="fas fa-user-circle pr-2 pl-1"></span>${data.firstName} ${data.lastName}
            </a>
            <div class="dropdown-menu dropdown-menu-right" aria-labelledby="navUser">
                <a class="dropdown-item" href="/mytasks">My Tasks</a>
                <a class="dropdown-item" href="/logout">Logout</a>
            </div>
        </li>`;
    }
    else {
        navItems = `
        ${navBtns}
        <li class="nav-item">
            <a class="nav-link btn btn-outline-light text-dark" href="/signup">Sign up</a>
        </li>
        <li class="nav-item">
            <a class="nav-link btn btn-outline-light text-dark" href="/login">Log in</a>
        </li>`;
    }

    $("#navList").html(navItems);

});
