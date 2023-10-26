// Get references to the button and help content
const helpButton = document.getElementById('help-button');
const helpContent = document.getElementById('help-content');

// Add a click event listener to the button
helpButton.addEventListener('click', () => {
    // Toggle the "active" class on the button
    helpButton.classList.toggle('active');

    // Toggle the display of the help content
    if (helpButton.classList.contains('active')) {
        helpContent.style.display = 'block';
    } else {
        helpContent.style.display = 'none';
    }
});
