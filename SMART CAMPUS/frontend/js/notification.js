// ============================================
// NOTIFICATIONS PAGE LOGIC
// ============================================

// Dummy Notifications Data
const dummyNotifications = [
    {
        id: 1,
        title: "Seminar Announcement",
        message: "Technical seminar on Web Development scheduled for Dec 20, 2024",
        sender: "admin",
        senderName: "Admin",
        date: "2024-12-15",
        read: false
    },
    {
        id: 2,
        title: "Attendance Alert",
        message: "Your attendance has dropped below 75%. Please attend upcoming classes.",
        sender: "teacher",
        senderName: "Dr. Rajesh Kumar",
        date: "2024-12-14",
        read: false
    },
    {
        id: 3,
        title: "Class Announcement",
        message: "Tomorrow's class is shifted to Lab 2 due to maintenance.",
        sender: "cr",
        senderName: "Priya Sharma (CR)",
        date: "2024-12-13",
        read: true
    },
    {
        id: 4,
        title: "Exam Schedule Released",
        message: "End semester exam schedule has been released. Check your portal.",
        sender: "admin",
        senderName: "Admin",
        date: "2024-12-12",
        read: true
    },
    {
        id: 5,
        title: "Lab Report Deadline",
        message: "Submit your Data Structures lab report by Dec 18, 2024.",
        sender: "teacher",
        senderName: "Prof. Priya Singh",
        date: "2024-12-11",
        read: true
    },
    {
        id: 6,
        title: "Proxy Request Status",
        message: "Your proxy attendance request for Data Structures has been approved!",
        sender: "cr",
        senderName: "Priya Sharma (CR)",
        date: "2024-12-10",
        read: true
    },
    {
        id: 7,
        title: "New Assignment Posted",
        message: "New assignment on Python programming has been posted.",
        sender: "teacher",
        senderName: "Dr. Neha Gupta",
        date: "2024-12-09",
        read: true
    },
    {
        id: 8,
        title: "Library Book Issue Alert",
        message: "You have 3 overdue books. Please return them immediately.",
        sender: "admin",
        senderName: "Admin",
        date: "2024-12-08",
        read: true
    }
];

let currentFilter = "all";

// PAGE INITIALIZATION
document.addEventListener("DOMContentLoaded", function() {
    renderNotifications();
    setupEventListeners();
    updateUnreadCount();
});

// ============================================
// RENDER NOTIFICATIONS
// ============================================
function renderNotifications() {
    const container = document.getElementById("notificationsContainer");
    const emptyState = document.getElementById("emptyState");
    
    container.innerHTML = "";

    // Filter notifications based on current filter
    let filtered = dummyNotifications;
    
    if (currentFilter === "unread") {
        filtered = dummyNotifications.filter(n => !n.read);
    } else if (currentFilter === "admin") {
        filtered = dummyNotifications.filter(n => n.sender === "admin");
    } else if (currentFilter === "teacher") {
        filtered = dummyNotifications.filter(n => n.sender === "teacher");
    } else if (currentFilter === "cr") {
        filtered = dummyNotifications.filter(n => n.sender === "cr");
    }

    // Show empty state if no notifications
    if (filtered.length === 0) {
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    // Render notifications
    filtered.forEach(notification => {
        const notifElement = document.createElement("div");
        notifElement.className = `notification-item ${!notification.read ? 'unread' : ''}`;
        notifElement.innerHTML = `
            <div class="notification-content">
                <div class="notification-header">
                    <h3 class="notification-title">${notification.title}</h3>
                    <span class="sender-badge sender-${notification.sender}">${getSenderBadge(notification.sender)}</span>
                </div>
                <p class="notification-message">${notification.message}</p>
                <div class="notification-footer">
                    <span class="notification-sender">From: ${notification.senderName}</span>
                    <span class="notification-date">${notification.date}</span>
                </div>
            </div>
            <div class="notification-actions">
                ${!notification.read ? `<button class="btn-mark-read" onclick="markAsRead(${notification.id})" title="Mark as read">✓</button>` : ''}
                <button class="btn-delete" onclick="deleteNotification(${notification.id})" title="Delete">✕</button>
            </div>
        `;
        container.appendChild(notifElement);
    });
}

// ============================================
// GET SENDER BADGE TEXT
// ============================================
function getSenderBadge(sender) {
    const badges = {
        "admin": "👨‍💼 Admin",
        "teacher": "👨‍🏫 Teacher",
        "cr": "👑 Class Rep"
    };
    return badges[sender] || sender;
}

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Filter buttons
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            // Remove active class from all buttons
            filterButtons.forEach(b => b.classList.remove("active"));
            // Add active class to clicked button
            this.classList.add("active");
            // Update filter and re-render
            currentFilter = this.dataset.filter;
            renderNotifications();
        });
    });

    // Mark all as read
    document.getElementById("markAllReadBtn").addEventListener("click", markAllAsRead);

    // Clear all
    document.getElementById("clearAllBtn").addEventListener("click", clearAllNotifications);
}

