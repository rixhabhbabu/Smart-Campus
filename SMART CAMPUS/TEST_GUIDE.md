# Quick Test Guide - Minor Project

## How to Test CR Functionality

### Test Case 1: Login as CR Student
```
Email/Mobile: cr@college.edu
Password: password123
Role: Student
```
**Expected Result:**
- Dashboard loads
- Role badge shows: "👑 Class Representative"
- "Class Representative Panel" section is VISIBLE
- Can see proxy requests from other students
- Can send announcements

---

### Test Case 2: Login as Normal Student
```
Email/Mobile: akhil.sharma@college.edu
Password: password123
Role: Student
```
**Expected Result:**
- Dashboard loads
- Role badge shows: "🎓 Student"
- "Class Representative Panel" section is HIDDEN
- Only 6 quick action buttons visible

---

## Quick Actions Test

Verify these 6 buttons work:
1. ✅ **My Profile** → Opens profile.html
2. ✅ **View Attendance** → Opens attendance modal
3. ✅ **Request Proxy Attendance** → Opens proxy_request.html
4. ✅ **Raise Issue** → Opens raise-issue.html
5. ✅ **View Results** → Opens results.html
6. ✅ **Send Feedback** → Opens feedback.html

---

## Removed Features Verification

These should NOT appear on dashboard:
- ❌ View Notifications button
- ❌ View Announcements button
- ❌ Activity History button
- ❌ View Timetable button
- ❌ Subjects & Notes button
- ❌ Proxy Attendance Status section

---

## Dark Mode Test

Click moon icon (🌙) in navbar:
- Light mode → Dark mode ✅
- Dark mode → Light mode ✅

---

## Top Summary Cards

All 4 cards should display:
1. 📊 Attendance: 85%
2. 📅 Semester: 5th
3. 👥 Division: 3A
4. 📚 Total Subjects: 7

---

## My Issues Section

Should display 3 sample issues with:
- Title
- Category
- Priority
- Description
- Status badge (Pending/In Progress/Resolved)

---

## CR Panel Test (Only for cr@college.edu)

Should show:
1. 📝 Pending Proxy Requests from Students
   - Buttons to Forward or Reject
2. 📢 Send Class Announcement
   - Textarea for announcement
   - Submit button

---

## Login Page Changes

Verify role dropdown has exactly 4 options:
1. Student
2. Teacher
3. HOD
4. Admin

❌ "CR" option should NOT exist

---

## Responsive Design

Test on:
- Desktop (1920x1080)
- Tablet (768px)
- Mobile (375px)

All features should work on all screen sizes.

---

## Logout Test

Click "Logout" button:
- Session data cleared ✅
- Redirects to login.html ✅
- Can log back in ✅

---

**Status: Ready for Examiner Review** ✅
