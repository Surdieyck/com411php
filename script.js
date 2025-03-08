document.getElementById('loginForm').addEventListener('submit', function(event) {
    event.preventDefault();  // Prevent the form from submitting normally

    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;

    // Basic validation
    if (username === '' || password === '') {
        document.getElementById('error-message').textContent = 'Both fields are required!';
    } else if (username === '23010231087' && password === 'owolabi') {
        // Example login check (you can replace with your real login logic)
        alert('Login successful!');
        location="home.html"
    } else {
        document.getElementById('error-message').textContent = 'Invalid username or password!';
    }
});