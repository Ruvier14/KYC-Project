document.getElementById('submitKYC').addEventListener('click', function(e) {
    e.preventDefault();
    
    // Get all required inputs
    const requiredInputs = document.querySelectorAll('input[required]');
    let isValid = true;

    // Check if all required fields are filled
    requiredInputs.forEach(input => {
        if (!input.value) {
            isValid = false;
            input.style.borderColor = 'red';
        } else {
            input.style.borderColor = '#ddd';
        }
    });

    // If form is valid, store data and navigate
    if (isValid) {
        // Store form data
        const formData = {
            dob: document.getElementById('dob').value,
            ssn: document.getElementById('ssn').value,
            address: document.getElementById('address').value,
            city: document.getElementById('city').value,
            state: document.getElementById('state').value,
            zipCode: document.getElementById('zipCode').value
        };

        // Store in localStorage
        localStorage.setItem('kycData', JSON.stringify(formData));

        // Update the navigation path
        window.location.href = '../review/review.html';
    } else {
        alert('Please fill in all required fields.');
    }
});

// javascript for the ssn input hint

document.addEventListener('DOMContentLoaded', function() {
    // First check if the element exists
    const ssnInput = document.getElementById('ssn');
    
    if (!ssnInput) {
        console.error('SSN input element not found');
        return;
    }
    
    ssnInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/[^\d]/g, ''); // Remove all non-digits
        
        // Format the SSN with strict dash positions
        if (value.length > 0) {
            // Add dashes at correct positions
            if (value.length > 3) {
                value = value.slice(0, 3) + '-' + value.slice(3);
            }
            if (value.length > 6) {
                value = value.slice(0, 6) + '-' + value.slice(6);
            }
            
            // Limit to max length
            value = value.slice(0, 11);
        }
        
        // Display the formatted value
        e.target.value = value;
        
        // Create masked version (XXX-XX-1234)
        if (value.length === 11) {
            const maskedValue = value.replace(/\d(?=\d{4})/g, 'X');
            e.target.setAttribute('data-masked-value', maskedValue);
        }
    });

    // When input loses focus, show masked version if complete
    ssnInput.addEventListener('blur', function(e) {
        const value = e.target.value;
        const maskedValue = e.target.getAttribute('data-masked-value');
        
        // Only mask if the SSN is complete (XXX-XX-XXXX format)
        if (value.length === 11 && /^\d{3}-\d{2}-\d{4}$/.test(value)) {
            e.target.value = maskedValue;
        } else if (value.length > 0 && value.length < 11) {
            // Alert user if SSN is incomplete
            alert('Please enter a complete SSN in XXX-XX-XXXX format');
            e.target.focus();
        }
    });

    // When input gains focus, show full number
    ssnInput.addEventListener('focus', function(e) {
        const maskedValue = e.target.value;
        if (maskedValue && maskedValue.includes('X')) {
            const originalValue = e.target.getAttribute('data-masked-value')
                .replace(/X/g, (_, index) => e.target.getAttribute('data-original-value')[index]);
            e.target.value = originalValue;
        }
    });

    // Add validation before form submission
    document.getElementById('kycForm').addEventListener('submit', function(e) {
        const ssn = ssnInput.value;
        const ssnPattern = /^\d{3}-\d{2}-\d{4}$/;
        
        if (!ssnPattern.test(ssn)) {
            e.preventDefault();
            alert('Please enter a valid SSN in XXX-XX-XXXX format');
            ssnInput.focus();
            return false;
        }
        
        // Additional SSN validation
        const numbers = ssn.replace(/-/g, '');
        if (
            numbers === '000000000' ||
            numbers === '111111111' ||
            numbers === '222222222' ||
            numbers === '333333333' ||
            numbers === '444444444' ||
            numbers === '555555555' ||
            numbers === '666666666' ||
            numbers === '777777777' ||
            numbers === '888888888' ||
            numbers === '999999999' ||
            numbers.startsWith('666') ||
            numbers.startsWith('000') ||
            numbers.startsWith('900')
        ) {
            e.preventDefault();
            alert('Please enter a valid SSN');
            ssnInput.focus();
            return false;
        }
    });
});

// update review page with user data

document.getElementById('kycForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const formData = {
        dob: document.getElementById('dob').value,
        ssn: document.getElementById('ssn').value,
        address: document.getElementById('address').value,
        city: document.getElementById('city').value,
        state: document.getElementById('state').value,
        zipCode: document.getElementById('zipCode').value
    };

    // Validate required fields
    let isValid = true;
    Object.entries(formData).forEach(([key, value]) => {
        if (!value) {
            isValid = false;
            document.getElementById(key).style.borderColor = 'red';
        } else {
            document.getElementById(key).style.borderColor = '#ddd';
        }
    });

    if (!isValid) {
        alert('Please fill in all required fields.');
        return;
    }

    // Store in localStorage
    localStorage.setItem('kycData', JSON.stringify(formData));

    // Redirect to review page
    window.location.href = '/review/review.html';
});
