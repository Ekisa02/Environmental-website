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


document.addEventListener('DOMContentLoaded', function() {
  const carouselTrack = document.querySelector('.carousel-track');
  const cards = document.querySelectorAll('.card');
  const indicators = document.querySelectorAll('.indicator');
  const prevBtn = document.querySelector('.prev');
  const nextBtn = document.querySelector('.next');
  let currentIndex = 0;
  let autoSlideInterval;
  let isAnimating = false;
  let touchStartX = 0;
  let touchEndX = 0;

  // Initialize carousel
  function initCarousel() {
    updateActiveStates();
    startAutoSlide();
    
    // Handle window resize
    window.addEventListener('resize', () => {
      clearInterval(autoSlideInterval);
      startAutoSlide();
    });
  }

  // Update active states
  function updateActiveStates() {
    indicators.forEach((indicator, index) => {
      indicator.classList.toggle('active', index === currentIndex);
    });
    
    cards.forEach((card, index) => {
      card.classList.toggle('active', index === currentIndex);
    });
  }

  // Animate to specific slide
  function goToSlide(index, animate = true) {
    if (isAnimating) return;
    if (index < 0) index = cards.length - 1;
    if (index >= cards.length) index = 0;
    
    isAnimating = true;
    currentIndex = index;
    
    cards.forEach((card, i) => {
      card.style.transition = animate ? 'all 0.6s cubic-bezier(0.22, 1, 0.36, 1)' : 'none';
      card.style.zIndex = i === index ? 10 : 1;
      card.style.opacity = i === index ? 1 : 0;
      card.style.transform = i === index ? 'translateX(0) scale(1)' : 'translateX(50px) scale(0.95)';
    });
    
    setTimeout(() => {
      isAnimating = false;
      updateActiveStates();
    }, 600);
    
    resetAutoSlide();
  }

  // Next slide
  function nextSlide() {
    goToSlide(currentIndex + 1);
  }

  // Previous slide
  function prevSlide() {
    goToSlide(currentIndex - 1);
  }

  // Auto slide
  function startAutoSlide() {
    autoSlideInterval = setInterval(nextSlide, 5000);
  }

  function resetAutoSlide() {
    clearInterval(autoSlideInterval);
    startAutoSlide();
  }

  // Event listeners
  nextBtn.addEventListener('click', nextSlide);
  prevBtn.addEventListener('click', prevSlide);

  indicators.forEach(indicator => {
    indicator.addEventListener('click', function() {
      const slideIndex = parseInt(this.getAttribute('data-index'));
      goToSlide(slideIndex);
    });
  });

  // Pause on hover
  const carousel = document.querySelector('.carousel-container');
  carousel.addEventListener('mouseenter', () => clearInterval(autoSlideInterval));
  carousel.addEventListener('mouseleave', startAutoSlide);

  // Touch support
  carouselTrack.addEventListener('touchstart', (e) => {
    touchStartX = e.changedTouches[0].screenX;
    clearInterval(autoSlideInterval);
  }, {passive: true});

  carouselTrack.addEventListener('touchend', (e) => {
    touchEndX = e.changedTouches[0].screenX;
    handleSwipe();
    startAutoSlide();
  }, {passive: true});

  function handleSwipe() {
    const threshold = 50;
    const diff = touchStartX - touchEndX;
    
    if (diff > threshold) {
      nextSlide();
    } else if (diff < -threshold) {
      prevSlide();
    }
  }

  // Initialize
  initCarousel();
});

//load more projects

  const projects = [
    {
      title: "🌳 Green Schools Tree Planting & Eco-Club Launch – Uasin Gishu Primary",
      date: "11th July 2025",
      status: "Completed",
      partner: "Uasin Gishu Primary School",
      sponsor: "Diesel Power Company Limited",
      description: `This was the first official project by Eldoret Green Future Eco-Alliance (EGFEA)...`,
      objectives: [
        "Launch the EGFEA eco-schools campaign in Eldoret",
        "Improve school greening...",
        "Raise environmental awareness among learners",
        "Promote youth-led sustainability..."
      ],
      achievements: [
        "267 trees planted...",
        "Eco-club established...",
        "Over 100 participants...",
        "Environmental education held",
        "Community and private sector partnership"
      ],
      images: [
        { src: "../assets/images/loader.jpeg", caption: "📸 Tree planting – July 2025" },
        { src: "../assets/images/img1.jpeg", caption: "📸 Eco-Club setup – July 2025" },
        { src: "../assets/images/gallery12.jpeg", caption: "📸 Team celebrates first EGFEA project" }
      ]
    }
    // Add more projects here...
  ];

  let currentIndex = 0;
  const loadCount = 1;

  document.addEventListener("DOMContentLoaded", () => {
    if (projects.length === 0) {
      document.getElementById("projectsGrid").innerHTML = "<p>No projects available at the moment. Please check back later.</p>";
      document.getElementById("loadMoreBtn").style.display = "none";
    } else {
      loadMoreProjects(); // Load first 3 projects
    }
  });

  function loadMoreProjects() {
    const projectGrid = document.getElementById("projectsGrid");
    const button = document.getElementById("loadMoreBtn");

    const remaining = projects.length - currentIndex;
    const countToLoad = Math.min(loadCount, remaining);

    for (let i = 0; i < countToLoad; i++) {
      const p = projects[currentIndex++];
      const card = document.createElement("div");
      card.className = "project-card";
      card.innerHTML = `
        <h3>${p.title}</h3>
        <p><strong>Date:</strong> ${p.date} | <strong>Status:</strong> ${p.status}</p>
        <p><strong>School Partner:</strong> ${p.partner} | <strong>Sponsor:</strong> ${p.sponsor}</p>
        <p>${p.description}</p>
        <h4>Objectives:</h4>
        <ul>${p.objectives.map(obj => `<li>${obj}</li>`).join('')}</ul>
        <h4>Key Achievements:</h4>
        <ul>${p.achievements.map(ach => `<li>${ach}</li>`).join('')}</ul>
        <div class="project-images">
          ${p.images.map(img => `
            <figure>
              <img src="${img.src}" alt="${img.caption}" style="width: 100%; border-radius: 8px;">
              <figcaption>${img.caption}</figcaption>
            </figure>
          `).join('')}
        </div>
      `;
      projectGrid.appendChild(card);
    }

    if (currentIndex >= projects.length) {
      button.disabled = true;
      button.innerText = "✅ No More Projects Available";
    }
  }
