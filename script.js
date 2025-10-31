// JavaScript file for interactive behavior

// Select the button and message elements
const button = document.getElementById('showMessage');
const message = document.getElementById('extraMessage');

// Add an event listener to handle button click
button.addEventListener('click', () => {
    // Log button click to console
    console.log("Button clicked");

    // Toggle the visibility of the message
    message.classList.toggle('hidden');
});