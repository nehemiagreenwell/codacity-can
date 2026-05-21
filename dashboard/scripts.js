/* =========================
   DARK/LIGHT THEME
========================= */

const themeToggle =
  document.getElementById("theme-toggle");

/* LOAD SAVED THEME */
if (localStorage.getItem("theme") === "light") {

  document.body.classList.add(
    "light-mode"
  );

  if (themeToggle) {
    themeToggle.textContent = "☀️";
  }

}

/* TOGGLE THEME */
if (themeToggle) {

  themeToggle.addEventListener("click", () => {

    document.body.classList.toggle(
      "light-mode"
    );

    if (
      document.body.classList.contains(
        "light-mode"
      )
    ) {

      localStorage.setItem(
        "theme",
        "light"
      );

      themeToggle.textContent = "☀️";

    } else {

      localStorage.setItem(
        "theme",
        "dark"
      );

      themeToggle.textContent = "🌙";

    }

  });

}
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
/* CLOSE SIDEBAR */

const closeSidebarBtn =
  document.getElementById("close-sidebar-btn");

if (closeSidebarBtn && sidebar) {

  closeSidebarBtn.addEventListener("click", () => {

    sidebar.classList.remove(
      "active-sidebar"
    );

  });

}