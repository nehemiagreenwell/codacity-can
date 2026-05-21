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
newQuoteBtn.addEventListener("click", fetchQuote);

/* =========================
   REGISTER FORM VALIDATION
========================= */

const registerForm =
  document.getElementById("register-form");

if (registerForm) {

  registerForm.addEventListener("submit", (e) => {

    e.preventDefault();

    const name =
      document.getElementById("register-name");

    const email =
      document.getElementById("register-email");

    const password =
      document.getElementById("register-password");

    const confirmPassword =
      document.getElementById(
        "register-confirm-password"
      );

    const nameError =
      document.getElementById(
        "register-name-error"
      );

    const emailError =
      document.getElementById(
        "register-email-error"
      );

    const passwordError =
      document.getElementById(
        "register-password-error"
      );

    const confirmPasswordError =
      document.getElementById(
        "register-confirm-password-error"
      );

    let isValid = true;

    /* RESET ERRORS */
    nameError.textContent = "";
    emailError.textContent = "";
    passwordError.textContent = "";
    confirmPasswordError.textContent = "";

    /* RESET INPUT STATES */
    name.classList.remove(
      "input-error",
      "input-success"
    );

    email.classList.remove(
      "input-error",
      "input-success"
    );

    password.classList.remove(
      "input-error",
      "input-success"
    );

    confirmPassword.classList.remove(
      "input-error",
      "input-success"
    );

    /* =========================
       NAME VALIDATION
    ========================= */

    if (name.value.trim() === "") {

      nameError.textContent =
        "Full name is required";

      name.classList.add("input-error");

      isValid = false;

    } else {

      name.classList.add(
        "input-success"
      );

    }

    /* =========================
       EMAIL VALIDATION
    ========================= */

    if (email.value.trim() === "") {

      emailError.textContent =
        "Email is required";

      email.classList.add(
        "input-error"
      );

      isValid = false;

    } else {

      email.classList.add(
        "input-success"
      );

    }

    /* =========================
       PASSWORD VALIDATION
    ========================= */

    if (password.value.trim() === "") {

      passwordError.textContent =
        "Password is required";

      password.classList.add(
        "input-error"
      );

      isValid = false;

    } else if (
      password.value.length < 6
    ) {

      passwordError.textContent =
        "Password must be at least 6 characters";

      password.classList.add(
        "input-error"
      );

      isValid = false;

    } else {

      password.classList.add(
        "input-success"
      );

    }

    /* =========================
       CONFIRM PASSWORD
    ========================= */

    if (
      confirmPassword.value.trim() === ""
    ) {

      confirmPasswordError.textContent =
        "Please confirm password";

      confirmPassword.classList.add(
        "input-error"
      );

      isValid = false;

    } else if (
      confirmPassword.value !==
      password.value
    ) {

      confirmPasswordError.textContent =
        "Passwords do not match";

      confirmPassword.classList.add(
        "input-error"
      );

      isValid = false;

    } else {

      confirmPassword.classList.add(
        "input-success"
      );

    }

    /* =========================
       SUCCESS
    ========================= */

    if (isValid) {

      alert(
        "Registration successful!"
      );

      registerForm.reset();

      /* REMOVE SUCCESS STATES */
      document
        .querySelectorAll(
          ".input-success"
        )
        .forEach((input) => {

          input.classList.remove(
            "input-success"
          );

        });

    }

  });

}
