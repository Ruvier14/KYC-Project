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

function handleLogin(event) {
    event.preventDefault();
    
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username && password) {
        // Direct navigation to dashboard
        window.location.href = '/dashboard/dashboard.html';
    } else {
        alert('Please fill in all fields');
    }
}

// Add event listener to the form
document.getElementById('loginForm').addEventListener('submit', handleLogin);

// Function to get URL parameters
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    return {
        email: params.get('email'),
        phone: params.get('phone'),
        fullName: params.get('fullName')
    };
}

// Function to display user information
function displayUserInfo() {
    const userInfo = getUrlParams();
    
    // Update the elements with user information
    document.getElementById('reviewEmail').textContent = userInfo.email || 'Not provided';
    document.getElementById('reviewPhone').textContent = userInfo.phone || 'Not provided';
    document.getElementById('reviewFullName').textContent = userInfo.fullName || 'Not provided';
}

// Call displayUserInfo when the page loads
window.onload = displayUserInfo;
