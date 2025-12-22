# 📚 Smart Campus Management Portal

> A modern, fully responsive Student Dashboard Portal built with **HTML, CSS, and JavaScript** (No backend, no database). This is a frontend-only minor project perfect for college students learning web development.

## 🎯 Project Overview

Smart Campus is a **complete student management system** featuring:
- 🎓 Student Dashboard with role-based access
- 👑 Class Representative (CR) panel with extra permissions
- 🎫 Proxy Attendance request system
- 🆘 Issue raising and tracking
- 🔔 Notification center
- 📅 Timetable and attendance tracking
- 📖 Subject & study materials management

**All data is stored locally using JavaScript objects and localStorage** - no server required!

---

## 📂 Project Folder Structure

```
frontend/
│
├── assets/
│   └── images/
│       ├── logo.png
│       ├── illustration.png
│       └── (other images)
│
├── css/
│   ├── login.css
│   ├── student.css
│   ├── proxy.css
│   ├── notification.css
│   ├── theme.css
│   └── (other CSS files)
│
├── HTML/
│   ├── login.html
│   ├── student.html
│   ├── proxy_request.html
│   ├── raise-issue.html
│   ├── notification.html
│   └── (other HTML pages)
│
├── js/
│   ├── login.js
│   ├── student.js
│   ├── proxy.js
│   ├── notification.js
│   ├── theme.js
│   └── (other JS files)
│
└── README.md
```

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- A code editor (VS Code recommended)
- No backend server or database needed!

### Installation & Running

1. **Clone or download the project**
   ```bash
   git clone <repository-url>
   cd Smart-Campus
   ```

2. **Open in browser**
   - Navigate to `frontend/HTML/login.html`
   - Double-click the file or use a local server:
   ```bash
   # Using Python
   python -m http.server 8000
   
   # Using Node.js
   npx http-server
   ```

3. **Login Credentials (Dummy Data)**
   - **Role:** Student / Teacher / CR / HOD / Admin
   - **Email:** Any email (e.g., student@college.edu)
   - **Password:** Any password (no validation - dummy system)

---

## 📋 Features & Functionality

### 1. 🎓 Student Dashboard (`student.html`)

#### Dashboard Statistics
- 📊 Attendance Percentage (dummy: 85%)
- 📅 Semester display (5th)
- 👥 Division (3A)
- 📚 Total Subjects (7)

#### Quick Actions
- **View Attendance** - See attendance table by subject
- **Request Proxy Attendance** - Submit proxy request form
- **Raise Issue** - Report problems/complaints
- **View Notifications** - Check announcements & messages
- **View Timetable** - Class schedule
- **View Subjects** - Study materials & notes

#### Issues Management
- List of all raised issues
- Status tracking: Pending → In Progress → Resolved
- Priority levels: Low, Medium, High, Critical

#### Proxy Attendance Status
- Submitted proxy requests
- Status tracking: Pending at CR → Forwarded to Teacher → Approved/Rejected

---

### 2. 👑 CR (Class Representative) Panel

**Visible only when role = "cr"** (change in `student.js`)

#### Extra Features:
✅ **Proxy Request Review**
   - View all pending proxy requests from students
   - Forward to Teacher button
   - Reject with reason button

✅ **Send Class Announcements**
   - Form to broadcast messages to entire class
   - Alerts on submission

---

### 3. 🎫 Proxy Attendance System (`proxy_request.html`)

Students can submit proxy attendance requests with:
- **Subject Selection** - Dropdown of all subjects
- **Date Picker** - Select lecture date
- **Period/Lecture** - Input specific lecture number
- **Reason** - Textarea for detailed explanation
- **Proof Upload** - Optional file attachment (UI only)

**Data Flow:**
1. Student fills form
2. Submits → Saved to localStorage
3. Status: "Pending at CR"
4. CR reviews and forwards
5. Teacher approves/rejects

**Dummy Workflow:**
```
Student Request → CR Panel → Teacher → Approved/Rejected Notification
```

---

### 4. 🆘 Issue Raising System (`raise-issue.html`)

