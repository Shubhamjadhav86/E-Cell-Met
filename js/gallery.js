// Premium Image Gallery for Startups

// Open gallery with images
function openGallery(images) {
    if (!images || images.length === 0) {
        console.log('No images to display');
        return;
    }

    // Create gallery overlay if it doesn't exist
    let galleryOverlay = document.getElementById('galleryOverlay');

    if (!galleryOverlay) {
        galleryOverlay = createGalleryHTML();
        document.body.appendChild(galleryOverlay);
    }

    // Get gallery images container
    const galleryImages = galleryOverlay.querySelector('.gallery-images');

    // Clear previous images
    galleryImages.innerHTML = '';

    // Add images
    images.forEach((imagePath, index) => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `Startup Image ${index + 1}`;
        img.className = 'gallery-image';
        img.loading = 'lazy';
        galleryImages.appendChild(img);
    });

    // Show gallery with animation
    setTimeout(() => {
        galleryOverlay.classList.add('active');
    }, 10);

    // Prevent body scroll
    document.body.style.overflow = 'hidden';
}

// Close gallery
function closeGallery() {
    const galleryOverlay = document.getElementById('galleryOverlay');

    if (galleryOverlay) {
        galleryOverlay.classList.remove('active');

        // Remove after animation
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 300);
    }
}

// Create gallery HTML structure
function createGalleryHTML() {
    const overlay = document.createElement('div');
    overlay.id = 'galleryOverlay';
    overlay.className = 'gallery-overlay';

    overlay.innerHTML = `
        <div class="gallery-container">
            <!-- Close Button -->
            <button class="gallery-close" onclick="closeGallery()">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                </svg>
            </button>
            
            <!-- Images Container -->
            <div class="gallery-images"></div>
            
            <!-- Optional: Navigation Arrows -->
            <button class="gallery-arrow left" onclick="scrollGallery('left')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M15 19l-7-7 7-7" />
                </svg>
            </button>
            <button class="gallery-arrow right" onclick="scrollGallery('right')">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M9 5l7 7-7 7" />
                </svg>
            </button>
        </div>
    `;

    // Close on overlay click (outside container)
    overlay.addEventListener('click', function (e) {
        if (e.target === overlay) {
            closeGallery();
        }
    });

    // Close on ESC key
    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape') {
            closeGallery();
        }
    });

    return overlay;
}

// Scroll gallery left/right
function scrollGallery(direction) {
    const galleryImages = document.querySelector('.gallery-images');

    if (!galleryImages) return;

    const scrollAmount = 400;

    if (direction === 'left') {
        galleryImages.scrollBy({
            left: -scrollAmount,
            behavior: 'smooth'
        });
    } else {
        galleryImages.scrollBy({
            left: scrollAmount,
            behavior: 'smooth'
        });
    }
}

// Keyboard navigation
document.addEventListener('keydown', function (e) {
    const galleryOverlay = document.getElementById('galleryOverlay');

    if (galleryOverlay && galleryOverlay.classList.contains('active')) {
        if (e.key === 'ArrowLeft') {
            scrollGallery('left');
        } else if (e.key === 'ArrowRight') {
            scrollGallery('right');
        }
    }
});

// Export for use in other scripts
window.openGallery = openGallery;
window.closeGallery = closeGallery;
