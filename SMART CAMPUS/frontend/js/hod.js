// ============================================
// HOD DASHBOARD JAVASCRIPT
// Smart Campus Management System
// ============================================

// ============================================
// GLOBAL VARIABLES & DUMMY DATA
// ============================================

// HOD Profile Data
const hodProfile = {
    id: "HOD001",
    name: "Dr. Ramesh Gupta",
    email: "ramesh.gupta@college.ac.in",
    phone: "+91 9876543210",
    department: "Computer Science & Engineering",
    designation: "Professor & Head",
    experience: "18 Years",
    totalTeachers: 12,
    totalStudents: 450
};

// Dashboard Stats
let dashboardStats = {
    totalTeachers: 12,
    totalStudents: 450,
    classesToday: 24,
    pendingProxies: 5,
    pendingIssues: 8,
    attendanceRate: 87
};

// Teachers Database
let teachersData = [
    { id: "TCH001", name: "Dr. Rajesh Kumar", email: "rajesh.kumar@college.ac.in", subjects: ["Data Structures", "Algorithms"], status: "active", attendance: 92 },
    { id: "TCH002", name: "Prof. Anita Sharma", email: "anita.sharma@college.ac.in", subjects: ["Database Management", "SQL"], status: "active", attendance: 88 },
    { id: "TCH003", name: "Dr. Amit Patel", email: "amit.patel@college.ac.in", subjects: ["Operating Systems", "Linux"], status: "active", attendance: 90 },
    { id: "TCH004", name: "Prof. Priya Singh", email: "priya.singh@college.ac.in", subjects: ["Computer Networks", "Security"], status: "active", attendance: 85 },
    { id: "TCH005", name: "Dr. Vikram Mehta", email: "vikram.mehta@college.ac.in", subjects: ["Web Development", "JavaScript"], status: "active", attendance: 91 },
    { id: "TCH006", name: "Prof. Neha Gupta", email: "neha.gupta@college.ac.in", subjects: ["Machine Learning", "AI"], status: "active", attendance: 87 },
    { id: "TCH007", name: "Dr. Sanjay Verma", email: "sanjay.verma@college.ac.in", subjects: ["Software Engineering", "Agile"], status: "inactive", attendance: 78 },
    { id: "TCH008", name: "Prof. Kavita Joshi", email: "kavita.joshi@college.ac.in", subjects: ["Cloud Computing", "AWS"], status: "active", attendance: 89 }
];

// Students Database (Sample)
let studentsData = [
    { enrollment: "STU103001", name: "Akhil Sharma", semester: 5, division: "A", attendance: 85, gpa: 3.8, status: "active", issues: 0 },
    { enrollment: "STU103002", name: "Priya Patel", semester: 5, division: "A", attendance: 92, gpa: 3.9, status: "active", issues: 0 },
    { enrollment: "STU103003", name: "Rahul Kumar", semester: 5, division: "A", attendance: 72, gpa: 3.2, status: "active", issues: 1 },
    { enrollment: "STU103004", name: "Sneha Singh", semester: 5, division: "B", attendance: 88, gpa: 3.7, status: "active", issues: 0 },
    { enrollment: "STU103005", name: "Arjun Mehta", semester: 5, division: "B", attendance: 68, gpa: 3.0, status: "active", issues: 2 },
    { enrollment: "STU103006", name: "Neha Gupta", semester: 3, division: "A", attendance: 78, gpa: 3.4, status: "active", issues: 0 },
    { enrollment: "STU103007", name: "Vikas Sharma", semester: 3, division: "A", attendance: 70, gpa: 3.1, status: "active", issues: 1 },
    { enrollment: "STU103008", name: "Anjali Verma", semester: 3, division: "B", attendance: 95, gpa: 4.0, status: "active", issues: 0 }
];

// Proxy Requests
let proxyRequests = [
    { id: "PRX001", teacherName: "Dr. Rajesh Kumar", date: "2024-12-25", subject: "Data Structures", division: "5A", reason: "Medical emergency", status: "pending" },
    { id: "PRX002", teacherName: "Prof. Anita Sharma", date: "2024-12-26", subject: "Database Management", division: "5B", reason: "Personal work", status: "pending" },
    { id: "PRX003", teacherName: "Dr. Amit Patel", date: "2024-12-24", subject: "Operating Systems", division: "3A", reason: "Conference attendance", status: "approved" },
    { id: "PRX004", teacherName: "Prof. Priya Singh", date: "2024-12-23", subject: "Computer Networks", division: "3B", reason: "Family function", status: "rejected" },
    { id: "PRX005", teacherName: "Dr. Vikram Mehta", date: "2024-12-27", subject: "Web Development", division: "5A", reason: "Workshop", status: "pending" }
];

// Student Issues
let studentIssues = [
    { id: "ISS001", studentName: "Rahul Kumar", enrollment: "STU103003", category: "academic", description: "Difficulty in understanding Data Structures concepts", status: "pending", priority: "medium", date: "2024-12-20" },
    { id: "ISS002", studentName: "Arjun Mehta", enrollment: "STU103005", category: "infrastructure", description: "Laboratory equipment not working properly", status: "in-progress", priority: "high", date: "2024-12-19" },
    { id: "ISS003", studentName: "Vikas Sharma", enrollment: "STU103007", category: "faculty", description: "Request for additional doubt clearing sessions", status: "pending", priority: "low", date: "2024-12-21" },
    { id: "ISS004", studentName: "Neha Gupta", enrollment: "STU103006", category: "other", description: "Library book not available", status: "resolved", priority: "low", date: "2024-12-15" },
    { id: "ISS005", studentName: "Arjun Mehta", enrollment: "STU103005", category: "academic", description: "Assignment deadline extension request", status: "escalated", priority: "high", date: "2024-12-22" }
];

// Notices
let noticesData = [
    { id: "NOT001", title: "Semester End Examination Schedule", description: "Final exams will begin from Jan 15, 2025. Detailed schedule available on portal.", target: "students", priority: "important", date: "2024-12-20", author: "HOD" },
    { id: "NOT002", title: "Teacher Performance Review Meeting", description: "All faculty members requested to attend review meeting on Dec 28, 2024 at 10 AM.", target: "teachers", priority: "urgent", date: "2024-12-18", author: "HOD" },
    { id: "NOT003", title: "Winter Break Extended", description: "Due to weather conditions, winter break extended by 2 days. Classes resume from Jan 3, 2025.", target: "all", priority: "important", date: "2024-12-19", author: "HOD" }
];

// Feedback Data
let feedbackData = [
    { id: "FB001", teacherName: "Dr. Rajesh Kumar", subject: "Data Structures", rating: 4.5, comment: "Excellent teaching methodology and very helpful.", studentCount: 45, semester: 5 },
    { id: "FB002", teacherName: "Prof. Anita Sharma", subject: "Database Management", rating: 4.2, comment: "Good explanations but needs more practical sessions.", studentCount: 42, semester: 5 },
    { id: "FB003", teacherName: "Dr. Amit Patel", subject: "Operating Systems", rating: 4.7, comment: "Very knowledgeable and approachable.", studentCount: 48, semester: 3 },
    { id: "FB004", teacherName: "Prof. Priya Singh", subject: "Computer Networks", rating: 4.0, comment: "Good teacher, but sometimes goes too fast.", studentCount: 40, semester: 3 }
];

