function validateForm() {
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    var errorMessage = document.getElementById('error-msg');

    // Simple validation: Check if fields are not empty
    if (username === '' || password === '') {
        errorMessage.textContent = 'Please fill in all fields.';
        return false;
    }

    // Check if username and password are the same
    if (username === password) {
        // Clear error message if everything is valid
        errorMessage.textContent = '';

        // Redirect to the next page (replace "next-page.html" with the URL of your next page)
        window.location.href = 'aframe.html';
        return false; // Prevent the form from submitting (since we are redirecting manually)
    } else {
        errorMessage.textContent = 'Invalid credentials. Username and password must be the same.';
        return false;
    }
}
