var typed = new Typed(".text", {
  strings: ["Ex Small Bussines Owner", "Html Advance",  "Web Developer", "Python Programer Beginner"],
  typeSpeed: 100,
  backSpeed: 100,
  backDelay: 1000,
  loop: true
});

 const menuToggle = document.getElementById('menu-toggle');
const navbar = document.getElementById('navbar');

menuToggle.addEventListener('click', () => {
navbar.classList.toggle('active');
});

navLinks.forEach(link => {
      link.addEventListener('click', () => {
        navbar.classList.remove('active');
      });
});