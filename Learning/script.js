// Get all elements
const loginTab = document.getElementById('login-tab');
const signupTab = document.getElementById('signup-tab');
const loginForm = document.getElementById('login-form');
const signupForm = document.getElementById('signup-form');
const switchToSignup = document.getElementById('switch-to-signup');
const switchToLogin = document.getElementById('switch-to-login');

// Switch to Sign Up
function showSignUp() {
    loginForm.classList.remove('active');
    signupForm.classList.add('active');
    loginTab.classList.remove('active');
    signupTab.classList.add('active');
}

// Switch to Login
function showLogin() {
    signupForm.classList.remove('active');
    loginForm.classList.add('active');
    signupTab.classList.remove('active');
    loginTab.classList.add('active');
}

// Tab click events
loginTab.addEventListener('click', showLogin);
signupTab.addEventListener('click', showSignUp);

// Link click events
switchToSignup.addEventListener('click', (e) => {
    e.preventDefault();
    showSignUp();
});

switchToLogin.addEventListener('click', (e) => {
    e.preventDefault();
    showLogin();
});

// Login form submit
loginForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;
    alert(`Login successful!\nEmail: ${email}`);
    loginForm.reset();
});

// Sign Up form submit
signupForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const name = document.getElementById('signup-name').value;
    const email = document.getElementById('signup-email').value;
    const password = document.getElementById('signup-password').value;
    const confirm = document.getElementById('signup-confirm').value;
    
    if (password !== confirm) {
        alert('Passwords do not match!');
        return;
    }
    
    alert(`Sign up successful!\nName: ${name}\nEmail: ${email}`);
    signupForm.reset();
    showLogin();
});

console.log('Login & Sign Up page loaded successfully!');