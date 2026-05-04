// 1. Define your collections
const collections = {
    'meeting': [
        { src: 'photos/3.JPG', cap: 'Annual General Meeting - Board Presentation' },
        { src: 'photos/5.JPG', cap: 'Member Discussion Session' },
        { src: 'photos/7.JPG', cap: 'Member Discussion Session' },
        { src: 'photos/11.jpg', cap: 'Member Discussion Session' },
        { src: 'photos/15.jPG', cap: 'Member Discussion Session' },
        { src: 'photos/2.JPG', cap: 'Member Discussion Session' },
        { src: 'photos/20.jPG', cap: 'Member Discussion Session' },
        { src: 'photos/9.jPG', cap: 'Member Discussion Session' }
        
    ],
    'anniversary': [
        { src: 'photos/1.JPG', cap: 'First Year Anniversary Celebration' },
        { src: 'photos/4.JPG', cap: 'First Year Anniversary Celebration' },
        { src: 'photos/12.jPG', cap: 'First Year Anniversary Celebration' },
        { src: 'photos/14.jPG', cap: 'First Year Anniversary Celebration' },
        { src: 'photos/16.jPG', cap: 'First Year Anniversary Celebration' },
        { src: 'photos/17.jPG', cap: 'First Year Anniversary Celebration' },
        { src: 'photos/19.jPG', cap: 'First Year Anniversary Celebration' },
        { src: 'photos/18.jPG', cap: 'First Year Anniversary Celebration' }
    ],
    'outreach': [
        { src: 'photos/3.JPG', cap: 'Community Outreach ' },
        { src: 'photos/2.JPG', cap: 'Community Outreach ' },
        { src: 'photos/21.jPG', cap: 'Community Outreach ' },
        { src: 'photos/22.jPG', cap: 'Community Outreach ' },
        { src: 'photos/23.jPG', cap: 'Community Outreach ' },
        { src: 'photos/25.jPG', cap: 'Community Outreach ' }
    ]
};

// 2. Initialize Swiper (Only ONCE)
const swiper = new Swiper(".mySwiper", {
    loop: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination", clickable: true },
    keyboard: { enabled: true },
});

// Variable to keep track of the current active category for captions
let currentCategory = '';

// 3. The logic to switch collections and open gallery
function openGallery(category) {
    const overlay = document.getElementById('gallery-overlay');
    const caption = document.getElementById('gallery-caption');
    
    // Safety check: make sure category exists
    if (!collections[category]) return;
    
    currentCategory = category;
    
    // Clear existing slides
    swiper.removeAllSlides();
    
    // Add new slides from the selected collection
    collections[category].forEach(item => {
        swiper.appendSlide(`<div class="swiper-slide"><img src="${item.src}" alt="${item.cap}"></div>`);
    });

    // Update the first caption immediately
    caption.innerText = collections[category][0].cap;
    
    // Show overlay and disable body scroll
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
    // Refresh Swiper and jump to start
    swiper.update();
    swiper.slideToLoop(0, 0);
}

// 4. Update caption on slide change
swiper.on('slideChange', function () {
    const caption = document.getElementById('gallery-caption');
    if (currentCategory && collections[currentCategory]) {
        const idx = swiper.realIndex;
        if (collections[currentCategory][idx]) {
            caption.innerText = collections[currentCategory][idx].cap;
        }
    }
});

// 5. Close Gallery logic
function closeGallery() {
    document.getElementById('gallery-overlay').style.display = 'none';
    document.body.style.overflow = 'auto'; // Re-enable scrolling
}