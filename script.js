const themeBtn = document.getElementById("theme_button");
const circle = themeBtn.querySelector(".circle");
const h = themeBtn.querySelectorAll("h3");
const body = document.body;

// Step 1: Set theme on load
let currentTheme = localStorage.getItem("theme");

if (currentTheme === "dark") {
  body.classList.add("dark");
  themeBtn.classList.add("justifyend");
  circle.classList.add("dark");
} else {
  themeBtn.classList.add("light");
}

// Step 2: Toggle on click
themeBtn.addEventListener("click", () => {
  body.classList.toggle("dark");
  themeBtn.classList.toggle("justifystart");

  circle.classList.toggle("dark");

  themeBtn.classList.toggle("justifyend");

  const isDark = body.classList.contains("dark");

  if (isDark) {
    themeBtn.classList.remove("light");
    themeBtn.classList.add("dark");
    localStorage.setItem("theme", "dark");
  } else {
    themeBtn.classList.remove("dark");
    themeBtn.classList.add("light");
    localStorage.setItem("theme", "light");
  }
});
