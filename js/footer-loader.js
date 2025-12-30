/**
 * Global Footer Loader
 * Dynamically loads the shared footer component into milestone pages
 */

(function () {
    // Create footer placeholder if it doesn't exist
    const footerPlaceholder = document.getElementById('footer-placeholder');

    if (!footerPlaceholder) {
        console.error('Footer placeholder not found. Add \u003cdiv id="footer-placeholder"\u003e\u003c/div\u003e before closing \u003c/body\u003e tag.');
        return;
    }

    // Fetch and inject footer
    fetch('../includes/footer.html')
        .then(response => {
            if (!response.ok) {
                throw new Error(`Footer load failed: ${response.status}`);
            }
            return response.text();
        })
        .then(html => {
            footerPlaceholder.innerHTML = html;
            console.log('✓ Footer loaded successfully');
        })
        .catch(error => {
            console.error('Footer loading error:', error);
            // Fallback: show basic footer message
            footerPlaceholder.innerHTML = '\u003cfooter class="ecell-footer"\u003e\u003cp style="text-align:center; padding: 2rem;"\u003e© 2025 E-Cell MET. All rights reserved.\u003c/p\u003e\u003c/footer\u003e';
        });
})();
