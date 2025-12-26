// ============================================
// ADMIN DASHBOARD - JAVASCRIPT
// ============================================

// Dummy Admin Data
const dummyAdmin = {
    id: "ADM001",
    name: "Dr. Vikram Singh",
    email: "admin@college.ac.in",
    role: "System Administrator",
    department: "Administration"
};

// Dummy All Students
const dummyAllStudents = [
    { id: "STU001", name: "Akhil Sharma", email: "akhil@student.ac.in", roll: "001", division: "3A", role: "Student" },
    { id: "STU002", name: "Priya Singh", email: "priya@student.ac.in", roll: "002", division: "3A", role: "Student" },
    { id: "STU003", name: "Rohit Patel", email: "rohit@student.ac.in", roll: "003", division: "3A", role: "Student" },
    { id: "STU004", name: "Neha Gupta", email: "neha@student.ac.in", roll: "004", division: "3A", role: "Student" },
    { id: "STU005", name: "Arjun Verma", email: "arjun@student.ac.in", roll: "005", division: "3A", role: "Student" },
    { id: "STU006", name: "Ananya Joshi", email: "ananya@student.ac.in", roll: "006", division: "3A", role: "Student" },
    { id: "STU007", name: "Vivek Kumar", email: "vivek@student.ac.in", roll: "007", division: "3B", role: "Student" },
    { id: "STU008", name: "Sakshi Nair", email: "sakshi@student.ac.in", roll: "008", division: "3B", role: "Student" },
    { id: "STU009", name: "Rahul Desai", email: "rahul@student.ac.in", roll: "009", division: "3B", role: "Student" },
    { id: "STU010", name: "Kavya Menon", email: "kavya@student.ac.in", roll: "010", division: "3B", role: "Student" },
];

// Dummy All Teachers
const dummyAllTeachers = [
    { id: "TCH001", name: "Dr. Rajesh Kumar", email: "rajesh.kumar@college.ac.in", department: "CS", role: "Teacher" },
    { id: "TCH002", name: "Prof. Meera Sharma", email: "meera@college.ac.in", department: "CS", role: "Teacher" },
    { id: "TCH003", name: "Dr. Anil Verma", email: "anil@college.ac.in", department: "IT", role: "Teacher" },
    { id: "TCH004", name: "Prof. Geeta Singh", email: "geeta@college.ac.in", department: "IT", role: "Teacher" },
    { id: "TCH005", name: "Dr. Suresh Patel", email: "suresh@college.ac.in", department: "ECE", role: "Teacher" },
];

// Dummy All CRs (Class Representatives)
const dummyAllCRs = [
    { id: "CR001", name: "Akhil Sharma", email: "akhil@student.ac.in", division: "3A", role: "CR" },
    { id: "CR002", name: "Vivek Kumar", email: "vivek@student.ac.in", division: "3B", role: "CR" },
];

// Dummy Global Proxy Requests
const dummyGlobalProxyRequests = [
    {
        id: "GPRX001",
        studentName: "Akhil Sharma",
        studentRoll: "001",
        division: "3A",
        subject: "Data Structures",
        date: "2024-12-15",
        reason: "Medical emergency",
        crStatus: "Approved by CR",
        teacherStatus: "Pending Approval",
        status: "Pending Teacher"
    },
    {
        id: "GPRX002",
        studentName: "Priya Singh",
        studentRoll: "002",
        division: "3A",
        subject: "Database Management",
        date: "2024-12-14",
        reason: "Family event",
        crStatus: "Approved by CR",
        teacherStatus: "Pending Approval",
        status: "Pending Teacher"
    },
    {
        id: "GPRX003",
        studentName: "Vivek Kumar",
        studentRoll: "007",
        division: "3B",
        subject: "Web Development",
        date: "2024-12-13",
        reason: "Technical issue",
        crStatus: "Rejected by CR",
        teacherStatus: "N/A",
        status: "Rejected by CR"
    },
    {
        id: "GPRX004",
        studentName: "Rohit Patel",
        studentRoll: "003",
        division: "3A",
        subject: "Data Structures",
        date: "2024-12-12",
        reason: "Medical",
        crStatus: "Approved by CR",
        teacherStatus: "Approved",
        status: "Approved"
    },
];

