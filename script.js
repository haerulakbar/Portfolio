document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
    function()
        $("html, body").animate({
            scrollTop: $($.attr(this, 'href')).offset().top
        }, 500);
    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        body.classList.toggle("light-mode");
    });

    const projectsSection = document.getElementById("projects");
    window.addEventListener("scroll", () => {
        if (window.scrollY + window.innerHeight > projectsSection.offsetTop) {
            projectsSection.classList.remove("opacity-0");
        }
    });

    const modal = document.getElementById("modal");
    const openModal = document.getElementById("open-modal");
    const closeModal = document.getElementById("close-modal");
    openModal.addEventListener("click", () => {
        modal.classList.remove("hidden");
    });
    closeModal.addEventListener("click", () => {
        modal.classList.add("hidden");
    });
});
