document.addEventListener('DOMContentLoaded', function () {
    const toggleIcon = document.querySelector('.toggle-icon');
    const navbarLinks = document.querySelector('.navbar');
  
    // Add a click event listener to the toggle-icon
    toggleIcon.addEventListener('click', function () {
      // Toggle the "active" class on the navbar-links to show/hide it
      navbarLinks.classList.toggle('active');
    });
  });