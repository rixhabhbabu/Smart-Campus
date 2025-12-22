// ============================================
// TEACHER DASHBOARD LOGIC
// ============================================

// Dummy Teacher Object
const dummyTeacher = {
    id: "TCH001",
    name: "Dr. Rajesh Kumar",
    email: "rajesh.kumar@college.ac.in",
    role: "Senior Lecturer - Computer Science",
    department: "Computer Science",
    subjects: ["Data Structures", "Database Management", "Web Development"],
    classTeacher: "3A",
    semesters: ["3rd", "4th", "5th"]
};

// Dummy Notes Data
const uploadedNotes = [
    {
        id: "NOTE001",
        subject: "Data Structures",
        title: "Chapter 5 - Arrays and Lists",
        uploadDate: "2024-12-15",
        fileType: "PDF",
        fileSize: "2.5 MB",
        downloads: 34
    },
    {
        id: "NOTE002",
        subject: "Data Structures",
        title: "Chapter 6 - Sorting Algorithms",
        uploadDate: "2024-12-10",
        fileType: "PDF",
        fileSize: "3.1 MB",
        downloads: 28
    },
    {
        id: "NOTE003",
        subject: "Web Development",
        title: "HTML & CSS Fundamentals",
        uploadDate: "2024-12-12",
        fileType: "PPT",
        fileSize: "4.8 MB",
        downloads: 45
    }
];

// PAGE INITIALIZATION
document.addEventListener("DOMContentLoaded", function() {
    loadTeacherDashboard();
    setupTeacherEventListeners();
    loadUploadedNotes();
    loadTimetable();
    loadNotifications();
});

// ============================================
// TEACHER DASHBOARD FUNCTIONS
// ============================================
function loadTeacherDashboard() {
    // Load teacher info
    document.getElementById("teacherName").textContent = dummyTeacher.name;
    document.getElementById("profileName").textContent = dummyTeacher.name;
    document.getElementById("profileRole").textContent = dummyTeacher.role;
    document.getElementById("profileEmployeeId").textContent = dummyTeacher.id;
    document.getElementById("profileEmail").textContent = dummyTeacher.email;
    document.getElementById("profileDept").textContent = dummyTeacher.department;
    document.getElementById("profileSubjects").textContent = dummyTeacher.subjects.join(", ");
    document.getElementById("profileClass").textContent = dummyTeacher.classTeacher;
    document.getElementById("profileSemesters").textContent = dummyTeacher.semesters.join(", ");
    
    // Dashboard stats
    document.getElementById("classesToday").textContent = "3";
    document.getElementById("totalSubjects").textContent = dummyTeacher.subjects.length;
    document.getElementById("dashTotalStudents").textContent = "45";
    document.getElementById("dashPendingProxies").textContent = "2";
}

function setupTeacherEventListeners() {
    // Theme toggle
    const themeToggle = document.getElementById("themeToggle");
    if (themeToggle) {
        themeToggle.addEventListener("click", toggleTheme);
    }
    
    // Logout
    const logoutBtn = document.getElementById("logoutBtn");
    const profileLogoutBtn = document.getElementById("profileLogoutBtn");
    if (logoutBtn) {
        logoutBtn.addEventListener("click", logoutTeacher);
    }
    if (profileLogoutBtn) {
        profileLogoutBtn.addEventListener("click", logoutTeacher);
    }
    
    // Navigation menu items
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        item.addEventListener("click", function(e) {
            e.preventDefault();
            const sectionId = this.getAttribute("data-section");
            showSection(sectionId);
        });
    });
    
    // Notes Upload Form
    const notificationForm = document.getElementById("notificationForm");
    if (notificationForm) {
        notificationForm.addEventListener("submit", function(e) {
            e.preventDefault();
            sendNotification();
        });
    }
}

