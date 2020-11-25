// Get the logged in user and dynamically update the navbar.
$.get('/api/user_data').then(function (data) {

    // If the user is logged in, add the name and a logout button to the navbar. Otherwise
    // add the sign up and login buttons.
    let navItems;

    const navBtns = `
        <a class="nav-link btn btn-dark text-white" href="/browse">Browse Tasks</a>
        <a class="nav-link btn btn-dark text-white" href="/post">Post a Task</a>`;

    if (data.id) {
        navItems = `
        ${navBtns}
        <a href="/members" class="nav-link">${data.firstName} ${data.lastName}</a>
        <a href="/logout" class="nav-link">Logout</a>`;
    }
    else {
        navItems = `
        ${navBtns}        <a class="nav-link" href="/signup">Sign up</a>
        <a class="nav-link" href="/login">Log in</a>`;
    }

    $("#navList").html(navItems);

});

// Create global functions for toast messages.
window.toastTemplate = (alertType, message) => {
    let title = 'Message';
    let alertTypeColour = '#007aff';
    switch (alertType) {
        case 'error':
            title = 'Error';
            alertTypeColour = '#dc3545';
            break;
        case 'success':
            title = 'Success';
            alertTypeColour = '#28a745';
            break;
        default:
            break;
    }
    return `
<div aria-live="polite" aria-atomic="true" style="position: relative;">
    <div class="toast show" role="alert" aria-live="assertive" aria-atomic="true" style="position: absolute; top: 20px; right: 20px;">
        <div class="toast-header" style="min-width: 250px;">
            <svg class="bd-placeholder-img rounded mr-2" width="20" height="20" xmlns="http://www.w3.org/2000/svg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"><rect width="100%" height="100%" fill="${alertTypeColour}"></rect></svg>
            <strong class="mr-auto">${title}</strong>
            <small class="text-muted">1 sec ago</small>
            <button type="button" class="ml-2 mb-1 close" data-dismiss="toast" aria-label="Close">
            <span aria-hidden="true">&times;</span>
            </button>
        </div>
        <div class="toast-body">
            ${message}
        </div>
    </div>
</div>
`;
};

window.toastMessage = (type, message) => {
    const $alert = $('#alert');
    const output = toastTemplate(type, message);
    $alert.html(output);
};
