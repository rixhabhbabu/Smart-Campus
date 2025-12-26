// ============================================
// STUDENT DASHBOARD LOGIC
// ============================================

// Sidebar Toggle Function
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    sidebar.classList.toggle('collapsed');
    
    // On mobile, close sidebar when clicking a menu item
    if (window.innerWidth <= 768) {
        const menuItems = document.querySelectorAll('.menu-item');
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                sidebar.classList.add('collapsed');
            });
        });
    }
    
    // Update toggle button icon
    const toggleBtn = document.getElementById('sidebarToggle');
    if (sidebar.classList.contains('collapsed')) {
        toggleBtn.textContent = '☰';
    } else {
        toggleBtn.textContent = '✕';
    }
}

// Close sidebar when clicking outside on mobile
document.addEventListener('click', function(event) {
    if (window.innerWidth <= 768) {
        const sidebar = document.querySelector('.sidebar');
        const toggleBtn = document.getElementById('sidebarToggle');
        const container = document.querySelector('.container');
        
        // Check if clicking on overlay (outside sidebar)
        if (!sidebar.contains(event.target) && !toggleBtn.contains(event.target)) {
            if (!sidebar.classList.contains('collapsed')) {
                sidebar.classList.add('collapsed');
                toggleBtn.textContent = '☰';
            }
        }
    }
}, { passive: true });

// Close sidebar when clicking menu items on mobile
document.addEventListener('DOMContentLoaded', function() {
    if (window.innerWidth <= 768) {
        const menuItems = document.querySelectorAll('.menu-item');
        const sidebar = document.querySelector('.sidebar');
        const toggleBtn = document.getElementById('sidebarToggle');
        
        menuItems.forEach(item => {
            item.addEventListener('click', function() {
                sidebar.classList.add('collapsed');
                if (toggleBtn) {
                    toggleBtn.textContent = '☰';
                }
            });
        });
    }
});

// Initialize sidebar as collapsed on mobile
if (window.innerWidth <= 768) {
    const sidebar = document.querySelector('.sidebar');
    if (sidebar) {
        sidebar.classList.add('collapsed');
    }
}

// Handle window resize - reset sidebar state
let resizeTimer;
window.addEventListener('resize', function() {
    clearTimeout(resizeTimer);
    resizeTimer = setTimeout(function() {
        const sidebar = document.querySelector('.sidebar');
        if (window.innerWidth > 768) {
            // Desktop - show sidebar
            sidebar.classList.remove('collapsed');
        } else {
            // Mobile - collapse sidebar
            sidebar.classList.add('collapsed');
        }
        
        // Update toggle button
        const toggleBtn = document.getElementById('sidebarToggle');
        if (sidebar.classList.contains('collapsed')) {
            toggleBtn.textContent = '☰';
        } else {
            toggleBtn.textContent = '✕';
        }
    }, 250);
});

// Handle orientation change
window.addEventListener('orientationchange', function() {
    setTimeout(function() {
        if (window.innerWidth <= 768) {
            const sidebar = document.querySelector('.sidebar');
            sidebar.classList.add('collapsed');
        }
    }, 300);
});

// Prevent accidental zoom on double tap (iOS)
let lastTouchEnd = 0;
document.addEventListener('touchend', function(event) {
    const now = Date.now();
    if (now - lastTouchEnd <= 300) {
        event.preventDefault();
    }
    lastTouchEnd = now;
}, { passive: false });

// Expose globally
window.toggleSidebar = toggleSidebar;

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
    rollNumber: "21",
    gpa: 3.8
};

// Dummy Notifications
const dummyNotifications = [
    {
        id: "NOT001",
        type: "announcement",
        title: "Mid-Semester Exams Schedule Released",
        message: "Mid-semester exams will be held from 2024-12-27 to 2025-01-10. Check your exam timetable.",
        timestamp: "2024-12-24 10:30 AM",
        read: false,
        icon: "📢"
    },
    {
        id: "NOT002",
        type: "assignment",
        title: "New Assignment: Web Development Project",
        message: "Dr. Rajesh Kumar has uploaded a new assignment. Deadline: 2024-12-30",
        timestamp: "2024-12-23 02:15 PM",
        read: false,
        icon: "📝"
    },
    {
        id: "NOT003",
        type: "attendance",
        title: "Low Attendance Alert",
        message: "Your attendance in Data Structures is 78%. Please attend more classes.",
        timestamp: "2024-12-22 09:00 AM",
        read: true,
        icon: "⚠️"
    },
    {
        id: "NOT004",
        type: "class",
        title: "Online Class Reminder - Database Management",
        message: "Class will be held tomorrow at 11:00 AM. Join using the link in Online Classes section.",
        timestamp: "2024-12-21 04:45 PM",
        read: true,
        icon: "🎥"
    },
    {
        id: "NOT005",
        type: "result",
        title: "Results Published - Quiz 2",
        message: "Results for Quiz 2 have been published. Check the Results section for details.",
        timestamp: "2024-12-20 01:20 PM",
        read: true,
        icon: "📊"
    },
    {
        id: "NOT006",
        type: "system",
        title: "Portal Maintenance Scheduled",
        message: "The Smart Campus portal will be under maintenance on 2024-12-25 from 11:00 PM to 01:00 AM.",
        timestamp: "2024-12-19 05:00 PM",
        read: true,
        icon: "🔧"
    }
];