// ============================================
// NOTES MANAGEMENT FUNCTIONS
// ============================================
function uploadNotes() {
    const subject = document.getElementById("noteSubject").value;
    const title = document.getElementById("noteTitle").value;
    const fileInput = document.getElementById("noteFile");
    
    if (!subject || !title) {
        alert("⚠️ Please fill in all fields!");
        return;
    }
    
    if (!fileInput.files.length) {
        alert("⚠️ Please select a file!");
        return;
    }
    
    const file = fileInput.files[0];
    const fileName = file.name;
    const fileSize = (file.size / (1024 * 1024)).toFixed(2) + " MB";
    
    // Create note object
    const newNote = {
        id: "NOTE" + (uploadedNotes.length + 1).toString().padStart(3, '0'),
        subject: subject,
        title: title,
        uploadDate: new Date().toISOString().split('T')[0],
        fileType: fileName.split('.').pop().toUpperCase(),
        fileSize: fileSize,
        downloads: 0
    };
    
    // Add to array
    uploadedNotes.unshift(newNote);
    
    // Show success message
    const successMsg = document.getElementById("noteSuccess");
    successMsg.style.display = "block";
    
    // Clear form
    document.getElementById("noteSubject").value = "";
    document.getElementById("noteTitle").value = "";
    document.getElementById("noteFile").value = "";
    
    // Reload notes
    loadUploadedNotes();
    
    // Hide success after 3 seconds
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 3000);
}

