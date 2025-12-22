// ============================================
// STUDENT DASHBOARD DUMMY DATA & LOGIC
// ============================================

// Dummy Student Object
const dummyStudent = {
    id: "STU001",
    name: "Akhil Sharma",
    email: "akhil.sharma@college.edu",
    mobile: "9876543210",
    role: "cr", // Change to "student" to hide CR panel. Values: "student" or "cr"
    semester: 5,
    division: "3A",
    totalSubjects: 7,
    attendance: 85,
    rollNumber: "103054"
};

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

// Dummy Timetable Data
const dummyTimetable = [
    { day: "Monday", time: "9:00 AM - 10:30 AM", subject: "Data Structures", teacher: "Dr. Rajesh Kumar" },
    { day: "Monday", time: "10:45 AM - 12:15 PM", subject: "Database Management", teacher: "Prof. Priya Singh" },
    { day: "Tuesday", time: "9:00 AM - 10:30 AM", subject: "Web Development", teacher: "Mr. Amit Patel" },
    { day: "Tuesday", time: "10:45 AM - 12:15 PM", subject: "Python Programming", teacher: "Dr. Neha Gupta" },
    { day: "Wednesday", time: "9:00 AM - 10:30 AM", subject: "Operating Systems", teacher: "Prof. Arvind Sharma" },
    { day: "Wednesday", time: "2:00 PM - 3:30 PM", subject: "Discrete Mathematics", teacher: "Dr. Mohan Verma" },
    { day: "Thursday", time: "9:00 AM - 10:30 AM", subject: "Software Engineering", teacher: "Ms. Anjali Desai" },
    { day: "Friday", time: "10:45 AM - 12:15 PM", subject: "Lab Session", teacher: "Mr. Vikram Singh" }
];

// Dummy Subjects & Notes
const dummySubjects = [
    { 
        name: "Data Structures", 
        credits: 4, 
        notes: ["Array & Linked Lists", "Trees & Graphs", "Sorting Algorithms"], 
        materials: "5 files available"
    },
    { 
        name: "Database Management", 
        credits: 4, 
        notes: ["Relational Model", "SQL Queries", "Normalization"], 
        materials: "8 files available"
    },
    { 
        name: "Web Development", 
        credits: 3, 
        notes: ["HTML/CSS Basics", "JavaScript DOM", "Responsive Design"], 
        materials: "12 files available"
    },
    { 
        name: "Python Programming", 
        credits: 4, 
        notes: ["Syntax & Variables", "Functions", "OOP Concepts"], 
        materials: "10 files available"
    },
    { 
        name: "Operating Systems", 
        credits: 4, 
        notes: ["Process Management", "Memory Management", "File Systems"], 
        materials: "7 files available"
    },
    { 
        name: "Discrete Mathematics", 
        credits: 3, 
        notes: ["Set Theory", "Logic", "Combinatorics"], 
        materials: "6 files available"
    },
    { 
        name: "Software Engineering", 
        credits: 3, 
        notes: ["SDLC", "Design Patterns", "Testing"], 
        materials: "9 files available"
    }
];

// Dummy Issues Data (Stored in localStorage)
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

// Dummy Proxy Requests Data (Stored in localStorage)
let dummyProxyRequests = [
    { 
        id: "PRX001", 
        subject: "Data Structures", 
        date: "2024-12-05", 
        period: "Lecture 1", 
        reason: "Was sick that day",
        status: "Pending at CR", 
        submittedDate: "2024-12-06"
    },
    { 
        id: "PRX002", 
        subject: "Web Development", 
        date: "2024-11-28", 
        period: "Lecture 2", 
        reason: "Family emergency",
        status: "Approved", 
        submittedDate: "2024-11-29"
    },
    { 
        id: "PRX003", 
        subject: "Python Programming", 
        date: "2024-11-20", 
        period: "Lecture 3", 
        reason: "Medical appointment",
        status: "Rejected", 
        submittedDate: "2024-11-21"
    }
];

