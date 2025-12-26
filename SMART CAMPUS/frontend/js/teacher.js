// ============================================
// TEACHER DASHBOARD LOGIC
// ============================================

// Sidebar Toggle Function
function toggleSidebar() {
    const sidebar = document.querySelector('.sidebar');
    const container = document.querySelector('.container');
    sidebar.classList.toggle('collapsed');
    container.classList.toggle('sidebar-collapsed');
    
    // Update toggle button icon
    const toggleBtn = document.getElementById('sidebarToggle');
    if (sidebar.classList.contains('collapsed')) {
        toggleBtn.textContent = '☰';
    } else {
        toggleBtn.textContent = '✕';
    }
}

// Expose globally
window.toggleSidebar = toggleSidebar;

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
    // Theme handled by theme.js — only sync toggle icon here
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme === "dark") {
        const themeToggleBtn = document.getElementById("themeToggle");
        if (themeToggleBtn) {
            themeToggleBtn.textContent = "☀️";
        }
    }
    loadTeacherDashboard();
    setupTeacherEventListeners();
    loadUploadedNotes();
    loadMyAttendance();
    loadTimetable();
    loadNotifications();
    loadStudentPerformance();
    loadAssignments();
    loadOnlineClasses();
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
    
    // Scroll to top of page
    window.scrollTo({ top: 0, behavior: 'smooth' });
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
// STUDENT DATABASE (Dummy Data)
// ============================================
const studentDatabase = [
    {
        enrollmentNo: "STU103001",
        rollNo: "21",
        name: "Akhil Sharma",
        dob: "15-03-2003",
        gender: "Male",
        bloodGroup: "B+",
        mobile: "+91 9876543210",
        email: "akhil.sharma@college.edu",
        address: "123 Main Street, Sector 12, Noida, UP - 201301",
        semester: "5th",
        division: "3A",
        branch: "Computer Science & Engineering",
        admissionYear: "2021",
        gpa: "3.8",
        status: "Active",
        overallAttendance: "85%",
        classesAttended: 102,
        classesMissed: 18,
        subjectAttendance: [
            { subject: "Data Structures", attendance: "88%" },
            { subject: "Database Management", attendance: "82%" },
            { subject: "Web Development", attendance: "90%" }
        ],
        fatherName: "Mr. Ramesh Sharma",
        fatherOccupation: "Business Owner",
        fatherMobile: "+91 9876500001",
        motherName: "Mrs. Sunita Sharma",
        motherOccupation: "Homemaker",
        motherMobile: "+91 9876500002",
        guardianEmail: "ramesh.sharma@gmail.com"
    },
    {
        enrollmentNo: "STU103002",
        rollNo: "22",
        name: "Ananya Patel",
        dob: "22-07-2003",
        gender: "Female",
        bloodGroup: "O+",
        mobile: "+91 9876543211",
        email: "ananya.patel@college.edu",
        address: "456 Park Avenue, Sector 18, Gurugram, HR - 122001",
        semester: "5th",
        division: "3A",
        branch: "Computer Science & Engineering",
        admissionYear: "2021",
        gpa: "3.9",
        status: "Active",
        overallAttendance: "92%",
        classesAttended: 110,
        classesMissed: 10,
        subjectAttendance: [
            { subject: "Data Structures", attendance: "94%" },
            { subject: "Database Management", attendance: "90%" },
            { subject: "Web Development", attendance: "92%" }
        ],
        fatherName: "Mr. Vijay Patel",
        fatherOccupation: "Software Engineer",
        fatherMobile: "+91 9876500003",
        motherName: "Mrs. Priya Patel",
        motherOccupation: "Teacher",
        motherMobile: "+91 9876500004",
        guardianEmail: "vijay.patel@gmail.com"
    },
    {
        enrollmentNo: "STU103003",
        rollNo: "23",
        name: "Arjun Kumar",
        dob: "10-11-2002",
        gender: "Male",
        bloodGroup: "A+",
        mobile: "+91 9876543212",
        email: "arjun.kumar@college.edu",
        address: "789 Lake View, Sector 5, Delhi - 110001",
        semester: "5th",
        division: "3A",
        branch: "Computer Science & Engineering",
        admissionYear: "2021",
        gpa: "3.5",
        status: "Active",
        overallAttendance: "78%",
        classesAttended: 94,
        classesMissed: 26,
        subjectAttendance: [
            { subject: "Data Structures", attendance: "80%" },
            { subject: "Database Management", attendance: "75%" },
            { subject: "Web Development", attendance: "79%" }
        ],
        fatherName: "Mr. Suresh Kumar",
        fatherOccupation: "Government Employee",
        fatherMobile: "+91 9876500005",
        motherName: "Mrs. Meena Kumar",
        motherOccupation: "Doctor",
        motherMobile: "+91 9876500006",
        guardianEmail: "suresh.kumar@gmail.com"
    },
    {
        enrollmentNo: "STU103004",
        rollNo: "24",
        name: "Avni Singh",
        dob: "05-01-2003",
        gender: "Female",
        bloodGroup: "AB+",
        mobile: "+91 9876543213",
        email: "avni.singh@college.edu",
        address: "321 Green Valley, Sector 22, Noida, UP - 201301",
        semester: "5th",
        division: "3A",
        branch: "Computer Science & Engineering",
        admissionYear: "2021",
        gpa: "3.7",
        status: "Active",
        overallAttendance: "88%",
        classesAttended: 106,
        classesMissed: 14,
        subjectAttendance: [
            { subject: "Data Structures", attendance: "90%" },
            { subject: "Database Management", attendance: "85%" },
            { subject: "Web Development", attendance: "89%" }
        ],
        fatherName: "Mr. Rajendra Singh",
        fatherOccupation: "Lawyer",
        fatherMobile: "+91 9876500007",
        motherName: "Mrs. Kavita Singh",
        motherOccupation: "Bank Manager",
        motherMobile: "+91 9876500008",
        guardianEmail: "rajendra.singh@gmail.com"
    },
    {
        enrollmentNo: "STU103005",
        rollNo: "25",
        name: "Bhavesh Joshi",
        dob: "18-09-2002",
        gender: "Male",
        bloodGroup: "B-",
        mobile: "+91 9876543214",
        email: "bhavesh.joshi@college.edu",
        address: "654 Hill Road, Sector 30, Faridabad, HR - 121001",
        semester: "5th",
        division: "3B",
        branch: "Computer Science & Engineering",
        admissionYear: "2021",
        gpa: "3.4",
        status: "Active",
        overallAttendance: "80%",
        classesAttended: 96,
        classesMissed: 24,
        subjectAttendance: [
            { subject: "Data Structures", attendance: "82%" },
            { subject: "Database Management", attendance: "78%" },
            { subject: "Web Development", attendance: "80%" }
        ],
        fatherName: "Mr. Dinesh Joshi",
        fatherOccupation: "Businessman",
        fatherMobile: "+91 9876500009",
        motherName: "Mrs. Rekha Joshi",
        motherOccupation: "Homemaker",
        motherMobile: "+91 9876500010",
        guardianEmail: "dinesh.joshi@gmail.com"
    }
];

