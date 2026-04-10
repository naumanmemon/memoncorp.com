// Memon Strategy LLC - Main JS

(function () {
    // Mobile nav toggle
    const toggle = document.querySelector('.nav-toggle');
    const navLinks = document.querySelector('.nav-links');

    if (toggle) {
        toggle.addEventListener('click', function () {
            navLinks.classList.toggle('active');
            toggle.classList.toggle('open');
        });
    }

    // Close mobile nav when a link is clicked
    document.querySelectorAll('.nav-links a').forEach(function (link) {
        link.addEventListener('click', function () {
            navLinks.classList.remove('active');
            toggle.classList.remove('open');
        });
    });

    // Header scroll shadow
    const header = document.querySelector('.header');
    window.addEventListener('scroll', function () {
        if (window.scrollY > 10) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
    });

    // Contact form handler (static site — just show confirmation)
    const form = document.getElementById('contactForm');
    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.textContent;

            btn.textContent = 'Message Sent!';
            btn.disabled = true;
            btn.style.background = '#16a34a';
            btn.style.borderColor = '#16a34a';

            setTimeout(function () {
                btn.textContent = originalText;
                btn.disabled = false;
                btn.style.background = '';
                btn.style.borderColor = '';
                form.reset();
            }, 3000);
        });
    }
})();
