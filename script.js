// Hamburger menu toggle for mobile view
const hamburger = document.getElementById('hamburger');
const menu = document.querySelector('.menu');

hamburger.addEventListener('click', function () {
    const hamIcon = this.querySelector('.hamburger-icon');
    const crossIcon = this.querySelector('.cross-icon');
    
    // Toggle between hamburger and close icon, show/hide menu
    if (hamIcon.style.display === "none") {
        hamIcon.style.display = "inline-block";
        menu.style.display = "none";
        crossIcon.style.display = "none";
    } else {
        crossIcon.style.display = "inline-block";
        hamIcon.style.display = "none";
        menu.style.display = "block";
    }
});

// Smooth scroll functionality for anchor links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();  // Prevent the default anchor click behavior
        
        const target = document.querySelector(this.getAttribute('href'));  // Get the target section
        window.scrollTo({
            top: target.offsetTop - 100, // Offset to prevent the navbar from covering the top part
            behavior: 'smooth'           // Smooth scroll behavior
        });
    });
});