// Dummy Global Issues
const dummyGlobalIssues = [
    {
        id: "GISS001",
        studentName: "Akhil Sharma",
        division: "3A",
        title: "Lab Sessions Timing Issue",
        category: "Academic",
        priority: "High",
        date: "2024-12-10",
        status: "Pending"
    },
    {
        id: "GISS002",
        studentName: "Priya Singh",
        division: "3A",
        title: "Course Material Not Available",
        category: "Academic",
        priority: "Medium",
        date: "2024-12-09",
        status: "Pending"
    },
    {
        id: "GISS003",
        studentName: "Vivek Kumar",
        division: "3B",
        title: "Lab Equipment Issue",
        category: "Infrastructure",
        priority: "High",
        date: "2024-12-08",
        status: "In Progress"
    },
    {
        id: "GISS004",
        studentName: "Sakshi Nair",
        division: "3B",
        title: "Classroom Temperature Issue",
        category: "Infrastructure",
        priority: "Low",
        date: "2024-12-07",
        status: "Resolved"
    },
    {
        id: "GISS005",
        studentName: "Neha Gupta",
        division: "3A",
        title: "Assignment Deadline Conflict",
        category: "Academic",
        priority: "Medium",
        date: "2024-12-06",
        status: "In Progress"
    },
];

// Initialize Admin Dashboard
document.addEventListener("DOMContentLoaded", function() {
    loadAdminInfo();
    loadDashboard();
    setupSidebarNavigation();
    setupEventListeners();
});

// ============================================
// LOAD ADMIN INFORMATION
// ============================================
function loadAdminInfo() {
    document.getElementById("adminName").textContent = dummyAdmin.name;
    document.getElementById("lastUpdateTime").textContent = new Date().toLocaleString();
}

// ============================================
// LOAD DASHBOARD
// ============================================
function loadDashboard() {
    const totalUsers = dummyAllStudents.length + dummyAllTeachers.length + dummyAllCRs.length + 1; // +1 for admin
    const totalStudents = dummyAllStudents.length;
    const totalTeachers = dummyAllTeachers.length;
    const pendingTasks = dummyGlobalProxyRequests.filter(p => p.status.includes("Pending")).length +
                         dummyGlobalIssues.filter(i => i.status === "Pending").length;

    document.getElementById("totalUsers").textContent = totalUsers;
    document.getElementById("userBreakdown").textContent = `${totalStudents} Students, ${totalTeachers} Teachers, ${dummyAllCRs.length} CRs`;
    document.getElementById("totalStudents").textContent = totalStudents;
    document.getElementById("studentDetails").textContent = "Across 2 divisions";
    document.getElementById("totalTeachers").textContent = totalTeachers;
    document.getElementById("teacherDetails").textContent = `${new Set(dummyAllTeachers.map(t => t.department)).size} departments`;
    document.getElementById("pendingTasks").textContent = pendingTasks;
    document.getElementById("tasksBreakdown").textContent = `${dummyGlobalProxyRequests.filter(p => p.status.includes("Pending")).length} proxies, ${dummyGlobalIssues.filter(i => i.status === "Pending").length} issues`;
}

// ============================================
// SIDEBAR NAVIGATION
// ============================================
function setupSidebarNavigation() {
    const menuItems = document.querySelectorAll(".menu-item");
    const sections = document.querySelectorAll(".section");

    menuItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();

            // Remove active class from all items and sections
            menuItems.forEach(m => m.classList.remove("active"));
            sections.forEach(s => s.classList.remove("active"));

            // Add active class to clicked item
            this.classList.add("active");

            // Show corresponding section
            const sectionId = this.getAttribute("data-section");
            const section = document.getElementById(sectionId);
            if (section) {
                section.classList.add("active");

                // Load content based on section
                if (sectionId === "users") loadUsers();
                if (sectionId === "proxy") loadGlobalProxyRequests();
                if (sectionId === "issues") loadGlobalIssues();
            }
        });
    });
}

// ============================================
// LOAD USERS
// ============================================
function loadUsers() {
    const list = document.getElementById("usersList");
    list.innerHTML = "";

    const allUsers = [
        ...dummyAllStudents,
        ...dummyAllTeachers,
        ...dummyAllCRs,
        { id: "ADM001", name: dummyAdmin.name, email: dummyAdmin.email, department: dummyAdmin.department, role: "Admin" }
    ];

    allUsers.forEach(user => {
        const card = document.createElement("div");
        card.className = "user-card";
        card.innerHTML = `
            <div class="user-info">
                <h4>${user.name}</h4>
                <p><strong>ID:</strong> ${user.id}</p>
                <p><strong>Email:</strong> ${user.email}</p>
                ${user.department ? `<p><strong>Department:</strong> ${user.department}</p>` : ''}
                ${user.division ? `<p><strong>Division:</strong> ${user.division}</p>` : ''}
                ${user.roll ? `<p><strong>Roll:</strong> ${user.roll}</p>` : ''}
            </div>
            <span class="user-role">${user.role}</span>
        `;
        list.appendChild(card);
    });
}