Students can report issues with:
- **Category Selection** - Academic, Infrastructure, Attendance, Exam, Hostel, Fees, Transportation, Other
- **Issue Title** - Brief subject
- **Description** - Detailed explanation
- **Priority Level** - Low, Medium, High, Critical
- **Supporting Document** - Optional file upload

**Features:**
✅ Auto-generated Ticket ID (TKT + timestamp)
✅ Saved to localStorage
✅ Status tracking included
✅ FAQ section with common questions

---

### 5. 🔔 Notification Center (`notification.html`)

Comprehensive notification system with:

#### Notification Types:
- 👨‍💼 **Admin Notifications** - System announcements, schedules
- 👨‍🏫 **Teacher Notifications** - Assignments, alerts, updates
- 👑 **CR Notifications** - Class announcements, proxy status

#### Features:
✅ **Filtering** - View All, Unread, Admin, Teacher, CR
✅ **Mark as Read** - Click ✓ to mark individual notifications
✅ **Delete Notifications** - Click ✕ to remove
✅ **Mark All as Read** - Batch action
✅ **Clear All** - Delete all notifications
✅ **Unread Counter** - Real-time count in navbar

#### Dummy Notifications Include:
- Seminar announcements
- Attendance alerts
- Class schedule changes
- Exam schedules
- Lab report deadlines
- Proxy approval/rejection
- Assignment postings
- Library alerts

---

## 🎨 UI/UX Features

### Design Elements
✨ **Modern Card-Based Layout** - Clean, organized presentation
✨ **Responsive Design** - Works on desktop, tablet, mobile
✨ **Dark Mode Toggle** - Theme switching via `theme.js`
✨ **Color Coded Badges** - Status visualization
✨ **Smooth Animations** - Hover effects and transitions
✨ **Intuitive Navigation** - Clear menu and back buttons

### Theme Support
- Light mode (default)
- Dark mode (toggle button in navbar)
- Accessible color contrast
- Mobile-friendly typography

---

## 📊 Dummy Data Structure

### Student Object
```javascript
const dummyStudent = {
    id: "STU001",
    name: "Akhil Sharma",
    email: "akhil.sharma@college.edu",
    mobile: "9876543210",
    role: "cr", // "student" or "cr"
    semester: 5,
    division: "3A",
    totalSubjects: 7,
    attendance: 85,
    rollNumber: "103054"
};
```

### Issues Array
```javascript
let dummyIssues = [
    {
        id: "ISS001",
        title: "Lab Sessions Timing Issue",
        category: "Academic",
        description: "...",
        status: "Pending", // Pending, In Progress, Resolved
        date: "2024-12-10",
        priority: "High"
    }
];
```

### Notifications Array
```javascript
const dummyNotifications = [
    {
        id: 1,
        title: "Seminar Announcement",
        message: "...",
        sender: "admin", // admin, teacher, cr
        senderName: "Admin",
        date: "2024-12-15",
        read: false
    }
];
```

### Proxy Requests Array
```javascript
let dummyProxyRequests = [
    {
        id: "PRX001",
        subject: "Data Structures",
        date: "2024-12-05",
        period: "Lecture 1",
        reason: "Was sick that day",
        status: "Pending at CR", // Pending at CR, Forwarded to Teacher, Approved, Rejected
        submittedDate: "2024-12-06"
    }
];
```

---

## 💾 Data Persistence

### localStorage Usage
Data is saved to browser's localStorage for persistence:

```javascript
// Save data
localStorage.setItem("proxyRequests", JSON.stringify(proxyRequests));

// Retrieve data
let proxyRequests = JSON.parse(localStorage.getItem("proxyRequests")) || [];

// Clear data
localStorage.clear();
```

**Stored Keys:**
- `proxyRequests` - Submitted proxy attendance requests
- `raisedIssues` - Issues raised by student
- `themeMode` - User's theme preference

---

## 🔧 Customization Guide

### Change Student Role to CR
Edit `student.js` line:
```javascript
const dummyStudent = {
    role: "cr" // Change from "student" to "cr"
};
```

### Add New Notifications
Edit `notification.js` and add to `dummyNotifications` array:
```javascript
const dummyNotifications = [
    // ... existing notifications
    {
        id: 9,
        title: "Your New Notification",
        message: "Message here",
        sender: "admin",
        senderName: "Admin",
        date: "2024-12-16",
        read: false
    }
];
```

