// ============================================
// DOWNLOAD NOTES PAGE LOGIC
// ============================================

// Dummy Notes Data (Same as in student.js)
const downloadNotesData = [
    {
        id: "NOTE001",
        subject: "Data Structures",
        title: "Chapter 5 - Arrays and Lists",
        teacher: "Dr. Rajesh Kumar",
        uploadDate: "2024-12-15",
        fileType: "PDF",
        fileSize: "2.5 MB",
        downloads: 34
    },
    {
        id: "NOTE002",
        subject: "Data Structures",
        title: "Chapter 6 - Sorting Algorithms",
        teacher: "Dr. Rajesh Kumar",
        uploadDate: "2024-12-10",
        fileType: "PDF",
        fileSize: "3.1 MB",
        downloads: 28
    },
    {
        id: "NOTE003",
        subject: "Web Development",
        title: "HTML & CSS Fundamentals",
        teacher: "Ms. Priya Singh",
        uploadDate: "2024-12-12",
        fileType: "PPT",
        fileSize: "4.8 MB",
        downloads: 45
    },
    {
        id: "NOTE004",
        subject: "Web Development",
        title: "JavaScript Basics - DOM Manipulation",
        teacher: "Ms. Priya Singh",
        uploadDate: "2024-12-08",
        fileType: "PDF",
        fileSize: "2.2 MB",
        downloads: 52
    },
    {
        id: "NOTE005",
        subject: "Database Management",
        title: "SQL Queries & Joins",
        teacher: "Dr. Amit Patel",
        uploadDate: "2024-12-14",
        fileType: "PDF",
        fileSize: "3.7 MB",
        downloads: 38
    },
    {
        id: "NOTE006",
        subject: "Database Management",
        title: "Normalization & ER Model",
        teacher: "Dr. Amit Patel",
        uploadDate: "2024-12-05",
        fileType: "PPT",
        fileSize: "5.2 MB",
        downloads: 41
    }
];

// PAGE INITIALIZATION
document.addEventListener("DOMContentLoaded", function() {
    loadDownloadNotes();
    setupEventListeners();
});

// ============================================
// EVENT LISTENERS
// ============================================
function setupEventListeners() {
    // Subject filter change
    const subjectFilter = document.getElementById("notesSubjectFilter");
    if (subjectFilter) {
        subjectFilter.addEventListener("change", loadDownloadNotes);
    }

    // Modal close button
    const closeModalBtn = document.querySelector(".close-modal");
    if (closeModalBtn) {
        closeModalBtn.addEventListener("click", closeModal);
    }
}

// Close modal when clicking outside
window.addEventListener("click", function(event) {
    const modal = document.getElementById("detailModal");
    if (event.target === modal) {
        modal.style.display = "none";
    }
});

// ============================================
// LOAD & FILTER NOTES
// ============================================
function loadDownloadNotes() {
    const container = document.getElementById("downloadNotesContainer");
    const subjectFilter = document.getElementById("notesSubjectFilter").value;
    
    if (!container) return;
    
    // Filter notes based on subject
    let filteredNotes = downloadNotesData;
    if (subjectFilter) {
        filteredNotes = downloadNotesData.filter(note => note.subject === subjectFilter);
    }
    
    // Show empty state if no notes
    if (filteredNotes.length === 0) {
        container.innerHTML = `
            <div style="grid-column: 1/-1; text-align: center; padding: 3rem 1rem; color: var(--secondary-color);">
                <div style="font-size: 3rem; margin-bottom: 1rem;">📭</div>
                <p style="font-size: 1.1rem;">No notes available for this subject.</p>
                <p style="font-size: 0.95rem; margin-top: 0.5rem;">Check back later or select a different subject.</p>
            </div>
        `;
        return;
    }
    
    // Clear container and create note cards
    container.innerHTML = '';
    filteredNotes.forEach(note => {
        const noteCard = document.createElement('div');
        noteCard.className = 'note-card';
        noteCard.innerHTML = `
            <div class="note-icon">
                ${note.fileType === 'PDF' ? '📄' : '🎨'}
            </div>
            <div class="note-title">${note.title}</div>
            <div class="note-subject">📚 ${note.subject}</div>
            <div class="note-subject" style="font-size: 0.85rem; color: #666;">👨‍🏫 ${note.teacher}</div>
            <div class="note-date">📅 ${new Date(note.uploadDate).toLocaleDateString('en-IN')}</div>
            <div class="note-subject" style="font-size: 0.85rem;">
                ${note.fileType} • ${note.fileSize}
            </div>
            <div style="margin-top: 1rem; text-align: center; color: #999; font-size: 0.85rem;">
                📥 ${note.downloads} downloads
            </div>
            <div class="note-buttons">
                <a href="#" class="note-btn note-btn-download" onclick="downloadNote(event, '${note.id}', '${note.title}')">
                    ⬇️ Download
                </a>
                <button class="note-btn note-btn-view" onclick="viewNotePreview('${note.id}', '${note.title}', '${note.teacher}')">
                    👁️ Preview
                </button>
            </div>
        `;
        container.appendChild(noteCard);
    });
}