// Current page state
let currentPage = {
    students: 1,
    itemsPerPage: 10
};

// ============================================
// PAGE INITIALIZATION
// ============================================
document.addEventListener("DOMContentLoaded", function() {
    console.log("HOD Dashboard Initialized");
    
    // Initialize mobile sidebar state
    if (window.innerWidth <= 992) {
        const sidebar = document.querySelector('.sidebar');
        if (sidebar) {
            sidebar.classList.add('collapsed');
            sidebar.classList.remove('show');
        }
    }
    
    // Setup event listeners
    setupEventListeners();
    
    // Load dashboard data
    loadDashboard();
    loadRecentActivity();
    loadLowAttendanceAlerts();
    
    // Load all sections data
    loadTeachers();
    loadStudents();
    loadAttendanceOverview();
    loadProxyRequests();
    loadIssues();
    loadTimetable();
    loadReports();
    loadNotices();
    loadFeedback();
    
    // Load notification dropdown
    loadNotificationDropdown();
});

// Handle window resize for sidebar
window.addEventListener('resize', function() {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    const toggleBtn = document.getElementById('sidebarToggle');
    
    if (window.innerWidth <= 992) {
        // Mobile mode
        if (sidebar) {
            sidebar.classList.add('collapsed');
            sidebar.classList.remove('show');
        }
        if (container) {
            container.classList.remove('sidebar-collapsed');
        }
    } else {
        // Desktop mode
        if (sidebar) {
            sidebar.classList.remove('show');
            sidebar.classList.remove('collapsed');
        }
        if (container) {
            container.classList.remove('sidebar-collapsed');
        }
    }
    
    if (toggleBtn) {
        toggleBtn.innerHTML = '☰';
    }
});

// ============================================
// EVENT LISTENERS SETUP
// ============================================
function setupEventListeners() {
    // Sidebar menu navigation
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute("data-section");
            showSection(sectionId);
        });
    });
    
    // Notice form submission
    const noticeForm = document.getElementById("noticeForm");
    if (noticeForm) {
        noticeForm.addEventListener("submit", function(e) {
            e.preventDefault();
            publishNotice();
        });
    }
    
    // Notice target change
    const noticeTarget = document.getElementById("noticeTarget");
    if (noticeTarget) {
        noticeTarget.addEventListener("change", function() {
            const specificGroup = document.getElementById("specificTargetGroup");
            if (this.value === "semester" || this.value === "division") {
                specificGroup.style.display = "block";
                loadSpecificTargetOptions(this.value);
            } else {
                specificGroup.style.display = "none";
            }
        });
    }
}

// ============================================
// SECTION NAVIGATION
// ============================================
function showSection(sectionId) {
    // Hide all sections
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
        section.classList.remove("active");
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add("active");
    }
    
    // Update menu active state
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("data-section") === sectionId) {
            item.classList.add("active");
        }
    });
    
    // Load section-specific data when opened
    if (sectionId === "teacher-attendance") {
        loadTeacherAttendance();
    }
    
    // Close sidebar on mobile after selection
    if (window.innerWidth <= 992) {
        const sidebar = document.querySelector('.sidebar');
        sidebar.classList.remove('show');
        sidebar.classList.add('collapsed');
    }
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// SIDEBAR TOGGLE
// ============================================
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    const toggleBtn = document.getElementById('sidebarToggle');
    
    // Check screen size
    if (window.innerWidth <= 992) {
        // Mobile: use show class
        sidebar.classList.toggle('show');
        sidebar.classList.toggle('collapsed');
    } else {
        // Desktop: use collapsed class
        sidebar.classList.toggle('collapsed');
        container.classList.toggle('sidebar-collapsed');
    }
    
    // Update toggle button icon
    if (sidebar.classList.contains('collapsed') || !sidebar.classList.contains('show')) {
        toggleBtn.innerHTML = '☰';
    } else {
        toggleBtn.innerHTML = '✕';
    }
}

// ============================================
// NOTIFICATIONS DROPDOWN
// ============================================
function toggleNotifications() {
    const dropdown = document.getElementById("notificationDropdown");
    dropdown.classList.toggle("show");
}

function loadNotificationDropdown() {
    const notifList = document.getElementById("notifDropdownList");
    if (!notifList) return;
    
    notifList.innerHTML = `
        <div class="notif-item unread">
            <h5>New Proxy Request</h5>
            <p>Dr. Rajesh Kumar - 2 mins ago</p>
        </div>
        <div class="notif-item unread">
            <h5>Student Issue Escalated</h5>
            <p>Arjun Mehta - 15 mins ago</p>
        </div>
        <div class="notif-item">
            <h5>Low Attendance Alert</h5>
            <p>23 students below 75% - 1 hour ago</p>
        </div>
        <div class="notif-item">
            <h5>Teacher Performance Report</h5>
            <p>Monthly report ready - 3 hours ago</p>
        </div>
    `;
}

function markAllRead() {
    const notifItems = document.querySelectorAll(".notif-item");
    notifItems.forEach(item => item.classList.remove("unread"));
    document.getElementById("notifBadge").textContent = "0";
}

// Close notification dropdown when clicking outside
document.addEventListener("click", function(e) {
    const dropdown = document.getElementById("notificationDropdown");
    const notifBtn = document.getElementById("notificationBtn");
    
    if (dropdown && notifBtn && !dropdown.contains(e.target) && !notifBtn.contains(e.target)) {
        dropdown.classList.remove("show");
    }
    
    // Close sidebar on mobile when clicking outside
    if (window.innerWidth <= 992) {
        const sidebar = document.querySelector('.sidebar');
        const toggleBtn = document.getElementById('sidebarToggle');
        
        if (sidebar && toggleBtn && !sidebar.contains(e.target) && !toggleBtn.contains(e.target)) {
            sidebar.classList.remove('show');
            sidebar.classList.add('collapsed');
            toggleBtn.innerHTML = '☰';
        }
    }
});

// ============================================
// DASHBOARD FUNCTIONS
// ============================================
function loadDashboard() {
    document.getElementById("dashTotalTeachers").textContent = dashboardStats.totalTeachers;
    document.getElementById("dashTotalStudents").textContent = dashboardStats.totalStudents;
    document.getElementById("dashClassesToday").textContent = dashboardStats.classesToday;
    document.getElementById("dashPendingProxies").textContent = dashboardStats.pendingProxies;
    document.getElementById("dashPendingIssues").textContent = dashboardStats.pendingIssues;
    document.getElementById("dashAttendanceRate").textContent = dashboardStats.attendanceRate + "%";
}