// ============================================
// STUDENT SEARCH FUNCTIONS
// ============================================
function searchStudentByEnrollment() {
    const searchInput = document.getElementById("searchEnrollment").value.trim().toUpperCase();
    const detailCard = document.getElementById("studentDetailCard");
    const noResult = document.getElementById("noStudentFound");
    
    if (!searchInput) {
        alert("⚠️ Please enter an enrollment number!");
        return;
    }
    
    // Search in database
    const student = studentDatabase.find(s => s.enrollmentNo.toUpperCase() === searchInput);
    
    if (student) {
        // Show student details
        displayStudentDetails(student);
        detailCard.style.display = "block";
        noResult.style.display = "none";
    } else {
        // No student found
        detailCard.style.display = "none";
        noResult.style.display = "block";
    }
}

function displayStudentDetails(student) {
    // Basic Info
    document.getElementById("detailStudentName").textContent = student.name;
    document.getElementById("detailStudentEnrollment").textContent = `Enrollment: ${student.enrollmentNo}`;
    document.getElementById("detailStudentStatus").textContent = student.status;
    document.getElementById("detailStudentStatus").className = `status-badge ${student.status.toLowerCase()}`;
    
    // Personal Information
    document.getElementById("detailFullName").textContent = student.name;
    document.getElementById("detailDOB").textContent = student.dob;
    document.getElementById("detailGender").textContent = student.gender;
    document.getElementById("detailBloodGroup").textContent = student.bloodGroup;
    document.getElementById("detailMobile").textContent = student.mobile;
    document.getElementById("detailEmail").textContent = student.email;
    document.getElementById("detailAddress").textContent = student.address;
    
    // Academic Information
    document.getElementById("detailRollNo").textContent = student.rollNo;
    document.getElementById("detailSemester").textContent = student.semester;
    document.getElementById("detailDivision").textContent = student.division;
    document.getElementById("detailBranch").textContent = student.branch;
    document.getElementById("detailAdmissionYear").textContent = student.admissionYear;
    document.getElementById("detailGPA").textContent = student.gpa;
    
    // Attendance Information
    document.getElementById("detailOverallAttendance").textContent = student.overallAttendance;
    document.getElementById("detailClassesAttended").textContent = student.classesAttended;
    document.getElementById("detailClassesMissed").textContent = student.classesMissed;
    
    // Subject-wise Attendance
    const subjectAttendanceList = document.getElementById("subjectAttendanceList");
    subjectAttendanceList.innerHTML = student.subjectAttendance.map(sub => `
        <div class="subject-attendance-item">
            <span class="subject-name">${sub.subject}</span>
            <span class="subject-percent">${sub.attendance}</span>
        </div>
    `).join('');
    
    // Parent Information
    document.getElementById("detailFatherName").textContent = student.fatherName;
    document.getElementById("detailFatherOccupation").textContent = student.fatherOccupation;
    document.getElementById("detailFatherMobile").textContent = student.fatherMobile;
    document.getElementById("detailMotherName").textContent = student.motherName;
    document.getElementById("detailMotherOccupation").textContent = student.motherOccupation;
    document.getElementById("detailMotherMobile").textContent = student.motherMobile;
    document.getElementById("detailGuardianEmail").textContent = student.guardianEmail;
}

