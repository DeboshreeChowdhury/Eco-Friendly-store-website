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

// Form Validation
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function (event) {
        let isValid = true;
        const requiredFields = this.querySelectorAll("[required]");

        requiredFields.forEach(field => {
            if (!field.value.trim()) {
                isValid = false;
                field.classList.add("is-invalid");
                field.nextElementSibling.textContent = `Please fill out this field.`;
            } else {
                field.classList.remove("is-invalid");
                field.classList.add("is-valid");
            }
        });

        if (!isValid) {
            event.preventDefault(); // Prevent form submission
        } else {
            event.preventDefault(); // Prevent default for demo modal
            showConfirmationModal("Thank you! Your form has been submitted.");
        }
    });
});

// Highlight Active Navigation Link on Scroll
window.addEventListener("scroll", function () {
    const sections = document.querySelectorAll("main section");
    const navLinks = document.querySelectorAll(".nav-link");

    let currentSectionId = "";
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.offsetHeight;

        if (pageYOffset >= sectionTop - 60 && pageYOffset < sectionTop + sectionHeight) {
            currentSectionId = section.getAttribute("id");
        }
    });

    navLinks.forEach(link => {
        link.classList.remove("active");
        if (link.getAttribute("href").includes(currentSectionId)) {
            link.classList.add("active");
        }
    });
});

// Dynamic Feedback for Form Inputs
document.querySelectorAll("form input, form textarea").forEach(input => {
    input.addEventListener("input", function () {
        if (this.value.trim()) {
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        } else {
            this.classList.remove("is-valid");
            this.classList.add("is-invalid");
        }
    });
});

// Modal for Confirmation
function showConfirmationModal(message) {
    const modalHtml = `
        <div class="modal fade" id="confirmationModal" tabindex="-1" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content">
                    <div class="modal-header">
                        <h5 class="modal-title">Confirmation</h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">${message}</div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-success" data-bs-dismiss="modal">Close</button>
                    </div>
                </div>
            </div>
        </div>`;
    document.body.insertAdjacentHTML("beforeend", modalHtml);
    const modal = new bootstrap.Modal(document.getElementById("confirmationModal"));
    modal.show();
}

// Back to Top Button
const backToTop = document.getElementById("backToTop");
window.onscroll = function () {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}

// Dark Mode Toggle
const darkModeToggle = document.getElementById("darkModeToggle");
darkModeToggle?.addEventListener("click", () => {
    document.body.classList.toggle("dark-mode");
    localStorage.setItem("darkMode", document.body.classList.contains("dark-mode"));
});
if (localStorage.getItem("darkMode") === "true") {
    document.body.classList.add("dark-mode");
}

// Lazy Loading for Images
document.querySelectorAll("img").forEach(img => {
    img.setAttribute("loading", "lazy");
});

// Scroll Progress Indicator
const progressBar = document.createElement("div");
progressBar.id = "scrollProgress";
progressBar.style.position = "fixed";
progressBar.style.top = "0";
progressBar.style.left = "0";
progressBar.style.height = "5px";
progressBar.style.backgroundColor = "#8bc34a";
progressBar.style.width = "0%";
progressBar.style.zIndex = "9999";
document.body.appendChild(progressBar);

window.addEventListener("scroll", () => {
    const scrollTop = window.scrollY;
    const scrollHeight = document.body.scrollHeight - window.innerHeight;
    const progress = (scrollTop / scrollHeight) * 100;
    progressBar.style.width = `${progress}%`;
});

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