function loadRecentActivity() {
    const activityList = document.getElementById("recentActivityList");
    if (!activityList) return;
    
    const activities = [
        { icon: "📋", title: "New proxy request", desc: "Dr. Rajesh Kumar - 2 mins ago" },
        { icon: "⚠️", title: "Issue escalated", desc: "Arjun Mehta - 15 mins ago" },
        { icon: "✅", title: "Proxy approved", desc: "Dr. Amit Patel - 1 hour ago" },
        { icon: "📢", title: "Notice published", desc: "Exam schedule - 2 hours ago" },
        { icon: "👥", title: "New student enrolled", desc: "STU103009 - 3 hours ago" }
    ];
    
    activityList.innerHTML = activities.map(activity => `
        <div class="activity-item">
            <div class="activity-icon">${activity.icon}</div>
            <div class="activity-content">
                <h4>${activity.title}</h4>
                <p>${activity.desc}</p>
            </div>
        </div>
    `).join('');
}

function loadLowAttendanceAlerts() {
    const alertList = document.getElementById("lowAttendanceAlerts");
    if (!alertList) return;
    
    const lowAttendanceStudents = studentsData.filter(s => s.attendance < 75);
    
    if (lowAttendanceStudents.length === 0) {
        alertList.innerHTML = '<div class="empty-state"><p>No low attendance alerts</p></div>';
        return;
    }
    
    alertList.innerHTML = lowAttendanceStudents.slice(0, 5).map(student => `
        <div class="alert-item critical">
            <div class="alert-icon">⚠️</div>
            <div class="alert-content">
                <h4>${student.name} (${student.enrollment})</h4>
                <p>Attendance: ${student.attendance}% | Semester ${student.semester} | Division ${student.division}</p>
            </div>
        </div>
    `).join('');
}

// ============================================
// TEACHERS MANAGEMENT
// ============================================
function loadTeachers() {
    const teachersList = document.getElementById("teachersList");
    if (!teachersList) return;
    
    teachersList.innerHTML = teachersData.map(teacher => `
        <div class="teacher-card">
            <div class="teacher-card-header">
                <div class="teacher-avatar">👨‍🏫</div>
                <div class="teacher-basic-info">
                    <h4>${teacher.name}</h4>
                    <p>${teacher.id}</p>
                </div>
            </div>
            <div class="teacher-card-body">
                <div class="teacher-detail">
                    <span class="label">Email:</span>
                    <span class="value">${teacher.email}</span>
                </div>
                <div class="teacher-detail">
                    <span class="label">Subjects:</span>
                    <span class="value">${teacher.subjects.join(", ")}</span>
                </div>
                <div class="teacher-detail">
                    <span class="label">Status:</span>
                    <span class="value"><span class="status-badge ${teacher.status}">${teacher.status.toUpperCase()}</span></span>
                </div>
                <div class="teacher-detail">
                    <span class="label">Attendance:</span>
                    <span class="value">${teacher.attendance}%</span>
                </div>
            </div>
            <div class="teacher-card-actions">
                <button class="btn btn-sm btn-primary" onclick="viewTeacherDetails('${teacher.id}')">👁️ View</button>
                <button class="btn btn-sm btn-info" onclick="openAssignSubjectModal('${teacher.id}')">📚 Assign</button>
                <button class="btn btn-sm btn-${teacher.status === 'active' ? 'danger' : 'success'}" onclick="toggleTeacherStatus('${teacher.id}')">
                    ${teacher.status === 'active' ? '🚫 Disable' : '✅ Enable'}
                </button>
            </div>
        </div>
    `).join('');
    
    // Update stats
    document.getElementById("teacherStatsTotal").textContent = teachersData.length;
    document.getElementById("teacherStatsActive").textContent = teachersData.filter(t => t.status === 'active').length;
    document.getElementById("teacherStatsInactive").textContent = teachersData.filter(t => t.status === 'inactive').length;
}

function searchTeachers() {
    const searchTerm = document.getElementById("teacherSearch").value.toLowerCase();
    const filteredTeachers = teachersData.filter(t => 
        t.name.toLowerCase().includes(searchTerm) || t.id.toLowerCase().includes(searchTerm)
    );
    displayFilteredTeachers(filteredTeachers);
}

function filterTeachers() {
    const statusFilter = document.getElementById("teacherStatusFilter").value;
    const filteredTeachers = statusFilter ? teachersData.filter(t => t.status === statusFilter) : teachersData;
    displayFilteredTeachers(filteredTeachers);
}

function displayFilteredTeachers(teachers) {
    const teachersList = document.getElementById("teachersList");
    teachersList.innerHTML = teachers.map(teacher => `
        <div class="teacher-card">
            <div class="teacher-card-header">
                <div class="teacher-avatar">👨‍🏫</div>
                <div class="teacher-basic-info">
                    <h4>${teacher.name}</h4>
                    <p>${teacher.id}</p>
                </div>
            </div>
            <div class="teacher-card-body">
                <div class="teacher-detail">
                    <span class="label">Email:</span>
                    <span class="value">${teacher.email}</span>
                </div>
                <div class="teacher-detail">
                    <span class="label">Subjects:</span>
                    <span class="value">${teacher.subjects.join(", ")}</span>
                </div>
                <div class="teacher-detail">
                    <span class="label">Status:</span>
                    <span class="value"><span class="status-badge ${teacher.status}">${teacher.status.toUpperCase()}</span></span>
                </div>
            </div>
            <div class="teacher-card-actions">
                <button class="btn btn-sm btn-primary" onclick="viewTeacherDetails('${teacher.id}')">👁️ View</button>
                <button class="btn btn-sm btn-info" onclick="openAssignSubjectModal('${teacher.id}')">📚 Assign</button>
            </div>
        </div>
    `).join('');
}

function viewTeacherDetails(teacherId) {
    const teacher = teachersData.find(t => t.id === teacherId);
    if (!teacher) return;
    
    document.getElementById("teacherModalTitle").textContent = `${teacher.name} - Details`;
    document.getElementById("teacherModalBody").innerHTML = `
        <div class="teacher-details-content">
            <h4>Basic Information</h4>
            <p><strong>ID:</strong> ${teacher.id}</p>
            <p><strong>Email:</strong> ${teacher.email}</p>
            <p><strong>Status:</strong> <span class="status-badge ${teacher.status}">${teacher.status.toUpperCase()}</span></p>
            <p><strong>Attendance:</strong> ${teacher.attendance}%</p>
            <h4>Assigned Subjects</h4>
            <ul>
                ${teacher.subjects.map(s => `<li>${s}</li>`).join('')}
            </ul>
        </div>
    `;
    openModal("teacherModal");
}

function openAssignSubjectModal(teacherId) {
    const teacher = teachersData.find(t => t.id === teacherId);
    if (!teacher) return;
    
    document.getElementById("assignTeacherId").value = teacherId;
    document.getElementById("assignTeacherName").textContent = teacher.name;
    openModal("assignSubjectModal");
}

function confirmAssignSubject() {
    const teacherId = document.getElementById("assignTeacherId").value;
    const subject = document.getElementById("assignSubject").value;
    const semester = document.getElementById("assignSemester").value;
    const division = document.getElementById("assignDivision").value;
    
    if (!subject || !semester || !division) {
        alert("⚠️ Please fill all fields!");
        return;
    }
    
    alert(`✅ Subject assigned successfully!\n\nTeacher: ${teacherId}\nSubject: ${subject}\nSemester: ${semester}\nDivision: ${division}`);
    closeModal("assignSubjectModal");
}

