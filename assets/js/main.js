/* =========================
   DARK / LIGHT MODE
========================= */
const toggleBtn = document.getElementById("theme-toggle");
const body = document.body;
const icon = toggleBtn.querySelector("i");

// Load saved theme
const savedTheme = localStorage.getItem("theme");
if (savedTheme === "dark") {
    body.classList.add("dark");
    icon.classList.replace("fa-moon", "fa-sun");
}

// Toggle theme
toggleBtn.addEventListener("click", () => {
    body.classList.toggle("dark");

    if (body.classList.contains("dark")) {
        icon.classList.replace("fa-moon", "fa-sun");
        localStorage.setItem("theme", "dark");
    } else {
        icon.classList.replace("fa-sun", "fa-moon");
        localStorage.setItem("theme", "light");
    }
});

/* =========================
   SCROLL REVEAL ANIMATION
========================= */
const reveals = document.querySelectorAll(".reveal");

const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    const revealPoint = 120;

    reveals.forEach((el) => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < windowHeight - revealPoint) {
            el.classList.add("active");
        }
    });
};

// Initial trigger
revealOnScroll();

// Scroll listener
window.addEventListener("scroll", revealOnScroll);
