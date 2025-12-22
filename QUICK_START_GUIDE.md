# Smart Campus Portal - Quick Start Guide

## 🚀 Getting Started

### Step 1: Open the Application
1. Navigate to the project folder: `SMART CAMPUS/frontend/HTML/`
2. Open `student.html` in your web browser
   - Chrome, Firefox, Safari, or Edge recommended
   - Modern browser with ES6 support required

### Step 2: Explore the Dashboard
You'll see a student dashboard with:
- **Student Statistics** (Attendance, Semester, Division, Subjects)
- **Quick Actions Grid** with 10+ features
- **My Issues** section
- **Proxy Attendance Status** section

---

## 📱 Main Features Available

### 1️⃣ View Your Profile
- Click "**My Profile**" card
- See personal, academic, and contact information
- Future: Edit profile and change password

### 2️⃣ Check Attendance
- Click "**View Attendance**" button
- View overall attendance percentage
- See subject-wise breakdown
- Check daily attendance details

### 3️⃣ Request Proxy Attendance
- Click "**Request Proxy Attendance**" card
- Fill the form:
  - Select subject
  - Choose date (min: today)
  - Enter period/lecture number
  - Write reason
  - Upload proof (optional)
- Submit → Data saved to browser
- View status on dashboard

### 4️⃣ Raise an Issue/Complaint
- Click "**Raise Issue**" card
- Fill the form:
  - Select issue category (Academic/Infrastructure/Hostel/Other)
  - Enter title
  - Write description
  - Select priority level
  - Upload proof (optional)
- Auto-generated Ticket ID provided
- Track status on dashboard

### 5️⃣ View Notifications
- Click "**View Notifications**" card
- See announcements from:
  - Admin
  - Teachers
  - Class Representatives (CR)
- Filter notifications by type
- Mark as read/unread
- Delete notifications

### 6️⃣ View Timetable
- Click "**View Timetable**" button on dashboard
- See weekly class schedule
- View room numbers and subject details
- Full timetable in modal dialog

### 7️⃣ View Subjects & Notes
- Click "**Subjects & Notes**" button
- See all enrolled subjects
- View course credits
- Access study materials notes
- Click subject for more details

### 8️⃣ Send Feedback
- Click "**Send Feedback**" card
- Select feedback type:
  - Teacher feedback
  - Subject/Course feedback
  - System/Portal feedback
  - Facility feedback
  - General suggestion
- Enter optional target (teacher/subject name)
- Rate using 5-star system ⭐⭐⭐⭐⭐
- Write feedback message
- Option to submit anonymously
- View feedback history with all ratings

### 9️⃣ View Announcements
- Click "**View Announcements**" card
- Filter by type:
  - All announcements
  - College announcements
  - Class announcements
  - Department announcements
- See announcement priority (High/Medium/Low)
- View sender name and date
- Read full announcement message

### 🔟 View Results
- Click "**View Results**" card
- See CGPA/GPA at top
- View results by semester:
  - 5th Semester
  - 4th Semester
  - 3rd Semester
- Subject-wise marks and grades
- SGPA for each semester
- Grade legend with colors

### 1️⃣1️⃣ Activity History
- Click "**Activity History**" card
- View timeline of all activities:
  - When attendance was marked ✅
  - When proxy was submitted 🎫
  - When feedback was sent 📝
  - When issues were raised 🆘
- See activity dates and descriptions
- Color-coded activity types

---

## 🌙 Dark Mode

**Toggle Dark Mode**:
- Click the **🌙 (moon)** icon in the top-right navbar
- Icon changes to **☀️ (sun)** in dark mode
- Click again to switch back to light mode
- Your preference is saved automatically

**Dark Mode Benefits**:
- Easier on eyes in low-light environments
- Better for night-time usage
- Reduces screen glare
- Works on all pages

---

## 👑 Class Representative (CR) Features

If you're logged in as a **Class Representative**:

A special **CR Panel** appears on the dashboard with:

### CR Features:
1. **Review Proxy Requests**
   - See pending proxy requests from students
   - Approve or reject each request
   - Forward to teacher if needed

2. **Send Class Announcements**
   - Write announcement for your class
   - Send to all class members
   - All students see it in notifications

---

## 💾 Data Persistence

**How Data is Saved**:
- All form submissions are saved to your browser's storage
- No internet connection needed
- Data persists when you close the browser
- Data remains until you clear browser cache

**To Clear Saved Data**:
- Clear browser cache/history
- Or use DevTools to clear localStorage

---

## 📋 Sample Data Included

The application comes with sample data for testing:
- **1 Student Profile** with full details
- **7 Subjects** with attendance
- **3 Raised Issues** (different statuses)
- **3 Proxy Requests** (different statuses)
- **8 Notifications** from different senders
- **3 Feedback Submissions** with star ratings
- **8 Announcements** from college/class/department
- **15 Semester Results** with marks and grades
- **10 Activity History Entries** with timestamps

---

## 🎨 Customization

### Change Student Name
The default student is "Akhil Sharma". To change:
1. Edit `/js/student.js`
2. Find `const dummyStudent = { ... }`
3. Change `name: "Akhil Sharma"` to your name

### Change Logo
1. Replace file at `/assets/images/logo.png`
2. Use a 60×60 pixel image (circular preferred)

### Change Theme Colors
1. Edit `/css/student.css` (or proxy.css)
2. Find `:root { ... }` section
3. Change color values like `--primary-color: #007bff`

