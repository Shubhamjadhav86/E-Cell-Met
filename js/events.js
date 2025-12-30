// Render events from global eventsData
function renderMajorEvents() {
    const container = document.getElementById('major-events-container');

    // Check if container and data exist
    if (!container || typeof eventsData === 'undefined') {
        console.error('Events container or data missing');
        return;
    }

    // Clear existing content
    container.innerHTML = '';

    // Function to generate card HTML
    const createCard = (event) => `
        <div class="event-card">
            <img src="${event.images[0]}" class="event-img" alt="${event.title}">
            <div class="event-overlay"></div>
            <div class="event-date">${event.date}</div>
            <div class="event-content">
                <h3 class="text-2xl font-bold text-white mb-1 event-title">${event.title}</h3>
                <p class="text-gray-100 text-sm event-headline">${event.headline}</p>
                <p class="event-tagline text-xs mt-2 opacity-80 conditional-tagline">${event.tagline}</p>
            </div>
            <a href="${event.detailPageLink}" class="event-view-btn">View More →</a>
        </div>
    `;

    // Generate HTML for all events in data
    const originalSet = eventsData.map(createCard).join('');

    // Generate HTML for duplicate set (for seamless loop)
    const duplicateSet = eventsData.map(createCard).join('');

    // Inject into container (Original + Duplicate)
    container.innerHTML = originalSet + duplicateSet;

    // --- JS-Driven Infinite Scroll Logic ---
    initCarousel(container);
}

function initCarousel(track) {
    // Style the track to be flex and fit content
    track.style.display = 'flex';
    track.style.gap = '2rem'; // Match your CSS gap
    track.style.width = 'max-content';
    track.style.willChange = 'transform';
    // Remove conflicting CSS animation if any
    track.style.animation = 'none';

    let scrollAmount = 0;
    const scrollSpeed = 0.5; // Pixels per frame (Adjust for speed)
    let isDragging = false;
    let startX = 0;
    let initialScroll = 0;
    let animationId = null;

    /** 
     * Calculate single set width EXACTLY.
     * We assume the first half of children is the original set.
     */
    function getSingleSetWidth() {
        // We have 32 children (16 * 2). Single set is half the scrollWidth.
        // FIX: Add gap to scrollWidth before dividing to account for the missing final gap in "scrollWidth" calculation
        const gap = parseFloat(window.getComputedStyle(track).gap) || 0;
        return (track.scrollWidth + gap) / 2;
    }

    // Animation Loop
    function animate() {
        if (!isDragging) {
            scrollAmount -= scrollSpeed;
            const singleWidth = getSingleSetWidth();

            // Reset loop seamlessly
            // If we have scrolled PAST the first set (scrollAmount is more negative than -singleWidth)
            if (scrollAmount <= -singleWidth) {
                // Determine how much we overshot
                const oversight = scrollAmount + singleWidth;
                scrollAmount = oversight; // Reset to start + oversight
            }
            // If positive (dragged to right), ensure we have content
            if (scrollAmount > 0) {
                scrollAmount = -singleWidth + scrollAmount;
            }

            track.style.transform = `translateX(${scrollAmount}px)`;
        }
        animationId = requestAnimationFrame(animate);
    }

    // Start Animation
    animationId = requestAnimationFrame(animate);

    // --- Drag Logic ---
    track.addEventListener('mousedown', (e) => {
        isDragging = true;
        startX = e.pageX;
        initialScroll = scrollAmount;
        track.style.cursor = 'grabbing';
    });

    // Use window for mouseup/move to catch exits
    window.addEventListener('mousemove', (e) => {
        if (!isDragging) return;
        const x = e.pageX;
        const walk = (x - startX) * 1.5; // Sensitivity
        scrollAmount = initialScroll + walk;
        track.style.transform = `translateX(${scrollAmount}px)`;
    });

    window.addEventListener('mouseup', () => {
        if (isDragging) {
            isDragging = false;
            track.style.cursor = 'grab';
        }
    });

    // Touch support (basic)
    track.addEventListener('touchstart', (e) => {
        isDragging = true;
        startX = e.touches[0].pageX;
        initialScroll = scrollAmount;
    });

    window.addEventListener('touchmove', (e) => {
        if (!isDragging) return;
        const x = e.touches[0].pageX;
        const walk = (x - startX) * 1.5;
        scrollAmount = initialScroll + walk;
        track.style.transform = `translateX(${scrollAmount}px)`;
    });

    window.addEventListener('touchend', () => {
        isDragging = false;
    });
}

// Run on load
document.addEventListener('DOMContentLoaded', renderMajorEvents);
