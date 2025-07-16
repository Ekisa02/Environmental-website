const videoSources = [
  "/assets/Video/forest.mp4",
  "/assets/Video/clean-energy.mp4",
  "/assets/Video/green-earth.mp4",
];

const videoElement = document.getElementById("heroVideo");
let currentVideoIndex = 0;

function playNextVideo() {
  // Fade out
  videoElement.style.opacity = 0;

  // Load the next video after fade-out
  setTimeout(() => {
    videoElement.src = videoSources[currentVideoIndex];
    videoElement.load();

    // Play after it's loaded
    videoElement.oncanplay = () => {
      videoElement.play();
      videoElement.style.opacity = 1; // Fade in
    };

    currentVideoIndex = (currentVideoIndex + 1) % videoSources.length;
  }, 1000);
}

// Start with the first video
videoElement.addEventListener("ended", playNextVideo);
playNextVideo();

// gallery images
const galleryImages = [
  { src: "/assets/images/gallery.jpeg", alt: "Tree Planting" },
  { src: "/assets/images/gallery10.jpeg", alt: "Cleanup Campaign" },
  { src: "/assets/images/gallery11.jpeg", alt: "Outreach" },
  { src: "/assets/images/gallery12.jpeg", alt: "Community Forum" },
  { src: "/assets/images/gallery1.jpeg", alt: "Workshop" },
  { src: "/assets/images/gallery2.jpeg", alt: "School Program" },
  { src: "/assets/images/gallery3.jpeg", alt: "Youth Engagement" },
  { src: "/assets/images/gallery4.jpeg", alt: "Nature Walk" },
  { src: "/assets/images/gallery5.jpeg", alt: "Beach Cleanup" },
  { src: "/assets/images/gallery6.jpeg", alt: "Community Garden" },
  { src: "/assets/images/gallery7.jpeg", alt: "Recycling Drive" },
  { src: "/assets/images/gallery8.jpeg", alt: "Wildlife Conservation" },

  { src: "/assets/images/gallery13.jpeg", alt: "Environmental Awareness" },
  { src: "/assets/images/gallery 14.jpeg", alt: "Community Event" },
];

//image loader
let start = 0;
const initialLoad = 3;
const loadCount = 5;
const galleryContainer = document.getElementById("galleryContainer");
const loadMoreBtn = document.getElementById("loadMoreBtn");

function loadImages(count) {
  const end = Math.min(start + count, galleryImages.length);
  for (let i = start; i < end; i++) {
    const img = document.createElement("img");
    img.src = galleryImages[i].src;
    img.alt = galleryImages[i].alt;
    galleryContainer.appendChild(img);
  }
  start = end;
  if (start >= galleryImages.length) {
    loadMoreBtn.style.display = "none";
  }
}

// Initial load
loadImages(initialLoad);

// On button click
loadMoreBtn.addEventListener("click", () => {
  loadImages(loadCount);
});

// Testimonials section

const testimonials = [
  {
    name: "Mr. Tom Mboya",
    role: "Eco-Club Patron & Teacher, Uasin Gishu Primary School",
    quote:
      "The eco-club has brought a sense of leadership and responsibility to our learners. They’re now active in greening the school and educating others on environmental care.",
    photo: "../assets/images/ic_person.jpg",
  },
  {
    name: "Roi",
    role: "Eco-Club Student Member, Uasin Gishu Primary School",
    quote:
      "I was chosen to lead the eco-club and I feel proud. We planted trees, learned about the environment, and now I want to teach others too.",
    photo: "../assets/images/ic_person.jpg",
  },
  {
    name: "Vincent",
    role: "Youth Member & Volunteer, EGFEA",
    quote:
      "Working with EGFEA has helped me grow as a leader and environmental advocate. Seeing our first project succeed gave me confidence that youth can drive real change.",
    photo: "../assets/images/ic_person.jpg",
  },
  {
    name: "Evans Kipruto",
    role: "Programs Support Team, EGFEA",
    quote:
      "This initiative combines both mental health and climate action, which is unique. We engage communities directly and see the impact in every child and volunteer involved.",
    photo: "../assets/images/ic_person.jpg",
  },
];

// Load configuration
let currentIndex = 0;
const loadCount1 = 2;

const testimonialList = document.getElementById("testimonial-list");
const loadMoreBtn1 = document.getElementById("load-more-btn");

