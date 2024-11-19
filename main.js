// Smooth Scrolling for Anchor Links
document.querySelectorAll("a[href^='#']").forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        document.querySelector(this.getAttribute("href")).scrollIntoView({
            behavior: "smooth",
            block: "start"
        });
    });
});

// Form Validation
document.querySelectorAll("form").forEach(form => {
    form.addEventListener("submit", function(event) {
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
            alert("Thank you! Your form has been submitted.");
        }
    });
});

// Highlight Active Navigation Link on Scroll
window.addEventListener("scroll", function() {
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
    input.addEventListener("input", function() {
        if (this.value.trim()) {
            this.classList.remove("is-invalid");
            this.classList.add("is-valid");
        } else {
            this.classList.remove("is-valid");
            this.classList.add("is-invalid");
        }
    });
});

// Modal for Confirmation (Optional Enhancement)
document.querySelectorAll(".btn-success").forEach(button => {
    button.addEventListener("click", function(event) {
        const isForm = this.closest("form");
        if (!isForm) {
            alert("Action performed successfully!");
        }
    });
});
const backToTop = document.getElementById("backToTop");
window.onscroll = function () {
    backToTop.style.display = window.scrollY > 300 ? "block" : "none";
};
function scrollToTop() {
    window.scrollTo({ top: 0, behavior: "smooth" });
}
const authTabs = document.querySelector('#authTabs');
const activeTabKey = 'activeTab';

// Remember active tab
authTabs.addEventListener('click', (event) => {
    if (event.target.getAttribute('data-bs-toggle') === 'tab') {
        localStorage.setItem(activeTabKey, event.target.id);
    }
});

// Load last active tab
const lastActiveTab = localStorage.getItem(activeTabKey);
if (lastActiveTab) {
    const lastActiveTabElement = document.getElementById(lastActiveTab);
    new bootstrap.Tab(lastActiveTabElement).show();
}
