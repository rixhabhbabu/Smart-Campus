# Smart Campus Management Portal 🏫

## 📋 Project Overview

**Smart Campus Management Portal** is a comprehensive college management system designed as a minor project using **HTML5, CSS3, and JavaScript** (frontend-only, no backend/database).

The system provides:
- 🎓 **Student Dashboard** with 10+ interactive features
- 👨‍💼 **Class Representative (CR) Panel** for approval workflows
- 👨‍🏫 **Teacher Dashboard** for class and attendance management
- 👑 **Admin Dashboard** for system-wide oversight
- 🎨 **Dark/Light Theme** with persistent storage
- 📱 **Responsive Design** for all devices
- 💾 **Browser LocalStorage** for data persistence

---

## 🏗️ Project Structure

```
Smart-Campus/
├── frontend/
│   ├── HTML/
│   │   ├── login.html
│   │   ├── admin.html
│   │   ├── teacher.html
│   │   ├── student.html
│   │   ├── notification.html
│   │   ├── proxy_request.html
│   │   ├── proxy_approval_cr.html
│   │   ├── proxy_review_cr.html
│   │   ├── raise-issue.html
│   │   ├── forgot-password.html
│   │   └── [7+ more feature pages]
│   ├── css/
│   │   ├── theme.css (Dark/Light mode)
│   │   ├── admin.css
│   │   ├── student.css
│   │   ├── teacher.css
│   │   ├── login.css
│   │   ├── notification.css
│   │   ├── proxy.css
│   │   └── [others]
│   ├── js/
│   │   ├── theme.js (Dark mode toggle)
│   │   ├── admin.js
│   │   ├── teacher.js
│   │   ├── student.js
│   │   ├── notification.js
│   │   ├── proxy.js
│   │   └── [others]
│   └── assets/
│       └── images/ (Optional)
├── README.md (This file)
└── backend/ (Placeholder for future MEAN stack upgrade)
```

---

## 🚀 Getting Started

### Prerequisites
- Any modern web browser (Chrome, Firefox, Safari, Edge)
- No installation or dependencies required

### How to Run

1. **Extract/Clone the project**
2. **Open `HTML/login.html` in your browser**
3. **Select a user role and login**

That's it! The entire system runs in the browser with `localStorage` for data persistence.

### Test Accounts

| Role | Recommended User |
|------|------------------|
| **Student** | Any student from the dummy data list |
| **Class Rep (CR)** | Akhil Sharma (3A) or Vivek Kumar (3B) |
| **Teacher** | Dr. Rajesh Kumar |
| **Admin** | Dr. Vikram Singh |

---

## 📚 Features by Role

### 1. 🎓 **Student Dashboard**

#### Main Features:
- **📊 Profile Management** - View and update student information
- **📚 Subjects** - View enrolled subjects and course details
- **📅 Timetable** - Weekly class schedule with room numbers
- **📝 Results** - View semester results and performance
- **📢 Announcements** - College-wide announcements
- **📋 Proxy Attendance** - Request attendance proxy with reason and proof
- **⚠️ Raise Issues** - Report academic/infrastructure problems
- **💬 Feedback** - Submit feedback on courses and teachers
- **📊 Activity Timeline** - View personal activity history
- **🔔 Notifications** - Real-time notifications from teachers/admin

#### Flow:
1. Student logs in → Student Dashboard
2. Fills profile, views timetable, subjects, results
3. **For Proxy Request**: Clicks "Request Proxy" → Submits to CR for approval
4. **For Issues**: Clicks "Raise Issue" → Issue goes to Teacher and Admin
5. **For Feedback**: Submits feedback on courses

---

### 2. 👨‍💼 **Class Representative (CR) Panel**

#### Location:
- **Integrated within `student.html`** (NOT a separate page)
- CR-specific UI appears when `role="cr"` is set

#### Features:
- **✅ Approve Proxy Requests** - Review student proxy requests with proof
- **📋 View Pending Proxies** - All proxies awaiting CR decision
- **⏭️ Forward to Teacher** - Send approved proxies to teacher
- **❌ Reject Proxies** - Deny proxy requests with reasons
- **📊 Class Statistics** - See class attendance and metrics
- **👥 Class Roster** - View all students in class
- **📢 Send Messages** - Communicate with class students

#### Proxy Approval Workflow:
```
Student Request → CR Review → Forward to Teacher → Teacher Approval → Attendance Updated
```

---

### 3. 👨‍🏫 **Teacher Dashboard**

