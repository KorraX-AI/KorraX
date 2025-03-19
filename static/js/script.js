document.addEventListener("DOMContentLoaded", function () {
    console.log("Website Loaded Successfully!");

    const navLinks = document.querySelectorAll("nav ul li a");

    navLinks.forEach(link => {
        link.addEventListener("mouseover", function () {
            this.style.color = "black";
        });

        link.addEventListener("mouseout", function () {
            this.style.color = "white";
        });
    });

    // Smooth scroll for internal links
    const internalLinks = document.querySelectorAll('a[href^="#"]');
    internalLinks.forEach(link => {
        link.addEventListener("click", function (e) {
            e.preventDefault();
            const targetId = this.getAttribute("href").substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: "smooth" });
            }
        });
    });

    if (window.location.pathname.includes("pdf")) {
        document.addEventListener("contextmenu", (e) => e.preventDefault());
        document.addEventListener("keydown", (e) => {
            if (e.ctrlKey && (e.key === "p" || e.key === "s")) {
                e.preventDefault();
            }
            if (e.key === "PrintScreen") {
                e.preventDefault();
            }
        });
    }
});
