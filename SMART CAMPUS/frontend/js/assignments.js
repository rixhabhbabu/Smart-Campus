// ============================================
// ASSIGNMENTS PAGE LOGIC
// ============================================

// Dummy Assignments Data
const assignmentsData = [
    {
        id: "ASS001",
        subject: "Data Structures",
        title: "Stack & Queue Implementation",
        description: "Implement Stack and Queue data structures with all operations",
        teacher: "Dr. Rajesh Kumar",
        dueDate: "2024-12-25",
        assignedDate: "2024-12-10",
        status: "Pending",
        marks: null,
        totalMarks: 10,
        submissionRequired: true,
        attachmentCount: 2
    },
    {
        id: "ASS002",
        subject: "Web Development",
        title: "Responsive Website Design",
        description: "Create a responsive website using HTML, CSS, and JavaScript",
        teacher: "Ms. Priya Singh",
        dueDate: "2024-12-28",
        assignedDate: "2024-12-12",
        status: "Submitted",
        marks: 9,
        totalMarks: 10,
        submissionRequired: true,
        attachmentCount: 1
    },
    {
        id: "ASS003",
        subject: "Database Management",
        title: "SQL Database Design",
        description: "Design a complete database schema for an e-commerce system",
        teacher: "Dr. Amit Patel",
        dueDate: "2024-12-20",
        assignedDate: "2024-12-05",
        status: "Overdue",
        marks: null,
        totalMarks: 15,
        submissionRequired: true,
        attachmentCount: 3
    },
    {
        id: "ASS004",
        subject: "Data Structures",
        title: "Graph Algorithms Analysis",
        description: "Analyze and implement BFS, DFS, and shortest path algorithms",
        teacher: "Dr. Rajesh Kumar",
        dueDate: "2024-12-22",
        assignedDate: "2024-12-08",
        status: "Submitted",
        marks: 8,
        totalMarks: 10,
        submissionRequired: true,
        attachmentCount: 2
    },
    {
        id: "ASS005",
        subject: "Web Development",
        title: "API Integration Project",
        description: "Integrate REST API and handle data with JavaScript",
        teacher: "Ms. Priya Singh",
        dueDate: "2025-01-05",
        assignedDate: "2024-12-15",
        status: "Pending",
        marks: null,
        totalMarks: 20,
        submissionRequired: true,
        attachmentCount: 2
    },
    {
        id: "ASS006",
        subject: "Database Management",
        title: "Query Optimization",
        description: "Optimize given SQL queries for better performance",
        teacher: "Dr. Amit Patel",
        dueDate: "2024-12-23",
        assignedDate: "2024-12-10",
        status: "Graded",
        marks: 14,
        totalMarks: 15,
        submissionRequired: true,
        attachmentCount: 1
    }
];

// PAGE INITIALIZATION
document.addEventListener("DOMContentLoaded", function() {
    loadAssignments();
    updateStats();
    setupEventListeners();
});

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    const statusFilter = document.getElementById("assignmentStatusFilter");
    const subjectFilter = document.getElementById("assignmentSubjectFilter");
    
    if (statusFilter) {
        statusFilter.addEventListener("change", loadAssignments);
    }
    if (subjectFilter) {
        subjectFilter.addEventListener("change", loadAssignments);
    }
}

