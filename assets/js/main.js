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

/* =========================
   SCROLL ACTIVE LINK
========================= */
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
    const scrollY = window.pageYOffset;

    sections.forEach(current => {
        const sectionHeight = current.offsetHeight;
        const sectionTop = current.offsetTop - 150; // Offset for the fixed header
        const sectionId = current.getAttribute('id');
        const navLink = document.querySelector('.nav-links a[href*="' + sectionId + '"]');

        if (navLink) {
            if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
                navLink.classList.add('active');
            } else {
                navLink.classList.remove('active');
            }
        }
    });
}

// Scroll listener for both reveal and active link
window.addEventListener("scroll", () => {
    revealOnScroll();
    scrollActive();
});

/* =========================
   MOBILE MENU TOGGLE
========================= */
const menuToggle = document.getElementById("mobile-menu-toggle");
const navLinksContainer = document.querySelector(".nav-links");
const navItems = document.querySelectorAll(".nav-links a");

if (menuToggle) {
    menuToggle.addEventListener("click", () => {
        navLinksContainer.classList.toggle("active");
        const isOpened = navLinksContainer.classList.contains("active");
        menuToggle.querySelector("i").classList.replace(
            isOpened ? "fa-bars" : "fa-times",
            isOpened ? "fa-times" : "fa-bars"
        );
    });
}

// Close menu when a link is clicked
navItems.forEach(item => {
    item.addEventListener("click", () => {
        navLinksContainer.classList.remove("active");
        menuToggle.querySelector("i").classList.replace("fa-times", "fa-bars");
    });
});