// ============================================
// DOWNLOAD & PREVIEW FUNCTIONS
// ============================================
function downloadNote(event, noteId, title) {
    event.preventDefault();
    
    const note = downloadNotesData.find(n => n.id === noteId);
    if (!note) return;
    
    // Show success message
    alert(`✅ Downloaded: ${title}\n\nFile: ${note.fileType}\nSize: ${note.fileSize}`);
    
    // In production, this would trigger actual file download
    showNotification(`📥 Downloaded ${title}`, 'success');
}

function viewNotePreview(noteId, title, teacher) {
    const modal = document.getElementById("detailModal");
    const modalBody = document.getElementById("modalBody");
    
    const note = downloadNotesData.find(n => n.id === noteId);
    if (!note) return;
    
    modalBody.innerHTML = `
        <div style="text-align: center; padding: 2rem;">
            <h2>${title}</h2>
            <p style="color: #666; margin: 1rem 0;">by ${teacher}</p>
            
            <div style="background: #f0f0f0; padding: 2rem; border-radius: 10px; margin: 2rem 0;">
                <div style="font-size: 4rem; margin-bottom: 1rem;">
                    ${note.fileType === 'PDF' ? '📄' : '🎨'}
                </div>
                <p style="font-size: 1.1rem; margin: 0.5rem 0;"><strong>${note.fileType} File</strong></p>
                <p style="color: #666; margin: 0.5rem 0;">${note.fileSize}</p>
                <p style="color: #666; margin: 1rem 0; font-size: 0.9rem;">
                    📅 Uploaded: ${new Date(note.uploadDate).toLocaleDateString('en-IN')}
                </p>
            </div>
            
            <div style="margin: 2rem 0;">
                <p style="color: #666;">📥 Downloads: ${note.downloads}</p>
                <p style="font-size: 0.9rem; color: #999;">Click the download button to get this file</p>
            </div>
            
            <button class="btn btn-primary" onclick="downloadNote(event, '${noteId}', '${title}'); closeModal();" style="margin-top: 1rem; padding: 0.75rem 2rem;">
                ⬇️ Download Now
            </button>
        </div>
    `;
    
    modal.style.display = "block";
}

function closeModal() {
    document.getElementById("detailModal").style.display = "none";
}

// ============================================
// NOTIFICATION FUNCTION
// ============================================
function showNotification(message, type) {
    const notif = document.createElement('div');
    notif.style.cssText = `
        position: fixed;
        top: 100px;
        right: 20px;
        background: ${type === 'success' ? '#28a745' : '#dc3545'};
        color: white;
        padding: 1rem 1.5rem;
        border-radius: 8px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.15);
        z-index: 1000;
        animation: slideIn 0.3s ease;
        font-weight: 600;
    `;
    notif.textContent = message;
    document.body.appendChild(notif);
    
    // Auto-remove after 3 seconds
    setTimeout(() => notif.remove(), 3000);
}
