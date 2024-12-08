document.getElementById('createAccountForm').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    // Basic password match validation
    const password = document.getElementById('password').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        alert('Passwords do not match!');
        return;
    }
    
    // Collect form data
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        ssn: document.getElementById('ssn').value,
        dob: document.getElementById('dob').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zipCode: document.getElementById('zipCode').value
    };

    try {
        // Submit KYC information
        const response = await fetch('/api/kyc', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(formData)
        });

        const data = await response.json();

        if (data.success) {
            // Store account ID for status checking
            localStorage.setItem('accountId', data.account.id);
            
            // Start polling for KYC status
            checkKYCStatus(data.account.id);
            
            alert('Account creation initiated! Please wait while we verify your information.');
        } else {
            alert('Error creating account: ' + data.error);
        }
    } catch (error) {
        console.error('Error:', error);
        alert('Error submitting form');
    }
});

async function checkKYCStatus(accountId) {
    try {
        const response = await fetch(`/api/kyc/status/${accountId}`);
        const data = await response.json();
        
        if (data.success) {
            switch(data.status) {
                case 'APPROVED':
                    alert('Your account has been approved!');
                    window.location.href = '/';
                    break;
                case 'PENDING':
                    setTimeout(() => checkKYCStatus(accountId), 5000); // Check again in 5 seconds
                    break;
                case 'REJECTED':
                    alert('Your account application was rejected. Please contact support.');
                    break;
                default:
                    alert('Unknown status: ' + data.status);
            }
        }
    } catch (error) {
        console.error('Error checking KYC status:', error);
    }
}