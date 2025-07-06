const sidebar = document.getElementById('sidebar');
const toggleBtn = document.getElementById('toggleSidebar');

// Show sidebar with nav when button is clicked
toggleBtn.addEventListener('click', () => {
  sidebar.classList.toggle('visible');
});

//hides when in a certain width (media querry)
window.addEventListener('resize', () => {
  if (window.innerWidth >= 1024) {
    sidebar.classList.remove('visible');
  }
});