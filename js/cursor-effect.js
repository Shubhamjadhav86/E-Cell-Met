// Minimal 3-Line Crosshair Cursor with Expanding Circle Click Effect
class CursorFollower {
    constructor() {
        this.mouse = { x: 0, y: 0 };
        this.isHoveringTeamMember = false;
        this.isMobile = this.detectMobile();

        // Only initialize on desktop
        if (!this.isMobile) {
            this.init();
        }
    }

    detectMobile() {
        // Check for touch support and mobile devices
        return (
            'ontouchstart' in window ||
            navigator.maxTouchPoints > 0 ||
            /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
        );
    }

    init() {
        // Create custom cursor container
        this.cursor = document.createElement('div');
        this.cursor.className = 'custom-cursor';

        // Create center dot (third line as a dot)
        this.cursorDot = document.createElement('div');
        this.cursorDot.className = 'custom-cursor-dot';
        this.cursor.appendChild(this.cursorDot);

        document.body.appendChild(this.cursor);

        // Track mouse movement
        document.addEventListener('mousemove', (e) => {
            this.mouse.x = e.clientX;
            this.mouse.y = e.clientY;

            // Update cursor position
            this.cursor.style.left = e.clientX + 'px';
            this.cursor.style.top = e.clientY + 'px';
        });

        // Detect hovering on team members
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('.team-member')) {
                this.isHoveringTeamMember = true;
                document.body.classList.add('show-custom-cursor');
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('.team-member')) {
                this.isHoveringTeamMember = false;
                document.body.classList.remove('show-custom-cursor');
            }
        });

        // Click interaction - expanding circle
        document.addEventListener('click', (e) => {
            // Only show effect when hovering team members
            if (this.isHoveringTeamMember) {
                this.createExpandingCircle(e.clientX, e.clientY);
            }
        });
    }

    createExpandingCircle(x, y) {
        const ripple = document.createElement('div');
        ripple.className = 'click-ripple';

        // Position at cursor center
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.transform = 'translate(-50%, -50%)';

        document.body.appendChild(ripple);

        // Remove after animation completes
        setTimeout(() => {
            ripple.remove();
        }, 1000);
    }
}

// Initialize on page load
document.addEventListener('DOMContentLoaded', () => {
    new CursorFollower();
});
