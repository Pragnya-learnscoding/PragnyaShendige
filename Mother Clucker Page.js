// Get the scroll button and sections
const scrollButton = document.getElementById('scroll-down-btn');
const overviewSection = document.getElementById('overview');

// Create a new IntersectionObserver for fade-in effects
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible'); // Add visible class when in view
        } else {
            entry.target.classList.remove('visible'); // Remove when out of view
        }
    });
}, { threshold: 0.1 }); // Trigger when 10% of the element is visible

// Get all elements with the fade-in class
const fadeElements = document.querySelectorAll('.fade-in');

// Observe each element, and log an error if no elements are found
if (fadeElements.length > 0) {
    fadeElements.forEach(element => observer.observe(element));
} else {
    console.error('No elements found with the .fade-in class');
}

// Scroll button logic - Smooth scroll between sections
window.addEventListener('scroll', () => {
    const overviewPosition = overviewSection.getBoundingClientRect().top;

    // Check if we should flip the scroll button
    if (overviewPosition <= window.innerHeight / 2) {
        scrollButton.classList.add('flipped');
        scrollButton.onclick = () => {
            document.getElementById('top').scrollIntoView({ behavior: 'smooth' });
        };
    } else {
        scrollButton.classList.remove('flipped');
        scrollButton.onclick = () => {
            overviewSection.scrollIntoView({ behavior: 'smooth' });
        };
    }
});


// Carousel functionality
let slideIndex = 1;
const slidesPerView = 3; // Show 3 cards at a time
const slides = document.querySelectorAll(".card");
const dots = document.querySelectorAll(".dot");
const totalSlides = slides.length;
const maxSlideIndex = Math.ceil(totalSlides / slidesPerView); // Number of groups

// Initialize slides to show the first set
showSlides(slideIndex);

// Add click event listener for dots
dots.forEach((dot, index) => {
    dot.setAttribute('data-slide', index + 1); // Ensure dots are properly indexed
    dot.addEventListener('click', function() {
        currentSlide(index + 1); // Trigger correct slide on click
    });
});

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides(n) {
    // Ensure that slideIndex does not go out of bounds
    if (n > maxSlideIndex) {
        slideIndex = maxSlideIndex;
    } else if (n < 1) {
        slideIndex = 1;
    }

    // Calculate the percentage to move based on the number of cards per view
    const offset = (slideIndex - 1) * -100; // Shift by 100% for each slide
    document.querySelector('.carousel').style.transform = `translateX(${offset}%)`;

    // Update active dot
    dots.forEach(dot => dot.classList.remove('active'));
    dots[slideIndex - 1].classList.add('active');
}

// Get the hero image element
const heroImage = document.querySelector('.hero-section img');

// Add an event listener for the scroll event to scale the hero image
window.addEventListener('scroll', function() {
    // Get the scroll position as a percentage of the page
    let scrollPosition = window.scrollY / (document.body.scrollHeight - window.innerHeight);

    // Set the scale of the image based on the scroll position (scales from 1 to 1.3)
    let scaleValue = 1 + scrollPosition * 0.3;
    heroImage.style.transform = `scale(${scaleValue})`;
});
