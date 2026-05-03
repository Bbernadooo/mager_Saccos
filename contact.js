document.getElementById('magerContactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Professional Alert Logic
    const btn = document.querySelector('.submit-btn');
    btn.innerText = "Sending...";
    btn.disabled = true;

    setTimeout(() => {
        showToast("Thank you! Your message has been sent to Mager SACCOS LTD. We will contact you shortly.");
        btn.innerText = "Send Message";
        btn.disabled = false;
        this.reset();
    }, 1500);
});

function showToast(message, duration = 3500) {
    const toast = document.createElement('div');
    toast.textContent = message;
    Object.assign(toast.style, {
        position: 'fixed',
        bottom: '24px',
        right: '24px',
        maxWidth: '320px',
        backgroundColor: 'rgba(0, 0, 0, 0.9)',
        color: '#fff',
        padding: '14px 18px',
        borderRadius: '12px',
        boxShadow: '0 10px 24px rgba(0, 0, 0, 0.2)',
        fontSize: '14px',
        lineHeight: '1.4',
        zIndex: '9999',
        opacity: '0',
        transform: 'translateY(16px)',
        transition: 'opacity 0.25s ease, transform 0.25s ease'
    });

    document.body.appendChild(toast);
    requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translateY(0)';
    });

    setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translateY(16px)';
        toast.addEventListener('transitionend', () => toast.remove(), { once: true });
    }, duration);
}

// 1. Define your collections
const collections = {
    'meeting': [
        { src: 'photos/3.JPG', cap: 'Annual General Meeting - Board Presentation' },
        { src: 'photos/4.JPG', cap: 'Member Discussion Session' },
        { src: 'photos/5.JPG', cap: 'Financial Report Overview' }
    ],
    'anniversary': [
        { src: 'photos/14.jpg', cap: 'First Year Anniversary Celebration' },
        { src: 'photos/15.jpg', cap: 'Cake Cutting Ceremony' }
    ],
    'outreach': [
        { src: 'photos/9.jpg', cap: 'Community Outreach in Addis Ababa' },
        { src: 'photos/10.jpg', cap: 'Welcoming 62 New Members' }
    ]
};

// 2. Initialize Swiper
const swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination", clickable: true },
});

// 3. The logic to switch collections
function openGallery(category) {
    const overlay = document.getElementById('gallery-overlay');
    const wrapper = document.querySelector('.swiper-wrapper');
    const caption = document.getElementById('gallery-caption');
    
    // Clear existing slides
    swiper.removeAllSlides();
    
    // Add new slides from the selected collection
    collections[category].forEach(item => {
        swiper.appendSlide(`<div class="swiper-slide"><img src="${item.src}"></div>`);
    });

    // Update first caption
    caption.innerText = collections[category][0].cap;
    
    // Show overlay
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    swiper.update();
    swiper.slideTo(0, 0);

    // Update caption on slide change
    swiper.on('slideChange', function () {
        const idx = swiper.realIndex;
        caption.innerText = collections[category][idx].cap;
    });
}

function closeGallery() {
    document.getElementById('gallery-overlay').style.display = 'none';
    document.body.style.overflow = 'auto';
}