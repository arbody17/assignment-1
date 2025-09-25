document.addEventListener("DOMContentLoaded", () => {
  const hour = new Date().getHours();
  let greeting;

  if (hour < 12) {
    greeting = "Good Morning!";
  } else if (hour < 18) {
    greeting = "Good Afternoon!";
  } else {
    greeting = "Good Evening!";
  }

  const aboutSection = document.getElementById("about");
  const greetingElement = document.createElement("h2");
  greetingElement.textContent = greeting;
  aboutSection.prepend(greetingElement);
});
