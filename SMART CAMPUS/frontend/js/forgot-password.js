// DOM Elements
const emailOrMobileInput = document.getElementById("emailOrMobile");
const sendOtpBtn = document.getElementById("sendOtpBtn");
const otpSection = document.getElementById("otpSection");
const otpInput = document.getElementById("otp");
const newPasswordInput = document.getElementById("newPassword");
const confirmPasswordInput = document.getElementById("confirmPassword");
const resetPasswordBtn = document.getElementById("resetPasswordBtn");
const messageEl = document.getElementById("message");
const showNewPasswordCheckbox = document.getElementById("showNewPassword");
const showConfirmPasswordCheckbox = document.getElementById("showConfirmPassword");

// Show/Hide Password Checkboxes
showNewPasswordCheckbox.addEventListener("change", function () {
    if (this.checked) {
        newPasswordInput.type = "text";
    } else {
        newPasswordInput.type = "password";
    }
});

showConfirmPasswordCheckbox.addEventListener("change", function () {
    if (this.checked) {
        confirmPasswordInput.type = "text";
    } else {
        confirmPasswordInput.type = "password";
    }
});

// Send OTP
sendOtpBtn.addEventListener("click", function () {
    const emailOrMobile = emailOrMobileInput.value.trim();
    
    // Validate email or mobile number
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const mobileRegex = /^[0-9]{10}$/;
    
    if (emailOrMobile === "") {
        showMessage("Please enter your email or mobile number", "error");
        return;
    }
    
    if (!emailRegex.test(emailOrMobile) && !mobileRegex.test(emailOrMobile)) {
        showMessage("Please enter a valid email or 10-digit mobile number", "error");
        return;
    }
    
    // Simulate OTP sending (replace with actual backend call)
    showMessage("OTP sent to " + emailOrMobile, "success");
    
    // Show OTP section after a short delay
    setTimeout(function () {
        otpSection.classList.remove("hidden");
        emailOrMobileInput.disabled = true;
        sendOtpBtn.disabled = true;
        messageEl.innerHTML = "";
    }, 1500);
});

// Reset Password
resetPasswordBtn.addEventListener("click", function () {
    const otp = otpInput.value.trim();
    const newPassword = newPasswordInput.value.trim();
    const confirmPassword = confirmPasswordInput.value.trim();
    
    // Validate inputs
    if (otp === "") {
        showMessage("Please enter the OTP", "error");
        return;
    }
    
    if (otp.length !== 6) {
        showMessage("OTP must be 6 digits", "error");
        return;
    }
    
    if (newPassword === "") {
        showMessage("Please enter new password", "error");
        return;
    }
    
    if (newPassword.length < 6) {
        showMessage("Password must be at least 6 characters", "error");
        return;
    }
    
    if (confirmPassword === "") {
        showMessage("Please confirm your password", "error");
        return;
    }
    
    if (newPassword !== confirmPassword) {
        showMessage("Passwords do not match", "error");
        return;
    }
    
    // Simulate password reset (replace with actual backend call)
    showMessage("Password reset successfully!", "success");
    
    // Redirect to login after success
    setTimeout(function () {
        window.location.href = "index.html";
    }, 2000);
});

// Helper function to show messages
function showMessage(text, type) {
    messageEl.innerHTML = text;
    messageEl.classList.remove("error", "success");
    messageEl.classList.add(type);
}

// OTP only accepts numbers
otpInput.addEventListener("input", function () {
    this.value = this.value.replace(/[^0-9]/g, "").slice(0, 6);
});
