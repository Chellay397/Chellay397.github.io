// Smooth scroll functionality for anchor links
const links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function (event) {
        event.preventDefault();  // Prevent the default anchor click behavior
        
        const target = document.querySelector(this.getAttribute('href'));  // Get the target section
        window.scrollTo({
            top: target.offsetTop - 60, // Offset to prevent the navbar from covering the top part
            behavior: 'smooth'           // Smooth scroll behavior
        });
    });
});