### Modify Subjects
Edit `student.js` in `dummySubjects` array to add/remove subjects

### Change Theme Colors
Edit CSS files, modify `:root` CSS variables:
```css
:root {
    --primary-color: #007bff;
    --secondary-color: #6c757d;
    /* ... other colors */
}
```

---

## 🎓 Learning Outcomes

This project teaches:
- ✅ HTML5 semantic markup
- ✅ CSS3 Grid & Flexbox layouts
- ✅ JavaScript ES6+ features
- ✅ DOM manipulation
- ✅ Event handling
- ✅ localStorage API
- ✅ Responsive design
- ✅ UI/UX principles
- ✅ Form validation
- ✅ Date handling

---

## 📱 Browser Compatibility

| Browser | Tested | Status |
|---------|--------|--------|
| Chrome  | ✅     | Full Support |
| Firefox | ✅     | Full Support |
| Safari  | ✅     | Full Support |
| Edge    | ✅     | Full Support |
| IE 11   | ❌     | Not Supported |

---

## 🐛 Known Limitations

⚠️ **Important Notes:**
- No actual authentication (all logins accepted)
- No backend server or database
- No file upload functionality (UI only)
- Notifications are hardcoded dummy data
- No email sending capability
- localStorage cleared if browser cache is cleared
- No search/filter across all pages

---

## 🚀 Future Enhancement Ideas

Ideas for extending this project:
1. Add backend API integration (Node.js/Python)
2. Connect to real database (MongoDB/PostgreSQL)
3. Implement real authentication system
4. Add email notifications
5. File upload functionality
6. Advanced reporting & analytics
7. Multi-language support
8. Payment integration for fees
9. Integration with college management system
10. Mobile app version using React Native

---

## 📄 File Structure Explanation

### HTML Files
- `login.html` - Login page with role selection
- `student.html` - Main student dashboard
- `proxy_request.html` - Proxy attendance form
- `raise-issue.html` - Issue raising form
- `notification.html` - Notification center

### CSS Files
- `login.css` - Login page styling
- `student.css` - Dashboard & main styling
- `proxy.css` - Forms & pages styling
- `notification.css` - Notification page styling
- `theme.css` - Dark mode toggle functionality

### JavaScript Files
- `login.js` - Login page logic
- `student.js` - Dashboard logic, dummy data
- `proxy.js` - Proxy & issue form handling
- `notification.js` - Notification logic
- `theme.js` - Dark/light mode toggle

---

## 🤝 Contributing

Found a bug or want to improve? Here's how:
1. Fork the repository
2. Create a feature branch (`git checkout -b feature/improvement`)
3. Make your changes
4. Commit (`git commit -am 'Add feature'`)
5. Push to branch (`git push origin feature/improvement`)
6. Create Pull Request

---

## 📜 License

This project is open source and available under the MIT License.

---

## 👨‍💻 Author

**Smart Campus Management Portal**
- Created as a Minor Project
- Frontend-only implementation
- Perfect for learning web development

---

## 🙋 Support & Questions

For questions or issues:
- Check the FAQ section in raise-issue.html
- Review the code comments
- Test with browser console (F12)
- Check localStorage values in DevTools

---

## ✨ Key Features Summary

| Feature | Status | Details |
|---------|--------|---------|
| Student Dashboard | ✅ Complete | Full-featured dashboard |
| CR Panel | ✅ Complete | Extra permissions for CR |
| Proxy Attendance | ✅ Complete | Full request workflow |
| Issue Raising | ✅ Complete | Category & priority support |
| Notifications | ✅ Complete | Filtering & management |
| Dark Mode | ✅ Complete | Theme toggle |
| Responsive Design | ✅ Complete | Mobile, tablet, desktop |
| localStorage | ✅ Complete | Data persistence |
| Dummy Data | ✅ Complete | Pre-populated |

---

## 🎉 Thank You!

Happy coding! Feel free to modify and extend this project for your learning. This is a great foundation for understanding how modern web applications work.

**Made with ❤️ for students learning web development**

---

**Last Updated:** December 2024
**Version:** 1.0.0
**Status:** Production Ready ✅
