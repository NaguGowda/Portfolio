// Toggle search input
document.getElementById("search-toggle").addEventListener("click", () => {
  const input = document.getElementById("search-input");
  input.style.display = input.style.display === "block" ? "none" : "block";
  input.focus();
});

// Hamburger toggle
document.getElementById("hamburger").addEventListener("click", () => {
  const nav = document.querySelector(".nav-links");
  nav.classList.toggle("active");
});
