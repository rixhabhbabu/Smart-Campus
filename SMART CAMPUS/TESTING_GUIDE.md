# 🧪 Quick Testing Guide - Smart Campus Features

## ✅ Testing Checklist

### **Feature #1: Notes Download** 📚

**Student Side:**
- [ ] Open `frontend/HTML/student.html` in browser
- [ ] Look for "📚 Download Notes" card in Quick Actions
- [ ] Click the card → Opens `download-notes.html`
- [ ] Select different subjects from dropdown
- [ ] Click on any note card → Opens preview modal
- [ ] Click "Download" button → Shows success notification
- [ ] Test dark mode toggle (top right) → CSS adjusts colors
- [ ] Test on mobile (F12 → Toggle device toolbar) → Responsive layout

**Expected Behavior:**
```
✅ Notes appear in grid layout
✅ Subject filter works
✅ Modal opens with full note details
✅ Download shows notification
✅ Dark mode changes colors
✅ Mobile view is single column
```

---

**Teacher Side:**
- [ ] Open `frontend/HTML/teacher.html`
- [ ] Scroll to section #9 "📄 Notes Management"
- [ ] Select a subject from dropdown
- [ ] Enter note title
- [ ] Click file input → Shows file picker
- [ ] Click "📤 Upload Notes" → Shows success message
- [ ] Notes should appear in "Uploaded Notes" list

**Expected Behavior:**
```
✅ Form displays all fields
✅ File input is functional
✅ Success notification appears
✅ Notes list updates
✅ Notes appear in student's download page
```

---

### **Feature #2: Assignments** 📝

**Student Side:**
- [ ] Open `student.html`
- [ ] Click "📝 Assignments" card
- [ ] Should see 4-stat dashboard (Total, Pending, Submitted, Graded)
- [ ] Assignments display in card grid
- [ ] Filter by Status dropdown → Only relevant assignments show
- [ ] Filter by Subject dropdown → Filters work together
- [ ] Click any assignment card → Modal opens with details
- [ ] In modal: See assignment description, due date, marks, teacher feedback
- [ ] Upload file in submission form → Shows success message
- [ ] Dark mode → Colors adjust
- [ ] Mobile view → Single column layout

**Expected Behavior:**
```
✅ 4 stat boxes show correct counts
✅ Cards display with color-coded status
✅ Days-left calculation visible
✅ Filters work independently and together
✅ Modal shows all assignment details
✅ File upload works (simulated)
✅ Responsive on all devices
✅ Dark mode fully functional
```

**Data Sample (in assignments.js):**
```javascript
{
  id: "ASS001",
  subject: "Data Structures",
  title: "Stack & Queue Implementation",
  dueDate: "2024-12-25",
  totalMarks: 10,
  status: "Pending",
  daysLeft: 3
}
```

---

**Teacher Side:**
- [ ] Open `frontend/HTML/teacher-assignments.html`
- [ ] In "Create New Assignment" form:
  - [ ] Select subject
  - [ ] Enter assignment title
  - [ ] Enter description
  - [ ] Enter marks
  - [ ] Select due date
  - [ ] Click "📤 Create Assignment"
- [ ] Success message appears
- [ ] New assignment shows in "Active Assignments" list
- [ ] Assignment shows submission count (e.g., 28/45)
- [ ] Click "👁️ View" button → Can view submissions
- [ ] Click "🗑️ Delete" button → Asks confirmation → Deletes

**Expected Behavior:**
```
✅ Form validates all fields
✅ Success message appears
✅ New assignment added to list
✅ Submission rate calculated
✅ View and delete buttons work
✅ Confirmation dialog for delete
✅ Dark mode works throughout
```

---

### **Feature #3: Online Classes** 🎥

**Student Side:**
- [ ] Open `student.html`
- [ ] Click "🎥 Online Classes" card
- [ ] Opens `online-classes.html`
- [ ] Classes display in card grid
- [ ] Filter by Status:
  - [ ] "Upcoming" → Shows yellow classes
  - [ ] "Live" → Shows green classes with pulse animation
  - [ ] "Recording" → Shows teal classes
- [ ] Filter by Subject → Shows only that subject
- [ ] Live class shows "🟢 LIVE" badge with animation
- [ ] Click "Join Now" on live class → Would open meeting link
- [ ] Click "View Recording" on completed class → Would play recording
- [ ] Click any card → Opens detailed modal
- [ ] Modal shows:
  - [ ] Full class info
  - [ ] Topics covered
  - [ ] Meeting platform (Google Meet/Zoom)
  - [ ] Participant count
  - [ ] Resource links
- [ ] Dark mode → Colors adjust
- [ ] Mobile view → Single column

**Expected Behavior:**
```
✅ Classes display in responsive grid
✅ Status filters work
✅ Live classes have pulse animation
✅ Subject filter functional
✅ Join/Recording buttons visible and styled
✅ Modal opens with complete info
✅ Meeting links display
✅ Dark mode fully functional
✅ Mobile responsive layout
```

