const menuToggle = document.getElementById("menu-toggle");
const navMenu = document.getElementById("nav-menu");

menuToggle.addEventListener("click", () => {
  navMenu.classList.toggle("active");
});
/* =========================
   DASHBOARD SIDEBAR
========================= */

const dashboardMenuBtn =
  document.getElementById("dashboard-menu-btn");

const sidebar =
  document.getElementById("sidebar");

if (dashboardMenuBtn && sidebar) {

  dashboardMenuBtn.addEventListener("click", () => {

    sidebar.classList.toggle(
      "active-sidebar"
    );

  });

}

/* DARK/LIGHT MODE */

const themeToggle = document.getElementById("theme-toggle");

/* LOAD SAVED THEME */
if (localStorage.getItem("theme") === "light") {
  document.body.classList.add("light-mode");
  themeToggle.textContent = "☀️";
}

/* TOGGLE THEME */
themeToggle.addEventListener("click", () => {

  document.body.classList.toggle("light-mode");

  if (document.body.classList.contains("light-mode")) {

    localStorage.setItem("theme", "light");
    themeToggle.textContent = "☀️";

  } else {

    localStorage.setItem("theme", "dark");
    themeToggle.textContent = "🌙";
  }

});
/* =========================
   DEVELOPER QUOTE API
========================= */
/*
const quoteText = document.getElementById("quote-text");
const quoteAuthor = document.getElementById("quote-author");
const newQuoteBtn = document.getElementById("new-quote-btn");

async function fetchQuote() {

  try {

    quoteText.textContent = "Loading...";
    quoteAuthor.textContent = "";

    const response = await fetch(
      "https://api.quotable.io/random"
    );

    const data = await response.json();

    quoteText.textContent = `"${data.content}"`;

    quoteAuthor.textContent = `— ${data.author}`;

  } catch (error) {

    quoteText.textContent =
      "Failed to load quote.";

    quoteAuthor.textContent = "";
  }

}
*/
/* LOAD FIRST QUOTE */
/*fetchQuote();*/

/* NEW QUOTE BUTTON */
/*newQuoteBtn.addEventListener("click", fetchQuote); */