// ============================================
// MARK AS READ
// ============================================
function markAsRead(notificationId) {
    const notification = dummyNotifications.find(n => n.id === notificationId);
    if (notification) {
        notification.read = true;
        renderNotifications();
        updateUnreadCount();
    }
}

// ============================================
// MARK ALL AS READ
// ============================================
function markAllAsRead() {
    dummyNotifications.forEach(n => n.read = true);
    renderNotifications();
    updateUnreadCount();
    alert("✅ All notifications marked as read!");
}

// ============================================
// DELETE NOTIFICATION
// ============================================
function deleteNotification(notificationId) {
    const index = dummyNotifications.findIndex(n => n.id === notificationId);
    if (index > -1) {
        dummyNotifications.splice(index, 1);
        renderNotifications();
        updateUnreadCount();
    }
}

// ============================================
// CLEAR ALL NOTIFICATIONS
// ============================================
function clearAllNotifications() {
    if (confirm("Are you sure you want to delete all notifications? This cannot be undone.")) {
        dummyNotifications.length = 0;
        renderNotifications();
        updateUnreadCount();
        alert("✅ All notifications cleared!");
    }
}

// ============================================
// UPDATE UNREAD COUNT
// ============================================
function updateUnreadCount() {
    const unreadCount = dummyNotifications.filter(n => !n.read).length;
    document.getElementById("unreadCount").textContent = unreadCount;
}

// ============================================
// OPEN NOTIFICATION DETAILS (Optional Modal)
// ============================================
function openNotificationDetails(notificationId) {
    const notification = dummyNotifications.find(n => n.id === notificationId);
    if (!notification) return;

    const modal = document.getElementById("notificationModal");
    const modalBody = document.getElementById("modalBody");

    modalBody.innerHTML = `
        <div class="notification-detail">
            <h2>${notification.title}</h2>
            <p><strong>From:</strong> ${notification.senderName}</p>
            <p><strong>Date:</strong> ${notification.date}</p>
            <hr>
            <p>${notification.message}</p>
            <div class="detail-actions">
                <button class="btn btn-primary" onclick="markAsRead(${notification.id}); closeModal();">Mark as Read</button>
                <button class="btn btn-danger" onclick="deleteNotification(${notification.id}); closeModal();">Delete</button>
            </div>
        </div>
    `;

    modal.style.display = "block";
}

// ============================================
// CLOSE MODAL
// ============================================
function closeModal() {
    document.getElementById("notificationModal").style.display = "none";
}

// Close modal when clicking outside
window.addEventListener("click", function(event) {
    const modal = document.getElementById("notificationModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// Close modal with close button
document.addEventListener("DOMContentLoaded", function() {
    const closeBtn = document.querySelector(".close-modal");
    if (closeBtn) {
        closeBtn.addEventListener("click", closeModal);
    }
});
