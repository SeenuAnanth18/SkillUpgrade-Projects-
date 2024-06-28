const form = document.getElementById('form');
const username = document.getElementById('username');
const email = document.getElementById('email');
const password = document.getElementById('password');
const password2 = document.getElementById('password2');

form.addEventListener('submit', function(e) {
    e.preventDefault();
    
    checkInputs();
});

function checkInputs() {
    const usernameValue = username.value.trim();
    const emailValue = email.value.trim();
    const passwordValue = password.value.trim();
    const password2Value = password2.value.trim();
    
    let isValid = true;
    
    // Validate username
    if (usernameValue === '') {
        setErrorFor(username, 'Username cannot be blank');
        isValid = false;
    } else {
        setSuccessFor(username);
    }
    
    // Validate email
    if (emailValue === '') {
        setErrorFor(email, 'Email cannot be blank');
        isValid = false;
    } else if (!isEmailValid(emailValue)) {
        setErrorFor(email, 'Email is not valid');
        isValid = false;
    } else {
        setSuccessFor(email);
    }
    
    // Validate password
    if (passwordValue === '') {
        setErrorFor(password, 'Password cannot be blank');
        isValid = false;
    } else {
        setSuccessFor(password);
    }
    
    // Validate password confirmation
    if (password2Value === '') {
        setErrorFor(password2, 'Password confirmation cannot be blank');
        isValid = false;
    } else if (passwordValue !== password2Value) {
        setErrorFor(password2, 'Passwords do not match');
        isValid = false;
    } else {
        setSuccessFor(password2);
    }
    
    // If all inputs are valid, submit the form
    if (isValid) {
        form.submit();
    }
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    formControl.className = 'form-control error';
    small.innerText = message;
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmailValid(email) {
    // Regular expression for basic email validation
    return /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email);
}

// SOCIAL PANEL JS
const floating_btn = document.querySelector('.floating-btn');
const close_btn = document.querySelector('.close-btn');
const social_panel_container = document.querySelector('.social-panel-container');

floating_btn.addEventListener('click', () => {
    social_panel_container.classList.toggle('visible');
});

close_btn.addEventListener('click', () => {
    social_panel_container.classList.remove('visible');
});
