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
  //hero section
  const cards = [document.getElementById("card1"), document.getElementById("card2"), document.getElementById("card3")];
  let index = 0;

  function showNextCard() {
    cards[index].classList.remove("active-card");
    index = (index + 1) % cards.length;
    cards[index].classList.add("active-card");
  }

  setInterval(showNextCard, 5000); // Change card every 5 seconds

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
