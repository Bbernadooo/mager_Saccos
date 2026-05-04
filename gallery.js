// 1. Define your collections with absolute paths
// IMPORTANT: Ensure your filenames (e.g., 3.jpg) match the actual file case exactly.
const collections = {
    'meeting': [
        { src: '/photos/3.jpg', cap: 'Annual General Meeting - Board Presentation' },
        { src: '/photos/5.jpg', cap: 'Member Discussion Session' },
        { src: '/photos/7.jpg', cap: 'Member Discussion Session' },
        { src: '/photos/11.jpg', cap: 'Member Discussion Session' },
        { src: '/photos/15.jpg', cap: 'Member Discussion Session' },
        { src: '/photos/2.jpg', cap: 'Member Discussion Session' },
        { src: '/photos/20.jpg', cap: 'Member Discussion Session' },
        { src: '/photos/9.jpg', cap: 'Member Discussion Session' }
    ],
    'anniversary': [
        { src: '/photos/1.jpg', cap: 'First Year Anniversary Celebration' },
        { src: '/photos/4.jpg', cap: 'First Year Anniversary Celebration' },
        { src: '/photos/12.jpg', cap: 'First Year Anniversary Celebration' },
        { src: '/photos/14.jpg', cap: 'First Year Anniversary Celebration' },
        { src: '/photos/16.jpg', cap: 'First Year Anniversary Celebration' },
        { src: '/photos/17.jpg', cap: 'First Year Anniversary Celebration' },
        { src: '/photos/19.jpg', cap: 'First Year Anniversary Celebration' },
        { src: '/photos/18.jpg', cap: 'First Year Anniversary Celebration' }
    ],
    'outreach': [
        { src: '/photos/3.jpg', cap: 'Community Outreach ' },
        { src: '/photos/2.jpg', cap: 'Community Outreach ' },
        { src: '/photos/21.jpg', cap: 'Community Outreach ' },
        { src: '/photos/22.jpg', cap: 'Community Outreach ' },
        { src: '/photos/23.jpg', cap: 'Community Outreach ' },
        { src: '/photos/25.jpg', cap: 'Community Outreach ' }
    ]
};

// 2. Initialize Swiper
const swiper = new Swiper(".mySwiper", {
    loop: true,
    slidesPerView: 1,
    spaceBetween: 10,
    autoHeight: true,
    navigation: { nextEl: ".swiper-button-next", prevEl: ".swiper-button-prev" },
    pagination: { el: ".swiper-pagination", clickable: true },
    keyboard: { enabled: true },
});

let currentCategory = '';

// 3. Open gallery logic
function openGallery(category) {
    const overlay = document.getElementById('gallery-overlay');
    const caption = document.getElementById('gallery-caption');
    
    if (!collections[category]) return;
    
    currentCategory = category;
    
    // Clear existing slides
    swiper.removeAllSlides();
    
    // Add new slides
    collections[category].forEach(item => {
        swiper.appendSlide(`<div class="swiper-slide"><img src="${item.src}" alt="${item.cap}" style="width:100%;height:auto;max-width:100%;object-fit:contain;"></div>`);
    });

    // Update first caption
    caption.innerText = collections[category][0].cap;
    
    overlay.style.display = 'block';
    document.body.style.overflow = 'hidden';
    
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
    document.body.style.overflow = 'auto';
}