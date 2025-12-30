// Fetch and display startups on the listing page
document.addEventListener('DOMContentLoaded', async function () {
    console.log('StartupsPage.js loaded');

    const container = document.getElementById('startupsContainer');
    const loadingMessage = document.getElementById('loadingMessage');

    console.log('Container:', container);
    console.log('Loading Message:', loadingMessage);

    if (!container) {
        console.error('Startups container not found');
        return;
    }

    try {
        // Show loading state
        if (loadingMessage) {
            loadingMessage.style.display = 'block';
        }

        // Fetch startups from API
        console.log('Fetching startups from API...');
        const response = await fetch('http://localhost:5000/api/startups');
        console.log('Response status:', response.status);

        const result = await response.json();
        console.log('Response data:', result);

        // Hide loading message
        if (loadingMessage) {
            loadingMessage.style.display = 'none';
        }

        if (response.ok && result.success) {
            const startups = result.data;
            console.log('Number of startups:', startups.length);

            if (startups.length === 0) {
                console.log('No startups found, showing empty state');
                container.innerHTML = `
                    <div class="empty-state">
                        <p>No startups registered yet. Be the first to register!</p>
                        <a href="/#startup-registration" class="btn-primary">Register Your Startup</a>
                    </div>
                `;
                return;
            }

            // Create cards for each startup
            console.log('Creating startup cards...');
            container.innerHTML = startups.map(startup => createStartupCard(startup)).join('');
            console.log('Cards created successfully');

        } else {
            console.error('Failed to load startups:', result);
            container.innerHTML = `
                <div class="error-state">
                    <p>Failed to load startups. Please try again later.</p>
                </div>
            `;
        }

    } catch (error) {
        console.error('Error fetching startups:', error);
        if (loadingMessage) {
            loadingMessage.style.display = 'none';
        }
        container.innerHTML = `
            <div class="error-state">
                <p>Network error. Please check if the server is running.</p>
                <p class="error-detail">Make sure to start the server with: <code>npm start</code></p>
            </div>
        `;
    }
});

// Create HTML for a startup card
function createStartupCard(startup) {
    // Format stage for display
    const stageDisplay = {
        'idea': 'Idea',
        'mvp': 'MVP',
        'early-revenue': 'Early Revenue',
        'scaling': 'Scaling'
    };

    // Format date
    const date = new Date(startup.createdAt);
    const formattedDate = date.toLocaleDateString('en-US', {
        year: 'numeric',
        month: 'short',
        day: 'numeric'
    });

    // Truncate description for preview (120 characters)
    const maxLength = 120;
    const description = startup.description || '';
    const truncatedDesc = description.length > maxLength
        ? description.substring(0, maxLength) + '...'
        : description;
    const needsTruncation = description.length > maxLength;

    const cardId = `card-${startup._id || Math.random().toString(36).substr(2, 9)}`;

    // Get first image or use placeholder
    const firstImage = startup.images && startup.images.length > 0
        ? `http://localhost:5000${startup.images[0]}`
        : 'https://via.placeholder.com/400x250?text=No+Image';

    const hasImages = startup.images && startup.images.length > 0;
    const imageCount = startup.images ? startup.images.length : 0;

    return `
        <div class="startup-card" id="${cardId}">
            ${hasImages ? `
                <div class="startup-image-container" onclick='openStartupGallery(${JSON.stringify(startup.images)})'>
                    <img src="${firstImage}" alt="${escapeHtml(startup.startupName)}" class="startup-image">
                    ${imageCount > 1 ? `<div class="image-count-badge">${imageCount} images</div>` : ''}
                    <div class="image-overlay">
                        <svg width="32" height="32" fill="none" stroke="white" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        </svg>
                    </div>
                </div>
            ` : ''}
            <div class="startup-card-header">
                <h3 class="startup-name">${escapeHtml(startup.startupName)}</h3>
                <span class="startup-stage-badge">${stageDisplay[startup.stage] || startup.stage}</span>
            </div>
            <div class="startup-card-body">
                <div class="startup-meta">
                    <span class="startup-domain">
                        <svg width="16" height="16" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                                d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                        ${escapeHtml(startup.domain)}
                    </span>
                    <span class="startup-date">${formattedDate}</span>
                </div>
                <div>
                    <p class="startup-description startup-description-preview" id="${cardId}-preview">
                        ${escapeHtml(truncatedDesc)}
                    </p>
                    ${needsTruncation ? `
                        <p class="startup-description startup-description-full" id="${cardId}-full">
                            ${escapeHtml(description)}
                        </p>
                        <button class="know-more-btn" onclick="toggleDescription('${cardId}')">
                            <span class="know-more-text">Know More</span>
                            <svg fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    ` : ''}
                </div>
                ${startup.website ? `
                    <a href="${escapeHtml(startup.website)}" target="_blank" rel="noopener noreferrer" class="startup-link">
                        Visit Website →
                    </a>
                ` : ''}
            </div>
            <div class="startup-card-footer">
                <span class="startup-founder">
                    <svg width="14" height="14" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                            d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                    </svg>
                    ${escapeHtml(startup.founderName)}
                </span>
            </div>
        </div>
    `;
}

// Open gallery for startup images
function openStartupGallery(imagePaths) {
    if (!imagePaths || imagePaths.length === 0) return;

    // Convert relative paths to full URLs
    const fullImagePaths = imagePaths.map(path => `http://localhost:5000${path}`);

    // Call gallery function (from gallery.js)
    if (typeof openGallery === 'function') {
        openGallery(fullImagePaths);
    }
}

// Toggle description visibility
function toggleDescription(cardId) {
    const preview = document.getElementById(`${cardId}-preview`);
    const full = document.getElementById(`${cardId}-full`);
    const btn = event.target.closest('.know-more-btn');
    const btnText = btn.querySelector('.know-more-text');

    if (full.classList.contains('show')) {
        // Collapse
        full.classList.remove('show');
        preview.style.display = 'block';
        btnText.textContent = 'Know More';
        btn.classList.remove('expanded');
    } else {
        // Expand
        full.classList.add('show');
        preview.style.display = 'none';
        btnText.textContent = 'Show Less';
        btn.classList.add('expanded');
    }
}

// Escape HTML to prevent XSS
function escapeHtml(text) {
    const div = document.createElement('div');
    div.textContent = text;
    return div.innerHTML;
}

// Make function available globally
window.openStartupGallery = openStartupGallery;
