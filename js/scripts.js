document.addEventListener('DOMContentLoaded', function () {
    // Add event listener to contact form submission
    const contactForm = document.querySelector('form');
    if (contactForm) {
        contactForm.addEventListener('submit', function (event) {
            event.preventDefault();
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            const message = document.getElementById('message').value;

            // Simple form validation
            if (name && email && message) {
                alert('Thank you for your message, ' + name + '! We will get back to you soon.');
                contactForm.reset();
            } else {
                alert('Please fill in all fields before submitting.');
            }
        });
    }
});

// Function to handle login
function loginUser() {
    // Your login logic here...
    // For demonstration purposes, let's assume the login is successful
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    const correctUsername = 'user';
    const correctPassword = 'password';


    if (username === 'user' && password === 'password') {
        // Display the message after successful login
        alert('Login successful! Welcome, ' + username + '.');
        // Redirect to the "thanks for logging in" page
        window.location.href = "thanks.html";
    } else {
        // Display an error message if login fails
        alert('Invalid username or password. Please try again.');
    }
}