// Close modal when clicking outside
window.addEventListener("click", function(event) {
    const modal = document.getElementById("assignmentModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// ============================================
// LOAD & FILTER ASSIGNMENTS
// ============================================
function loadAssignments() {
    const container = document.getElementById("assignmentsContainer");
    const statusFilter = document.getElementById("assignmentStatusFilter").value;
    const subjectFilter = document.getElementById("assignmentSubjectFilter").value;
    
    if (!container) return;
    
    let filteredAssignments = assignmentsData;
    
    if (statusFilter) {
        filteredAssignments = filteredAssignments.filter(a => a.status === statusFilter);
    }
    if (subjectFilter) {
        filteredAssignments = filteredAssignments.filter(a => a.subject === subjectFilter);
    }
    
    // Sort by due date
    filteredAssignments.sort((a, b) => new Date(a.dueDate) - new Date(b.dueDate));
    
    if (filteredAssignments.length === 0) {
        container.innerHTML = `
            <div style="text-align: center; padding: 3rem 1rem; color: var(--secondary-color);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📭</div>
                <p style="font-size: 1.1rem;">No assignments found.</p>
            </div>
        `;
        return;
    }
    
    container.innerHTML = '';
    filteredAssignments.forEach(assignment => {
        const statusBadge = getStatusBadge(assignment.status);
        const daysLeft = getDaysLeft(assignment.dueDate);
        const isOverdue = new Date(assignment.dueDate) < new Date() && assignment.status === "Pending";
        
        const assignmentCard = document.createElement('div');
        assignmentCard.className = `assignment-card ${assignment.status.toLowerCase()} ${isOverdue ? 'overdue' : ''}`;
        assignmentCard.innerHTML = `
            <div class="assignment-header">
                <div>
                    <h3>${assignment.title}</h3>
                    <p class="assignment-subject">📚 ${assignment.subject}</p>
                    <p class="assignment-teacher">👨‍🏫 ${assignment.teacher}</p>
                </div>
                ${statusBadge}
            </div>
            
            <p class="assignment-description">${assignment.description}</p>
            
            <div class="assignment-meta">
                <div class="meta-item">
                    <span class="label">Due:</span>
                    <span class="value">${formatDate(assignment.dueDate)}</span>
                </div>
                <div class="meta-item">
                    <span class="label">Days Left:</span>
                    <span class="value ${daysLeft <= 3 ? 'urgent' : ''}">${daysLeft <= 0 ? 'Overdue' : daysLeft + ' days'}</span>
                </div>
                <div class="meta-item">
                    <span class="label">Marks:</span>
                    <span class="value">${assignment.marks !== null ? assignment.marks + '/' + assignment.totalMarks : '—'}</span>
                </div>
            </div>
            
            <div class="assignment-footer">
                <div class="attachments">
                    📎 ${assignment.attachmentCount} attachment(s)
                </div>
                <button class="view-btn" onclick="viewAssignmentDetails('${assignment.id}')">
                    View Details →
                </button>
            </div>
        `;
        container.appendChild(assignmentCard);
    });
}

// ============================================
// UPDATE STATISTICS
// ============================================
function updateStats() {
    const total = assignmentsData.length;
    const pending = assignmentsData.filter(a => a.status === "Pending" || a.status === "Overdue").length;
    const submitted = assignmentsData.filter(a => a.status === "Submitted").length;
    const graded = assignmentsData.filter(a => a.status === "Graded").length;
    
    document.getElementById("totalAssignments").textContent = total;
    document.getElementById("pendingAssignments").textContent = pending;
    document.getElementById("submittedAssignments").textContent = submitted;
    document.getElementById("gradedAssignments").textContent = graded;
}

// ============================================
// VIEW ASSIGNMENT DETAILS
// ============================================
function viewAssignmentDetails(assignmentId) {
    const assignment = assignmentsData.find(a => a.id === assignmentId);
    if (!assignment) return;
    
    const modal = document.getElementById("assignmentModal");
    const modalBody = document.getElementById("assignmentModalBody");
    const daysLeft = getDaysLeft(assignment.dueDate);
    
    modalBody.innerHTML = `
        <div class="assignment-detail">
            <h2>${assignment.title}</h2>
            <p class="detail-subject">📚 ${assignment.subject} | 👨‍🏫 ${assignment.teacher}</p>
            
            <div class="status-row">
                Status: ${getStatusBadge(assignment.status)}
            </div>
            
            <div class="detail-section">
                <h3>📋 Description</h3>
                <p>${assignment.description}</p>
            </div>
            
            <div class="detail-section">
                <h3>📅 Dates</h3>
                <div class="date-info">
                    <div>
                        <strong>Assigned:</strong> ${formatDate(assignment.assignedDate)}
                    </div>
                    <div>
                        <strong>Due:</strong> ${formatDate(assignment.dueDate)}
                    </div>
                    <div>
                        <strong>Days Left:</strong> <span class="${daysLeft <= 3 ? 'urgent' : ''}">${daysLeft <= 0 ? 'Overdue' : daysLeft + ' days'}</span>
                    </div>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>📊 Marks</h3>
                <div class="marks-info">
                    ${assignment.marks !== null 
                        ? `<div>Your Marks: <strong>${assignment.marks}/${assignment.totalMarks}</strong> (${Math.round((assignment.marks/assignment.totalMarks)*100)}%)</div>` 
                        : '<div>Not graded yet</div>'
                    }
                    <div>Total Marks: <strong>${assignment.totalMarks}</strong></div>
                </div>
            </div>
            
            <div class="detail-section">
                <h3>📎 Materials</h3>
                <div class="materials">
                    <button class="material-btn">
                        📄 Assignment_Details.pdf
                    </button>
                    <button class="material-btn">
                        📚 Sample_Solution.zip
                    </button>
                    ${assignment.attachmentCount > 2 ? `<button class="material-btn">+${assignment.attachmentCount - 2} more files</button>` : ''}
                </div>
            </div>
            
            ${assignment.status === "Pending" || assignment.status === "Overdue" ? `
                <div class="submit-section">
                    <h3>📤 Submit Your Work</h3>
                    <div class="file-upload">
                        <input type="file" id="assignmentFile" accept=".pdf,.doc,.docx,.zip,.txt" />
                        <button class="submit-btn" onclick="submitAssignment('${assignment.id}')">
                            📤 Submit Assignment
                        </button>
                    </div>
                </div>
            ` : ''}
            
            ${assignment.status === "Graded" ? `
                <div class="feedback-section">
                    <h3>💬 Teacher Feedback</h3>
                    <div class="feedback">
                        <p>"Good work! You understood the concepts well. Just work on optimization techniques."</p>
                        <p style="text-align: right; color: #666; font-size: 0.9rem;">- Dr. Rajesh Kumar</p>
                    </div>
                </div>
            ` : ''}
        </div>
    `;
    
    modal.style.display = "block";
}

function closeAssignmentModal() {
    document.getElementById("assignmentModal").style.display = "none";
}

// ============================================
// SUBMIT ASSIGNMENT
// ============================================
function submitAssignment(assignmentId) {
    const fileInput = document.getElementById("assignmentFile");
    
    if (!fileInput.files.length) {
        alert("⚠️ Please select a file to submit!");
        return;
    }
    
    const fileName = fileInput.files[0].name;
    alert(`✅ Assignment submitted successfully!\n\nFile: ${fileName}\n\nYour teacher will review it soon.`);
    
    closeAssignmentModal();
    loadAssignments();
}

// ============================================
// HELPER FUNCTIONS
// ============================================
function formatDate(dateString) {
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-IN', options);
}

function getDaysLeft(dueDate) {
    const today = new Date();
    const due = new Date(dueDate);
    const diffTime = due - today;
    const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));
    return diffDays;
}

function getStatusBadge(status) {
    const statusConfig = {
        "Pending": { color: "#ffc107", icon: "⏳" },
        "Submitted": { color: "#17a2b8", icon: "✅" },
        "Graded": { color: "#28a745", icon: "📊" },
        "Overdue": { color: "#dc3545", icon: "⚠️" }
    };
    
    const config = statusConfig[status] || statusConfig["Pending"];
    return `<span class="status-badge" style="background: ${config.color}; color: white; padding: 0.5rem 1rem; border-radius: 20px; font-weight: 600;">${config.icon} ${status}</span>`;
}
