// ============================================
// ACTIVITY HISTORY PAGE LOGIC
// ============================================

// Dummy Activity Data
const dummyActivities = [
    {
        id: 1,
        type: "Attendance",
        title: "Marked Present in Data Structures",
        description: "Attendance marked for Lecture 5 of Data Structures class.",
        date: "2024-12-16",
        time: "10:30 AM",
        icon: "✓"
    },
    {
        id: 2,
        type: "Proxy",
        title: "Proxy Request Submitted",
        description: "Proxy attendance request submitted for Web Development on 2024-12-15",
        date: "2024-12-16",
        time: "09:15 AM",
        icon: "🎫"
    },
    {
        id: 3,
        type: "Feedback",
        title: "Feedback Submitted",
        description: "Submitted feedback for Dr. Rajesh Kumar with 5-star rating",
        date: "2024-12-15",
        time: "02:45 PM",
        icon: "💬"
    },
    {
        id: 4,
        type: "Attendance",
        title: "Marked Present in Python Programming",
        description: "Attendance marked for Lecture 3 of Python Programming class.",
        date: "2024-12-15",
        time: "11:00 AM",
        icon: "✓"
    },
    {
        id: 5,
        type: "Issue",
        title: "Issue Raised",
        description: "Raised issue: Lab Sessions Timing Issue (Priority: High)",
        date: "2024-12-14",
        time: "03:20 PM",
        icon: "🆘"
    },
    {
        id: 6,
        type: "Proxy",
        title: "Proxy Request Approved",
        description: "Your proxy request for Database Management has been approved by CR and forwarded to teacher.",
        date: "2024-12-13",
        time: "10:00 AM",
        icon: "✅"
    },
    {
        id: 7,
        type: "Attendance",
        title: "Marked Present in Operating Systems",
        description: "Attendance marked for Lecture 2 of Operating Systems class.",
        date: "2024-12-12",
        time: "09:45 AM",
        icon: "✓"
    },
    {
        id: 8,
        type: "Feedback",
        title: "Feedback Submitted",
        description: "Submitted feedback for Database Management subject with 4-star rating",
        date: "2024-12-10",
        time: "04:15 PM",
        icon: "💬"
    },
    {
        id: 9,
        type: "Attendance",
        title: "Marked Present in Discrete Mathematics",
        description: "Attendance marked for Lecture 1 of Discrete Mathematics class.",
        date: "2024-12-09",
        time: "02:00 PM",
        icon: "✓"
    },
    {
        id: 10,
        type: "Issue",
        title: "Issue Status Updated",
        description: "Your issue 'Wi-Fi Connection Problem' status changed to In Progress",
        date: "2024-12-08",
        time: "11:30 AM",
        icon: "📋"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    displayActivityTimeline();
});

// ============================================
// DISPLAY ACTIVITY TIMELINE
// ============================================
function displayActivityTimeline() {
    const timeline = document.getElementById("activityTimeline");
    timeline.innerHTML = "";

    const activityTypeIcons = {
        "Attendance": "📍",
        "Proxy": "🎫",
        "Feedback": "💬",
        "Issue": "🆘",
        "Announcement": "📢",
        "General": "📌"
    };

    const activityTypeBadgeColor = {
        "Attendance": "badge-attendance",
        "Proxy": "badge-proxy",
        "Feedback": "badge-feedback",
        "Issue": "badge-issue"
    };

    dummyActivities.forEach(activity => {
        const timelineItem = document.createElement("div");
        timelineItem.className = "timeline-item";
        
        const badgeClass = activityTypeBadgeColor[activity.type] || "badge-attendance";
        const icon = activityTypeIcons[activity.type] || "📌";

        timelineItem.innerHTML = `
            <div class="timeline-content">
                <div style="display: flex; align-items: center; gap: 0.5rem; margin-bottom: 0.5rem;">
                    <span>${icon}</span>
                    <h3 style="margin: 0;">${activity.title}</h3>
                    <span class="activity-badge ${badgeClass}">${activity.type}</span>
                </div>
                <p>${activity.description}</p>
                <div class="timeline-date">
                    📅 ${activity.date} at ${activity.time}
                </div>
            </div>
        `;
        timeline.appendChild(timelineItem);
    });
}
