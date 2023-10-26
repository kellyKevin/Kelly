// Selecting DOM elements
const wrapper = document.querySelector('.wrapper');
const loginLink = document.querySelector('.login-link');
const registerLink = document.querySelector('.register-link');
const iconClose = document.querySelector('.icon-close');
const btnPopup = document.querySelector('.btnlogin-popup');

// Event listener for clicking the "Register" link
registerLink.addEventListener('click', () => {
    // Adding the 'active' class to the wrapper
    wrapper.classList.add('active');
});

// Event listener for clicking the "Login" link
loginLink.addEventListener('click', () => {
    // Adding the 'active' class to the wrapper
    wrapper.classList.add('active');
});

// Event listener for clicking the login button
btnPopup.addEventListener('click', () => {
    // Adding the 'active-popup' class to the wrapper
    wrapper.classList.add('active-popup');
});

// Event listener for clicking the close icon
iconClose.addEventListener('click', () => {
    // Removing the 'active-popup' class from the wrapper
    wrapper.classList.remove('active-popup');
});
