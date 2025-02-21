document.addEventListener("DOMContentLoaded", () => {
    const menuToggle = document.querySelector(".menu-toggle");
    const navLinks = document.querySelector(".nav-links");
    const navOpt = document.querySelectorAll(".nav-links a");

    menuToggle.addEventListener("click", () => {
        navLinks.classList.toggle("show");
    });
    navOpt.forEach(item => {
        item.addEventListener("click", () => {
            navLinks.classList.remove("show");
        });
        document.addEventListener("click", (event) => {
            if (!navLinks.contains(event.target) && !menuToggle.contains(event.target)) {
                navLinks.classList.remove("show");
            }
        });
    });
});
const scrollToTopBtn = document.querySelector(".scroll-to-top");

if (scrollToTopBtn) {
    scrollToTopBtn.addEventListener("click", () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}