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
        phone: params.get('phoneNumber'),
        fullName: params.get('fullName')
    };
}

// Function to display user information
function displayUserInfo() {
    const userInfo = getUrlParams();
    
    // Display the specific fields we're fixing
    document.getElementById('email').textContent = userInfo.email || 'Not provided';
    document.getElementById('phoneNumber').textContent = userInfo.phone || 'Not provided';
    document.getElementById('fullName').textContent = userInfo.fullName || 'Not provided';
}

// Call displayUserInfo when the page loads
window.onload = displayUserInfo;

document.addEventListener('DOMContentLoaded', function() {
    // Retrieve account information
    const email = localStorage.getItem('email') || 'Not provided';
    const phone = localStorage.getItem('phone') || 'Not provided';
    
    // Get name components from localStorage
    const firstName = localStorage.getItem('firstName') || '';
    const lastName = localStorage.getItem('lastName') || '';
    const fullName = `${firstName} ${lastName}`.trim() || 'Not provided';

    // Display account information
    document.getElementById('reviewEmail').textContent = email;
    document.getElementById('reviewPhone').textContent = phone;
    
    // Display personal information
    document.getElementById('reviewFullName').textContent = fullName;
    
    // Retrieve KYC information
    const dob = localStorage.getItem('dob') || 'Not provided';
    const ssn = localStorage.getItem('ssn') || 'Not provided';
    const address = localStorage.getItem('address') || 'Not provided';
    const city = localStorage.getItem('city') || 'Not provided';
    const state = localStorage.getItem('state') || 'Not provided';
    const zip = localStorage.getItem('zip') || 'Not provided';

    // Display account information
    document.getElementById('reviewEmail').textContent = email;
    document.getElementById('reviewPhone').textContent = phone;
    
    // Display full name
    document.getElementById('reviewFullName').textContent = fullName || 'Not provided';

    // Display other information
    document.getElementById('reviewDOB').textContent = dob;
    document.getElementById('reviewSSN').textContent = 'XXX-XX-' + (ssn.slice(-4) || '****');
    document.getElementById('reviewAddress').textContent = address;
    document.getElementById('reviewCity').textContent = city;
    document.getElementById('reviewState').textContent = state;
    document.getElementById('reviewZip').textContent = zip;
});

// Handle form submission
function submitApplication() {
    // Add any final submission logic here
    alert('Application submitted successfully!');
    
    // Clear the stored data
    localStorage.clear();
    
    // Redirect to home/success page
    window.location.href = '/dashboard/dashboard.html';
}