**Data Sample (in online-classes.js):**
```javascript
{
  id: "CLS001",
  subject: "Data Structures",
  title: "Linked Lists - Part 1",
  date: "2024-12-23T14:00",
  platform: "Google Meet",
  link: "https://meet.google.com/abc-defg-hij",
  duration: 60,
  status: "upcoming",
  participants: 35
}
```

---

**Teacher Side:**
- [ ] Open `frontend/HTML/teacher-classes.html`
- [ ] In "Schedule New Class" form:
  - [ ] Select subject
  - [ ] Enter class title
  - [ ] Enter topics (textarea)
  - [ ] Select date & time
  - [ ] Select platform (Google Meet/Zoom)
  - [ ] Enter meeting link
  - [ ] Enter duration
  - [ ] Click "📤 Schedule Class"
- [ ] Success message appears
- [ ] New class shows in "Scheduled Classes" list
- [ ] Class shows date, time, duration, participants
- [ ] Click "🔗 Copy Link" → Alert shows link copied
- [ ] Click "👁️ Details" → Can view full info
- [ ] Click "🗑️ Delete" → Asks confirmation → Deletes

**Expected Behavior:**
```
✅ Form validates all fields
✅ DateTime picker functional
✅ Success message appears
✅ New class added to list
✅ All class info displays correctly
✅ Copy link functionality works
✅ Confirmation dialog for delete
✅ Responsive layout
✅ Dark mode works
```

---

## 🎮 Interactive Testing

### Test Dark Mode:
1. Open any page
2. Click 🌙 button in top-right navbar
3. Page should switch to dark colors
4. Refresh page → Dark mode persists (localStorage)

### Test Responsiveness:
1. Open browser DevTools (F12)
2. Click "Toggle device toolbar" (Ctrl+Shift+M)
3. Test at these widths:
   - 320px (Mobile)
   - 768px (Tablet)
   - 1024px (Desktop)
4. All layouts should adjust properly

### Test Modals:
1. Click any "View Details" button
2. Modal should appear with backdrop
3. Click "Close" button → Modal closes
4. Click outside modal → Should close (if implemented)

### Test Filters:
1. Open Assignments page
2. Try Status filter → Results update
3. Try Subject filter → Results update
4. Try both together → Filters apply cumulatively

### Test Navigation:
1. Student Dashboard → Click feature card → Opens page
2. Feature page → Click "← Back to Dashboard" → Returns to dashboard
3. Teacher Dashboard → Click sidebar link → Opens page
4. Teacher page → Click "← Back" button → Returns to dashboard

---

## 📊 Sample Test Data

### Assignments (assignments.js):
```
1. Stack & Queue (Data Structures) - Pending - Due: 2024-12-25
2. Responsive Website (Web Dev) - Submitted - Due: 2024-12-28
3. SQL Database (Database) - Graded - Due: 2024-12-20
4. Binary Trees (Data Structures) - Overdue - Due: 2024-12-10
5. REST API (Web Dev) - Pending - Due: 2024-12-30
6. Normalization (Database) - Submitted - Due: 2024-12-22
```

### Classes (online-classes.js):
```
1. Linked Lists Part 1 (Data Structures) - Upcoming - Google Meet
2. React Hooks (Web Dev) - Upcoming - Zoom
3. SQL Joins (Database) - Completed - Google Meet (Recording Available)
4. Advanced Arrays (Data Structures) - Upcoming - Zoom
5. MySQL Optimization (Database) - LIVE - Google Meet (With pulse animation)
6. Node.js Basics (Web Dev) - Upcoming - Zoom
```

### Notes (download-notes.js):
```
1. Stacks Implementation (Data Structures)
2. Queue Operations (Data Structures)
3. ER Diagrams (Database Management)
4. Normalization Guide (Database Management)
5. HTML5 Basics (Web Development)
6. CSS Grid & Flexbox (Web Development)
```

---

## 🐛 Known Issues & Limitations

### Current Limitations (Frontend Only):
- File uploads are simulated (no actual file transfer)
- Meeting links don't actually open (placeholders)
- No database - data resets on page refresh
- No email notifications
- No real-time updates
- Dummy data is hardcoded in JavaScript

### What Works:
- ✅ All UI interactions
- ✅ Form validation
- ✅ Filtering and sorting
- ✅ Modal popups
- ✅ Dark mode
- ✅ Responsive design
- ✅ Navigation

### What Needs Backend:
- ❌ Persistent data storage
- ❌ Real file uploads
- ❌ User authentication
- ❌ Real meeting links
- ❌ Email notifications
- ❌ Real-time updates

---

## ✅ Testing Summary Checklist

**Overall Functionality:**
- [ ] All pages load without errors
- [ ] All buttons are clickable
- [ ] All filters work
- [ ] All modals open and close
- [ ] All forms validate
- [ ] Dark mode toggles
- [ ] Responsive design works

**Student Features:**
- [ ] Download Notes page functional
- [ ] Assignments page functional
- [ ] Online Classes page functional

**Teacher Features:**
- [ ] Notes upload in dashboard works
- [ ] Assignment management page works
- [ ] Online classes page works

**Cross-Browser:**
- [ ] Chrome/Edge - ✅
- [ ] Firefox - ✅
- [ ] Safari - ✅
- [ ] Mobile browsers - ✅

---

**Last Updated:** December 2024
