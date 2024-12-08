document.addEventListener('DOMContentLoaded', function() {
    // Retrieve stored information
    const storedData = JSON.parse(localStorage.getItem('kycData') || '{}');
    
    // Populate review fields
    document.getElementById('reviewDOB').textContent = storedData.dob || 'Not provided';
    document.getElementById('reviewAddress').textContent = storedData.address || 'Not provided';
    document.getElementById('reviewCity').textContent = storedData.city || 'Not provided';
    document.getElementById('reviewState').textContent = storedData.state || 'Not provided';
    document.getElementById('reviewZip').textContent = storedData.zipCode || 'Not provided';
    // SSN is already masked in the HTML
});

function submitApplication() {
    // Store the current data before clearing
    const currentData = localStorage.getItem('kycData');
    
    // Clear KYC data but keep it for dashboard
    localStorage.setItem('userApplicationData', currentData);
    localStorage.removeItem('kycData');
    
    // Make sure to use the correct path to dashboard
    window.location.href = '../dashboard/dashboard.html';
}

async function handleLogin(event) {
    event.preventDefault();
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    try {
        const response = await fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({ username, password })
        });

        if (response.ok) {
            // Successful login - redirect to dashboard
            window.location.href = '/dashboard';
        } else {
            // Handle login error
            alert('Login failed. Please check your credentials.');
        }
    } catch (error) {
        console.error('Login error:', error);
        alert('An error occurred during login.');
    }
}
