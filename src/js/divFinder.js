document.addEventListener("DOMContentLoaded", function() {
  const urlParams = new URLSearchParams(window.location.search);
  const serviceDiv = urlParams.get('service');
  if (serviceDiv && ['div1','div2','div3','div4','div5','div6'].includes(serviceDiv)) {
    showSection(serviceDiv);
    setTimeout(() => {
      const el = document.getElementById(serviceDiv);
      if (el) el.scrollIntoView({behavior: "smooth"});
    }, 200);
  }
});