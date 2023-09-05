// Will select the toggle-button & nav-links class
const toggleButton = document.querySelector(".toggle-button");
const navLinks = document.querySelector(".nav-links");

// Whenever toggle button is clicked, navigation bar become visible
toggleButton.addEventListener("click", () => {
    navLinks.classList.toggle("active");
});