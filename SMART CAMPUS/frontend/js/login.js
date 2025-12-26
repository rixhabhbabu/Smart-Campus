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

    // Check if student is CR (internal flag)
    // In a real app, this would come from the backend
    let isCR = false;
    
    // Dummy CR check: if credential matches specific pattern
    // For demo: "cr@college.edu" or "9876543210" is marked as CR
    if ((role === "Student") && (emailOrMobile === "cr@college.edu" || emailOrMobile === "9876543210")) {
        isCR = true;
        localStorage.setItem("sc_isCR", "true");
    } else {
        localStorage.setItem("sc_isCR", "false");
    }

    // Redirect according to role
    if (role === "Admin") location.href = "admin/admin.html";
    else if (role === "Teacher") location.href = "teacher/teacher.html";
    else if (role === "HOD") location.href = "hod/hod.html";
    else location.href = "student/student.html"; // Both Student and CR go to student.html
};
