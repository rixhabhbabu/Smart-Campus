// ============================================
// ONLINE CLASSES PAGE LOGIC
// ============================================

// Dummy Classes Data
const classesData = [
    {
        id: "CLASS001",
        subject: "Data Structures",
        title: "Introduction to Linked Lists",
        teacher: "Dr. Rajesh Kumar",
        meetingLink: "https://meet.google.com/abc-defg-hij",
        scheduledDate: "2024-12-23",
        scheduledTime: "10:00 AM",
        status: "Upcoming",
        duration: 60,
        meetingPlatform: "Google Meet",
        recordingAvailable: false,
        recordingLink: null,
        studentsJoined: 0,
        maxCapacity: 60
    },
    {
        id: "CLASS002",
        subject: "Web Development",
        title: "Advanced CSS Grid and Flexbox",
        teacher: "Ms. Priya Singh",
        meetingLink: "https://meet.google.com/xyz-uvwx-yz",
        scheduledDate: "2024-12-22",
        scheduledTime: "2:00 PM",
        status: "Live",
        duration: 90,
        meetingPlatform: "Google Meet",
        recordingAvailable: false,
        recordingLink: null,
        studentsJoined: 32,
        maxCapacity: 60
    },
    {
        id: "CLASS003",
        subject: "Database Management",
        title: "Transaction Management in Databases",
        teacher: "Dr. Amit Patel",
        meetingLink: "https://meet.google.com/pqr-stuv-wx",
        scheduledDate: "2024-12-21",
        scheduledTime: "3:00 PM",
        status: "Recording",
        duration: 75,
        meetingPlatform: "Zoom",
        recordingAvailable: true,
        recordingLink: "https://drive.google.com/file/d/recording",
        studentsJoined: 45,
        maxCapacity: 60
    },
    {
        id: "CLASS004",
        subject: "Data Structures",
        title: "Tree Traversal Techniques",
        teacher: "Dr. Rajesh Kumar",
        meetingLink: "https://meet.google.com/abc-klmn-op",
        scheduledDate: "2024-12-20",
        scheduledTime: "11:00 AM",
        status: "Recording",
        duration: 60,
        meetingPlatform: "Google Meet",
        recordingAvailable: true,
        recordingLink: "https://drive.google.com/file/d/recording2",
        studentsJoined: 58,
        maxCapacity: 60
    },
    {
        id: "CLASS005",
        subject: "Web Development",
        title: "React Hooks & State Management",
        teacher: "Ms. Priya Singh",
        meetingLink: "https://meet.google.com/qrs-tuvw-xy",
        scheduledDate: "2024-12-25",
        scheduledTime: "9:00 AM",
        status: "Upcoming",
        duration: 120,
        meetingPlatform: "Google Meet",
        recordingAvailable: false,
        recordingLink: null,
        studentsJoined: 0,
        maxCapacity: 60
    },
    {
        id: "CLASS006",
        subject: "Database Management",
        title: "Query Optimization Techniques",
        teacher: "Dr. Amit Patel",
        meetingLink: "https://meet.google.com/uvw-xyza-bc",
        scheduledDate: "2024-12-24",
        scheduledTime: "4:00 PM",
        status: "Upcoming",
        duration: 90,
        meetingPlatform: "Zoom",
        recordingAvailable: false,
        recordingLink: null,
        studentsJoined: 0,
        maxCapacity: 60
    }
];

// PAGE INITIALIZATION
document.addEventListener("DOMContentLoaded", function() {
    loadClasses();
    setupEventListeners();
});

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    const statusFilter = document.getElementById("classStatusFilter");
    const subjectFilter = document.getElementById("classSubjectFilter");
    
    if (statusFilter) {
        statusFilter.addEventListener("change", loadClasses);
    }
    if (subjectFilter) {
        subjectFilter.addEventListener("change", loadClasses);
    }
}