function loadTestimonials() {
  const nextItems = testimonials.slice(currentIndex, currentIndex + loadCount1);

  nextItems.forEach((t) => {
    const card = document.createElement("div");
    card.className = "testimonial-card";
    card.innerHTML = `
      <img src="${t.photo}" alt="Volunteer Photo" class="testimonial-photo">
      <div class="testimonial-content">
        <p class="testimonial-text">"${t.quote}"</p>
        <h4 class="testimonial-name">${t.name}</h4>
        <p class="testimonial-role">${t.role}</p>
      </div>
    `;
    testimonialList.appendChild(card);
  });

  currentIndex += loadCount1;

  if (currentIndex >= testimonials.length) {
    loadMoreBtn1.style.display = "none";
  }
}

loadMoreBtn1.addEventListener("click", loadTestimonials);

// Initial load
loadTestimonials();

const teamData = [
  {
    name: "Justus Kipkogei",
    title: "Founder & Chairperson",
    photo: "../assets/images/profile1.jpeg",
    occupation: "Strategic Lead",
    description:
      "Leads EGFEA’s strategic vision, school greening initiatives, eco‑club development, and mental wellness advocacy among youth and communities.",
  },
  {
    name: "Evans Kipruto",
    title: "Co-Founder & Vice Chairperson",
    photo: "../assets/images/ic_person.jpg",
    occupation: "Project Development & Outreach",
    description:
      "Supports project development, school outreach, and partnership coordination to strengthen environmental impact on the ground.",
  },
  {
    name: "Mercy Kipruto",
    title: "Co-Founder & Secretary",
    photo: "../assets/images/ic_person.jpg",
    occupation: "Secretary",
    description:
      "Oversees communication, meeting organization, and documentation of the alliance’s activities and decisions.",
  },
  {
    name: "Ekisa Joseph",
    title: "Lead Developer",
    photo: "../assets/images/profile4.jpg",
    occupation: "System/Software Developer",
    description:
      "Engineers the website and general system of the organization. Ensures that the organization's data is secure.",
  },
  {
    name: "Agnes Waithira",
    title: "Co-Founder & Treasurer",
    photo: "../assets/images/ic_person.jpg",
    occupation: "Treasurer",
    description:
      "Manages budgeting and finances, ensuring transparency and accountability in EGFEA’s resource use.",
  },
  {
    name: "Caleb Kiptoo",
    title: "Committee Member",
    photo: "../assets/images/ic_person.jpg",
    occupation: "School Activities Assistant",
    description:
      "Assists with school eco-club activities and coordination during community events.",
  },
  {
    name: "Caroline Jepkirui",
    title: "Committee Member",
    photo: "../assets/images/ic_person.jpg",
    occupation: "Volunteer Coordinator",
    description:
      "Supports mobilization of volunteers and helps in planning and logistics during tree planting and environmental campaigns.",
  },
  {
    name: "Allan Kipngetich",
    title: "Committee Member",
    photo: "../assets/images/ic_person.jpg",
    occupation: "Outreach Officer",
    description:
      "Contributes to project implementation and supports outreach activities across schools and neighborhoods.",
  },
  {
    name: "Faith Kottam",
    title: "Committee Member",
    photo: "../assets/images/ic_person.jpg",
    occupation: "Wellness & Awareness",
    description:
      "Engages in wellness initiatives and environmental awareness programs within the community.",
  },
];

let visibleCount = 3;

function createTeamCard(member) {
  return `
      <div class="team-card">
        <img src="${member.photo}" alt="${member.name}" class="team-photo" />
        <h3 class="team-name">${member.name}</h3>
         <p class="team-title">${member.title}</p>
        
        <div class="team-stars">
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
          <span class="star">★</span>
        </div>
        <p class="team-occupation">${member.occupation}</p>
        <p class="team-description">${member.description}</p>
      </div>
    `;
}

function loadTeamCards() {
  const container = document.getElementById("team-list");
  container.innerHTML = "";
  teamData.slice(0, visibleCount).forEach((member) => {
    container.innerHTML += createTeamCard(member);
  });

  if (visibleCount >= teamData.length) {
    document.getElementById("loadMoreBtn").style.display = "none";
  }
}

function loadMoreTeam() {
  visibleCount += 3;
  loadTeamCards();
}

// Initial load
loadTeamCards();