// ============================================
// LOAD GLOBAL PROXY REQUESTS
// ============================================
function loadGlobalProxyRequests() {
    const list = document.getElementById("globalProxyList");
    list.innerHTML = "";
    const statusFilter = document.getElementById("proxyStatusFilter").value;

    let filteredProxies = dummyGlobalProxyRequests;
    if (statusFilter) {
        filteredProxies = dummyGlobalProxyRequests.filter(p => p.status.includes(statusFilter));
    }

    if (filteredProxies.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #666;">No proxy requests found.</p>';
        return;
    }

    filteredProxies.forEach(proxy => {
        const card = document.createElement("div");
        card.className = "proxy-card";

        let statusColor = "#666";
        if (proxy.status.includes("Pending")) statusColor = "#dc3545";
        if (proxy.status === "Approved") statusColor = "#28a745";
        if (proxy.status === "Rejected") statusColor = "#6c757d";

        card.innerHTML = `
            <h4>${proxy.studentName} (${proxy.studentRoll}) - ${proxy.division}</h4>
            <p><strong>Subject:</strong> ${proxy.subject}</p>
            <p><strong>Date:</strong> ${proxy.date}</p>
            <p><strong>Reason:</strong> ${proxy.reason}</p>
            <p><strong>CR Status:</strong> <span style="color: #ffc107;">${proxy.crStatus}</span></p>
            <p><strong>Teacher Status:</strong> <span style="color: ${proxy.teacherStatus === 'Pending Approval' ? '#dc3545' : '#28a745'};">${proxy.teacherStatus}</span></p>
            <span class="proxy-status" style="background: ${statusColor}; color: white;">
                ${proxy.status}
            </span>
        `;
        list.appendChild(card);
    });
}

// ============================================
// LOAD GLOBAL ISSUES
// ============================================
function loadGlobalIssues() {
    const list = document.getElementById("globalIssuesList");
    list.innerHTML = "";
    const priorityFilter = document.getElementById("issuePriorityFilter").value;
    const statusFilter = document.getElementById("issueStatusFilter").value;

    let filteredIssues = dummyGlobalIssues;
    if (priorityFilter) {
        filteredIssues = filteredIssues.filter(i => i.priority === priorityFilter);
    }
    if (statusFilter) {
        filteredIssues = filteredIssues.filter(i => i.status === statusFilter);
    }

    if (filteredIssues.length === 0) {
        list.innerHTML = '<p style="text-align: center; color: #666;">No issues found.</p>';
        return;
    }

    filteredIssues.forEach(issue => {
        const card = document.createElement("div");
        card.className = "issue-card";

        let priorityColor = "#666";
        if (issue.priority === "High") priorityColor = "#dc3545";
        if (issue.priority === "Medium") priorityColor = "#ffc107";
        if (issue.priority === "Low") priorityColor = "#28a745";

        let statusColor = "#666";
        if (issue.status === "Pending") statusColor = "#dc3545";
        if (issue.status === "In Progress") statusColor = "#ffc107";
        if (issue.status === "Resolved") statusColor = "#28a745";

        card.innerHTML = `
            <h4>${issue.title}</h4>
            <p><strong>Student:</strong> ${issue.studentName}</p>
            <p><strong>Division:</strong> ${issue.division}</p>
            <p><strong>Category:</strong> ${issue.category}</p>
            <p><strong>Priority:</strong> <span style="color: ${priorityColor}; font-weight: bold;">${issue.priority}</span></p>
            <p><strong>Date:</strong> ${issue.date}</p>
            <p><strong>Status:</strong> <span style="color: ${statusColor}; font-weight: bold;">${issue.status}</span></p>
        `;
        list.appendChild(card);
    });
}