// PAGE INITIALIZATION
document.addEventListener("DOMContentLoaded", function() {
    console.log("DOMContentLoaded - Initializing Student Dashboard");
    
    // Check if user is CR and show CR Panel
    checkAndShowCRPanel();
    
    // Theme handled by theme.js — only sync toggle icon here
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        const themeToggleBtn = document.getElementById("themeToggle");
        if (themeToggleBtn) {
            themeToggleBtn.textContent = "☀️";
        }
    }
    
    loadStudentDashboard();
    setupEventListeners();
    loadNotifications();
});

// ============================================
// STUDENT DASHBOARD FUNCTIONS
// ============================================
function loadStudentDashboard() {
    // Load student info in navbar
    const studentName = document.getElementById("studentName");
    if (studentName) studentName.textContent = dummyStudent.name;
    
    // Dashboard stats
    const dashAttendance = document.getElementById("dashAttendance");
    const dashSubjects = document.getElementById("dashSubjects");
    const dashAssignments = document.getElementById("dashAssignments");
    const dashGPA = document.getElementById("dashGPA");
    
    if (dashAttendance) dashAttendance.textContent = dummyStudent.attendance + "%";
    if (dashSubjects) dashSubjects.textContent = dummyStudent.totalSubjects;
    if (dashAssignments) dashAssignments.textContent = "3";
    if (dashGPA) dashGPA.textContent = dummyStudent.gpa;
}

function setupEventListeners() {
    console.log("Setting up event listeners...");
    
    // Logout buttons
    const logoutBtn = document.getElementById("logoutBtn");
    const profileLogoutBtn = document.getElementById("profileLogoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", logoutStudent);
    }
    if (profileLogoutBtn) {
        profileLogoutBtn.addEventListener("click", logoutStudent);
    }
    
    // Navigation menu items - Click handlers
    const menuItems = document.querySelectorAll(".menu-item");
    console.log("Found " + menuItems.length + " menu items");
    
    menuItems.forEach((item, index) => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const sectionId = this.getAttribute("data-section");
            console.log("Menu item clicked, section: " + sectionId);
            showSection(sectionId);
        });
    });
    
    // Form submissions
    const proxyForm = document.getElementById("proxyForm");
    const issueForm = document.getElementById("issueForm");
    const feedbackForm = document.getElementById("feedbackForm");
    
    if (proxyForm) proxyForm.addEventListener("submit", submitProxy);
    if (issueForm) issueForm.addEventListener("submit", submitIssue);
    if (feedbackForm) feedbackForm.addEventListener("submit", submitFeedback);
}

// ============================================
// LOAD NOTIFICATIONS
// ============================================
function loadNotifications() {
    const notificationsContainer = document.getElementById("notificationsContainer");
    
    if (!notificationsContainer) {
        console.warn("Notifications container not found");
        return;
    }
    
    if (dummyNotifications.length === 0) {
        notificationsContainer.innerHTML = '<p style="text-align: center; color: #999; padding: 2rem;">No notifications</p>';
        return;
    }
    
    notificationsContainer.innerHTML = "";
    
    dummyNotifications.forEach(notification => {
        const notifCard = document.createElement("div");
        notifCard.className = "notification-card " + (notification.read ? "" : "unread");
        notifCard.innerHTML = `
            <div class="notification-header">
                <span class="notification-icon">${notification.icon}</span>
                <div class="notification-title-section">
                    <h4 class="notification-title">${notification.title}</h4>
                    <span class="notification-time">${notification.timestamp}</span>
                </div>
                <span class="notification-type-badge ${notification.type}">${notification.type}</span>
            </div>
            <p class="notification-message">${notification.message}</p>
            <div class="notification-actions">
                <button class="btn btn-small btn-primary" onclick="markNotificationRead('${notification.id}')">
                    ${notification.read ? '✓ Read' : 'Mark as Read'}
                </button>
            </div>
        `;
        notificationsContainer.appendChild(notifCard);
    });
}

