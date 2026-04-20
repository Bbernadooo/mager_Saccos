document.addEventListener('DOMContentLoaded', () => {
    const langEn = document.getElementById('lang-en');
    const langAm = document.getElementById('lang-am');

    // Simple logic to highlight active language based on URL
    if (window.location.pathname.includes('-am.html')) {
        langAm.classList.add('active');
        langEn.classList.remove('active');
    } else {
        langEn.classList.add('active');
        langAm.classList.remove('active');
    }
});
document.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('#mobile-menu');
    const navList = document.querySelector('#nav-list');
    const navLinks = document.querySelectorAll('.nav-links a');

    // 1. Toggle Mobile Menu
    menu.addEventListener('click', () => {
        navList.classList.toggle('active');
        // Optional: Animate hamburger to X
        menu.classList.toggle('is-active'); 
    });

    // 2. Smooth Scroll & Close Menu on Click
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            const href = link.getAttribute('href');

            // Only intercept internal hashtag links
            if (href.startsWith('#') && href !== '#') {
                e.preventDefault();
                const targetSection = document.querySelector(href);
                
                if (targetSection) {
                    // Close mobile menu if it's open
                    navList.classList.remove('active');

                    // Scroll to section
                    window.scrollTo({
                        top: targetSection.offsetTop - 70, // Adjust for header height
                        behavior: 'smooth'
                    });

                    // Update Active Class
                    navLinks.forEach(l => l.classList.remove('active'));
                    link.classList.add('active');
                }
            }
        });
    });
});
// Wait for the DOM to be fully loaded
document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Smooth Scrolling for Navigation Links
    const navLinks = document.querySelectorAll('.nav-links a');

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            // Only apply to internal links (links starting with #)
            if (link.getAttribute('href').startsWith('#')) {
                e.preventDefault();
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);

                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80, // Offset for fixed header
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // 2. Simple Scroll Animation (Reveal on Scroll)
    const revealElements = document.querySelectorAll('.service-item, .content-left');
    
    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight / 5 * 4;

        revealElements.forEach(el => {
            const elTop = el.getBoundingClientRect().top;

            if (elTop < triggerBottom) {
                el.style.opacity = "1";
                el.style.transform = "translateY(0)";
                el.style.transition = "all 0.6s ease-out";
            }
        });
    };

    // Set initial state for reveal elements
    revealElements.forEach(el => {
        el.style.opacity = "0";
        el.style.transform = "translateY(30px)";
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load

    // 3. Members Portal Mock Interaction
    const memberBtn = document.querySelector('.btn-member');
    memberBtn.addEventListener('click', (e) => {
        if (memberBtn.getAttribute('href') === '#') {
            e.preventDefault();
            alert('Redirecting to Secure Members Portal...');
        }
    });

});
document.addEventListener('DOMContentLoaded', () => {
    const serviceItems = document.querySelectorAll('.service-box, .table-container');

    const revealOnScroll = () => {
        const triggerBottom = window.innerHeight * 0.85;

        serviceItems.forEach(item => {
            const itemTop = item.getBoundingClientRect().top;

            if (itemTop < triggerBottom) {
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial state for animation
    serviceItems.forEach(item => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = 'all 0.6s ease-out';
    });

    window.addEventListener('scroll', revealOnScroll);
    revealOnScroll(); // Run once on load
});
document.addEventListener('DOMContentLoaded', () => {
    const cards = document.querySelectorAll('.event-card');
    
    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            console.log("Exploring: " + card.querySelector('h4').innerText);
        });
    });
});