// ============================================
// FILTER EVENTS
// ============================================
function setupEventListeners() {
    // Theme toggle
    const themeBtn = document.getElementById("themeToggle");
    if (themeBtn) {
        themeBtn.addEventListener("click", function() {
            if (typeof window.toggleTheme === "function") {
                window.toggleTheme();
            } else {
                document.body.classList.toggle("dark-mode");
                localStorage.setItem("theme", document.body.classList.contains("dark-mode") ? "dark" : "light");
            }
        });
    }

    // Logout button
    document.getElementById("logoutBtn").addEventListener("click", function() {
        alert("Logged out successfully!");
        window.location.href = "../login.html";
    });

    // Proxy status filter
    document.getElementById("proxyStatusFilter").addEventListener("change", function() {
        loadGlobalProxyRequests();
    });

    // Proxy refresh
    document.getElementById("proxyRefreshBtn").addEventListener("click", function() {
        loadGlobalProxyRequests();
        alert("Proxy requests refreshed!");
    });

    // Issue filters
    document.getElementById("issuePriorityFilter").addEventListener("change", function() {
        loadGlobalIssues();
    });
    document.getElementById("issueStatusFilter").addEventListener("change", function() {
        loadGlobalIssues();
    });

    // Issue refresh
    document.getElementById("issueRefreshBtn").addEventListener("click", function() {
        loadGlobalIssues();
        alert("Issues refreshed!");
    });

    // User search
    document.getElementById("userFilterBtn").addEventListener("click", function() {
        const searchTerm = document.getElementById("userSearchInput").value.toLowerCase();
        const list = document.getElementById("usersList");
        const cards = list.querySelectorAll(".user-card");

        cards.forEach(card => {
            const text = card.textContent.toLowerCase();
            card.style.display = text.includes(searchTerm) ? "flex" : "none";
        });

        if (searchTerm) {
            alert(`Found ${Array.from(cards).filter(c => c.style.display !== "none").length} results.`);
        }
    });

    // Notification form
    document.getElementById("adminNotificationForm").addEventListener("submit", function(e) {
        e.preventDefault();

        const type = document.getElementById("notificationType").value;
        const title = document.getElementById("notificationTitle").value;
        const message = document.getElementById("notificationMessage").value;
        const target = document.getElementById("notificationTarget").value;

        const successDiv = document.getElementById("notificationSuccess");
        successDiv.style.display = "block";

        this.reset();

        setTimeout(() => {
            successDiv.style.display = "none";
        }, 3000);

        console.log("📢 Notification sent:", { type, title, message, target, sentBy: "Admin", timestamp: new Date() });
    });
}

// ============================================
// REPORT FUNCTIONS
// ============================================

function generateAttendanceReport() {
    alert("📊 Generating Attendance Report...\n\nReport includes:\n- Class-wise attendance\n- Subject-wise attendance\n- Top performers\n- Students with low attendance");
    console.log("📊 Attendance Report Generated");
}

function generateProxyAnalysis() {
    alert("📈 Generating Proxy Analysis...\n\nAnalysis includes:\n- Total proxies: " + dummyGlobalProxyRequests.length + "\n- Approval rate: " + Math.round((dummyGlobalProxyRequests.filter(p => p.status === "Approved").length / dummyGlobalProxyRequests.length) * 100) + "%\n- Common reasons\n- Trends over time");
    console.log("📈 Proxy Analysis Generated");
}

function generateIssueSummary() {
    alert("⚠️ Generating Issue Summary...\n\nSummary includes:\n- Total issues: " + dummyGlobalIssues.length + "\n- Pending: " + dummyGlobalIssues.filter(i => i.status === "Pending").length + "\n- By category\n- Priority breakdown");
    console.log("⚠️ Issue Summary Generated");
}

function generateActivityReport() {
    alert("👥 Generating User Activity Report...\n\nReport includes:\n- Login statistics\n- Feature usage\n- Active users\n- User engagement metrics");
    console.log("👥 Activity Report Generated");
}

// ============================================
// SYSTEM FUNCTIONS
// ============================================

function manageSecuritySettings() {
    alert("🔐 Security Settings\n\nFeatures:\n- Two-factor authentication: Enabled\n- Password policy\n- Session timeout\n- IP whitelisting");
}

function manageEmailSettings() {
    alert("📧 Email Configuration\n\nSettings:\n- Notification emails: Enabled\n- Email template customization\n- Scheduled reports\n- Email log viewer");
}

function performBackup() {
    alert("🗑️ Backup Process\n\nInitiating system backup...\n✅ Backup completed successfully!\n\nBackup details:\n- Database: ✅\n- User files: ✅\n- Configurations: ✅\n- Timestamp: " + new Date().toLocaleString());
}

function viewActivityLog() {
    alert("📝 Activity Log\n\nRecent activities:\n- Admin login: 2 hours ago\n- System backup: 4 hours ago\n- User management: 1 day ago\n- Settings updated: 2 days ago\n\nView full logs in Activity Viewer");
}