#### Features:
- **👥 Class Students** - View complete class roster with attendance
- **📊 Attendance Overview** - Subject-wise and class attendance statistics
- **✅ Approve Proxies** - Review and approve/reject proxy requests from CR
- **📋 View Class Issues** - See all issues reported by class students
- **📢 Send Notifications** - Send notifications to all class students
- **📝 Record Results** - Enter marks and results for students
- **🔍 Proxy Details** - Review student name, subject, date, reason, proof

#### Responsibilities:
1. Monitor class attendance
2. Approve proxies submitted by CR
3. Address student issues reported
4. Communicate with students
5. Record and manage academic results

#### Key UI Sections:
- Statistics Cards (total students, avg attendance, pending approvals)
- Attendance overview by subject
- Proxy approval list with action buttons
- Issues log with priority and status
- Notification sending form
- Results entry form

---

### 4. 👑 **Admin Dashboard**

#### Sidebar Menu:
- **📊 Dashboard** - System overview and health status
- **👥 All Users** - Searchable list of all system users
- **📋 Proxy Requests** - Global view of all proxies with filters
- **⚠️ All Issues** - Global view of all reported issues
- **📢 Send Notification** - System-wide broadcast notifications
- **📈 Reports** - Generate attendance, proxy, issue, and activity reports
- **⚙️ System** - Settings, backup, and maintenance

#### Features:
- **🔍 Search Users** - Filter by name, email, role
- **📊 Dashboard Stats**:
  - Total users, students, teachers, CRs
  - Pending tasks (proxies + issues)
  - System health (database, API, sessions)
  
- **📋 Global Proxy Management**:
  - View all proxies across divisions
  - Filter by status (Pending, Approved, Rejected)
  - Track CR and teacher approvals

- **⚠️ Global Issue Management**:
  - Filter by priority (High, Medium, Low)
  - Filter by status (Pending, In Progress, Resolved)
  - Category-wise classification

- **📢 System-wide Notifications**:
  - Send to All Users, Students, Teachers, or CRs
  - Set urgency type (Urgent, Important, General, Event)

- **📈 Reporting**:
  - Attendance Analysis
  - Proxy Trends
  - Issue Summary
  - User Activity Logs

- **⚙️ System Management**:
  - Security settings (2FA status)
  - Email configuration
  - Backup & restore
  - Activity logging

---

## 🔐 Role Hierarchy

```
┌─────────────────────────────────────────┐
│         ADMIN (Top Level)               │
│  • System oversight                     │
│  • All data access                      │
│  • Global notifications                 │
│  • User management                      │
│  • Reports generation                   │
└──────────────┬──────────────────────────┘
               │ Can communicate to
               ↓
┌──────────────────────────────────────────┐
│    TEACHER (Class Management)            │
│  • Approve proxies                       │
│  • Record results                        │
│  • Send class notifications              │
│  • View class issues                     │
│  • Monitor attendance                    │
└──────────────┬───────────────────────────┘
               │ Can communicate to
               ↓
┌──────────────────────────────────────────┐
│  CLASS REP (Class Coordination)          │
│  • Approve initial proxies               │
│  • Forward to teacher                    │
│  • Class roster access                   │
│  • Send class messages                   │
└──────────────┬───────────────────────────┘
               │ Reports to / Communicates
               ↓
┌──────────────────────────────────────────┐
│      STUDENT (End User)                  │
│  • View profile & subjects               │
│  • Request proxy                         │
│  • Report issues                         │
│  • View results                          │
│  • Submit feedback                       │
└──────────────────────────────────────────┘
```

---

## 🔄 Key Workflows

### Workflow 1: Proxy Attendance Request

```
1. STUDENT submits proxy request
   ├─ Subject
   ├─ Date & Period
   ├─ Reason (medical/emergency/family/etc)
   └─ Proof (note/document)

2. REQUEST FORWARDED TO CR
   ├─ CR reviews with student details
   ├─ CR can APPROVE or REJECT
   └─ If approved, goes to teacher

3. REQUEST FORWARDED TO TEACHER
   ├─ Teacher reviews CR approval
   ├─ Teacher can APPROVE or REJECT
   └─ If approved, attendance is updated

4. FINAL STATUS
   ├─ APPROVED → Attendance marked as proxy
   ├─ REJECTED → Attendance remains absent
   └─ FORWARDED → Waiting for next level
```

### Workflow 2: Issue Reporting

