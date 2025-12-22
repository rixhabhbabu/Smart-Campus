# Smart Campus Portal - Developer Documentation

## 📋 Table of Contents
1. [Architecture Overview](#architecture-overview)
2. [Page Details](#page-details)
3. [JavaScript Modules](#javascript-modules)
4. [CSS Structure](#css-structure)
5. [Data Management](#data-management)
6. [API/Integration Points](#api-integration-points)
7. [Customization Guide](#customization-guide)
8. [Troubleshooting](#troubleshooting)

---

## Architecture Overview

### Technology Stack
```
Frontend Layer
├── HTML5 (Markup)
├── CSS3 (Styling)
└── JavaScript ES6+ (Logic)

Data Layer
└── Browser localStorage (Persistence)

Design Pattern
├── Multi-page SPA style
├── Card-based UI components
└── Modal dialogs for details
```

### Project Structure
```
SMART CAMPUS/frontend/
├── HTML/
│   ├── Markup files (15 pages)
│   └── Navigation through href/onclick
├── CSS/
│   ├── Global variables (:root)
│   ├── Component styles
│   └── Dark mode overrides
└── js/
    ├── Page logic files
    ├── Event listeners
    └── localStorage handlers
```

---

## Page Details

### 1. **student.html** - Main Dashboard
**Purpose**: Landing page for all students

**Key Components**:
```html
├── Navbar
│   ├── Logo + Project Title
│   ├── Student Name (dynamic)
│   ├── Role Badge (Student/CR)
│   ├── Dark Mode Toggle
│   └── Logout Button
│
├── Dashboard Stats (4 cards)
│   ├── Attendance %
│   ├── Semester
│   ├── Division
│   └── Total Subjects
│
├── Features Grid (10 cards linking to)
│   ├── profile.html
│   ├── proxy_request.html
│   ├── raise-issue.html
│   ├── notification.html
│   ├── feedback.html
│   ├── announcements.html
│   ├── results.html
│   ├── activity.html
│   └── Modal buttons for Attendance/Timetable/Subjects
│
├── Issues Section (dynamic list)
├── Proxy Requests Section (dynamic list)
│
└── CR Panel (hidden when role="student")
    ├── Proxy Requests Review
    └── Announcement Form
```

**Dependencies**:
- `student.js` - Logic
- `student.css` - Styling
- `theme.js` - Dark mode

**Data Structures** (in student.js):
```javascript
const dummyStudent = {
    id: "STU001",
    name: "Akhil Sharma",
    email: "akhil.sharma@college.ac.in",
    enrollment: "20191001",
    role: "student" // or "cr"
}

const dummyAttendance = [
    { subject: "Data Structures", percentage: 95 },
    // ... 7 subjects
]

const dummyTimetable = [
    { time: "09:00-10:00", subject: "DBMS", room: "B201" },
    // ... 8 entries
]

const dummyIssues = [
    { id: "ISS001", title: "Lab Equipment Issue", status: "Pending" },
    // ... 3 issues
]

const dummyProxyRequests = [
    { id: "PRX001", date: "2024-12-15", status: "Pending" },
    // ... 3 requests
]
```

---

### 2. **profile.html** - Student Profile
**Purpose**: Display complete student information

**Sections**:
- Profile Header (Avatar + Name + Role)
- Personal Information
- Academic Information
- Contact Information
- Address
- Action Buttons

**CSS**: Uses `.profile-card`, `.profile-header`, `.detail-group`, `.detail-row` classes
**JavaScript**: Reads from localStorage and dummyStudent object

---

### 3. **feedback.html** - Feedback System
**Purpose**: Collect student feedback with ratings

**Components**:
```html
├── Feedback Type Selector
│   ├── Teacher Feedback
│   ├── Subject/Course Feedback
│   ├── System/Portal Feedback
│   ├── Facility Feedback
│   └── General Suggestion
│
├── Target Field (teacher/subject name)
├── Star Rating (1-5 stars)
├── Feedback Message textarea
├── Anonymous Checkbox
├── Submit Button
│
└── Feedback History Section
    └── Previous feedback entries with ratings
```

**JavaScript** (feedback.js):
```javascript
// Star rating setup
function setupStarRating() { ... }

// Form submission
function handleFeedbackForm() { ... }

// Display history
function displayFeedbackHistory() { ... }

// localStorage key: "feedbackSubmissions"
```

---

### 4. **announcements.html** - Announcements
**Purpose**: Display college/class/dept announcements

**Features**:
- Filter by type (All/College/Class/Department)
- Priority indicators (High/Medium/Low)
- Sender badges
- Timestamp display

**Data Structure**:
```javascript
const dummyAnnouncements = [
    {
        id: "ANN001",
        type: "college", // college/class/dept
        title: "Winter Break",
        message: "College is closed from Dec 22 to Jan 5",
        sender: "Principal",
        date: "2024-12-01",
        priority: "high" // high/medium/low
    }
]
```

---

### 5. **results.html** - Results/Marks
**Purpose**: Display semester results and CGPA

**Sections**:
- CGPA Display Header
- Results by Semester (5th, 4th, 3rd)
- Subject-wise Marks Table
- Grade Display with Color Coding
- SGPA per Semester

**Grade Color Scheme**:
```javascript
A = Green (#d4edda)
B+ = Light Blue (#cfe2ff)
B = Light Blue (#cfe2ff)
C = Yellow (#fff3cd)
```

**Data Structure**:
```javascript
const dummyResults = [
    {
        semester: 5,
        subjects: [
            { code: "CS501", name: "Subject Name", marks: 95, grade: "A" }
        ],
        sgpa: 8.67
    }
]
```

---

### 6. **activity.html** - Activity Timeline
**Purpose**: Display timeline of student activities

**Features**:
- Vertical timeline visualization
- Activity type indicators
- Colored badges (Attendance/Proxy/Feedback/Issue)
- Alternating layout (odd-even positioning)
- Timestamps

**Activity Types**:
```javascript
const dummyActivities = [
    {
        id: "ACT001",
        type: "attendance", // attendance/proxy/feedback/issue
        title: "Attendance Marked",
        description: "Marked present for DBMS",
        date: "2024-12-15 09:00 AM",
        icon: "✅"
    }
]
```

---

### 7. **proxy_request.html** - Proxy Form
**Purpose**: Submit proxy attendance requests

**Form Fields**:
- Subject selection (dropdown)
- Date picker (min = today)
- Period/Lecture number
- Reason textarea
- Document upload
- Submit button

**Validation**:
- Date must be >= today
- All required fields marked with *
- Form submission triggers success message

**localStorage Key**: `"proxyRequests"`

---

### 8. **raise-issue.html** - Issue Form
**Purpose**: Report problems/complaints

**Form Fields**:
- Issue Category (Academic/Infrastructure/Hostel/Other)
- Title
- Description
- Priority Level (Low/Medium/High)
- Document upload
- Auto-generated Ticket ID

**localStorage Key**: `"raisedIssues"`

---

### 9. **notification.html** - Notifications Center
**Purpose**: View and manage notifications

**Features**:
- Filter buttons (All/Unread/Admin/Teacher/CR)
- Unread count display
- Mark as read/unread
- Delete notification
- Clear all notifications
- Sender badges with colors

**Filter States**:
```javascript
Admin Messages (Red badge)
Teacher Messages (Blue badge)
CR Messages (Yellow badge)
```

---

## JavaScript Modules

### **student.js** (295 lines)

**Functions**:
```javascript
// Initialize page
function loadStudentDashboard() { ... }

// Handle events
function setupEventListeners() { ... }

// Load data
function loadIssues() { ... }
function loadProxyRequests() { ... }

// Modal dialogs
function showAttendanceModal() { ... }
function showTimetableModal() { ... }
function showSubjectsModal() { ... }

// CR functions
function checkRoleAndShowCRPanel() { ... }
function forwardToTeacher(requestId) { ... }
function rejectProxy(requestId) { ... }

// Close modal
function closeModal() { ... }
```

### **proxy.js** (110 lines)

**Functions**:
```javascript
// Form submission handling
document.getElementById("proxyForm")?.addEventListener("submit", function(e) {
    e.preventDefault();
    const formData = {
        id: "PRX" + Date.now(),
        subject: document.getElementById("subject").value,
        date: document.getElementById("date").value,
        period: document.getElementById("period").value,
        reason: document.getElementById("reason").value,
        status: "Pending",
        submittedDate: new Date().toLocaleDateString()
    };
    
    let requests = JSON.parse(localStorage.getItem("proxyRequests")) || [];
    requests.push(formData);
    localStorage.setItem("proxyRequests", JSON.stringify(requests));
});
```

### **notification.js** (195 lines)

**Functions**:
```javascript
function renderNotifications(filter = "all") { ... }
function getSenderBadge(sender) { ... }
function markAsRead(notificationId) { ... }
function deleteNotification(notificationId) { ... }
function clearAllNotifications() { ... }
function setupFilterButtons() { ... }
```

### **feedback.js** (200 lines)

**Functions**:
```javascript
function setupStarRating() { ... }
function handleFeedbackForm() { ... }
function displayFeedbackHistory() { ... }
```

### **announcements.js** (95 lines)

**Functions**:
```javascript
function renderAnnouncements(filter = "all") { ... }
function setupFilterButtons() { ... }
```

### **results.js** (50 lines)

**Functions**:
```javascript
function displayResults() { ... }
function getGradeColor(grade) { ... }
```

### **activity.js** (85 lines)

**Functions**:
```javascript
function displayActivityTimeline() { ... }
function getActivityIcon(type) { ... }
```

### **theme.js** (Existing)

**Functions**:
```javascript
// Toggle dark/light mode
document.getElementById("themeToggle")?.addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("theme", 
        document.body.classList.contains("dark-mode") ? "dark" : "light"
    );
    updateThemeIcon();
});
```

---

## CSS Structure

### **student.css** (717 lines)

**Sections**:
```css
/* Variables & Reset */
:root { ... }
* { ... }

/* Navbar */
.navbar { ... }
.navbar-container { ... }
.navbar-logo { ... }
.navbar-left { ... }
.navbar-right { ... }

/* Dashboard */
.dashboard-stats { ... }
.stat-card { ... }

/* Features Grid */
.features-section { ... }
.features-grid { ... }
.feature-card { ... }

/* Issues & Proxy Sections */
.issues-section { ... }
.proxy-section { ... }

/* CR Panel */
.cr-panel { ... }

/* Modals */
.modal { ... }
.modal-content { ... }

/* Dark Mode */
body.dark-mode { ... }

/* Responsive */
@media (max-width: 768px) { ... }
@media (max-width: 480px) { ... }
```

### **proxy.css** (900+ lines)

**Sections**:
```css
/* Forms */
.proxy-form { ... }
.form-group { ... }
.form-section { ... }

/* Buttons */
.btn { ... }
.btn-primary { ... }

/* Profile Styles */
.profile-card { ... }
.profile-header { ... }
.detail-group { ... }

/* Feedback Styles */
.star-rating { ... }
.feedback-item { ... }

/* Announcements */
.announcement-item { ... }
.filter-buttons { ... }

/* Results */
.result-table { ... }
.grade { ... }

/* Timeline */
.timeline { ... }
.timeline-item { ... }

/* Dark Mode Overrides */
body.dark-mode { ... }
```

### **notification.css** (591 lines)

**Key Classes**:
- `.notification-item` - Notification container
- `.sender-badge` - Sender indicator
- `.unread` - Unread state
- `.filter-buttons` - Filter controls
- `.notification-modal` - Detail modal

---

## Data Management

### localStorage Keys

```javascript
// User Submissions
localStorage.setItem("proxyRequests", JSON.stringify(arrayOfRequests));
localStorage.setItem("raisedIssues", JSON.stringify(arrayOfIssues));
localStorage.setItem("feedbackSubmissions", JSON.stringify(arrayOfFeedback));

// Theme Preference
localStorage.setItem("theme", "dark" or "light");

// Example retrieval
const proxyRequests = JSON.parse(localStorage.getItem("proxyRequests")) || [];
```

### Data Flow Example (Proxy Request)

```
1. User fills form on proxy_request.html
2. Form submit → proxy.js captures data
3. Data stored to localStorage["proxyRequests"]
4. User navigates to student.html
5. student.js reads localStorage and displays in Proxy section
6. Dark mode preference read from localStorage["theme"]
```

---

## API/Integration Points

### Future Backend Integration

**API Endpoints to Create** (for future backend):

```
GET    /api/student/{id}              → Get student profile
GET    /api/attendance/{studentId}    → Get attendance records
POST   /api/proxy-request             → Submit proxy request
GET    /api/proxy-request/{studentId} → Get proxy requests
POST   /api/issue                     → Submit issue
GET    /api/issue/{studentId}         → Get issues
POST   /api/feedback                  → Submit feedback
GET    /api/feedback/{studentId}      → Get feedback history
GET    /api/announcements             → Get all announcements
GET    /api/results/{studentId}       → Get student results
GET    /api/activity/{studentId}      → Get activity history
GET    /api/notifications/{studentId} → Get notifications
```

### Current Mock Implementation

All APIs are currently mocked with localStorage:

```javascript
// Mock API calls
const mockFetch = (endpoint, method = "GET", data = null) => {
    switch(endpoint) {
        case "/api/proxy-request":
            return {
                data: JSON.parse(localStorage.getItem("proxyRequests")) || []
            };
        // ... other endpoints
    }
};
```

---

## Customization Guide

### 1. Change Colors

Edit `:root` in **student.css** or **proxy.css**:

```css
:root {
    --primary-color: #007bff;      /* Change this */
    --secondary-color: #6c757d;    /* Change this */
    --success-color: #28a745;      /* Change this */
    --danger-color: #dc3545;       /* Change this */
    --warning-color: #ffc107;      /* Change this */
}
```

### 2. Modify Dummy Data

Edit arrays in **student.js**:

```javascript
const dummyStudent = {
    name: "Your Name",
    email: "your.email@college.ac.in",
    // ... modify other fields
};
```

### 3. Add New Feature

Steps:
1. Create new HTML file in `/HTML` folder
2. Create corresponding CSS in `/CSS` (or add to existing)
3. Create JavaScript in `/js` folder
4. Add link in **student.html** feature grid
5. Add navigation back to dashboard

### 4. Change Navbar Logo

1. Replace image at `assets/images/logo.png`
2. Image dimensions: 60px × 60px (circular)

### 5. Modify Form Fields

Edit form in HTML, then update **proxy.js** data collection:

```javascript
const formData = {
    // Add new fields here
    newField: document.getElementById("newFieldId").value
};
```

---

## Troubleshooting

### Dark Mode Not Working
**Solution**: Check if `theme.js` is properly linked and `<button id="themeToggle">` exists

### Forms Not Saving
**Solution**: Check browser's localStorage is enabled:
```javascript
// Test localStorage
try {
    localStorage.setItem("test", "value");
    console.log("localStorage working");
} catch(e) {
    console.error("localStorage not available");
}
```

### Styling Issues
**Solution**: 
- Check CSS file is linked in `<head>`
- Verify class names match in HTML and CSS
- Check for CSS conflicts in dark mode

### JavaScript Errors
**Solution**:
- Open browser DevTools (F12)
- Check Console tab for errors
- Verify all IDs in HTML match those in JavaScript

### Form Validation Not Working
**Solution**:
- Add `required` attribute to HTML inputs
- Check form ID matches in JavaScript
- Verify input type attributes are correct

### Navigation Links Broken
**Solution**:
- Use relative paths: `href="profile.html"`
- Don't use absolute paths: `href="/frontend/HTML/profile.html"`
- Maintain folder structure consistency

---

## Performance Optimization Tips

1. **Reduce Images**: Keep logo as SVG or small PNG
2. **Minify CSS/JS**: For production deployment
3. **Lazy Load**: Load modals on demand
4. **Clear Old Data**: Implement localStorage cleanup function
5. **Cache Dummy Data**: Load once at page init

---

## Security Considerations

⚠️ **Current Implementation**:
- No authentication/authorization
- All data visible to anyone
- No input sanitization
- No CSRF protection

✅ **Before Production**:
- Implement backend authentication
- Add server-side validation
- Use HTTPS
- Implement rate limiting
- Sanitize all user inputs
- Implement proper access control

---

## Testing Checklist

- [ ] All pages load without errors
- [ ] Dark mode toggle works on all pages
- [ ] Forms save to localStorage correctly
- [ ] All navigation links work
- [ ] Responsive design works on mobile
- [ ] Modal dialogs open/close properly
- [ ] Dropdown selects function correctly
- [ ] Date picker works and validates
- [ ] Dummy data displays properly

---

## Code Quality Standards

✅ Code follows these patterns:
- Semantic HTML5
- BEM-style CSS class naming
- Event delegation where possible
- Modular JavaScript functions
- Comments on complex logic
- Consistent indentation (2 spaces)

---

## Deployment Instructions

1. **Local Testing**:
   ```bash
   # Open student.html in browser
   # OR use a local web server:
   python -m http.server 8000
   # Then visit: http://localhost:8000/SMART%20CAMPUS/frontend/HTML/student.html
   ```

2. **Production Deployment**:
   - Copy `/frontend` folder to web server
   - Ensure all paths are relative
   - Test in target browsers
   - Clear cache if updating files

---

**Last Updated**: December 2024
**Maintained By**: Development Team
**Version**: 1.0
