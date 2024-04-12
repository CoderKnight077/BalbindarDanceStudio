// JavaScript code for form validation
document.addEventListener('DOMContentLoaded', function () {
    const form = document.querySelector('.join-form');

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const nameInput = document.getElementById('name');
        const emailInput = document.getElementById('email');
        const phoneInput = document.getElementById('phone');

        if (validateForm(nameInput, emailInput, phoneInput)) {
            // Here you can send the form data to the server or perform other actions
            alert('Form submitted successfully!');
            form.reset();
        }
    });

    function validateForm(name, email, phone) {
        const nameValue = name.value.trim();
        const emailValue = email.value.trim();
        const phoneValue = phone.value.trim();

        let isValid = true;

        // Simple validation for name
        if (nameValue === '') {
            showError(name, 'Name is required');
            isValid = false;
        } else {
            showSuccess(name);
        }

        // Simple validation for email
        if (emailValue === '') {
            showError(email, 'Email is required');
            isValid = false;
        } else if (!isValidEmail(emailValue)) {
            showError(email, 'Please enter a valid email address');
            isValid = false;
        } else {
            showSuccess(email);
        }

        // Simple validation for phone
        if (phoneValue === '') {
            showError(phone, 'Phone number is required');
            isValid = false;
        } else if (!isValidPhone(phoneValue)) {
            showError(phone, 'Please enter a valid phone number');
            isValid = false;
        } else {
            showSuccess(phone);
        }

        return isValid;
    }

    function showError(input, message) {
        const formControl = input.parentElement;
        formControl.classList.add('error');
        const small = formControl.querySelector('small');
        small.textContent = message;
    }

    function showSuccess(input) {
        const formControl = input.parentElement;
        formControl.classList.remove('error');
    }

    function isValidEmail(email) {
        // Simple email validation regex
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    }

    function isValidPhone(phone) {
        // Simple phone number validation regex (10 digits)
        return /^\d{10}$/.test(phone);
    }
});



