// ROLE CHANGE → UPDATE TITLE
document.getElementById("roleSelect").addEventListener("change", function () {
    document.getElementById("loginTitle").innerText = this.value + " Login";
});

// SHOW/HIDE PASSWORD CHECKBOX
const showPasswordCheckbox = document.getElementById("showPasswordCheckbox");
const passwordField = document.getElementById("password");

showPasswordCheckbox.addEventListener("change", function () {
    if (this.checked) {
        passwordField.type = "text";
    } else {
        passwordField.type = "password";
    }
});

// FORGOT PASSWORD LINK - Redirect to forgot password page
document.getElementById("forgotPwdLink").addEventListener("click", function (e) {
    e.preventDefault();
    window.location.href = "forgot-password.html";
});

// LOGIN BUTTON
document.getElementById("loginBtn").onclick = function () {
    const emailOrMobile = document.getElementById("emailOrMobile").value;
    const password = document.getElementById("password").value;
    const role = document.getElementById("roleSelect").value;

    // Validate email or mobile number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    
    if (!emailRegex.test(emailOrMobile) && !mobileRegex.test(emailOrMobile)) {
        alert("Please enter a valid email or 10-digit mobile number");
        return;
    }

    if (password === "") {
        alert("Please enter your password");
        return;
    }

    // Save role
    localStorage.setItem("sc_role", role);
    localStorage.setItem("sc_credential", emailOrMobile);

    // Redirect according to role
    if (role === "Admin") location.href = "admin-dashboard.html";
    else if (role === "Teacher") location.href = "teacher-dashboard.html";
    else if (role === "HOD") location.href = "hod-dashboard.html";
    else if (role === "CR") location.href = "cr-dashboard.html";
    else location.href = "student-dashboard.html";
};
