// ===============================
// DOM LOADED
// ===============================
document.addEventListener("DOMContentLoaded", function () {

    // ===============================
    // FAQ ACCORDION (Smooth Toggle)
    // ===============================
    const faqHeaders = document.querySelectorAll('.faq h3');

    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {

            const content = header.nextElementSibling;

            // Close other open FAQs (Accordion effect)
            document.querySelectorAll('.faq p').forEach(p => {
                if (p !== content) {
                    p.style.maxHeight = null;
                    p.style.padding = "0 15px";
                }
            });

            // Toggle current
            if (content.style.maxHeight) {
                content.style.maxHeight = null;
                content.style.padding = "0 15px";
            } else {
                content.style.maxHeight = content.scrollHeight + "px";
                content.style.padding = "15px";
            }

        });
    });


    // ===============================
    // SMOOTH SCROLL (For Anchor Links)
    // ===============================
    const links = document.querySelectorAll('a[href^="#"]');

    links.forEach(link => {
        link.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });


    // ===============================
    // SIMPLE SCROLL FADE-IN EFFECT
    // ===============================
    const sections = document.querySelectorAll('section');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        sections.forEach(section => {
            const sectionTop = section.getBoundingClientRect().top;

            if (sectionTop < triggerBottom) {
                section.style.opacity = "1";
                section.style.transform = "translateY(0)";
            }
        });
    };

    // Initial styles
    sections.forEach(section => {
        section.style.opacity = "0";
        section.style.transform = "translateY(40px)";
        section.style.transition = "all 0.6s ease";
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // run on load

});
