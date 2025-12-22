// ============================================
// ANNOUNCEMENTS PAGE LOGIC
// ============================================

// Dummy Announcements Data
const dummyAnnouncements = [
    {
        id: 1,
        title: "Semester End Exam Schedule Released",
        message: "End semester examination schedule for 5th semester has been released. Please check the exam timetable section.",
        type: "college",
        sender: "Admin",
        date: "2024-12-16",
        priority: "high"
    },
    {
        id: 2,
        title: "Class Starts 1 Hour Late Tomorrow",
        message: "Due to maintenance work, all classes on 17th December will start 1 hour late. The schedule will resume from 10:00 AM.",
        type: "class",
        sender: "CR - Priya Sharma",
        date: "2024-12-16",
        priority: "high"
    },
    {
        id: 3,
        title: "Technical Seminar on AI & Machine Learning",
        message: "A 3-day technical seminar on 'Artificial Intelligence and Machine Learning' will be conducted from Dec 20-22. Registration is open.",
        type: "college",
        sender: "Admin",
        date: "2024-12-15",
        priority: "medium"
    },
    {
        id: 4,
        title: "Assignment Submission Deadline Extended",
        message: "The deadline for Data Structures assignment has been extended to December 20. Submit your work by 5 PM on that date.",
        type: "dept",
        sender: "Dr. Rajesh Kumar",
        date: "2024-12-14",
        priority: "medium"
    },
    {
        id: 5,
        title: "Library Extended Hours During Exam Season",
        message: "The library will remain open until 10 PM during the exam period. Additional study materials have been added.",
        type: "college",
        sender: "Admin",
        date: "2024-12-13",
        priority: "low"
    },
    {
        id: 6,
        title: "Guest Lecture: Industry Expert on Web Development",
        message: "Industry expert will deliver a guest lecture on 'Modern Web Development Trends' on 19th December at 2 PM in Main Auditorium.",
        type: "dept",
        sender: "HOD - Computer Science",
        date: "2024-12-12",
        priority: "medium"
    },
    {
        id: 7,
        title: "Campus Placement Drive - Tech Companies",
        message: "Major tech companies are visiting campus for recruitment. Eligible students can register for interviews on the portal.",
        type: "college",
        sender: "Admin",
        date: "2024-12-10",
        priority: "high"
    },
    {
        id: 8,
        title: "Document Submission for Graduation",
        message: "Final year students must submit required documents by December 25 for graduation processing.",
        type: "college",
        sender: "Admin",
        date: "2024-12-09",
        priority: "high"
    }
];

let currentAnnouncementFilter = "all";

document.addEventListener("DOMContentLoaded", function() {
    renderAnnouncements();
    setupFilterButtons();
});

// ============================================
// RENDER ANNOUNCEMENTS
// ============================================
function renderAnnouncements() {
    const container = document.getElementById("announcementsContainer");
    const emptyState = document.getElementById("emptyState");

    container.innerHTML = "";

    // Filter announcements
    let filtered = dummyAnnouncements;
    if (currentAnnouncementFilter !== "all") {
        filtered = dummyAnnouncements.filter(a => a.type === currentAnnouncementFilter);
    }

    if (filtered.length === 0) {
        emptyState.style.display = "block";
        return;
    }

    emptyState.style.display = "none";

    // Sort by date (newest first)
    filtered.sort((a, b) => new Date(b.date) - new Date(a.date));

    filtered.forEach(announcement => {
        const priorityColor = {
            "high": "#dc3545",
            "medium": "#ffc107",
            "low": "#28a745"
        };

        const announcementEl = document.createElement("div");
        announcementEl.className = "notification-item";
        announcementEl.style.cssText = `
            background: #f8f9fa;
            border-left-color: ${priorityColor[announcement.priority]};
        `;
        announcementEl.innerHTML = `
            <div class="notification-content">
                <div class="notification-header">
                    <h3 class="notification-title">${announcement.title}</h3>
                    <span class="sender-badge" style="background: ${priorityColor[announcement.priority]}; color: white;">
                        ${announcement.priority.toUpperCase()}
                    </span>
                </div>
                <p class="notification-message">${announcement.message}</p>
                <div class="notification-footer">
                    <span class="notification-sender">From: ${announcement.sender}</span>
                    <span class="notification-date">${announcement.date}</span>
                </div>
            </div>
        `;
        container.appendChild(announcementEl);
    });
}

// ============================================
// SETUP FILTER BUTTONS
// ============================================
function setupFilterButtons() {
    const filterButtons = document.querySelectorAll(".filter-btn");
    filterButtons.forEach(btn => {
        btn.addEventListener("click", function() {
            filterButtons.forEach(b => b.classList.remove("active"));
            this.classList.add("active");
            currentAnnouncementFilter = this.dataset.filter;
            renderAnnouncements();
        });
    });
}
