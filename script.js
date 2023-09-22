const toggleIcon = document.querySelector('.toggle-icon');
const navbarLinks = document.querySelector('.navbar');
  
toggleIcon.addEventListener('click', function () {
      navbarLinks.classList.toggle('active');
 });
