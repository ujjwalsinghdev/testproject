// Smooth scrolling for buttons
document.querySelectorAll('.btn').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href');
        if (targetId && targetId.startsWith('#')) {
            document.querySelector(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        }
    });
});

// "View My Courses" button scrolls to the courses section
document.querySelector('.view-courses-btn').addEventListener('click', function() {
    document.querySelector('#courses').scrollIntoView({
        behavior: 'smooth'
    });
});

// Course card buttons click effect
document.querySelectorAll('.view-udemy-btn').forEach(button => {
    button.addEventListener('click', function() {
        alert("Redirecting to Udemy...");
    });
});
