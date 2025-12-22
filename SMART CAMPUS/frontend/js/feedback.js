// ============================================
// FEEDBACK PAGE LOGIC
// ============================================

let feedbackSubmissions = JSON.parse(localStorage.getItem("feedbackSubmissions")) || [];

// Dummy feedback history
const dummyFeedbackHistory = [
    {
        id: "FB001",
        type: "Teacher",
        target: "Dr. Rajesh Kumar",
        rating: 5,
        message: "Excellent teaching methodology and clear explanation of concepts.",
        anonymous: false,
        date: "2024-12-10",
        status: "Submitted"
    },
    {
        id: "FB002",
        type: "Subject",
        target: "Database Management",
        rating: 4,
        message: "Good course content but assignments could be more challenging.",
        anonymous: false,
        date: "2024-12-05",
        status: "Submitted"
    },
    {
        id: "FB003",
        type: "System",
        target: "Smart Campus Portal",
        rating: 3,
        message: "Portal is useful but needs better mobile optimization.",
        anonymous: true,
        date: "2024-11-28",
        status: "Submitted"
    }
];

document.addEventListener("DOMContentLoaded", function() {
    setupStarRating();
    handleFeedbackForm();
    displayFeedbackHistory();
});

// ============================================
// STAR RATING SYSTEM
// ============================================
function setupStarRating() {
    const stars = document.querySelectorAll(".star");
    const ratingValue = document.getElementById("ratingValue");
    const ratingText = document.getElementById("ratingText");
    const ratings = ["Poor", "Fair", "Good", "Very Good", "Excellent"];

    stars.forEach(star => {
        star.addEventListener("click", function() {
            const value = this.dataset.value;
            ratingValue.value = value;
            
            // Update star display
            stars.forEach(s => {
                if (s.dataset.value <= value) {
                    s.classList.add("active");
                } else {
                    s.classList.remove("active");
                }
            });

            // Update text
            ratingText.textContent = `${value} stars - ${ratings[value - 1]}`;
        });

        // Hover effect
        star.addEventListener("mouseover", function() {
            const value = this.dataset.value;
            stars.forEach(s => {
                if (s.dataset.value <= value) {
                    s.style.color = "var(--warning-color)";
                } else {
                    s.style.color = "#ddd";
                }
            });
        });
    });

    // Reset hover
    document.getElementById("starRating").addEventListener("mouseout", function() {
        stars.forEach(star => {
            if (star.classList.contains("active")) {
                star.style.color = "var(--warning-color)";
            } else {
                star.style.color = "#ddd";
            }
        });
    });
}

// ============================================
// HANDLE FEEDBACK FORM SUBMISSION
// ============================================
function handleFeedbackForm() {
    const feedbackForm = document.getElementById("feedbackForm");
    const successMessage = document.getElementById("feedbackSuccessMessage");

    feedbackForm.addEventListener("submit", function(e) {
        e.preventDefault();

        const type = document.getElementById("feedbackType").value;
        const target = document.getElementById("feedbackTarget").value;
        const rating = document.getElementById("ratingValue").value;
        const message = document.getElementById("feedbackMessage").value;
        const anonymous = document.getElementById("anonymousFeedback").checked;

        if (!type || !rating || !message) {
            alert("❌ Please fill all required fields!");
            return;
        }

        // Create feedback object
        const newFeedback = {
            id: "FB" + Date.now(),
            type: type,
            target: target || "General",
            rating: parseInt(rating),
            message: message,
            anonymous: anonymous,
            date: new Date().toISOString().split('T')[0],
            status: "Submitted"
        };

        // Save to localStorage
        feedbackSubmissions.push(newFeedback);
        localStorage.setItem("feedbackSubmissions", JSON.stringify(feedbackSubmissions));

        // Update display
        displayFeedbackHistory();

        // Show success message
        feedbackForm.style.display = "none";
        successMessage.style.display = "block";

        setTimeout(() => {
            feedbackForm.reset();
            feedbackForm.style.display = "block";
            successMessage.style.display = "none";
            document.getElementById("ratingValue").value = "0";
            document.getElementById("ratingText").textContent = "Please select a rating";
            document.querySelectorAll(".star").forEach(s => s.classList.remove("active"));
        }, 2000);

        console.log("✅ Feedback Submitted:", newFeedback);
    });
}

// ============================================
// DISPLAY FEEDBACK HISTORY
// ============================================
function displayFeedbackHistory() {
    const container = document.getElementById("feedbackHistoryContainer");
    const allFeedback = [...dummyFeedbackHistory, ...feedbackSubmissions];

    container.innerHTML = "";

    if (allFeedback.length === 0) {
        container.innerHTML = '<p style="text-align: center; color: #666;">No feedback submitted yet.</p>';
        return;
    }

    // Sort by date (newest first)
    allFeedback.sort((a, b) => new Date(b.date) - new Date(a.date));

    allFeedback.forEach(feedback => {
        const stars = "⭐".repeat(feedback.rating) + "☆".repeat(5 - feedback.rating);
        const feedbackCard = document.createElement("div");
        feedbackCard.className = "feedback-card";
        feedbackCard.style.cssText = `
            background: #f8f9fa;
            padding: 1.5rem;
            border-radius: 8px;
            border-left: 4px solid var(--primary-color);
            margin-bottom: 1rem;
        `;
        feedbackCard.innerHTML = `
            <div style="display: flex; justify-content: space-between; align-items: center; margin-bottom: 1rem;">
                <h4 style="margin: 0; color: var(--primary-color);">${feedback.type}</h4>
                <span style="font-size: 0.9rem; color: var(--secondary-color);">${feedback.date}</span>
            </div>
            <p style="margin: 0.5rem 0;"><strong>Target:</strong> ${feedback.target}</p>
            <p style="margin: 0.5rem 0;"><strong>Rating:</strong> ${stars}</p>
            <p style="margin: 0.5rem 0; color: var(--dark-text);">${feedback.message}</p>
            <p style="margin-top: 1rem; font-size: 0.85rem; color: var(--secondary-color);">
                ${feedback.anonymous ? "📝 Anonymous Feedback" : ""}
                <span style="margin-left: 1rem;">Status: ${feedback.status}</span>
            </p>
        `;
        container.appendChild(feedbackCard);
    });
}
