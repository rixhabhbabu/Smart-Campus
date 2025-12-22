// ============================================
// STUDENT DASHBOARD DUMMY DATA & LOGIC
// ============================================

// IMPORTANT NOTE: This is a MINOR PROJECT version
// Advanced features like timetable, subjects, and notifications
// are reserved for the MAJOR PROJECT

// Dummy Student Object
const dummyStudent = {
    id: "STU001",
    name: "Akhil Sharma",
    email: "akhil.sharma@college.edu",
    mobile: "9876543210",
    semester: 5,
    division: "3A",
    totalSubjects: 7,
    attendance: 85,
    rollNumber: "103054"
};

// CR Flag - Check from localStorage
// CR status is set during login based on user credentials
let isCR = localStorage.getItem("sc_isCR") === "true" ? true : false;

// Dummy Attendance Data
const dummyAttendance = [
    { subject: "Data Structures", attended: 28, total: 32, percentage: 87.5 },
    { subject: "Database Management", attended: 25, total: 30, percentage: 83.3 },
    { subject: "Web Development", attended: 30, total: 32, percentage: 93.7 },
    { subject: "Python Programming", attended: 29, total: 31, percentage: 93.5 },
    { subject: "Operating Systems", attended: 26, total: 32, percentage: 81.2 },
    { subject: "Discrete Mathematics", attended: 24, total: 28, percentage: 85.7 },
    { subject: "Software Engineering", attended: 27, total: 30, percentage: 90.0 }
];

// Dummy Issues Data (Stored in localStorage)
// Core feature for minor project
let dummyIssues = [
    { 
        id: "ISS001", 
        title: "Lab Sessions Timing Issue", 
        category: "Academic", 
        description: "Lab sessions are conflicting with other classes", 
        status: "Pending", 
        date: "2024-12-10",
        priority: "High"
    },
    { 
        id: "ISS002", 
        title: "Wi-Fi Connection Problem", 
        category: "Infrastructure", 
        description: "Wi-Fi not working in library building", 
        status: "In Progress", 
        date: "2024-12-08",
        priority: "Medium"
    },
    { 
        id: "ISS003", 
        title: "Attendance Record Mismatch", 
        category: "Attendance", 
        description: "My attendance record shows incorrect data for Oct-Nov", 
        status: "Resolved", 
        date: "2024-11-25",
        priority: "Medium"
    }
];

// Dummy Proxy Requests from Students (For CR Only - when isCR = true)
const dummyStudentProxyRequests = [
    { 
        id: "SPRX001", 
        studentName: "Rahul Verma", 
        studentRoll: "103045",
        subject: "Data Structures", 
        date: "2024-12-12", 
        period: "Lecture 2", 
        reason: "Had to attend family function",
        status: "Pending CR Review"
    },
    { 
        id: "SPRX002", 
        studentName: "Priya Sharma", 
        studentRoll: "103052",
        subject: "Web Development", 
        date: "2024-12-10", 
        period: "Lecture 1", 
        reason: "Doctor appointment",
        status: "Pending CR Review"
    }
];

// PAGE INITIALIZATION
document.addEventListener("DOMContentLoaded", function() {
    loadStudentDashboard();
    setupEventListeners();
    loadIssues();
    checkRoleAndShowCRPanel();
});

// ============================================
// LOAD STUDENT DASHBOARD
// ============================================
function loadStudentDashboard() {
    document.getElementById("studentName").textContent = dummyStudent.name;
    document.getElementById("attendancePercentage").textContent = dummyStudent.attendance + "%";
    
    // Update role badge
    const roleBadge = document.getElementById("roleBadge");
    if (isCR) {
        roleBadge.textContent = "👑 Class Representative";
        roleBadge.style.backgroundColor = "#ffc107";
        roleBadge.style.color = "#000";
    }
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // View Attendance
    document.getElementById("viewAttendanceBtn").addEventListener("click", showAttendanceModal);
    
    // Logout
    document.getElementById("logoutBtn").addEventListener("click", function() {
        // Clear session data
        localStorage.removeItem("sc_role");
        localStorage.removeItem("sc_credential");
        localStorage.removeItem("sc_isCR");
        alert("✅ Logged out successfully!");
        window.location.href = "login.html";
    });

    // Modal close button
    const closeModalBtn = document.querySelector(".close-modal");
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeModal);
    }

    // CR Announcement Form (only if user is CR)
    if (isCR) {
        const announcementForm = document.getElementById("announcementForm");
        if (announcementForm) {
            announcementForm.addEventListener("submit", function(e) {
                e.preventDefault();
                const announcementText = document.getElementById("announcementText").value;
                alert("✅ Announcement sent to all students in " + dummyStudent.division + " division!\n\nMessage: " + announcementText);
                announcementForm.reset();
            });
        }
    }
}

