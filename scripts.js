// scripts.js
document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('.nav-list a');
  
    navLinks.forEach(link => {
      link.addEventListener('click', smoothScroll);
    });
  
    function smoothScroll(event) {
      event.preventDefault();
      const targetId = this.getAttribute("href").substring(1);
      const targetPosition = document.getElementById(targetId).offsetTop;
  
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  });