document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceDiv = urlParams.get('service');
  if (serviceDiv) {
    const el = document.getElementById(serviceDiv);
    if (el) {
      el.scrollIntoView({behavior: "smooth"});
    }
  }
});

// This is mobile only! It works without the divFinder.js Logic