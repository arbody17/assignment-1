// Dark mode
const toggleBtn = document.getElementById("theme-toggle");
toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark");
  toggleBtn.textContent = document.body.classList.contains("dark") ? "☀️" : "🌙";
});

// Typewriter effect
const words = ["Engineer", "Developer", "Researcher"];
let i = 0, j = 0, currentWord = "", isDeleting = false;

function typeEffect() {
  currentWord = words[i];
  document.getElementById("typewriter").textContent =
    currentWord.substring(0, j);

  if (!isDeleting && j < currentWord.length) {
    j++;
    setTimeout(typeEffect, 150);
  } else if (isDeleting && j > 0) {
    j--;
    setTimeout(typeEffect, 80);
  } else {
    isDeleting = !isDeleting;
    if (!isDeleting) i = (i + 1) % words.length;
    setTimeout(typeEffect, 700);
  }
}
typeEffect();
