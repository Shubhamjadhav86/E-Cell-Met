document.addEventListener('DOMContentLoaded', () => {
    const track = document.getElementById('milestone-track');

    // Lightbox Elements
    const lightbox = document.getElementById('home-lightbox');
    const lightboxImg = document.getElementById('home-lightbox-img');
    const lightboxClose = document.getElementById('home-lightbox-close');
    const lightboxPrev = document.getElementById('home-lightbox-prev');
    const lightboxNext = document.getElementById('home-lightbox-next');

    if (!track || typeof milestonesData === 'undefined') {
        console.error('Milestone track or data missing');
        return;
    }

    // --- Render Logic ---
    function renderMilestones() {
        track.innerHTML = '';

        const createCard = (milestone, index) => {
            const isHighlight = milestone.highlight;
            // Use existing classes/styles
            const highlightClass = isHighlight ? 'milestone-highlight' : '';
            const highlightStyle = isHighlight
                ? 'background: linear-gradient(to bottom right, rgba(255,23,68,0.2), var(--surface-color)); border: 1px solid rgba(255,23,68,0.3);'
                : '';

            const mainImage = milestone.images && milestone.images.length > 0 ? milestone.images[0] : '';
            const extraCount = milestone.images ? milestone.images.length - 1 : 0;
            const badgeHtml = extraCount > 0
                ? `<div class="image-count-badge" data-index="${index}">+${extraCount}</div>`
                : '';

            // Map index to original data range to avoid index out of bounds in lightbox
            // This is handled by passing the raw index here, and modulo logic in lightbox trigger if needed.
            // But since we render duplicates, we should store the 'original index' in the data attribute.
            const originalIndex = index % milestonesData.length;

            return `
            <div class="milestone-card group ${highlightClass}">
                <div class="milestone-box glass-panel" style="${highlightStyle} position: relative; padding-top: 2rem;">
                    
                    <!-- Circular Notification Image -->
                    <div class="milestone-image-circle" style="position: absolute; top: -15px; right: -15px; width: 64px; height: 64px; border-radius: 50%; overflow: hidden; border: 3px solid #000; box-shadow: 0 4px 10px rgba(0,0,0,0.5); cursor: pointer; z-index: 20;">
                        <img src="${mainImage}" style="width: 100%; height: 100%; object-fit: cover;" class="ms-trigger-img" data-index="${originalIndex}">
                        ${badgeHtml}
                    </div>

                    <span class="${isHighlight ? 'text-white' : 'text-primary'} text-xs font-bold uppercase tracking-wider mb-2">${milestone.year}</span>
                    <!-- Title with Line Clamp for safety -->
                    <h3 class="text-xl font-bold text-white leading-tight" style="display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden;">${milestone.title}</h3>
                    <p class="text-sm text-gray mt-2" style="margin-bottom: 1.5rem; display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden;">${milestone.desc}</p>
                    <a href="${milestone.link}" class="milestone-btn">More Info →</a>
                </div>
                <div class="milestone-dot bg-primary border-4 border-black"
                    style="box-shadow: 0 0 ${isHighlight ? '20px' : '15px'} var(--primary-color); ${isHighlight ? 'width: 1.5rem; height: 1.5rem;' : ''}"></div>
            </div>
            `;
        };

        // Render Original + Duplicate Set for Seamless Loop
        // Note: passing index to createCard helper needed for lightbox data-index
        const originalSet = milestonesData.map((m, i) => createCard(m, i)).join('');
        const duplicateSet = milestonesData.map((m, i) => createCard(m, i)).join(''); // 'i' here will be 0..N-1, which is fine for the lightbox index

        track.innerHTML = originalSet + duplicateSet;

        // Re-attach Lightbox Event Listeners
        attachLightboxListeners();

        // Start Carousel
        initMilestoneCarousel(track);
    }

    function attachLightboxListeners() {
        document.querySelectorAll('.ms-trigger-img, .image-count-badge').forEach(el => {
            el.addEventListener('click', (e) => {
                e.stopPropagation();
                // Ensure we get the index from the closest wrapper or the element itself
                // In template, data-index is on the img and the badge div logic.
                // The badge renders inside the parent div, but the click might target the text inside badge.
                // Safer to get attribute from element (closest logic if strictly needed, but here simple binding works)
                const index = parseInt(el.getAttribute('data-index'));
                openLightbox(index);
            });
        });
    }

    // --- Infinite Scroll Logic (Ported from Events) ---
    function initMilestoneCarousel(trackElement) {
        trackElement.style.display = 'flex';
        trackElement.style.gap = '2rem'; // Consistent with CSS
        trackElement.style.width = 'max-content';
        trackElement.style.willChange = 'transform';
        trackElement.style.animation = 'none'; // Kill CSS animation

        let scrollAmount = 0;
        const scrollSpeed = 0.5;
        let isDragging = false;
        let isHovering = false; // New flag for hover state
        let startX = 0;
        let initialScroll = 0;
        let animationId = null;

        function getSingleSetWidth() {
            // We rendered 2 sets. Single set is half the total scroll width.
            const gap = parseFloat(window.getComputedStyle(trackElement).gap) || 0;
            return (trackElement.scrollWidth + gap) / 2;
        }

        function animate() {
            // Pause if dragging, lightbox open, OR hovering
            if (!isDragging && !isLightboxOpen && !isHovering) {
                scrollAmount -= scrollSpeed;
                const singleWidth = getSingleSetWidth();

                // Reset loop seamlessly
                if (scrollAmount <= -singleWidth) {
                    const oversight = scrollAmount + singleWidth;
                    scrollAmount = oversight;
                }

                // Safety check for positive scroll (dragging right)
                if (scrollAmount > 0) {
                    scrollAmount = -singleWidth + scrollAmount;
                }

                trackElement.style.transform = `translateX(${scrollAmount}px)`;
            }
            animationId = requestAnimationFrame(animate);
        }

        animationId = requestAnimationFrame(animate);

        // --- Drag Interactions ---
        trackElement.addEventListener('mousedown', (e) => {
            isDragging = true;
            isHovering = false; // Ensure dragging overrides hover pause if needed
            startX = e.pageX;
            initialScroll = scrollAmount;
            trackElement.style.cursor = 'grabbing';
            e.preventDefault(); // Prevent text selection
        });

        window.addEventListener('mousemove', (e) => {
            if (!isDragging) return;
            const x = e.pageX;
            const walk = (x - startX) * 1.5;
            scrollAmount = initialScroll + walk;
            trackElement.style.transform = `translateX(${scrollAmount}px)`;
        });

        window.addEventListener('mouseup', () => {
            if (isDragging) {
                isDragging = false;
                trackElement.style.cursor = 'grab';
            }
        });

        // Touch Interaction
        trackElement.addEventListener('touchstart', (e) => {
            isDragging = true;
            isHovering = false;
            startX = e.touches[0].pageX;
            initialScroll = scrollAmount;
        });

        window.addEventListener('touchmove', (e) => {
            if (!isDragging) return;
            const x = e.touches[0].pageX;
            const walk = (x - startX) * 1.5;
            scrollAmount = initialScroll + walk;
            trackElement.style.transform = `translateX(${scrollAmount}px)`;
        });

        window.addEventListener('touchend', () => { isDragging = false; });

        // --- Correct Hover Logic ---
        // Sets isHovering flag to true/false without affecting drag state logic
        trackElement.addEventListener('mouseenter', () => {
            if (!isDragging) isHovering = true;
        });

        trackElement.addEventListener('mouseleave', () => {
            isHovering = false;
        });
    }

    // --- Lightbox Logic ---
    let currentLightboxImages = [];
    let currentLightboxIndex = 0;
    let isLightboxOpen = false;

    function openLightbox(milestoneIndex) {
        if (milestonesData[milestoneIndex] && milestonesData[milestoneIndex].images) {
            currentLightboxImages = milestonesData[milestoneIndex].images;
            currentLightboxIndex = 0;
            updateLightboxImage();

            if (lightbox) {
                lightbox.classList.add('open');
                document.body.classList.add('no-scroll');
                isLightboxOpen = true;
            }
        }
    }

    function closeLightbox() {
        if (lightbox) {
            lightbox.classList.remove('open');
            document.body.classList.remove('no-scroll');
            isLightboxOpen = false;
        }
    }

    function updateLightboxImage() {
        if (lightboxImg) {
            lightboxImg.style.opacity = '0';
            setTimeout(() => {
                lightboxImg.src = currentLightboxImages[currentLightboxIndex];
                lightboxImg.onload = () => {
                    lightboxImg.style.opacity = '1';
                };
            }, 200);
        }
    }

    if (lightbox) {
        lightboxClose.addEventListener('click', closeLightbox);
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });

        lightboxNext.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentLightboxIndex < currentLightboxImages.length - 1) {
                currentLightboxIndex++;
            } else {
                currentLightboxIndex = 0;
            }
            updateLightboxImage();
        });

        lightboxPrev.addEventListener('click', (e) => {
            e.stopPropagation();
            if (currentLightboxIndex > 0) {
                currentLightboxIndex--;
            } else {
                currentLightboxIndex = currentLightboxImages.length - 1;
            }
            updateLightboxImage();
        });

        document.addEventListener('keydown', (e) => {
            if (!isLightboxOpen) return;
            if (e.key === 'Escape') closeLightbox();
            if (e.key === 'ArrowRight') lightboxNext.click();
            if (e.key === 'ArrowLeft') lightboxPrev.click();
        });
    }

    // Initialize
    renderMilestones();

    // Mobile Auto-Visible Buttons
    if (window.innerWidth <= 768) {
        function setupMilestoneObserver() {
            const cards = track.querySelectorAll('.milestone-card');

            const observerOptions = {
                root: null,
                threshold: 0.6,
                rootMargin: '-15% 0px -15% 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active-visible');
                    } else {
                        entry.target.classList.remove('active-visible');
                    }
                });
            }, observerOptions);

            cards.forEach(card => observer.observe(card));
        }

        setTimeout(setupMilestoneObserver, 500);
    }
});
