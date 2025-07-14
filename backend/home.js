const toggleBtn = document.querySelector(".mobile-menu-toggle");
const nav = document.querySelector(".main-nav");

toggleBtn.addEventListener("click", () => {
  nav.classList.toggle("active");
});
  // Dropdown click for mobile
  document.querySelectorAll('.dropdown-toggle').forEach(function(toggle) {
    toggle.addEventListener('click', function(e) {
      // Prevent link navigation if dropdown
      if(window.innerWidth <= 900) {
        e.preventDefault();
        this.parentElement.classList.toggle('open');
      }
    });
  });

 let index=0;
 const track= document.getElementById('carousel-track');
const totalCards = document.querySelectorAll('.carousel-card').length;
