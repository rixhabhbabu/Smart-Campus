// ============================================
// PROXY ATTENDANCE & ISSUES FORM LOGIC
// ============================================

// Load stored data from localStorage
let proxyRequests = JSON.parse(localStorage.getItem("proxyRequests")) || [];
let raisedIssues = JSON.parse(localStorage.getItem("raisedIssues")) || [];

// PAGE INITIALIZATION
document.addEventListener("DOMContentLoaded", function() {
    handleProxyForm();
    handleIssueForm();
});

// ============================================
// PROXY ATTENDANCE FORM
// ============================================
function handleProxyForm() {
    const proxyForm = document.getElementById("proxyRequestForm");
    const successMessage = document.getElementById("successMessage");

    if (!proxyForm) return; // Not on proxy page

    proxyForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get form values
        const subject = document.getElementById("subject").value;
        const date = document.getElementById("proxyDate").value;
        const period = document.getElementById("period").value;
        const reason = document.getElementById("reason").value;
        const proof = document.getElementById("proof").files[0];

        // Validate
        if (!subject || !date || !period || !reason) {
            alert("❌ Please fill all required fields!");
            return;
        }

        // Create proxy request object
        const newRequest = {
            id: "PRX" + Date.now(),
            subject: subject,
            date: date,
            period: period,
            reason: reason,
            proof: proof ? proof.name : "No file",
            status: "Pending at CR",
            submittedDate: new Date().toISOString().split('T')[0]
        };

        // Save to localStorage
        proxyRequests.push(newRequest);
        localStorage.setItem("proxyRequests", JSON.stringify(proxyRequests));

        // Show success message
        proxyForm.style.display = "none";
        successMessage.style.display = "block";

        // Log for debugging
        console.log("✅ Proxy Request Submitted:", newRequest);
        console.log("📋 All Requests:", proxyRequests);

        // Reset and redirect after 2 seconds
        setTimeout(function() {
            proxyForm.reset();
            proxyForm.style.display = "block";
            successMessage.style.display = "none";
            window.location.href = "student.html";
        }, 2000);
    });
}

// ============================================
// ISSUE FORM
// ============================================
function handleIssueForm() {
    const issueForm = document.getElementById("issueForm");
    const issueSuccessMessage = document.getElementById("issueSuccessMessage");

    if (!issueForm) return; // Not on issue page

    issueForm.addEventListener("submit", function(e) {
        e.preventDefault();

        // Get form values
        const category = document.getElementById("category").value;
        const title = document.getElementById("title").value;
        const description = document.getElementById("description").value;
        const priority = document.getElementById("priority").value;
        const proof = document.getElementById("issueProof").files[0];

        // Validate
        if (!category || !title || !description) {
            alert("❌ Please fill all required fields!");
            return;
        }

        // Generate ticket ID
        const ticketId = "TKT" + Date.now();

        // Create issue object
        const newIssue = {
            id: ticketId,
            title: title,
            category: category,
            description: description,
            priority: priority,
            proof: proof ? proof.name : "No file",
            status: "Pending",
            submittedDate: new Date().toISOString().split('T')[0]
        };

        // Save to localStorage
        raisedIssues.push(newIssue);
        localStorage.setItem("raisedIssues", JSON.stringify(raisedIssues));

        // Show success message with ticket ID
        document.getElementById("ticketId").textContent = ticketId;
        issueForm.style.display = "none";
        issueSuccessMessage.style.display = "block";

        // Log for debugging
        console.log("✅ Issue Submitted:", newIssue);
        console.log("📋 All Issues:", raisedIssues);

        // Reset and redirect after 2 seconds
        setTimeout(function() {
            issueForm.reset();
            issueForm.style.display = "block";
            issueSuccessMessage.style.display = "none";
            window.location.href = "student.html";
        }, 2000);
    });
}

// ============================================
// UTILITY: Set minimum date to today
// ============================================
document.addEventListener("DOMContentLoaded", function() {
    const dateInput = document.getElementById("proxyDate");
    if (dateInput) {
        const today = new Date().toISOString().split('T')[0];
        dateInput.min = today;
    }
});
