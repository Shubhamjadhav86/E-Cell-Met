// Milestone Gallery Logic
document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.querySelector('.gallery-main img');
    const thumbItems = document.querySelectorAll('.thumb-item');
    const modal = document.querySelector('.gallery-modal');
    const modalImg = document.querySelector('.modal-img-container img');
    const closeBtn = document.querySelector('.modal-close');
    const prevBtn = document.querySelector('.modal-prev');
    const nextBtn = document.querySelector('.modal-next');

    if (!modal || !mainImage) return;

    let currentIndex = 0;

    // Collect all image sources
    const images = [];
    images.push(mainImage.src);
    thumbItems.forEach(thumb => {
        images.push(thumb.querySelector('img').src);
    });

    // Check if this is a Major Event Page (Scoped Logic)
    const isMajorEvent = document.querySelector('.major-event-gallery');

    if (isMajorEvent) {
        // 1. Inject Image Count Badge (if more than 1 image)
        const galleryMain = document.querySelector('.gallery-main');

        if (galleryMain && images.length > 1) {
            const badge = document.createElement('div');
            badge.className = 'image-count-badge';
            // Count = total images - 1 (since main image is already shown)
            badge.textContent = `+${images.length - 1}`;
            galleryMain.appendChild(badge);

            // 2. Badge Click -> Open Modal
            badge.addEventListener('click', (e) => {
                e.stopPropagation();
                modal.classList.add('open');
                modalImg.src = mainImage.src;
                currentIndex = 0;
            });
        }
    } else {
        // Standard Gallery Logic (Milestones)
        thumbItems.forEach((thumb, index) => {
            thumb.addEventListener('click', () => {
                // Update main image
                const newSrc = thumb.querySelector('img').src;
                mainImage.src = newSrc;

                // Update active state
                thumbItems.forEach(t => t.classList.remove('active'));
                thumb.classList.add('active');

                // Update index (offset by 1 because 0 is main)
                currentIndex = index + 1;
            });
        });
    }

    // Open Modal
    mainImage.parentElement.addEventListener('click', () => {
        modal.classList.add('open');
        modalImg.src = mainImage.src;
    });

    // Close Modal
    closeBtn.addEventListener('click', () => {
        modal.classList.remove('open');
    });

    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) modal.classList.remove('open');
    });

    // Navigation
    prevBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigate(-1);
    });

    nextBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        navigate(1);
    });

    function navigate(direction) {
        // Find current image index in the full array
        let currentSrcIndex = images.indexOf(modalImg.src);
        if (currentSrcIndex === -1) currentSrcIndex = 0;

        let newIndex = currentSrcIndex + direction;

        if (newIndex >= images.length) newIndex = 0;
        if (newIndex < 0) newIndex = images.length - 1;

        modalImg.src = images[newIndex];
    }
});
