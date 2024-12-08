document.addEventListener('DOMContentLoaded', function() {
    const progress = document.getElementById('progress');
    const steps = document.querySelectorAll('.step');
    
    // Calculate progress based on active/completed steps
    function updateProgress() {
        const activeSteps = document.querySelectorAll('.step.active, .step.completed').length;
        const totalSteps = steps.length;
        const progressWidth = ((activeSteps - 1) / (totalSteps - 1)) * 100;
        progress.style.width = `${progressWidth}%`;
    }
    
    // Call on page load
    updateProgress();
});

function handleLogin(event) {
    event.preventDefault();
    
    // Get form values
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    // Basic validation
    if (username && password) {
        // Redirect to dashboard
        window.location.href = '/dashboard/dashboard.html';
    } else {
        alert('Please fill in all fields');
    }
}

// Make sure your login form has this event listener
document.addEventListener('DOMContentLoaded', function() {
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', handleLogin);
    }
});