// Dummy Proxy Requests from Students (For CR Only)
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
    loadProxyRequests();
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
    if (dummyStudent.role === "cr") {
        roleBadge.textContent = "👑 Class Representative";
        roleBadge.style.backgroundColor = "#ffc107";
    }
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // View Attendance
    document.getElementById("viewAttendanceBtn").addEventListener("click", showAttendanceModal);
    
    // View Timetable
    document.getElementById("viewTimetableBtn").addEventListener("click", showTimetableModal);
    
    // View Subjects
    document.getElementById("viewSubjectsBtn").addEventListener("click", showSubjectsModal);
    
    // Logout
    document.getElementById("logoutBtn").addEventListener("click", function() {
        alert("Logged out successfully!");
        window.location.href = "login.html";
    });

    // Modal close button
    const closeModalBtn = document.querySelector(".close-modal");
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeModal);
    }

    // CR Announcement Form
    if (dummyStudent.role === "cr") {
        const announcementForm = document.getElementById("announcementForm");
        if (announcementForm) {
            announcementForm.addEventListener("submit", function(e) {
                e.preventDefault();
                const announcementText = document.getElementById("announcementText").value;
                alert("✅ Announcement sent to all students in 3A division!\n\nMessage: " + announcementText);
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
// LOAD PROXY REQUESTS
// ============================================
function loadProxyRequests() {
    const proxyContainer = document.getElementById("proxyRequestsContainer");
    proxyContainer.innerHTML = "";

    if (dummyProxyRequests.length === 0) {
        proxyContainer.innerHTML = '<p style="text-align: center; color: #666;">No proxy requests submitted yet.</p>';
        return;
    }

    dummyProxyRequests.forEach(request => {
        const proxyCard = document.createElement("div");
        proxyCard.className = "proxy-card";
        proxyCard.innerHTML = `
            <div class="proxy-header">
                <h4>${request.subject}</h4>
                <span class="status-badge status-${request.status.toLowerCase().replace(/\s+/g, '-')}">${request.status}</span>
            </div>
            <p><strong>Date:</strong> ${request.date}</p>
            <p><strong>Period:</strong> ${request.period}</p>
            <p><strong>Reason:</strong> ${request.reason}</p>
            <p><small>Submitted: ${request.submittedDate}</small></p>
        `;
        proxyContainer.appendChild(proxyCard);
    });
}

// ============================================
// LOAD CR PROXY REQUESTS (For CR Panel)
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
    if (dummyStudent.role === "cr") {
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

function showTimetableModal() {
    const modal = document.getElementById("detailModal");
    const modalBody = document.getElementById("modalBody");
    
    let tableHTML = '<h2>📅 Class Timetable</h2><table class="detail-table"><thead><tr><th>Day</th><th>Time</th><th>Subject</th><th>Teacher</th></tr></thead><tbody>';
    
    dummyTimetable.forEach(slot => {
        tableHTML += `<tr>
            <td>${slot.day}</td>
            <td>${slot.time}</td>
            <td>${slot.subject}</td>
            <td>${slot.teacher}</td>
        </tr>`;
    });
    
    tableHTML += '</tbody></table>';
    modalBody.innerHTML = tableHTML;
    modal.style.display = "block";
}

function showSubjectsModal() {
    const modal = document.getElementById("detailModal");
    const modalBody = document.getElementById("modalBody");
    
    let htmlContent = '<h2>📖 Subjects & Study Materials</h2>';
    
    dummySubjects.forEach(subject => {
        htmlContent += `
            <div class="subject-card">
                <h3>${subject.name} (Credits: ${subject.credits})</h3>
                <p><strong>Topics:</strong> ${subject.notes.join(", ")}</p>
                <p><strong>Materials:</strong> ${subject.materials}</p>
            </div>
        `;
    });
    
    modalBody.innerHTML = htmlContent;
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
