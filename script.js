const viewBtn = document.getElementById("viewBtn");
const guidelines = document.getElementById("guidelinesSection");

viewBtn.addEventListener("click", () => {
    guidelines.classList.remove("hidden");
    guidelines.scrollIntoView({ behavior: "smooth" });
});

/* Accordion */
const accordions = document.querySelectorAll(".accordion");

accordions.forEach(acc => {
    acc.addEventListener("click", function() {
        const panel = this.nextElementSibling;

        if (panel.style.maxHeight) {
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
});
