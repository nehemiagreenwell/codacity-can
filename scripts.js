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
/**=========================
   //DEVELOPER QUOTE API
========================= **/
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

/* LOAD FIRST QUOTE */
fetchQuote();

/* NEW QUOTE BUTTON */
/**newQuoteBtn.addEventListener("click", fetchQuote); 
/*=========================
  // Login form validation
=========================*/ 
const form = document.getElementById("login-form");
if(form) {
  form.addEventListener("submit", (e) => {
      
      e.preventDefault();
      
      const email = document.getElementById("login-email");
      const password = document.getElementById("login-password");
      const loginEmailError = document.getElementById("login-email-error");
      const loginPasswordError = document.getElementById("login-password-error");
      
      let isValid = true;
      //Reset errors
      loginEmailError.innerText = "";
      loginPasswordError.innerText = "";
      //reset input states
      email.classList.remove(
          "input-error",
          "input-success"
        );
      password.classList.remove(
          "input-error",
          "input-success"
        );
        
        // email validation
        if (email.value.trim() === "") {

      loginEmailError.textContent =
        "Email is required";

      email.classList.add("input-error");

      isValid = false;

    } else {

      email.classList.add(
        "input-success"
      );
    }
  // end email validation
  // password validation
  if (password.value.trim() === "") {

      loginPasswordError.textContent =
        "Password is required";

      password.classList.add("input-error");

      isValid = false;

    } else {

      password.classList.add(
        "input-success"
      );
    }
    // end password validation
      });
}