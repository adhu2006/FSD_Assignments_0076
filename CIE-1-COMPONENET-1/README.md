# 🎓 School Management System (SMS)
> **Web Development Fundamentals Project**  
> *Clean, responsive, frontend-only School Management System built with pure HTML5, CSS3, JavaScript, and LocalStorage.*

---

## 🚀 How to Run in VS Code

1. Open the project folder in **Visual Studio Code**.
2. Open the built-in terminal (`Ctrl + ~` or Terminal -> New Terminal).
3. Run the following command:
   ```bash
   npm start
   ```
4. The server will start at `http://localhost:3000` and automatically open your default web browser!

---

## 📌 Features Included

- **Dashboard** (`index.html`): Real-time metrics for students, faculty, today's attendance, and average performance.
- **Students Management** (`students.html`): View, add, edit, and delete student records with multi-criteria search and form validation.
- **Attendance Tracking** (`attendance.html`): Daily student attendance sheet with instant status toggles and automatic calculation of attendance rates.
- **Marks & Grading** (`marks.html`): Academic marks entry with real-time automatic calculation of Total (/400), Percentage (%), and Letter Grades (`A+` to `F`).
- **Faculty Directory** (`teachers.html`): Departmental faculty roster with search and faculty details.
- **School Notice Board** (`announcements.html`): Categorized announcements with filters for Events, Exams, Holidays, and General circulars.

---

## 📁 Project Structure

```text
school-management-system/
├── package.json          # NPM configuration with 'npm start'
├── server.js             # Built-in lightweight local development server
├── index.html            # Main dashboard overview
├── dashboard.html        # Redirects to index.html
├── students.html         # Student CRUD management & search
├── attendance.html       # Daily attendance tracking & percentage logic
├── marks.html            # Academic marksheet & automated grades
├── teachers.html         # Faculty directory
├── announcements.html    # Notice board with category filters
├── css/
│   └── style.css         # Clean, responsive stylesheet
├── js/
│   ├── app.js            # Core LocalStorage store & utilities
│   ├── dashboard.js      # Dashboard computation logic
│   ├── students.js       # Student CRUD & validation
│   ├── attendance.js     # Attendance tracking logic
│   ├── marks.js          # Marks arithmetic & grading
│   ├── teachers.js       # Faculty management
│   └── announcements.js  # Notice board logic
├── images/
│   └── school-logo.svg   # Vector school logo
└── README.md             # Project documentation
```