function clearStudentSearch() {
    document.getElementById("searchEnrollment").value = "";
    document.getElementById("studentDetailCard").style.display = "none";
    document.getElementById("noStudentFound").style.display = "none";
}

function printStudentDetails() {
    window.print();
}

function contactParent() {
    const fatherMobile = document.getElementById("detailFatherMobile").textContent;
    alert(`📞 Calling Parent: ${fatherMobile}\n\n(This would trigger a call in a real application)`);
}

// ============================================
// STUDENT PERFORMANCE
// ============================================
function loadStudentPerformance() {
    const studentPerformanceList = document.getElementById("studentPerformanceList");
    if (!studentPerformanceList) return;
    
    const filter = document.getElementById("studentDivisionFilter").value;
    
    let students = studentDatabase;
    if (filter) {
        students = studentDatabase.filter(s => s.division === filter);
    }
    
    studentPerformanceList.innerHTML = '';
    students.forEach(student => {
        const card = document.createElement('div');
        card.className = 'student-card';
        card.innerHTML = `
            <div class="student-card-header">
                <span class="student-avatar-small">👤</span>
                <div>
                    <h4>${student.name}</h4>
                    <p class="enrollment">${student.enrollmentNo}</p>
                </div>
            </div>
            <div class="student-card-body">
                <p>📊 Attendance: <strong>${student.overallAttendance}</strong></p>
                <p>📈 GPA: <strong>${student.gpa}</strong></p>
                <p>🏫 Division: <strong>${student.division}</strong></p>
            </div>
            <button class="btn btn-info btn-small" onclick="viewStudentFromCard('${student.enrollmentNo}')">👁️ View Details</button>
        `;
        studentPerformanceList.appendChild(card);
    });
}