// Close modal when clicking outside
window.addEventListener("click", function(event) {
    const modal = document.getElementById("classModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// ============================================
// LOAD & FILTER CLASSES
// ============================================
function loadClasses() {
    const container = document.getElementById("classesContainer");
    const statusFilter = document.getElementById("classStatusFilter").value;
    const subjectFilter = document.getElementById("classSubjectFilter").value;
    
    if (!container) return;
    
    let filteredClasses = classesData;
    
    if (statusFilter) {
        filteredClasses = filteredClasses.filter(c => 
            statusFilter === "Live" ? c.status === "Live" :
            statusFilter === "Recording" ? c.status === "Recording" :
            c.status === statusFilter
        );
    }
    if (subjectFilter) {
        filteredClasses = filteredClasses.filter(c => c.subject === subjectFilter);
    }
    
    // Sort by scheduled date
    filteredClasses.sort((a, b) => new Date(a.scheduledDate) - new Date(b.scheduledDate));
    
    if (filteredClasses.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem 1rem; color: var(--secondary-color); grid-column: 1/-1;">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📭</div>
                <p style="font-size: 1.1rem;">No classes found.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    filteredClasses.forEach(classItem => {
        const statusIcon = getClassStatusIcon(classItem.status);
        const classCard = document.createElement('div');
        classCard.className = `class-card ${classItem.status.toLowerCase()}`;
        
        classCard.innerHTML = `
            <div class="class-header">
                <div class="class-status-badge">${statusIcon}</div>
                <h3>${classItem.title}</h3>
            </div>
            
            <p class="class-subject">📚 ${classItem.subject}</p>
            <p class="class-teacher">👨‍🏫 ${classItem.teacher}</p>
            
            <div class="class-info">
                <div class="info-item">
                    <span class="icon">📅</span>
                    <div>
                        <div class="label">Scheduled</div>
                        <div class="value">${formatClassDate(classItem.scheduledDate)} at ${classItem.scheduledTime}</div>
                    </div>
                </div>
                
                <div class="info-item">
                    <span class="icon">⏱️</span>
                    <div>
                        <div class="label">Duration</div>
                        <div class="value">${classItem.duration} minutes</div>
                    </div>
                </div>
                
                <div class="info-item">
                    <span class="icon">👥</span>
                    <div>
                        <div class="label">Participants</div>
                        <div class="value">${classItem.status === 'Live' ? classItem.studentsJoined + ' joined' : classItem.maxCapacity + ' capacity'}</div>
                    </div>
                </div>
                
                <div class="info-item">
                    <span class="icon">🔗</span>
                    <div>
                        <div class="label">Platform</div>
                        <div class="value">${classItem.meetingPlatform}</div>
                    </div>
                </div>
            </div>
            
            <div class="class-actions">
                ${classItem.status === "Live" ? `
                    <a href="${classItem.meetingLink}" target="_blank" class="join-btn live">
                        🎥 Join Now - LIVE
                    </a>
                ` : classItem.status === "Upcoming" ? `
                    <button class="join-btn upcoming" onclick="viewClassDetails('${classItem.id}')">
                        📅 View Details
                    </button>
                ` : classItem.recordingAvailable ? `
                    <a href="${classItem.recordingLink}" target="_blank" class="join-btn recording">
                        📹 Watch Recording
                    </a>
                ` : ''}
                <button class="info-btn" onclick="viewClassDetails('${classItem.id}')">
                    ℹ️ More Info
                </button>
            </div>
        `;
        container.appendChild(classCard);
    });
}

// ============================================
// VIEW CLASS DETAILS
// ============================================
function viewClassDetails(classId) {
    const classItem = classesData.find(c => c.id === classId);
    if (!classItem) return;
    
    const modal = document.getElementById("classModal");
    const modalBody = document.getElementById("classModalBody");
    
    modalBody.innerHTML = `
        <div class="class-detail">
            <h2>${classItem.title}</h2>
            <p class="detail-subject">📚 ${classItem.subject} | 👨‍🏫 ${classItem.teacher}</p>
            
            <div class="detail-section">
                <h3>🎯 Class Details</h3>
                <div class="detail-info">
                    <div>
                        <strong>📅 Date:</strong> ${formatClassDate(classItem.scheduledDate)}
                    </div>
                    <div>
                        <strong>⏰ Time:</strong> ${classItem.scheduledTime}
                    </div>
                    <div>
                        <strong>⏱️ Duration:</strong> ${classItem.duration} minutes
                    </div>
                    <div>
                        <strong>🔗 Platform:</strong> ${classItem.meetingPlatform}
                    </div>
                </div>
            </div>
            
            ${classItem.status === "Live" ? `
                <div class="detail-section live-indicator">
                    <h3>🎥 Class is LIVE Now!</h3>
                    <p>Join the class immediately. ${classItem.studentsJoined} students are already connected.</p>
                    <a href="${classItem.meetingLink}" target="_blank" class="join-btn live large">
                        Join Video Conference
                    </a>
                </div>
            ` : classItem.status === "Upcoming" ? `
                <div class="detail-section upcoming-indicator">
                    <h3>📅 Upcoming Class</h3>
                    <p>This class will be held on ${formatClassDate(classItem.scheduledDate)} at ${classItem.scheduledTime}.</p>
                    <p style="color: #666; font-size: 0.9rem;">Join link will be active 15 minutes before the class starts.</p>
                </div>
            ` : classItem.recordingAvailable ? `
                <div class="detail-section recording-indicator">
                    <h3>📹 Recording Available</h3>
                    <p>This class has been recorded. You can watch it anytime.</p>
                    <a href="${classItem.recordingLink}" target="_blank" class="join-btn recording large">
                        Watch Recording
                    </a>
                </div>
            ` : ''}
            
            <div class="detail-section">
                <h3>📝 Class Topics</h3>
                <ul class="topics-list">
                    <li>• Introduction to the concept</li>
                    <li>• Practical examples</li>
                    <li>• Q&A session</li>
                    <li>• Assignments and tasks</li>
                </ul>
            </div>
            
            <div class="detail-section">
                <h3>📚 Resources</h3>
                <div class="resources">
                    <button class="resource-btn">
                        📄 Lecture Slides
                    </button>
                    <button class="resource-btn">
                        📝 Class Notes
                    </button>
                    <button class="resource-btn">
                        📎 Study Materials
                    </button>
                </div>
            </div>
        </div>
    `;
    
    modal.style.display = "block";
}

function closeClassModal() {
    document.getElementById("classModal").style.display = "none";
}

// ============================================
// HELPER FUNCTIONS
// ============================================
function formatClassDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
}

function getClassStatusIcon(status) {
    switch(status) {
        case "Live":
            return '<span style="background: #28a745; color: white; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.85rem; font-weight: 600;">🔴 LIVE</span>';
        case "Recording":
            return '<span style="background: #17a2b8; color: white; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.85rem; font-weight: 600;">📹 Available</span>';
        case "Upcoming":
            return '<span style="background: #ffc107; color: #333; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.85rem; font-weight: 600;">📅 Upcoming</span>';
        default:
            return '<span style="background: #6c757d; color: white; padding: 0.3rem 0.8rem; border-radius: 15px; font-size: 0.85rem; font-weight: 600;">Status</span>';
    }
}
