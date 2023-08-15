// Get the button element
const scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Show the button when the user scrolls down 20px from the top
window.onscroll = function() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollToTopBtn.style.display = "block";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// Smoothly scroll to the top when the button is clicked
scrollToTopBtn.addEventListener("click", () => {
    // For Chrome, Firefox, IE, and Opera
    document.body.scrollTop = 0; // Scroll to top of the body element
    document.documentElement.scrollTop = 0; // Scroll to top of the document

    // For Safari
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
});
// Smooth scroll function
function smoothScroll(target, duration) {
    const targetElement = document.querySelector(target);
    const targetPosition = targetElement.offsetTop;
    const startPosition = window.pageYOffset;
    const distance = targetPosition - startPosition;
    let startTime = null;

    function animation(currentTime) {
        if (startTime === null) startTime = currentTime;
        const timeElapsed = currentTime - startTime;
        const run = ease(timeElapsed, startPosition, distance, duration);
        window.scrollTo(0, run);
        if (timeElapsed < duration) requestAnimationFrame(animation);
    }

    function ease(t, b, c, d) {
        t /= d / 2;
        if (t < 1) return c / 2 * t * t + b;
        t--;
        return -c / 2 * (t * (t - 2) - 1) + b;
    }

    requestAnimationFrame(animation);
}

// Add smooth scrolling to navigation links
const navLinks = document.querySelectorAll(".nav-link");

navLinks.forEach(link => {
    link.addEventListener("click", e => {
        e.preventDefault();
        const target = link.getAttribute("href");
        smoothScroll(target, 1000);
    });
});
//open project card in new tab
document.addEventListener("DOMContentLoaded", function() {
    const projectCards = document.querySelectorAll(".project-card");

    projectCards.forEach(card => {
        card.addEventListener("click", function() {
            const projectLink = card.getAttribute("data-link");
            if (projectLink) {
                window.open(projectLink, "_blank");
            }
        });
    });
});