```
1. STUDENT reports issue
   ├─ Title & Category (Academic/Infrastructure)
   ├─ Description
   ├─ Priority level
   └─ Date submitted

2. VISIBLE TO
   ├─ CLASS REPRESENTATIVE
   ├─ TEACHER of that class
   └─ ADMIN (global view)

3. RESOLUTION STATUS
   ├─ PENDING → Assigned to appropriate authority
   ├─ IN PROGRESS → Being addressed
   └─ RESOLVED → Closed with resolution details
```

### Workflow 3: Notification System

```
ADMIN sends → All Users/Students/Teachers/CRs
TEACHER sends → Class Students
CR sends → Class Students
STUDENT receives → From Teacher, CR, Admin
```

---

## 🎨 Theme System

### Dark Mode Features
- **Toggle Switch** in navbar
- **Persistent Storage** - Theme preference saved
- **Complete Coverage** - All pages and components
- **Smooth Transitions** - CSS-based theme switching

### CSS Variables
```css
:root {
  --primary-color: #2196F3;
  --background: #f5f5f5;
  --card-background: #ffffff;
  --text-color: #333;
}

body.dark-mode {
  --background: #0a0e27;
  --card-background: #1a1f3a;
  --text-color: #e0e0e0;
}
```

---

## 💾 Data Persistence

### LocalStorage Keys Used:
```javascript
localStorage.setItem("theme", "dark" | "light");           // Theme preference
localStorage.setItem("userRole", role);                     // Current user role
localStorage.setItem("currentUser", JSON.stringify(user));  // User data
localStorage.setItem("notifications", JSON.stringify(...)); // Notification list
localStorage.setItem("proxyRequests", JSON.stringify(...)); // Proxy data
localStorage.setItem("issues", JSON.stringify(...));        // Issue data
localStorage.setItem("results", JSON.stringify(...));       // Result data
```

### Dummy Data Included:
- **Students**: 10+ test accounts
- **Teachers**: 5+ test accounts
- **CRs**: 2 test accounts
- **Admin**: 1 account
- **Proxy Requests**: 5+ test requests
- **Issues**: 8+ test issues
- **Results**: Pre-populated dummy results

---

## 📱 Responsive Breakpoints

```css
/* Desktop */
≥ 1024px - Full sidebar navigation

/* Tablet */
768px - 1023px - Sidebar collapses, menu becomes horizontal

/* Mobile */
< 768px - Stacked layout, hamburger menu

/* Small Mobile */
< 480px - Optimized spacing, reduced padding
```

---

## 🛠️ Technical Stack

| Layer | Technology |
|-------|-----------|
| **Frontend** | HTML5, CSS3, JavaScript ES6+ |
| **Styling** | Flexbox, CSS Grid, CSS Variables |
| **State Management** | Browser LocalStorage |
| **Theming** | CSS variables + JavaScript toggle |
| **Responsiveness** | Mobile-first approach |

---

## 📖 How to Extend

### Adding New Features to Student:
1. Create new HTML file in `HTML/`
2. Add CSS to `css/student.css`
3. Add JavaScript to `js/student.js`
4. Link from `student.html`

### Adding New Reports to Admin:
1. Add function in `js/admin.js`
2. Create button in `admin.html`
3. Hook up event listener

### Converting to Backend:
This project is designed to be easily upgraded to a **MEAN Stack** (MongoDB, Express, Angular, Node.js):
- HTML pages → Angular components
- LocalStorage → MongoDB database
- JavaScript validation → Node.js/Express validation
- Dummy data → Real API endpoints

---

## 🔑 Key Files

### Core Files:
| File | Purpose |
|------|---------|
| `HTML/login.html` | Entry point |
| `HTML/student.html` | Student + CR combined dashboard |
| `HTML/teacher.html` | Teacher dashboard |
| `HTML/admin.html` | Admin dashboard |
| `js/theme.js` | Dark/light mode system |
| `css/theme.css` | Theme variables |

### Student Feature Pages:
| File | Feature |
|------|---------|
| `HTML/profile.html` | Student profile |
| `HTML/subjects.html` | Subject listing |
| `HTML/timetable.html` | Weekly schedule |
| `HTML/results.html` | Semester results |
| `HTML/announcements.html` | College announcements |
| `HTML/proxy_request.html` | Proxy attendance |
| `HTML/raise-issue.html` | Issue reporting |
| `HTML/feedback.html` | Course feedback |
| `HTML/activity.html` | Activity timeline |
| `HTML/notification.html` | Notification center |

