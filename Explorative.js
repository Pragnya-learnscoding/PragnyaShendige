// Get all the explore box images
const exploreBoxes = document.querySelectorAll('.explore-box img');

// Get the popup elements
const popup = document.querySelector('.popup');
const popupImage = document.querySelector('.popup img');
const popupClose = document.querySelector('.popup-close');

// Add event listeners to each image in explore boxes
exploreBoxes.forEach(box => {
    box.addEventListener('click', function() {
        // Set the src of the popup image to the clicked image's src
        const imageSrc = this.src;
        console.log('Clicked image source:', imageSrc); // Debugging log
        popupImage.src = imageSrc;

        // Show the popup
        popup.classList.add('active');
    });
});

// Close the popup when the close button is clicked
popupClose.addEventListener('click', function() {
    popup.classList.remove('active');
});

// Close the popup when clicking outside the image
popup.addEventListener('click', function(event) {
    if (event.target === popup || event.target === popupImage) {
        return;  // Do nothing if the image or popup background is clicked
    }
    popup.classList.remove('active');
});