function loadUploadedNotes() {
    const notesList = document.getElementById("notesList");
    if (!notesList) return;
    
    if (uploadedNotes.length === 0) {
        notesList.innerHTML = '<p style="color: #999; text-align: center; padding: 2rem;">No notes uploaded yet.</p>';
        return;
    }
    
    notesList.innerHTML = '';
    
    uploadedNotes.forEach(note => {
        const noteItem = document.createElement('div');
        noteItem.className = 'note-item';
        noteItem.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; padding: 1rem; background: #f8f9fa; border-radius: 8px; margin-bottom: 1rem; border-left: 4px solid #007bff;">
                <div>
                    <h4 style="margin: 0; color: #333;">📄 ${note.title}</h4>
                    <p style="margin: 0.5rem 0 0 0; color: #666; font-size: 0.9rem;">
                        📚 ${note.subject} | ${note.fileType} | ${note.fileSize} | 📅 ${note.uploadDate}
                    </p>
                    <p style="margin: 0.5rem 0 0 0; color: #999; font-size: 0.85rem;">
                        ⬇️ ${note.downloads} downloads
                    </p>
                </div>
                <div style="display: flex; gap: 0.5rem;">
                    <button class="btn btn-small" onclick="editNote('${note.id}')" style="padding: 0.5rem 1rem; font-size: 0.9rem;">✏️ Edit</button>
                    <button class="btn btn-danger btn-small" onclick="deleteNote('${note.id}')" style="padding: 0.5rem 1rem; font-size: 0.9rem; background: #dc3545;">🗑️ Delete</button>
                </div>
            </div>
        `;
        notesList.appendChild(noteItem);
    });
}

function editNote(noteId) {
    alert("✏️ Edit feature coming soon!");
}

function deleteNote(noteId) {
    if (confirm("Are you sure you want to delete this note?")) {
        const index = uploadedNotes.findIndex(n => n.id === noteId);
        if (index > -1) {
            uploadedNotes.splice(index, 1);
            loadUploadedNotes();
            alert("✅ Note deleted successfully!");
        }
    }
}

// ============================================
// SECTION NAVIGATION
// ============================================
function showSection(sectionId) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => {
        section.classList.remove("active");
        section.style.display = "none";
    });
    
    const targetSection = document.getElementById(sectionId);
    if (targetSection) {
        targetSection.classList.add("active");
        targetSection.style.display = "block";
    }
    
    // Update menu active state
    const menuItems = document.querySelectorAll(".menu-item");
    menuItems.forEach(item => {
        item.classList.remove("active");
        if (item.getAttribute("data-section") === sectionId) {
            item.classList.add("active");
        }
    });
}

// ============================================
// ATTENDANCE FUNCTIONS
// ============================================
function loadAttendanceList() {
    const subject = document.getElementById("attSubject").value;
    const division = document.getElementById("attDivision").value;
    
    if (!subject || !division) {
        alert("⚠️ Please select both subject and division!");
        return;
    }
    
    const attendanceList = document.getElementById("attendanceList");
    const studentAttendanceList = document.getElementById("studentAttendanceList");
    
    // Dummy students
    const students = [
        { roll: "103001", name: "Akhil Sharma" },
        { roll: "103002", name: "Ananya Patel" },
        { roll: "103003", name: "Arjun Kumar" },
        { roll: "103004", name: "Avni Singh" },
        { roll: "103005", name: "Bhavesh Joshi" }
    ];
    
    studentAttendanceList.innerHTML = '';
    students.forEach(student => {
        const checkbox = document.createElement('div');
        checkbox.style.cssText = `
            display: flex;
            align-items: center;
            padding: 0.75rem;
            background: #f8f9fa;
            margin-bottom: 0.5rem;
            border-radius: 5px;
            border-left: 3px solid #007bff;
        `;
        checkbox.innerHTML = `
            <input type="checkbox" id="att_${student.roll}" class="att-checkbox" value="${student.roll}" style="width: 20px; height: 20px; cursor: pointer;">
            <label for="att_${student.roll}" style="flex: 1; margin-left: 1rem; cursor: pointer; color: #333;">${student.name} (${student.roll})</label>
        `;
        studentAttendanceList.appendChild(checkbox);
    });
    
    attendanceList.style.display = "block";
}

function submitAttendance() {
    const checkboxes = document.querySelectorAll(".att-checkbox:checked");
    if (checkboxes.length === 0) {
        alert("⚠️ Please mark at least one student as present!");
        return;
    }
    
    const presentStudents = Array.from(checkboxes).map(cb => cb.value).join(", ");
    const successMsg = document.getElementById("attSuccess");
    successMsg.style.display = "block";
    
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 3000);
}

function clearAttendance() {
    document.querySelectorAll(".att-checkbox").forEach(cb => cb.checked = false);
}

// ============================================
// TIMETABLE FUNCTIONS
// ============================================
function loadTimetable() {
    const timetableBody = document.getElementById("timetableBody");
    if (!timetableBody) return;
    
    const timetable = [
        { time: "9:00 - 10:00", mon: "Data Structures (3A)", tue: "Database Mgmt (3B)", wed: "Web Dev (3A)", thu: "Data Structures (3B)", fri: "Database Mgmt (3A)" },
        { time: "10:00 - 11:00", mon: "Database Mgmt (3A)", tue: "Web Dev (3B)", wed: "Data Structures (3B)", thu: "Web Dev (3A)", fri: "Data Structures (3B)" },
        { time: "11:00 - 12:00", mon: "Web Dev (3A)", tue: "Data Structures (3B)", wed: "Database Mgmt (3A)", thu: "Database Mgmt (3B)", fri: "Web Dev (3A)" },
        { time: "12:00 - 1:00 PM", mon: "Lab - Database (3A)", tue: "Lab - Web Dev (3B)", wed: "Lab - Data Structures (3A)", thu: "Lab - Database (3B)", fri: "No Class" },
        { time: "2:00 - 3:00 PM", mon: "Data Structures (3B)", tue: "Database Mgmt (3A)", wed: "Web Dev (3B)", thu: "Data Structures (3A)", fri: "Database Mgmt (3B)" }
    ];
    
    timetable.forEach(row => {
        const tr = document.createElement('tr');
        tr.innerHTML = `
            <td style="font-weight: 600;">${row.time}</td>
            <td>${row.mon}</td>
            <td>${row.tue}</td>
            <td>${row.wed}</td>
            <td>${row.thu}</td>
            <td>${row.fri}</td>
        `;
        timetableBody.appendChild(tr);
    });
    
    const todaysClassesDiv = document.getElementById("todaysClasses");
    if (todaysClassesDiv) {
        const dayOfWeek = new Date().getDay();
        const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
        const today = days[dayOfWeek];
        
        todaysClassesDiv.innerHTML = `
            <div style="background: #e7f3ff; padding: 1rem; border-radius: 8px; border-left: 4px solid #007bff; margin-top: 1rem;">
                <p><strong>📅 Today (${today}):</strong></p>
                <ul style="margin-top: 0.5rem; margin-left: 1.5rem;">
                    <li>9:00 - 10:00 AM: Data Structures (Class 3A)</li>
                    <li>10:00 - 11:00 AM: Database Management (Class 3A)</li>
                    <li>11:00 - 12:00 PM: Web Development (Class 3A)</li>
                    <li>12:00 - 1:00 PM: Lab Session</li>
                </ul>
            </div>
        `;
    }
}

// ============================================
// NOTIFICATIONS & ANNOUNCEMENTS
// ============================================
function switchTab(tabName) {
    const tabs = document.querySelectorAll(".tab-content");
    tabs.forEach(tab => {
        tab.classList.remove("active");
        tab.style.display = "none";
    });
    
    const targetTab = document.getElementById(tabName);
    if (targetTab) {
        targetTab.classList.add("active");
        targetTab.style.display = "block";
    }
    
    const tabBtns = document.querySelectorAll(".tab-btn");
    tabBtns.forEach(btn => {
        btn.classList.remove("active");
        if (btn.getAttribute("onclick").includes(tabName)) {
            btn.classList.add("active");
        }
    });
}

function sendNotification() {
    const title = document.getElementById("notifTitle").value;
    const message = document.getElementById("notifMessage").value;
    const target = document.getElementById("notifTarget").value;
    
    if (!title || !message || !target) {
        alert("⚠️ Please fill in all fields!");
        return;
    }
    
    const successMsg = document.getElementById("notifSuccess");
    successMsg.style.display = "block";
    
    document.getElementById("notificationForm").reset();
    
    setTimeout(() => {
        successMsg.style.display = "none";
    }, 3000);
}

function loadNotifications() {
    const receivedNotifList = document.getElementById("receivedNotifList");
    if (!receivedNotifList) return;
    
    const notifications = [
        { title: "Semester Exam Schedule", message: "Semester 5 exams will begin from Jan 15, 2025", from: "Admin", date: "2024-12-20" },
        { title: "Academic Calendar Update", message: "Winter break extended by 2 days. New academic calendar available on portal.", from: "HOD", date: "2024-12-18" },
        { title: "Important Notice", message: "All teachers must submit final grades by Dec 25, 2024", from: "HOD", date: "2024-12-15" }
    ];
    
    receivedNotifList.innerHTML = '';
    notifications.forEach(notif => {
        const notifDiv = document.createElement('div');
        notifDiv.style.cssText = `
            padding: 1rem;
            background: #e8f5e9;
            border-left: 4px solid #28a745;
            margin-bottom: 1rem;
            border-radius: 5px;
            cursor: pointer;
            transition: all 0.3s ease;
        `;
        notifDiv.innerHTML = `
            <h4 style="margin: 0; color: #333;">📢 ${notif.title}</h4>
            <p style="margin: 0.5rem 0 0 0; color: #666; font-size: 0.95rem;">${notif.message}</p>
            <p style="margin: 0.5rem 0 0 0; color: #999; font-size: 0.85rem;">From: ${notif.from} | ${notif.date}</p>
        `;
        receivedNotifList.appendChild(notifDiv);
    });
}

// ============================================
// PROXY APPROVAL
// ============================================
function filterProxyRequests() {
    alert("🔍 Filtering proxy requests...");
}

// ============================================
// STUDENT ISSUES
// ============================================
function filterIssues() {
    alert("🔍 Filtering student issues...");
}

// ============================================
// STUDENT PERFORMANCE
// ============================================
function loadStudentPerformance() {
    const studentPerformanceList = document.getElementById("studentPerformanceList");
    if (!studentPerformanceList) return;
    
    const students = [
        { name: "Akhil Sharma", roll: "103001", attendance: 85, marks: 78 },
        { name: "Ananya Patel", roll: "103002", attendance: 92, marks: 89 },
        { name: "Arjun Kumar", roll: "103003", attendance: 78, marks: 72 },
        { name: "Avni Singh", roll: "103004", attendance: 88, marks: 85 },
        { name: "Bhavesh Joshi", roll: "103005", attendance: 80, marks: 76 }
    ];
    
    studentPerformanceList.innerHTML = '';
    students.forEach(student => {
        const card = document.createElement('div');
        card.style.cssText = `
            padding: 1rem;
            background: white;
            border: 1px solid #ddd;
            border-radius: 8px;
            margin-bottom: 1rem;
        `;
        card.innerHTML = `
            <h4 style="margin: 0; color: #333;">${student.name}</h4>
            <p style="margin: 0.5rem 0; color: #666; font-size: 0.9rem;">Roll: ${student.roll}</p>
            <p style="margin: 0.5rem 0; color: #666;">📊 Attendance: <strong>${student.attendance}%</strong></p>
            <p style="margin: 0.5rem 0; color: #666;">📈 Average Marks: <strong>${student.marks}/100</strong></p>
        `;
        studentPerformanceList.appendChild(card);
    });
}

// ============================================
// UTILITIES
// ============================================
function toggleTheme() {
    const isDarkMode = document.body.classList.toggle("dark-mode");
    localStorage.setItem("sc_darkMode", isDarkMode);
}

function editProfile() {
    alert("✏️ Profile edit feature coming soon!");
}

function logoutTeacher() {
    if (confirm("Are you sure you want to logout?")) {
        localStorage.removeItem("sc_role");
        localStorage.removeItem("sc_credential");
        alert("✅ Logged out successfully!");
        window.location.href = "login.html";
    }
}
