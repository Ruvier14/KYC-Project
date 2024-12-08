document.addEventListener('DOMContentLoaded', function() {
    // Get user data from localStorage
    const userData = JSON.parse(localStorage.getItem('kycData') || '{}');
    
    // Update user name if available
    if (userData.firstName) {
        document.getElementById('userName').textContent = 
            `Welcome, ${userData.firstName}`;
    }
});

function logout() {
    // Clear any stored data
    localStorage.clear();
    
    // Redirect to first page
    window.location.href = '../firstPage.html';
}

// Add click handlers for card buttons
document.querySelectorAll('.card-btn').forEach(button => {
    button.addEventListener('click', function() {
        // You can add specific functionality for each button later
        alert('This feature will be available soon!');
    });
}); 