function viewStudentFromCard(enrollmentNo) {
    document.getElementById("searchEnrollment").value = enrollmentNo;
    searchStudentByEnrollment();
    // Scroll to top of section
    document.getElementById("students").scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// ASSIGNMENTS FUNCTIONS
// ============================================
const assignmentsList = [
    {
        id: "ASG001",
        subject: "Data Structures",
        division: "3A",
        title: "Implementation of Binary Search Tree",
        description: "Implement BST with insert, delete, and traversal operations",
        dueDate: "2024-12-30",
        totalMarks: 50,
        status: "Active",
        submissions: 12,
        totalStudents: 25
    },
    {
        id: "ASG002",
        subject: "Web Development",
        division: "All",
        title: "Create a Responsive Portfolio Website",
        description: "Design and develop a personal portfolio using HTML, CSS, and JavaScript",
        dueDate: "2025-01-05",
        totalMarks: 100,
        status: "Active",
        submissions: 8,
        totalStudents: 45
    },
    {
        id: "ASG003",
        subject: "Database Management",
        division: "3A",
        title: "SQL Query Practice",
        description: "Solve the given 20 SQL queries on the sample database",
        dueDate: "2024-12-20",
        totalMarks: 40,
        status: "Closed",
        submissions: 23,
        totalStudents: 25
    }
];

function createAssignment() {
    const subject = document.getElementById("assignSubject").value;
    const division = document.getElementById("assignDivision").value;
    const title = document.getElementById("assignTitle").value;
    const description = document.getElementById("assignDescription").value;
    const dueDate = document.getElementById("assignDueDate").value;
    const marks = document.getElementById("assignMarks").value;
    
    if (!subject || !division || !title || !description || !dueDate || !marks) {
        alert("⚠️ Please fill all required fields!");
        return;
    }
    
    const newAssignment = {
        id: "ASG" + (assignmentsList.length + 1).toString().padStart(3, '0'),
        subject,
        division,
        title,
        description,
        dueDate,
        totalMarks: parseInt(marks),
        status: "Active",
        submissions: 0,
        totalStudents: division === "All" ? 45 : 25
    };
    
    assignmentsList.unshift(newAssignment);
    
    // Show success
    document.getElementById("assignSuccess").style.display = "block";
    setTimeout(() => {
        document.getElementById("assignSuccess").style.display = "none";
    }, 3000);
    
    // Clear form
    document.getElementById("assignSubject").value = "";
    document.getElementById("assignDivision").value = "";
    document.getElementById("assignTitle").value = "";
    document.getElementById("assignDescription").value = "";
    document.getElementById("assignDueDate").value = "";
    document.getElementById("assignMarks").value = "";
    
    // Reload list
    loadAssignments();
}

function loadAssignments() {
    const container = document.getElementById("assignmentsList");
    if (!container) return;
    
    container.innerHTML = assignmentsList.map(asg => `
        <div class="assignment-card ${asg.status.toLowerCase()}">
            <div class="assignment-header">
                <h4>${asg.title}</h4>
                <span class="status-badge ${asg.status.toLowerCase()}">${asg.status}</span>
            </div>
            <p class="assignment-subject">📚 ${asg.subject} | 🏫 Division: ${asg.division}</p>
            <p class="assignment-desc">${asg.description}</p>
            <div class="assignment-meta">
                <span>📅 Due: ${asg.dueDate}</span>
                <span>📝 Marks: ${asg.totalMarks}</span>
                <span>✅ Submissions: ${asg.submissions}/${asg.totalStudents}</span>
            </div>
            <div class="assignment-actions">
                <button class="btn btn-info btn-small" onclick="viewSubmissions('${asg.id}')">👁️ View Submissions</button>
                ${asg.status === 'Active' ? `<button class="btn btn-danger btn-small" onclick="closeAssignment('${asg.id}')">🔒 Close</button>` : ''}
            </div>
        </div>
    `).join('');
}

function filterAssignments() {
    loadAssignments();
}

function viewSubmissions(id) {
    alert(`📋 Viewing submissions for Assignment: ${id}\n\n(This would show a detailed submission list in a real application)`);
}

function closeAssignment(id) {
    const asg = assignmentsList.find(a => a.id === id);
    if (asg) {
        asg.status = "Closed";
        loadAssignments();
    }
}

// ============================================
// ONLINE CLASSES FUNCTIONS
// ============================================
const onlineClasses = [
    {
        id: "CLS001",
        subject: "Data Structures",
        division: "3A",
        topic: "Introduction to Binary Trees",
        date: "2024-12-26",
        time: "10:00",
        duration: 60,
        platform: "Google Meet",
        meetLink: "https://meet.google.com/abc-defg-hij",
        status: "Upcoming"
    },
    {
        id: "CLS002",
        subject: "Web Development",
        division: "All",
        topic: "JavaScript ES6 Features",
        date: "2024-12-27",
        time: "14:00",
        duration: 90,
        platform: "Zoom",
        meetLink: "https://zoom.us/j/123456789",
        status: "Upcoming"
    },
    {
        id: "CLS003",
        subject: "Database Management",
        division: "3A",
        topic: "Normalization in DBMS",
        date: "2024-12-20",
        time: "11:00",
        duration: 60,
        platform: "Google Meet",
        meetLink: "https://meet.google.com/xyz-uvwx-yz",
        status: "Completed"
    }
];

function scheduleClass() {
    const subject = document.getElementById("classSubject").value;
    const division = document.getElementById("classDivision").value;
    const topic = document.getElementById("classTopic").value;
    const date = document.getElementById("classDate").value;
    const time = document.getElementById("classTime").value;
    const duration = document.getElementById("classDuration").value;
    const platform = document.getElementById("classPlatform").value;
    const meetLink = document.getElementById("classMeetLink").value;
    
    if (!subject || !division || !topic || !date || !time || !duration || !platform || !meetLink) {
        alert("⚠️ Please fill all required fields!");
        return;
    }
    
    const newClass = {
        id: "CLS" + (onlineClasses.length + 1).toString().padStart(3, '0'),
        subject,
        division,
        topic,
        date,
        time,
        duration: parseInt(duration),
        platform,
        meetLink,
        status: "Upcoming"
    };
    
    onlineClasses.unshift(newClass);
    
    // Show success
    document.getElementById("classSuccess").style.display = "block";
    setTimeout(() => {
        document.getElementById("classSuccess").style.display = "none";
    }, 3000);
    
    // Clear form
    document.getElementById("classSubject").value = "";
    document.getElementById("classDivision").value = "";
    document.getElementById("classTopic").value = "";
    document.getElementById("classDate").value = "";
    document.getElementById("classTime").value = "";
    document.getElementById("classDuration").value = "";
    document.getElementById("classPlatform").value = "";
    document.getElementById("classMeetLink").value = "";
    document.getElementById("classDescription").value = "";
    
    // Reload lists
    loadOnlineClasses();
}

function loadOnlineClasses() {
    const upcomingContainer = document.getElementById("upcomingClassesList");
    const pastContainer = document.getElementById("pastClassesList");
    
    if (!upcomingContainer || !pastContainer) return;
    
    const upcoming = onlineClasses.filter(c => c.status === "Upcoming");
    const past = onlineClasses.filter(c => c.status === "Completed");
    
    upcomingContainer.innerHTML = upcoming.length ? upcoming.map(cls => `
        <div class="class-card upcoming">
            <div class="class-header">
                <h4>${cls.topic}</h4>
                <span class="platform-badge">${cls.platform}</span>
            </div>
            <p class="class-subject">📚 ${cls.subject} | 🏫 Division: ${cls.division}</p>
            <div class="class-meta">
                <span>📅 ${cls.date}</span>
                <span>⏰ ${cls.time}</span>
                <span>⏱️ ${cls.duration} mins</span>
            </div>
            <div class="class-actions">
                <a href="${cls.meetLink}" target="_blank" class="btn btn-success btn-small">🎥 Start Class</a>
                <button class="btn btn-secondary btn-small" onclick="copyMeetLink('${cls.meetLink}')">📋 Copy Link</button>
                <button class="btn btn-danger btn-small" onclick="cancelClass('${cls.id}')">❌ Cancel</button>
            </div>
        </div>
    `).join('') : '<p style="color: var(--secondary-color);">No upcoming classes scheduled.</p>';
    
    pastContainer.innerHTML = past.length ? past.map(cls => `
        <div class="class-card past">
            <div class="class-header">
                <h4>${cls.topic}</h4>
                <span class="status-badge completed">Completed</span>
            </div>
            <p class="class-subject">📚 ${cls.subject} | 🏫 Division: ${cls.division}</p>
            <div class="class-meta">
                <span>📅 ${cls.date}</span>
                <span>⏰ ${cls.time}</span>
                <span>⏱️ ${cls.duration} mins</span>
            </div>
        </div>
    `).join('') : '<p style="color: var(--secondary-color);">No past classes.</p>';
}

function copyMeetLink(link) {
    navigator.clipboard.writeText(link).then(() => {
        alert("✅ Meeting link copied to clipboard!");
    });
}

function cancelClass(id) {
    if (confirm("Are you sure you want to cancel this class?")) {
        const index = onlineClasses.findIndex(c => c.id === id);
        if (index !== -1) {
            onlineClasses.splice(index, 1);
            loadOnlineClasses();
        }
    }
}

// ============================================
// MY ATTENDANCE - TEACHER'S OWN ATTENDANCE
// ============================================
const myAttendanceRecords = [
    { date: "2024-12-20", day: "Monday", status: "Present", markedBy: "HOD", remarks: "" },
    { date: "2024-12-19", day: "Sunday", status: "Holiday", markedBy: "System", remarks: "Weekly off" },
    { date: "2024-12-18", day: "Saturday", status: "Present", markedBy: "HOD", remarks: "" },
    { date: "2024-12-17", day: "Friday", status: "Present", markedBy: "HOD", remarks: "" },
    { date: "2024-12-16", day: "Thursday", status: "Present", markedBy: "HOD", remarks: "" },
    { date: "2024-12-15", day: "Wednesday", status: "Leave", markedBy: "HOD", remarks: "Medical Leave" },
    { date: "2024-12-14", day: "Tuesday", status: "Present", markedBy: "HOD", remarks: "" },
    { date: "2024-12-13", day: "Monday", status: "Present", markedBy: "HOD", remarks: "" },
    { date: "2024-12-12", day: "Sunday", status: "Holiday", markedBy: "System", remarks: "Weekly off" },
    { date: "2024-12-11", day: "Saturday", status: "Absent", markedBy: "HOD", remarks: "Unplanned" },
    { date: "2024-12-10", day: "Friday", status: "Present", markedBy: "HOD", remarks: "" },
    { date: "2024-12-09", day: "Thursday", status: "Present", markedBy: "HOD", remarks: "" },
    { date: "2024-12-08", day: "Wednesday", status: "Present", markedBy: "HOD", remarks: "" },
    { date: "2024-12-07", day: "Tuesday", status: "Present", markedBy: "HOD", remarks: "" },
    { date: "2024-12-06", day: "Monday", status: "Present", markedBy: "HOD", remarks: "" }
];

const myLeaveRequests = [
    {
        id: 1,
        fromDate: "2024-12-15",
        toDate: "2024-12-15",
        days: 1,
        reason: "Medical checkup",
        status: "Approved",
        appliedOn: "2024-12-13"
    },
    {
        id: 2,
        fromDate: "2024-12-22",
        toDate: "2024-12-24",
        days: 3,
        reason: "Family function",
        status: "Pending",
        appliedOn: "2024-12-20"
    },
    {
        id: 3,
        fromDate: "2024-11-28",
        toDate: "2024-11-29",
        days: 2,
        reason: "Personal work",
        status: "Approved",
        appliedOn: "2024-11-25"
    }
];

function loadMyAttendance() {
    // Update stats
    const workingDays = myAttendanceRecords.filter(r => r.status !== "Holiday");
    const presentDays = myAttendanceRecords.filter(r => r.status === "Present").length;
    const absentDays = myAttendanceRecords.filter(r => r.status === "Absent").length;
    const leaveDays = myAttendanceRecords.filter(r => r.status === "Leave").length;
    const totalDays = workingDays.length;
    const percentage = totalDays > 0 ? ((presentDays / totalDays) * 100).toFixed(1) : 0;

    document.getElementById("myTotalDays").textContent = totalDays;
    document.getElementById("myPresentDays").textContent = presentDays;
    document.getElementById("myAbsentDays").textContent = absentDays;
    document.getElementById("myLeaveDays").textContent = leaveDays;
    document.getElementById("myAttendancePercentage").textContent = percentage + "%";

    // Load attendance history
    const tbody = document.getElementById("myAttendanceHistoryBody");
    if (tbody) {
        tbody.innerHTML = myAttendanceRecords.map(record => {
            let statusClass = "status-badge ";
            if (record.status === "Present") statusClass += "approved";
            else if (record.status === "Absent") statusClass += "rejected";
            else if (record.status === "Leave") statusClass += "pending";
            else statusClass += "pending";

            return `
                <tr>
                    <td>${record.date}</td>
                    <td>${record.day}</td>
                    <td><span class="${statusClass}">${record.status}</span></td>
                    <td>${record.markedBy}</td>
                    <td>${record.remarks || "-"}</td>
                </tr>
            `;
        }).join('');
    }

    // Load leave requests
    loadMyLeaveRequests();
}

function loadMyLeaveRequests() {
    const tbody = document.getElementById("myLeaveRequestsBody");
    if (tbody) {
        tbody.innerHTML = myLeaveRequests.map(req => {
            let statusClass = "status-badge ";
            if (req.status === "Approved") statusClass += "approved";
            else if (req.status === "Rejected") statusClass += "rejected";
            else statusClass += "pending";

            return `
                <tr>
                    <td>${req.fromDate}</td>
                    <td>${req.toDate}</td>
                    <td>${req.days}</td>
                    <td>${req.reason}</td>
                    <td><span class="${statusClass}">${req.status}</span></td>
                    <td>${req.appliedOn}</td>
                </tr>
            `;
        }).join('');
    }
}

function submitLeaveRequest() {
    const fromDate = document.getElementById("leaveFromDate").value;
    const toDate = document.getElementById("leaveToDate").value;
    const reason = document.getElementById("leaveReason").value;

    if (!fromDate || !toDate || !reason) {
        alert("⚠️ Please fill all fields!");
        return;
    }

    // Calculate days
    const from = new Date(fromDate);
    const to = new Date(toDate);
    const days = Math.ceil((to - from) / (1000 * 60 * 60 * 24)) + 1;

    if (days <= 0) {
        alert("⚠️ Invalid date range!");
        return;
    }

    const newRequest = {
        id: myLeaveRequests.length + 1,
        fromDate: fromDate,
        toDate: toDate,
        days: days,
        reason: reason,
        status: "Pending",
        appliedOn: new Date().toISOString().split('T')[0]
    };

    myLeaveRequests.unshift(newRequest);
    
    // Clear form
    document.getElementById("leaveFromDate").value = "";
    document.getElementById("leaveToDate").value = "";
    document.getElementById("leaveReason").value = "";

    alert("✅ Leave request submitted successfully!\nYou will be notified once HOD reviews your request.");
    
    loadMyLeaveRequests();
}

// Expose function globally
window.loadMyAttendance = loadMyAttendance;
window.submitLeaveRequest = submitLeaveRequest;

// ============================================
// UTILITIES
// ============================================

function editProfile() {
    // Keep theme preference, only clear session data
    const currentTheme = localStorage.getItem("theme");
    localStorage.clear();
    if (currentTheme) {
        localStorage.setItem("theme", currentTheme);
    }
} 

function logoutTeacher() {
    try {
        const currentTheme = localStorage.getItem("theme");
        localStorage.clear();
        sessionStorage.clear();
        if (currentTheme) {
            localStorage.setItem("theme", currentTheme);
        }
    } catch(e) {
        console.log("Error clearing storage");
    }
    window.location.href = "../../login.html";
    return false;
}
