// Smooth Scrolling for Anchor Links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function (event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start",
        });
    });
});

// Basic Form Validation
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function (event) {
        let isValid = true;
        const requiredFields = this.querySelectorAll("[required]");

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add("is-invalid");
                field.nextElementSibling?.textContent = "This field is required.";
            } else {
                field.classList.remove("is-invalid");
                field.classList.add("is-valid");
            }
        });

        if (!isValid) {
            event.preventDefault(); // Prevent form submission if invalid
        } else {
            alert("Thank you! Your form has been submitted.");
        }
    });
});

// Back to Top Button
const backToTop = document.getElementById("backToTop");
if (backToTop) {
    window.addEventListener("scroll", () => {
        backToTop.style.display = window.scrollY > 300 ? "block" : "none";
    });

    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
}

// Lazy Loading for Images
document.querySelectorAll("img").forEach(img => {
    img.setAttribute("loading", "lazy");
});

// Search Functionality for a Table
function searchTable() {
    const input = document.getElementById("materialSearch").value.toLowerCase();
    const rows = document.querySelectorAll("#materialTable tbody tr");

    rows.forEach(row => {
        const text = row.innerText.toLowerCase();
        row.style.display = text.includes(input) ? "" : "none";
    });
}

// Expandable/Collapsible Sections
document.querySelectorAll(".collapsible-section").forEach(section => {
    const toggleButton = document.createElement("button");
    toggleButton.textContent = "Show More";
    toggleButton.classList.add("btn", "btn-link");

    toggleButton.addEventListener("click", () => {
        const content = section.querySelector(".content");
        content.classList.toggle("collapsed");
        toggleButton.textContent = content.classList.contains("collapsed")
            ? "Show More"
            : "Show Less";
    });

    section.appendChild(toggleButton);
});
