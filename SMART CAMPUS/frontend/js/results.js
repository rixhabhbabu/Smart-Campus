// ============================================
// RESULTS PAGE LOGIC
// ============================================

// Dummy Results Data
const dummyResults = [
    {
        semester: 5,
        subjects: [
            { name: "Data Structures", code: "CS501", marks: 92, credits: 4, grade: "A" },
            { name: "Database Management", code: "CS502", marks: 88, credits: 4, grade: "A" },
            { name: "Web Development", code: "CS503", marks: 85, credits: 3, grade: "B+" },
            { name: "Python Programming", code: "CS504", marks: 90, credits: 4, grade: "A" },
            { name: "Operating Systems", code: "CS505", marks: 86, credits: 4, grade: "B+" },
            { name: "Discrete Mathematics", code: "CS506", marks: 84, credits: 3, grade: "B+" }
        ],
        sgpa: 8.5,
        status: "Completed"
    },
    {
        semester: 4,
        subjects: [
            { name: "Object Oriented Programming", code: "CS401", marks: 89, credits: 4, grade: "A" },
            { name: "Computer Networks", code: "CS402", marks: 87, credits: 4, grade: "A" },
            { name: "Software Engineering", code: "CS403", marks: 85, credits: 3, grade: "B+" },
            { name: "Digital Logic Design", code: "CS404", marks: 91, credits: 4, grade: "A" },
            { name: "Database Design", code: "CS405", marks: 88, credits: 4, grade: "A" }
        ],
        sgpa: 8.7,
        status: "Completed"
    },
    {
        semester: 3,
        subjects: [
            { name: "Data Structures", code: "CS301", marks: 86, credits: 4, grade: "B+" },
            { name: "Web Design Basics", code: "CS302", marks: 84, credits: 3, grade: "B+" },
            { name: "Java Programming", code: "CS303", marks: 88, credits: 4, grade: "A" },
            { name: "Database Fundamentals", code: "CS304", marks: 85, credits: 4, grade: "B+" }
        ],
        sgpa: 8.3,
        status: "Completed"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    displayResults();
});

// ============================================
// DISPLAY RESULTS
// ============================================
function displayResults() {
    const container = document.getElementById("resultsContainer");
    container.innerHTML = "";

    dummyResults.forEach(result => {
        const resultCard = document.createElement("div");
        resultCard.className = "result-card";
        
        let subjectsHTML = "";
        result.subjects.forEach(subject => {
            let gradeClass = "";
            if (subject.grade === "A") {
                gradeClass = "grade-a";
            } else if (subject.grade === "B+" || subject.grade === "B") {
                gradeClass = "grade-b";
            } else {
                gradeClass = "grade-c";
            }

            subjectsHTML += `
                <div class="marks-row">
                    <div>
                        <strong>${subject.name}</strong>
                        <div style="font-size: 0.85rem; color: var(--secondary-color);">${subject.code}</div>
                    </div>
                    <div style="text-align: right;">
                        <div><strong>${subject.marks}/100</strong></div>
                        <span class="grade-badge ${gradeClass}">${subject.grade}</span>
                    </div>
                </div>
            `;
        });

        resultCard.innerHTML = `
            <h3>Semester ${result.semester}</h3>
            <div style="margin-bottom: 1rem; padding: 0.8rem; background: rgba(0, 123, 255, 0.1); border-radius: 5px;">
                <strong>SGPA: ${result.sgpa}/10.0</strong>
            </div>
            ${subjectsHTML}
            <div style="margin-top: 1rem; padding-top: 1rem; border-top: 1px solid #eee; font-size: 0.9rem; color: var(--secondary-color);">
                Status: ${result.status}
            </div>
        `;
        container.appendChild(resultCard);
    });
}
