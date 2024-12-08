document.getElementById('createAccountForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Basic password match validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Add your form submission logic here
    console.log('Form submitted');
});