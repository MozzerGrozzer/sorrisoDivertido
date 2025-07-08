const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleSidebar');
const overlay = document.getElementById('overlay');

// Show sidebar and overlay when button is clicked
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('visible');
  overlay.classList.toggle('active');
});

// Hide sidebar and overlay when clicking overlay
overlay.addEventListener('click', () => {
  sidebar.classList.remove('visible');
  overlay.classList.remove('active');
});

// Hide sidebar and overlay on desktop resize
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    sidebar.classList.remove('visible');
    overlay.classList.remove('active');
  }
});