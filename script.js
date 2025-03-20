document.addEventListener("DOMContentLoaded", function () {
    const buttons = document.querySelectorAll(".sidebar button");
    const sections = document.querySelectorAll(".section");

    function showSection(sectionId) {
        sections.forEach(section => {
            section.classList.add("hidden");
        });
        document.getElementById(sectionId).classList.remove("hidden");
    }

    buttons.forEach(button => {
        button.addEventListener("click", function () {
            const sectionId = this.getAttribute("data-section");
            showSection(sectionId);
        });
    });
});