---

## 🚀 Future Enhancements

### Phase 1: Backend Integration
- [ ] Convert to MEAN stack
- [ ] Add MongoDB for data persistence
- [ ] Create REST API endpoints
- [ ] User authentication with JWT

### Phase 2: Advanced Features
- [ ] File uploads for proxy proof
- [ ] Email notifications
- [ ] SMS alerts
- [ ] Calendar integration
- [ ] Export to PDF/Excel

### Phase 3: Admin Features
- [ ] Analytics dashboard
- [ ] Advanced reporting
- [ ] User import/export
- [ ] System configuration UI

### Phase 4: Mobile App
- [ ] React Native mobile app
- [ ] Push notifications
- [ ] Offline support

---

## 📝 Notes for Developers

### Important Patterns:
1. **Role-based UI** - Check `role` attribute to show/hide features
2. **Event Delegation** - Use event listeners on parent elements
3. **Data Validation** - Validate on client-side (add server validation when backend ready)
4. **Error Handling** - Use try-catch for localStorage operations
5. **Code Organization** - Keep HTML separate from CSS and JavaScript

### Browser Compatibility:
- ✅ Chrome 90+
- ✅ Firefox 88+
- ✅ Safari 14+
- ✅ Edge 90+

### Performance Tips:
- CSS Grid/Flexbox for layouts (avoid float)
- LocalStorage instead of SessionStorage (persistent)
- Event delegation for dynamic content
- Debounce search inputs

---

## 📄 License

This project is created for educational purposes as a college minor project.

---

## 👨‍💻 Developer Notes

### Created By:
**Student Name** (Year/Semester)

### Project Type:
- **Minor Project**: Frontend-only (HTML/CSS/JavaScript)
- **Major Project Ready**: Easily convertible to MEAN stack

### Contact:
For questions or suggestions, contact through college email.

---

## 🎓 Learning Outcomes

Through this project, you will learn:

1. **Frontend Development**
   - HTML5 semantic structure
   - CSS3 layouts and theming
   - JavaScript DOM manipulation
   - Event handling and listeners

2. **State Management**
   - Browser storage APIs
   - Data persistence patterns
   - Data flow between pages

3. **UI/UX Design**
   - Responsive design principles
   - Dark mode implementation
   - Accessibility considerations

4. **Architecture**
   - Role-based access control
   - Workflow implementation
   - Code organization patterns

5. **Project Scalability**
   - Converting frontend to backend
   - API integration patterns
   - Database schema design

---

## 📊 Project Statistics

- **Total Pages**: 15+ HTML files
- **Total CSS**: 900+ lines across 5 files
- **Total JavaScript**: 1000+ lines across 6 files
- **Responsive**: 3 breakpoints (desktop, tablet, mobile)
- **Dark Mode**: 100% coverage
- **Dummy Data**: 50+ objects
- **Features**: 30+ interactive features

---

**Last Updated**: December 2024

**Status**: ✅ Complete and Functional

---

## Quick Start Checklist

- [ ] Download/clone project
- [ ] Open `HTML/login.html` in browser
- [ ] Select a test user role
- [ ] Explore dashboard
- [ ] Toggle dark mode
- [ ] Test proxy workflow
- [ ] Check responsive design on mobile
- [ ] View browser console for logged data

**Happy Coding! 🚀**

View attendance, notices, events, and campus updates

Clean and simple interface

🛠 Tech Stack

(Choose what fits your actual project — default options given)

Frontend

HTML, CSS, JavaScript

Bootstrap / Tailwind / React (optional)

Backend

Node.js / Express

Python (Flask / Django)

Java (Spring Boot)

Database

MySQL / MongoDB / Firebase

Tools

Git & GitHub

VS Code

🚀 Project Objectives

Digitalize traditional campus operations

Improve communication between students & administrators

Reduce manual workload

Offer a seamless, accessible platform for academic activities

🧩 System Workflow (Summary)

Student logs in

Views attendance, upcoming events, notices

Admin updates announcements, events, and data

System syncs changes across dashboards

Reports generated for overall analysis

📂 Folder Structure (Example)
Smart-Campus/
 ├── frontend/
 ├── backend/
 ├── database/
 ├── assets/
 ├── README.md
 └── package.json (if Node.js)

🔮 Future Enhancements

AI chatbot for campus queries

Face recognition attendance

IoT access control

Bus/Hostel management

Cloud synchronization

📜 License

This project is created as a minor academic project. Free to use and modify.