function toggleTeacherStatus(teacherId) {
    const teacher = teachersData.find(t => t.id === teacherId);
    if (!teacher) return;
    
    teacher.status = teacher.status === 'active' ? 'inactive' : 'active';
    loadTeachers();
    alert(`✅ Teacher status updated to ${teacher.status.toUpperCase()}`);
}

function openAddTeacherModal() {
    alert("➕ Add Teacher feature - Coming Soon!");
}

// ============================================
// STUDENTS MANAGEMENT
// ============================================
function loadStudents() {
    displayStudents(studentsData);
    
    // Update stats
    document.getElementById("studentStatsTotal").textContent = studentsData.length;
    document.getElementById("studentStatsLowAtt").textContent = studentsData.filter(s => s.attendance < 75).length;
    document.getElementById("studentStatsIssues").textContent = studentsData.reduce((sum, s) => sum + s.issues, 0);
}

function displayStudents(students) {
    const tbody = document.getElementById("studentsTableBody");
    if (!tbody) return;
    
    tbody.innerHTML = students.map(student => {
        let attClass = student.attendance >= 90 ? 'high' : student.attendance >= 75 ? 'normal' : 'low';
        return `
            <tr>
                <td>${student.enrollment}</td>
                <td>${student.name}</td>
                <td>${student.semester}</td>
                <td>${student.division}</td>
                <td><span class="attendance-badge ${attClass}">${student.attendance}%</span></td>
                <td>${student.gpa}</td>
                <td><span class="status-badge ${student.status}">${student.status.toUpperCase()}</span></td>
                <td>
                    <button class="btn btn-sm btn-primary" onclick="viewStudentDetails('${student.enrollment}')">👁️ View</button>
                </td>
            </tr>
        `;
    }).join('');
}

function filterStudents() {
    let filtered = studentsData;
    
    const semester = document.getElementById("studentSemesterFilter").value;
    const division = document.getElementById("studentDivisionFilter").value;
    const attendance = document.getElementById("studentAttendanceFilter").value;
    
    if (semester) filtered = filtered.filter(s => s.semester == semester);
    if (division) filtered = filtered.filter(s => s.division === division);
    if (attendance === 'low') filtered = filtered.filter(s => s.attendance < 75);
    if (attendance === 'normal') filtered = filtered.filter(s => s.attendance >= 75 && s.attendance < 90);
    if (attendance === 'high') filtered = filtered.filter(s => s.attendance >= 90);
    
    displayStudents(filtered);
}

function searchStudents() {
    const searchTerm = document.getElementById("studentSearch").value.toLowerCase();
    const filtered = studentsData.filter(s => 
        s.name.toLowerCase().includes(searchTerm) || s.enrollment.toLowerCase().includes(searchTerm)
    );
    displayStudents(filtered);
}

function viewStudentDetails(enrollment) {
    const student = studentsData.find(s => s.enrollment === enrollment);
    if (!student) return;
    
    document.getElementById("studentModalTitle").textContent = `${student.name} - Details`;
    document.getElementById("studentModalBody").innerHTML = `
        <div class="student-details-content">
            <h4>Academic Information</h4>
            <p><strong>Enrollment:</strong> ${student.enrollment}</p>
            <p><strong>Semester:</strong> ${student.semester}</p>
            <p><strong>Division:</strong> ${student.division}</p>
            <p><strong>GPA:</strong> ${student.gpa}</p>
            <p><strong>Attendance:</strong> ${student.attendance}%</p>
            <p><strong>Active Issues:</strong> ${student.issues}</p>
            <p><strong>Status:</strong> <span class="status-badge ${student.status}">${student.status.toUpperCase()}</span></p>
        </div>
    `;
    openModal("studentModal");
}

function downloadStudentCSV() {
    alert("📥 CSV Download feature - Coming Soon!\n\nStudent data will be exported in CSV format.");
}

function prevStudentPage() {
    alert("⬅️ Previous page");
}

function nextStudentPage() {
    alert("➡️ Next page");
}

function viewStudentIssues() {
    alert("⚠️ View student issues feature - Coming Soon!");
    closeModal("studentModal");
}

// ============================================
// ATTENDANCE OVERVIEW
// ============================================
function loadAttendanceOverview() {
    loadSemesterAttendance();
    loadTeacherAttendance();
    loadLowAttendanceList();
}

function loadSemesterAttendance() {
    const grid = document.getElementById("semesterAttendanceGrid");
    if (!grid) return;
    
    const semesterData = [
        { semester: 1, attendance: 85, students: 60 },
        { semester: 2, attendance: 78, students: 58 },
        { semester: 3, attendance: 92, students: 55 },
        { semester: 4, attendance: 88, students: 52 },
        { semester: 5, attendance: 82, students: 50 },
        { semester: 6, attendance: 90, students: 48 },
        { semester: 7, attendance: 76, students: 45 },
        { semester: 8, attendance: 84, students: 42 }
    ];
    
    grid.innerHTML = semesterData.map(sem => {
        let valueClass = sem.attendance >= 85 ? '' : sem.attendance >= 75 ? 'warning' : 'low';
        return `
            <div class="semester-card">
                <h4>Semester ${sem.semester}</h4>
                <div class="attendance-value ${valueClass}">${sem.attendance}%</div>
                <p class="student-count">${sem.students} students</p>
            </div>
        `;
    }).join('');
}

function loadTeacherAttendance() {
    const tbody = document.getElementById("teacherAttendanceBody");
    if (!tbody) return;
    
    tbody.innerHTML = teachersData.slice(0, 6).map(teacher => `
        <tr>
            <td>${teacher.name}</td>
            <td>${teacher.subjects[0]}</td>
            <td>${Math.floor(Math.random() * 30) + 20}</td>
            <td><span class="attendance-badge ${teacher.attendance >= 85 ? 'high' : 'normal'}">${teacher.attendance}%</span></td>
            <td><button class="btn btn-sm btn-info" onclick="viewTeacherReport('${teacher.id}')">📊 Report</button></td>
        </tr>
    `).join('');
}

function loadLowAttendanceList() {
    const list = document.getElementById("lowAttendanceList");
    if (!list) return;
    
    const lowStudents = studentsData.filter(s => s.attendance < 75);
    
    list.innerHTML = lowStudents.map(student => `
        <div class="low-attendance-item">
            <div class="student-info">
                <h4>${student.name}</h4>
                <p>${student.enrollment} | Semester ${student.semester} | Division ${student.division}</p>
            </div>
            <div class="attendance-percent">${student.attendance}%</div>
        </div>
    `).join('');
}

