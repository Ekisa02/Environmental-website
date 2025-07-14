// Simple testimonial slider
let index = 0;
const testimonials = document.querySelectorAll('.testimonial');

function showTestimonial(i) {
  testimonials.forEach((t, idx) => {
    t.classList.remove('active');
    if (idx === i) t.classList.add('active');
  });
}

function nextTestimonial() {
  index = (index + 1) % testimonials.length;
  showTestimonial(index);
}

setInterval(nextTestimonial, 5000); // Change every 5 seconds