// ============================================
// LOAD ISSUES
// ============================================
function loadIssues() {
    const issuesContainer = document.getElementById("issuesContainer");
    issuesContainer.innerHTML = "";

    if (dummyIssues.length === 0) {
        issuesContainer.innerHTML = '<p style="text-align: center; color: #666;">No issues raised yet.</p>';
        return;
    }

    dummyIssues.forEach(issue => {
        const issueCard = document.createElement("div");
        issueCard.className = "issue-card";
        issueCard.innerHTML = `
            <div class="issue-header">
                <h4>${issue.title}</h4>
                <span class="status-badge status-${issue.status.toLowerCase().replace(' ', '-')}">${issue.status}</span>
            </div>
            <p><strong>Category:</strong> ${issue.category}</p>
            <p><strong>Priority:</strong> ${issue.priority}</p>
            <p><strong>Description:</strong> ${issue.description}</p>
            <p><small>Submitted: ${issue.date}</small></p>
        `;
        issuesContainer.appendChild(issueCard);
    });
}

// ============================================
// LOAD CR PROXY REQUESTS (For CR Panel Only)
// ============================================
function loadCRProxyRequests() {
    const crProxyContainer = document.getElementById("crProxyRequestsContainer");
    crProxyContainer.innerHTML = "";

    dummyStudentProxyRequests.forEach(request => {
        const requestCard = document.createElement("div");
        requestCard.className = "cr-request-card";
        requestCard.innerHTML = `
            <div class="request-header">
                <h4>${request.studentName} (${request.studentRoll})</h4>
                <span class="status-badge status-pending">${request.status}</span>
            </div>
            <p><strong>Subject:</strong> ${request.subject}</p>
            <p><strong>Date:</strong> ${request.date} | <strong>Period:</strong> ${request.period}</p>
            <p><strong>Reason:</strong> ${request.reason}</p>
            <div class="cr-actions">
                <button class="btn btn-small btn-success" onclick="forwardToTeacher('${request.id}')">Forward to Teacher</button>
                <button class="btn btn-small btn-danger" onclick="rejectProxy('${request.id}')">Reject</button>
            </div>
        `;
        crProxyContainer.appendChild(requestCard);
    });
}

// ============================================
// CR PANEL FUNCTIONS
// ============================================
function checkRoleAndShowCRPanel() {
    const crPanel = document.getElementById("crPanel");
    if (isCR) {
        crPanel.style.display = "block";
        loadCRProxyRequests();
    }
}

function forwardToTeacher(requestId) {
    alert("✅ Proxy request #" + requestId + " forwarded to teacher for approval!");
}

function rejectProxy(requestId) {
    const reason = prompt("Enter reason for rejection:");
    if (reason) {
        alert("❌ Proxy request #" + requestId + " has been rejected.\n\nReason: " + reason);
    }
}

// ============================================
// MODAL FUNCTIONS
// ============================================
function showAttendanceModal() {
    const modal = document.getElementById("detailModal");
    const modalBody = document.getElementById("modalBody");
    
    let tableHTML = '<h2>📊 Attendance Summary</h2><table class="detail-table"><thead><tr><th>Subject</th><th>Attended</th><th>Total</th><th>Percentage</th></tr></thead><tbody>';
    
    dummyAttendance.forEach(att => {
        tableHTML += `<tr>
            <td>${att.subject}</td>
            <td>${att.attended}</td>
            <td>${att.total}</td>
            <td>${att.percentage.toFixed(1)}%</td>
        </tr>`;
    });
    
    tableHTML += '</tbody></table>';
    modalBody.innerHTML = tableHTML;
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("detailModal").style.display = "none";
}

// Close modal when clicking outside
window.addEventListener("click", function(event) {
    const modal = document.getElementById("detailModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});