function switchAttendanceTab(tabName) {
    document.querySelectorAll(".attendance-tab-content").forEach(tab => tab.classList.remove("active"));
    document.getElementById(`${tabName}-attendance`).classList.add("active");
    
    document.querySelectorAll(".attendance-tabs .tab-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}

function viewTeacherReport(teacherId) {
    alert(`📊 Viewing attendance report for teacher: ${teacherId}`);
}

// ============================================
// PROXY APPROVAL
// ============================================
function loadProxyRequests() {
    displayProxyRequests(proxyRequests);
    
    // Update stats
    document.getElementById("proxyStatsPending").textContent = proxyRequests.filter(p => p.status === 'pending').length;
    document.getElementById("proxyStatsApproved").textContent = proxyRequests.filter(p => p.status === 'approved').length;
    document.getElementById("proxyStatsRejected").textContent = proxyRequests.filter(p => p.status === 'rejected').length;
}

function displayProxyRequests(requests) {
    const list = document.getElementById("proxyRequestsList");
    if (!list) return;
    
    list.innerHTML = requests.map(proxy => `
        <div class="proxy-card">
            <div class="proxy-card-header">
                <h4>📋 ${proxy.teacherName}</h4>
                <span class="status-badge ${proxy.status}">${proxy.status.toUpperCase()}</span>
            </div>
            <div class="proxy-card-body">
                <div class="proxy-detail">
                    <span class="label">Date:</span>
                    <span class="value">${proxy.date}</span>
                </div>
                <div class="proxy-detail">
                    <span class="label">Subject:</span>
                    <span class="value">${proxy.subject}</span>
                </div>
                <div class="proxy-detail">
                    <span class="label">Division:</span>
                    <span class="value">${proxy.division}</span>
                </div>
                <div class="proxy-detail">
                    <span class="label">Reason:</span>
                    <span class="value">${proxy.reason}</span>
                </div>
            </div>
            ${proxy.status === 'pending' ? `
            <div class="proxy-card-actions">
                <button class="btn btn-success" onclick="approveProxyDirect('${proxy.id}')">✅ Approve</button>
                <button class="btn btn-danger" onclick="openProxyActionModal('${proxy.id}')">❌ Reject</button>
            </div>
            ` : ''}
        </div>
    `).join('');
}

function filterProxyRequests() {
    const statusFilter = document.getElementById("proxyStatusFilter").value;
    const dateFilter = document.getElementById("proxyDateFilter").value;
    
    let filtered = proxyRequests;
    if (statusFilter) filtered = filtered.filter(p => p.status === statusFilter);
    if (dateFilter) filtered = filtered.filter(p => p.date === dateFilter);
    
    displayProxyRequests(filtered);
}

function resetProxyFilters() {
    document.getElementById("proxyStatusFilter").value = "";
    document.getElementById("proxyDateFilter").value = "";
    displayProxyRequests(proxyRequests);
}

function approveProxyDirect(proxyId) {
    const proxy = proxyRequests.find(p => p.id === proxyId);
    if (!proxy) return;
    
    proxy.status = "approved";
    loadProxyRequests();
    alert(`✅ Proxy request approved for ${proxy.teacherName}`);
}

function openProxyActionModal(proxyId) {
    const proxy = proxyRequests.find(p => p.id === proxyId);
    if (!proxy) return;
    
    document.getElementById("proxyRequestId").value = proxyId;
    document.getElementById("proxyDetails").innerHTML = `
        <p><strong>Teacher:</strong> ${proxy.teacherName}</p>
        <p><strong>Date:</strong> ${proxy.date}</p>
        <p><strong>Subject:</strong> ${proxy.subject}</p>
        <p><strong>Reason:</strong> ${proxy.reason}</p>
    `;
    
    openModal("proxyActionModal");
}

function approveProxy() {
    const proxyId = document.getElementById("proxyRequestId").value;
    approveProxyDirect(proxyId);
    closeModal("proxyActionModal");
}

function showRejectForm() {
    document.getElementById("rejectionReasonGroup").style.display = "block";
}

function rejectProxy() {
    const proxyId = document.getElementById("proxyRequestId").value;
    const reason = document.getElementById("rejectionReason").value;
    
    if (!reason) {
        alert("⚠️ Please enter rejection reason!");
        return;
    }
    
    const proxy = proxyRequests.find(p => p.id === proxyId);
    if (proxy) {
        proxy.status = "rejected";
        loadProxyRequests();
        alert(`❌ Proxy request rejected for ${proxy.teacherName}`);
    }
    
    closeModal("proxyActionModal");
}

// ============================================
// STUDENT ISSUES
// ============================================
function loadIssues() {
    displayIssues(studentIssues);
    
    // Update stats
    document.getElementById("issueStatsPending").textContent = studentIssues.filter(i => i.status === 'pending').length;
    document.getElementById("issueStatsInProgress").textContent = studentIssues.filter(i => i.status === 'in-progress').length;
    document.getElementById("issueStatsEscalated").textContent = studentIssues.filter(i => i.status === 'escalated').length;
    document.getElementById("issueStatsResolved").textContent = studentIssues.filter(i => i.status === 'resolved').length;
}

function displayIssues(issues) {
    const list = document.getElementById("issuesList");
    if (!list) return;
    
    list.innerHTML = issues.map(issue => `
        <div class="issue-card">
            <div class="issue-card-header">
                <h4>⚠️ ${issue.studentName}</h4>
                <span class="status-badge ${issue.status}">${issue.status.toUpperCase()}</span>
            </div>
            <div class="issue-card-body">
                <div class="issue-detail">
                    <span class="label">Enrollment:</span>
                    <span class="value">${issue.enrollment}</span>
                </div>
                <div class="issue-detail">
                    <span class="label">Category:</span>
                    <span class="value">${issue.category}</span>
                </div>
                <div class="issue-detail">
                    <span class="label">Priority:</span>
                    <span class="value"><span class="status-badge ${issue.priority === 'high' ? 'escalated' : issue.priority}">${issue.priority.toUpperCase()}</span></span>
                </div>
                <div class="issue-detail">
                    <span class="label">Date:</span>
                    <span class="value">${issue.date}</span>
                </div>
                <div class="issue-detail">
                    <span class="label">Description:</span>
                    <span class="value">${issue.description}</span>
                </div>
            </div>
            ${issue.status !== 'resolved' ? `
            <div class="issue-card-actions">
                <button class="btn btn-sm btn-info" onclick="openIssueActionModal('${issue.id}')">🔧 Action</button>
                <button class="btn btn-sm btn-success" onclick="resolveIssueDirect('${issue.id}')">✅ Resolve</button>
            </div>
            ` : ''}
        </div>
    `).join('');
}

function filterIssues() {
    const statusFilter = document.getElementById("issueStatusFilter").value;
    const categoryFilter = document.getElementById("issueCategoryFilter").value;
    const priorityFilter = document.getElementById("issuePriorityFilter").value;
    
    let filtered = studentIssues;
    if (statusFilter) filtered = filtered.filter(i => i.status === statusFilter);
    if (categoryFilter) filtered = filtered.filter(i => i.category === categoryFilter);
    if (priorityFilter) filtered = filtered.filter(i => i.priority === priorityFilter);
    
    displayIssues(filtered);
}

function openIssueActionModal(issueId) {
    const issue = studentIssues.find(i => i.id === issueId);
    if (!issue) return;
    
    window.currentIssueId = issueId;
    document.getElementById("issueDetails").innerHTML = `
        <p><strong>Student:</strong> ${issue.studentName} (${issue.enrollment})</p>
        <p><strong>Category:</strong> ${issue.category}</p>
        <p><strong>Priority:</strong> ${issue.priority}</p>
        <p><strong>Date:</strong> ${issue.date}</p>
        <p><strong>Description:</strong> ${issue.description}</p>
        <p><strong>Status:</strong> <span class="status-badge ${issue.status}">${issue.status.toUpperCase()}</span></p>
    `;
    
    openModal("issueActionModal");
}

function resolveIssueDirect(issueId) {
    const issue = studentIssues.find(i => i.id === issueId);
    if (issue) {
        issue.status = "resolved";
        loadIssues();
        alert(`✅ Issue marked as resolved: ${issue.studentName}`);
    }
}

function assignIssueToTeacher() {
    alert("👨‍🏫 Assign to teacher feature - Coming Soon!");
    closeModal("issueActionModal");
}

function resolveIssue() {
    if (window.currentIssueId) {
        resolveIssueDirect(window.currentIssueId);
        closeModal("issueActionModal");
    }
}

function escalateIssue() {
    const issue = studentIssues.find(i => i.id === window.currentIssueId);
    if (issue) {
        issue.status = "escalated";
        loadIssues();
        alert(`⬆️ Issue escalated: ${issue.studentName}`);
    }
    closeModal("issueActionModal");
}

// ============================================
// TIMETABLE
// ============================================
function loadTimetable() {
    const tbody = document.getElementById("timetableBody");
    if (!tbody) return;
    
    const timetableData = [
        { time: "9:00-10:00", mon: "DS (5A)", tue: "DBMS (5B)", wed: "OS (3A)", thu: "CN (3B)", fri: "ML (5A)", sat: "DS Lab" },
        { time: "10:00-11:00", mon: "DBMS (5A)", tue: "Web Dev (5B)", wed: "DS (3B)", thu: "OS (3A)", fri: "CN (5B)", sat: "DBMS Lab" },
        { time: "11:00-12:00", mon: "Web Dev (5A)", tue: "DS (5B)", wed: "DBMS (3A)", thu: "Web Dev (3B)", fri: "DS (5A)", sat: "Break" },
        { time: "12:00-13:00", mon: "Break", tue: "Break", wed: "Break", thu: "Break", fri: "Break", sat: "OS Lab" },
        { time: "14:00-15:00", mon: "ML (5A)", tue: "OS (5B)", wed: "CN (3A)", thu: "ML (3B)", fri: "DBMS (5A)", sat: "Web Lab" }
    ];
    
    tbody.innerHTML = timetableData.map(row => `
        <tr>
            <td class="time-slot">${row.time}</td>
            <td class="${row.mon === 'Break' ? 'break-cell' : 'class-cell'}">${row.mon}</td>
            <td class="${row.tue === 'Break' ? 'break-cell' : 'class-cell'}">${row.tue}</td>
            <td class="${row.wed === 'Break' ? 'break-cell' : 'class-cell'}">${row.wed}</td>
            <td class="${row.thu === 'Break' ? 'break-cell' : 'class-cell'}">${row.thu}</td>
            <td class="${row.fri === 'Break' ? 'break-cell' : 'class-cell'}">${row.fri}</td>
            <td class="${row.sat === 'Break' ? 'break-cell' : 'class-cell'}">${row.sat}</td>
        </tr>
    `).join('');
    
    loadTodaysClasses();
}

function loadTodaysClasses() {
    const grid = document.getElementById("todaysClassesGrid");
    if (!grid) return;
    
    const todaysClasses = [
        { time: "9:00-10:00", subject: "Data Structures", division: "5A", teacher: "Dr. Rajesh Kumar", room: "A-101" },
        { time: "10:00-11:00", subject: "Database Management", division: "5A", teacher: "Prof. Anita Sharma", room: "A-102" },
        { time: "11:00-12:00", subject: "Web Development", division: "5A", teacher: "Dr. Vikram Mehta", room: "A-103" },
        { time: "14:00-15:00", subject: "Machine Learning", division: "5A", teacher: "Prof. Neha Gupta", room: "A-104" }
    ];
    
    grid.innerHTML = todaysClasses.map(cls => `
        <div class="today-class-card">
            <h4>${cls.subject}</h4>
            <p>⏰ ${cls.time}</p>
            <p>👥 Division ${cls.division}</p>
            <p>👨‍🏫 ${cls.teacher}</p>
            <p>🚪 Room ${cls.room}</p>
        </div>
    `).join('');
}

// ============================================
// REPORTS & ANALYTICS
// ============================================
function loadReports() {
    loadPerformanceTable();
}

function loadPerformanceTable() {
    const tbody = document.getElementById("performanceTableBody");
    if (!tbody) return;
    
    tbody.innerHTML = teachersData.slice(0, 6).map(teacher => `
        <tr>
            <td>${teacher.name}</td>
            <td>${Math.floor(Math.random() * 10) + 15}</td>
            <td><span class="attendance-badge high">${teacher.attendance}%</span></td>
            <td>⭐ ${(Math.random() * 1 + 4).toFixed(1)}/5.0</td>
            <td><span class="status-badge approved">Excellent</span></td>
        </tr>
    `).join('');
}

function switchReportTab(tabName) {
    document.querySelectorAll(".report-tab-content").forEach(tab => tab.classList.remove("active"));
    document.getElementById(`${tabName}-report`).classList.add("active");
    
    document.querySelectorAll(".report-tabs .tab-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}

function downloadReport(reportType) {
    alert(`📥 Downloading ${reportType} report...\n\nReport will be saved as PDF.`);
}

// ============================================
// NOTICES
// ============================================
function loadNotices() {
    displayNoticesHistory(noticesData);
}

function displayNoticesHistory(notices) {
    const list = document.getElementById("noticesHistoryList");
    if (!list) return;
    
    list.innerHTML = notices.map(notice => `
        <div class="notice-card ${notice.priority}">
            <div class="notice-card-header">
                <h4>📢 ${notice.title}</h4>
                <span class="status-badge ${notice.priority}">${notice.priority.toUpperCase()}</span>
            </div>
            <div class="notice-card-body">
                <p>${notice.description}</p>
                <div class="notice-meta">
                    <span>👥 Target: ${notice.target}</span>
                    <span>📅 Date: ${notice.date}</span>
                    <span>✍️ By: ${notice.author}</span>
                </div>
            </div>
        </div>
    `).join('');
}

function switchNoticeTab(tabName) {
    document.querySelectorAll(".notice-tab-content").forEach(tab => tab.classList.remove("active"));
    document.getElementById(`${tabName}-notice`).classList.add("active");
    
    document.querySelectorAll(".notice-tabs .tab-btn").forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");
}

function publishNotice() {
    const title = document.getElementById("noticeTitle").value;
    const description = document.getElementById("noticeDescription").value;
    const target = document.getElementById("noticeTarget").value;
    const priority = document.getElementById("noticePriority").value;
    
    if (!title || !description || !target) {
        alert("⚠️ Please fill all required fields!");
        return;
    }
    
    const newNotice = {
        id: `NOT${String(noticesData.length + 1).padStart(3, '0')}`,
        title,
        description,
        target,
        priority,
        date: new Date().toISOString().split('T')[0],
        author: "HOD"
    };
    
    noticesData.unshift(newNotice);
    loadNotices();
    
    document.getElementById("noticeSuccess").style.display = "block";
    document.getElementById("noticeForm").reset();
    
    setTimeout(() => {
        document.getElementById("noticeSuccess").style.display = "none";
    }, 3000);
}

function loadSpecificTargetOptions(type) {
    const select = document.getElementById("specificTarget");
    if (type === "semester") {
        select.innerHTML = `
            <option value="1">Semester 1</option>
            <option value="2">Semester 2</option>
            <option value="3">Semester 3</option>
            <option value="4">Semester 4</option>
            <option value="5">Semester 5</option>
            <option value="6">Semester 6</option>
            <option value="7">Semester 7</option>
            <option value="8">Semester 8</option>
        `;
    } else if (type === "division") {
        select.innerHTML = `
            <option value="A">Division A</option>
            <option value="B">Division B</option>
            <option value="C">Division C</option>
        `;
    }
}

function previewNotice() {
    const title = document.getElementById("noticeTitle").value;
    const description = document.getElementById("noticeDescription").value;
    
    if (!title || !description) {
        alert("⚠️ Please enter title and description first!");
        return;
    }
    
    alert(`📢 Notice Preview:\n\nTitle: ${title}\n\nDescription: ${description}`);
}

function searchNotices() {
    const searchTerm = document.getElementById("noticeSearch").value.toLowerCase();
    const filtered = noticesData.filter(n => 
        n.title.toLowerCase().includes(searchTerm) || n.description.toLowerCase().includes(searchTerm)
    );
    displayNoticesHistory(filtered);
}

function filterNotices() {
    const targetFilter = document.getElementById("noticeTargetFilter").value;
    const filtered = targetFilter ? noticesData.filter(n => n.target === targetFilter) : noticesData;
    displayNoticesHistory(filtered);
}

// ============================================
// FEEDBACK REVIEW
// ============================================
function loadFeedback() {
    displayFeedback(feedbackData);
    
    // Populate teacher filter
    const teacherFilter = document.getElementById("feedbackTeacherFilter");
    if (teacherFilter) {
        const uniqueTeachers = [...new Set(feedbackData.map(f => f.teacherName))];
        teacherFilter.innerHTML = '<option value="">All Teachers</option>' +
            uniqueTeachers.map(t => `<option value="${t}">${t}</option>`).join('');
    }
    
    // Populate subject filter
    const subjectFilter = document.getElementById("feedbackSubjectFilter");
    if (subjectFilter) {
        const uniqueSubjects = [...new Set(feedbackData.map(f => f.subject))];
        subjectFilter.innerHTML = '<option value="">All Subjects</option>' +
            uniqueSubjects.map(s => `<option value="${s}">${s}</option>`).join('');
    }
}

function displayFeedback(feedback) {
    const list = document.getElementById("feedbackList");
    if (!list) return;
    
    list.innerHTML = feedback.map(fb => {
        const stars = '⭐'.repeat(Math.floor(fb.rating)) + (fb.rating % 1 >= 0.5 ? '⭐' : '');
        return `
            <div class="feedback-card">
                <div class="feedback-card-header">
                    <span class="teacher-name">${fb.teacherName}</span>
                    <span class="rating">${stars} ${fb.rating}/5.0</span>
                </div>
                <div class="feedback-card-body">
                    <p>${fb.comment}</p>
                </div>
                <div class="feedback-card-footer">
                    <span>📚 ${fb.subject}</span>
                    <span>👥 ${fb.studentCount} responses</span>
                    <span>📖 Semester ${fb.semester}</span>
                </div>
            </div>
        `;
    }).join('');
}

function filterFeedback() {
    const teacherFilter = document.getElementById("feedbackTeacherFilter").value;
    const ratingFilter = document.getElementById("feedbackRatingFilter").value;
    const subjectFilter = document.getElementById("feedbackSubjectFilter").value;
    
    let filtered = feedbackData;
    if (teacherFilter) filtered = filtered.filter(f => f.teacherName === teacherFilter);
    if (ratingFilter) filtered = filtered.filter(f => Math.floor(f.rating) == ratingFilter);
    if (subjectFilter) filtered = filtered.filter(f => f.subject === subjectFilter);
    
    displayFeedback(filtered);
}

// ============================================
// MODAL FUNCTIONS
// ============================================
function openModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.add("show");
    }
}

function closeModal(modalId) {
    const modal = document.getElementById(modalId);
    if (modal) {
        modal.classList.remove("show");
    }
    
    // Reset rejection form if closing proxy modal
    if (modalId === "proxyActionModal") {
        document.getElementById("rejectionReasonGroup").style.display = "none";
        document.getElementById("rejectionReason").value = "";
    }
}

// Close modal when clicking outside
window.onclick = function(event) {
    if (event.target.classList.contains('modal')) {
        event.target.classList.remove('show');
    }
}

// ============================================
// TEACHER ATTENDANCE MANAGEMENT
// ============================================
let teacherAttendanceData = {};
let teacherAttendanceHistory = [
    {
        teacherId: 1,
        teacherName: "Dr. Amit Kumar",
        totalDays: 22,
        present: 20,
        absent: 1,
        leave: 1,
        percentage: 90.9
    },
    {
        teacherId: 2,
        teacherName: "Prof. Priya Sharma",
        totalDays: 22,
        present: 22,
        absent: 0,
        leave: 0,
        percentage: 100
    },
    {
        teacherId: 3,
        teacherName: "Dr. Rajesh Patel",
        totalDays: 22,
        present: 19,
        absent: 2,
        leave: 1,
        percentage: 86.4
    },
    {
        teacherId: 4,
        teacherName: "Ms. Anjali Verma",
        totalDays: 22,
        present: 21,
        absent: 0,
        leave: 1,
        percentage: 95.5
    }
];

function loadTeacherAttendance() {
    const dateInput = document.getElementById("teacherAttendanceDate");
    const selectedDate = dateInput.value || new Date().toISOString().split('T')[0];
    dateInput.value = selectedDate;

    const grid = document.getElementById("teacherAttendanceGrid");
    if (!grid) return;

    grid.innerHTML = "";
    teacherAttendanceData = {};

    teachersData.forEach(teacher => {
        teacherAttendanceData[teacher.id] = "present"; // Default

        const card = document.createElement("div");
        card.className = "teacher-attendance-card";
        card.innerHTML = `
            <div class="teacher-info">
                <div class="teacher-avatar">${teacher.avatar}</div>
                <div class="teacher-details">
                    <h4>${teacher.name}</h4>
                    <p>${teacher.subject}</p>
                </div>
            </div>
            <div class="attendance-options">
                <button class="attendance-btn present active" onclick="markTeacherAttendance(${teacher.id}, 'present')">
                    ✅ Present
                </button>
                <button class="attendance-btn absent" onclick="markTeacherAttendance(${teacher.id}, 'absent')">
                    ❌ Absent
                </button>
                <button class="attendance-btn leave" onclick="markTeacherAttendance(${teacher.id}, 'leave')">
                    🏖️ Leave
                </button>
            </div>
        `;
        grid.appendChild(card);
    });

    updateTeacherAttendanceStats();
    loadTeacherAttendanceHistory();
}

function markTeacherAttendance(teacherId, status) {
    teacherAttendanceData[teacherId] = status;

    // Update UI - toggle active class
    const card = event.target.closest(".teacher-attendance-card");
    const buttons = card.querySelectorAll(".attendance-btn");
    buttons.forEach(btn => btn.classList.remove("active"));
    event.target.classList.add("active");

    updateTeacherAttendanceStats();
}

function updateTeacherAttendanceStats() {
    let presentCount = 0;
    let absentCount = 0;
    let leaveCount = 0;

    Object.values(teacherAttendanceData).forEach(status => {
        if (status === "present") presentCount++;
        else if (status === "absent") absentCount++;
        else if (status === "leave") leaveCount++;
    });

    document.getElementById("teacherPresentCount").textContent = presentCount;
    document.getElementById("teacherAbsentCount").textContent = absentCount;
    document.getElementById("teacherLeaveCount").textContent = leaveCount;
}

function saveTeacherAttendance() {
    const dateInput = document.getElementById("teacherAttendanceDate");
    const selectedDate = dateInput.value;

    if (!selectedDate) {
        alert("⚠️ Please select a date first!");
        return;
    }

    if (Object.keys(teacherAttendanceData).length === 0) {
        alert("⚠️ No attendance data to save!");
        return;
    }

    alert(`✅ Teacher Attendance saved successfully for ${selectedDate}!\n\nPresent: ${document.getElementById("teacherPresentCount").textContent}\nAbsent: ${document.getElementById("teacherAbsentCount").textContent}\nLeave: ${document.getElementById("teacherLeaveCount").textContent}`);
    
    // In real app, send data to backend
    console.log("Saving attendance:", {
        date: selectedDate,
        attendance: teacherAttendanceData
    });
}

function resetTeacherAttendance() {
    if (confirm("Are you sure you want to reset all attendance marks?")) {
        loadTeacherAttendance();
    }
}

function loadTeacherAttendanceHistory() {
    const tbody = document.getElementById("teacherAttendanceHistoryBody");
    if (!tbody) return;

    // Populate teacher filter dropdown
    const teacherFilter = document.getElementById("teacherFilterSelect");
    if (teacherFilter && teacherFilter.options.length === 1) {
        teachersData.forEach(teacher => {
            const option = document.createElement("option");
            option.value = teacher.id;
            option.textContent = teacher.name;
            teacherFilter.appendChild(option);
        });
    }

    tbody.innerHTML = "";
    teacherAttendanceHistory.forEach(record => {
        const row = document.createElement("tr");
        row.innerHTML = `
            <td>${record.teacherName}</td>
            <td>${record.totalDays}</td>
            <td><span class="status-badge present">${record.present}</span></td>
            <td><span class="status-badge rejected">${record.absent}</span></td>
            <td><span class="status-badge pending">${record.leave}</span></td>
            <td><strong>${record.percentage}%</strong></td>
            <td>
                <button class="btn-icon" onclick="viewTeacherAttendanceDetails(${record.teacherId})" title="View Details">
                    👁️
                </button>
            </td>
        `;
        tbody.appendChild(row);
    });
}

function filterTeacherAttendanceHistory() {
    const teacherFilter = document.getElementById("teacherFilterSelect").value;
    const monthFilter = document.getElementById("monthFilterSelect").value;

    console.log("Filtering by:", { teacher: teacherFilter, month: monthFilter });
    // In real app, filter the history data and reload
    loadTeacherAttendanceHistory();
}

function viewTeacherAttendanceDetails(teacherId) {
    const teacher = teachersData.find(t => t.id === teacherId);
    const record = teacherAttendanceHistory.find(r => r.teacherId === teacherId);
    
    if (teacher && record) {
        alert(`📊 Detailed Attendance Report\n\nTeacher: ${teacher.name}\nSubject: ${teacher.subject}\n\nTotal Days: ${record.totalDays}\nPresent: ${record.present}\nAbsent: ${record.absent}\nLeave: ${record.leave}\nPercentage: ${record.percentage}%\n\nDetailed day-by-day view - Coming Soon!`);
    }
}

// ============================================
// PROFILE FUNCTIONS
// ============================================
function editProfile() {
    alert("✏️ Edit Profile feature - Coming Soon!");
}

// ============================================
// LOGOUT
// ============================================
function logoutHOD() {
    if (confirm("Are you sure you want to logout?")) {
        alert("🚪 Logging out...\n\nRedirecting to login page.");
        // window.location.href = "../login.html";
    }
}

// ============================================
// UTILITY FUNCTIONS
// ============================================
window.toggleSidebar = toggleSidebar;
window.toggleNotifications = toggleNotifications;
window.logoutHOD = logoutHOD;
window.showSection = showSection;
window.markAllRead = markAllRead;

// Make all functions globally accessible
window.searchTeachers = searchTeachers;
window.filterTeachers = filterTeachers;
window.viewTeacherDetails = viewTeacherDetails;
window.openAssignSubjectModal = openAssignSubjectModal;
window.confirmAssignSubject = confirmAssignSubject;
window.toggleTeacherStatus = toggleTeacherStatus;
window.openAddTeacherModal = openAddTeacherModal;

window.filterStudents = filterStudents;
window.searchStudents = searchStudents;
window.viewStudentDetails = viewStudentDetails;
window.downloadStudentCSV = downloadStudentCSV;
window.prevStudentPage = prevStudentPage;
window.nextStudentPage = nextStudentPage;
window.viewStudentIssues = viewStudentIssues;

// Teacher Attendance Functions
window.loadTeacherAttendance = loadTeacherAttendance;
window.saveTeacherAttendance = saveTeacherAttendance;
window.resetTeacherAttendance = resetTeacherAttendance;
window.markTeacherAttendance = markTeacherAttendance;
window.filterTeacherAttendanceHistory = filterTeacherAttendanceHistory;
window.viewTeacherAttendanceDetails = viewTeacherAttendanceDetails;

window.switchAttendanceTab = switchAttendanceTab;
window.viewTeacherReport = viewTeacherReport;

window.filterProxyRequests = filterProxyRequests;
window.resetProxyFilters = resetProxyFilters;
window.approveProxyDirect = approveProxyDirect;
window.openProxyActionModal = openProxyActionModal;
window.approveProxy = approveProxy;
window.showRejectForm = showRejectForm;

window.filterIssues = filterIssues;
window.openIssueActionModal = openIssueActionModal;
window.resolveIssueDirect = resolveIssueDirect;
window.assignIssueToTeacher = assignIssueToTeacher;
window.resolveIssue = resolveIssue;
window.escalateIssue = escalateIssue;

window.switchReportTab = switchReportTab;
window.downloadReport = downloadReport;

window.switchNoticeTab = switchNoticeTab;
window.publishNotice = publishNotice;
window.previewNotice = previewNotice;
window.searchNotices = searchNotices;
window.filterNotices = filterNotices;

window.filterFeedback = filterFeedback;

window.openModal = openModal;
window.closeModal = closeModal;
window.editProfile = editProfile;

console.log("✅ HOD Dashboard fully loaded and ready!");
