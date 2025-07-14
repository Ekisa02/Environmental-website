const videoSources = [
  '/assets/Video/forest.mp4',
  '/assets/Video/clean-energy.mp4',
  '/assets/Video/green-earth.mp4',
];

const videoElement = document.getElementById('heroVideo');
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
videoElement.addEventListener('ended', playNextVideo);
playNextVideo();