// Mark notification as read
function markNotificationRead(notificationId) {
    const notification = dummyNotifications.find(n => n.id === notificationId);
    if (notification) {
        notification.read = true;
        loadNotifications();
    }
}

// ============================================
// SECTION NAVIGATION - FIXED
// ============================================
function showSection(sectionId) {
    console.log("showSection: " + sectionId);
    
    if (!sectionId) {
        console.error("No section ID!");
        return;
    }
    
    // Hide all sections
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
        section.classList.remove("active");
    });
    
    // Remove active from menu
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        item.classList.remove("active");
    });
    
    // Show target section
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add("active");
    } else {
        console.error("Section not found: " + sectionId);
        return;
    }
    
    // Mark menu active
    const activeMenuItem = document.querySelector('[data-section="' + sectionId + '"]');
    if (activeMenuItem) {
        activeMenuItem.classList.add("active");
    }
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

// ============================================
// FORM SUBMISSION FUNCTIONS
// ============================================
function submitProxy(e) {
    e.preventDefault();
    alert("✅ Proxy attendance request submitted successfully!");
    e.target.reset();
}

function submitIssue(e) {
    e.preventDefault();
    alert("✅ Issue raised successfully! We will look into it.");
    e.target.reset();
}


// ============================================
// FORM SUBMISSION FUNCTIONS
// ============================================
function submitProxy(e) {
    e.preventDefault();
    alert("✅ Proxy attendance request submitted successfully!");
    e.target.reset();
}

function submitIssue(e) {
    e.preventDefault();
    alert("✅ Issue raised successfully! We will look into it.");
    e.target.reset();
}

function submitFeedback(e) {
    e.preventDefault();
    alert("✅ Thank you for your feedback!");
    e.target.reset();
}

function editProfile() {
    alert("📝 Edit profile functionality coming soon!");
}

// ============================================
// LOGOUT
// ============================================
function logoutStudent() {
    try {
        const currentTheme = localStorage.getItem("theme");
        localStorage.clear();
        if (currentTheme) {
            localStorage.setItem("theme", currentTheme);
        }
    } catch(e) {
        console.log("Error clearing storage");
    }
    window.location.href = "../login.html";
    return false;
}
// ============================================
// CR PANEL FUNCTIONS
// ============================================

// Check if user is CR and show panel
function checkAndShowCRPanel() {
    const isCR = localStorage.getItem("sc_isCR");
    console.log("Checking CR status:", isCR);
    
    if (isCR === "true") {
        // Show CR Tools menu item in sidebar
        const crMenuItem = document.getElementById("crMenuItem");
        if (crMenuItem) {
            crMenuItem.style.display = "block";
            console.log("CR Tools menu item shown");
        }
        
        // Update profile role to show CR badge
        const profileRole = document.getElementById("profileRole");
        if (profileRole) {
            profileRole.innerHTML = "👑 Class Representative";
        }
    } else {
        console.log("Not a CR - Menu item remains hidden");
    }
}

// Make functions globally available
window.checkAndShowCRPanel = checkAndShowCRPanel;

// Approve Proxy Request
function approveProxyRequest(requestId) {
    alert(`✅ Proxy request ${requestId} approved successfully!`);
    // In real app, this would send to backend
    // Remove the card after approval
    event.target.closest('.proxy-request-card').remove();
}
window.approveProxyRequest = approveProxyRequest;

// Reject Proxy Request
function rejectProxyRequest(requestId) {
    const reason = prompt("Enter rejection reason (optional):");
    alert(`❌ Proxy request ${requestId} rejected.`);
    // In real app, this would send to backend
    // Remove the card after rejection
    event.target.closest('.proxy-request-card').remove();
}
window.rejectProxyRequest = rejectProxyRequest;

// Handle CR Announcement Form
const crAnnouncementFormInit = () => {
    const crAnnouncementForm = document.getElementById("crAnnouncementForm");
    if (crAnnouncementForm) {
        crAnnouncementForm.addEventListener("submit", function(e) {
            e.preventDefault();
            const title = document.getElementById("announcementTitle").value;
            const message = document.getElementById("announcementMessage").value;
            
            alert(`📢 Announcement sent to entire class!\n\nTitle: ${title}\nMessage: ${message}`);
            
            // Clear form
            e.target.reset();
        });
    }
};

// Initialize CR announcement form when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', crAnnouncementFormInit);
} else {
    crAnnouncementFormInit();
}