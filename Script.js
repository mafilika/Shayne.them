// FAQ toggle for index.html
document.addEventListener("DOMContentLoaded", function() {
    const faqHeaders = document.querySelectorAll('.faq h3');
    faqHeaders.forEach(header => {
        header.addEventListener('click', () => {
            const content = header.nextElementSibling;
            content.style.display = content.style.display === 'block' ? 'none' : 'block';
        });
    });
});