---

## ❓ FAQ

### Q: Why is my form data not saving?
**A**: Make sure:
- You're using a modern browser
- JavaScript is enabled
- You have enough storage space
- Try clearing cache and reloading

### Q: Can I use this offline?
**A**: Yes! Once loaded, the application works completely offline. Refresh to reload from cache.

### Q: How do I change my profile?
**A**: Click "Edit Profile" button on profile page. (Future feature being developed)

### Q: Can I change my password?
**A**: Click "Change Password" button on profile page. (Future feature being developed)

### Q: Where is my data stored?
**A**: In your browser's localStorage. It's device-specific and not synced across devices.

### Q: How do I print my results?
**A**: Use your browser's Print function (Ctrl+P or Cmd+P) on the Results page.

### Q: Can teachers see my feedback?
**A**: Only in production with backend. Currently, all data is local to your device.

### Q: How do I logout?
**A**: Click the "Logout" button in the top-right corner of the navbar.

### Q: What happens if I clear my browser cache?
**A**: All saved form data will be deleted. Only sample data will remain.

---

## 🐛 Troubleshooting

### Page won't load
- Check if browser supports modern JavaScript (ES6+)
- Try a different browser
- Clear browser cache
- Check if all files are in correct folders

### Forms not saving
- Enable localStorage in browser settings
- Check if you have enough storage space
- Try opening in a private/incognito window
- Check browser console for errors (F12)

### Dark mode not working
- Refresh the page
- Check if JavaScript is enabled
- Clear cache and reload
- Try different browser

### Navigation links broken
- Check if you're opening from correct folder
- Use relative paths, not absolute
- Make sure all HTML files are in `/HTML` folder

### Some pages look wrong
- Zoom out to 100% (Ctrl+0)
- Try different browser
- Clear CSS cache (Ctrl+Shift+Delete)
- Check screen resolution

---

## 📱 Mobile Usage

**Responsive Design**:
- App works on phones, tablets, and desktops
- Touch-friendly buttons and inputs
- Optimized for small screens
- Font sizes adjust for readability

**Tips for Mobile**:
- Use landscape mode for better view
- Tap carefully to avoid accidental clicks
- Use dark mode for battery savings
- Close unused tabs for better performance

---

## ⌨️ Keyboard Shortcuts

| Key | Action |
|-----|--------|
| Tab | Navigate between form fields |
| Enter | Submit form |
| Ctrl+P | Print page |
| F12 | Developer Console |
| Ctrl+Z | Undo (some browsers) |
| Ctrl+Shift+Delete | Clear cache |

---

## 🔐 Privacy & Security

**Current Session**:
- No login authentication (demo version)
- All data stored locally
- No data sent to servers
- No cookies used

**Before Using in Production**:
- Implement proper authentication
- Add password protection
- Use HTTPS encryption
- Implement proper access control
- Audit for security vulnerabilities

---

## 📞 Getting Help

### If something isn't working:

1. **Check Browser Console**:
   - Press F12
   - Go to Console tab
   - Look for error messages

2. **Verify File Structure**:
   - HTML files should be in `/HTML` folder
   - CSS files should be in `/CSS` folder
   - JS files should be in `/js` folder

3. **Try Basic Troubleshooting**:
   - Refresh page (Ctrl+R or Cmd+R)
   - Clear cache
   - Try different browser
   - Check internet (if needed for loading)

4. **Check Documentation**:
   - See `PROJECT_SUMMARY.md` for features
   - See `DEVELOPER_GUIDE.md` for technical details
   - Check HTML comments for explanations

---

## 🎯 Tips for Best Experience

✅ **Do's**:
- Use Chrome, Firefox, Safari, or Edge
- Keep JavaScript enabled
- Use HTTPS if deployed online
- Clear old data periodically
- Use dark mode for night sessions

❌ **Don'ts**:
- Don't use outdated browsers (IE11)
- Don't disable JavaScript
- Don't clear cache if you want to keep data
- Don't open from unknown sources
- Don't share sensitive information

---

## 📲 Share Your Experience

This is an open-source minor project. Feel free to:
- Suggest improvements
- Report bugs
- Share feedback
- Contribute enhancements

---

## 📚 Learning Resources

Want to understand the code? Check:
- `DEVELOPER_GUIDE.md` - Technical documentation
- HTML files - Well-commented markup
- CSS files - Organized by component
- JavaScript files - Documented functions

---

## 🎓 About This Project

**Smart Campus Management Portal** is a comprehensive frontend application built with:
- Pure HTML5, CSS3, and JavaScript (no frameworks)
- Responsive design for all devices
- Dark mode for accessibility
- localStorage for data persistence
- Sample data for testing

**Version**: 1.0 - MVP (Minimum Viable Product)
**Status**: ✅ Fully Functional
**License**: Educational Use

---

## 🚀 Next Steps

1. **Explore the Dashboard** - Get familiar with the interface
2. **Try All Features** - Click through each card to understand functionality
3. **Test Form Submission** - Submit a proxy request or feedback
4. **Toggle Dark Mode** - Try the theme toggle
5. **Visit All Pages** - Navigate to all 10+ features
6. **Check Sample Data** - View pre-loaded dummy data

---

**Enjoy using Smart Campus Portal! 🎓📚**

For technical support, see `DEVELOPER_GUIDE.md`
For feature list, see `PROJECT_SUMMARY.md`

