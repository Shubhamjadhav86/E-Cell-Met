// Safe localStorage helper - More stable than sessionStorage for cross-browser compatibility
const safeStorage = {
    get: (key) => {
        try {
            return localStorage.getItem(key);
        } catch (e) {
            console.warn('⚠️ localStorage blocked (privacy mode?):', e.message);
            return null;
        }
    },
    set: (key, value) => {
        try {
            localStorage.setItem(key, value);
            return true;
        } catch (e) {
            console.warn('⚠️ localStorage blocked (privacy mode?):', e.message);
            return false;
        }
    }
};

class PreloaderAnimation {
    constructor() {
        this.audioContext = null;
        this.mainTextEl = document.getElementById('main-text');
        this.subTextEl = document.getElementById('sub-text');
        this.preloaderEl = document.getElementById('preloader');
        this.tapPrompt = document.getElementById('tap-prompt');

        this.mainText = 'E-Cell MET';
        this.subText = 'Presents';
        this.redAccentIndices = [];
        this.clickHandled = false; // Prevent double-trigger from dual listeners

        // Only initialize if all required elements exist
        if (this.tapPrompt && this.preloaderEl && this.mainTextEl && this.subTextEl) {
            this.init();
        }
    }

    init() {
        console.log('🎯 Preloader initialized - waiting for user click');

        // Handler function for click events
        const handleClick = () => {
            // Prevent double-trigger from both listeners
            if (this.clickHandled) {
                return;
            }
            this.clickHandled = true;

            // Double-check that tap prompt still exists (defensive programming)
            if (!this.tapPrompt || !this.preloaderEl) {
                console.warn('⚠️ Preloader elements missing, skipping animation');
                return;
            }

            console.log('👆 User clicked - starting animation');
            this.initAudioContext();
            this.tapPrompt.classList.add('hidden');

            setTimeout(() => {
                if (this.tapPrompt && this.tapPrompt.parentNode) {
                    this.tapPrompt.remove();
                }
                this.startAnimation();
            }, 300);
        };

        // Attach to BOTH document and window for Brave compatibility
        // Brave's privacy shields may block one but not the other
        document.addEventListener('click', handleClick, { once: true });
        window.addEventListener('click', handleClick, { once: true });
    }

    initAudioContext() {
        try {
            this.audioContext = new (window.AudioContext || window.webkitAudioContext)();
            this.audioContext.resume();
            console.log('✅ Audio Context initialized:', this.audioContext.state);
        } catch (e) {
            console.warn('❌ Web Audio API not supported:', e);
        }
    }

    playKeyClick() {
        if (!this.audioContext) {
            return;
        }

        try {
            const now = this.audioContext.currentTime;

            const clickOsc = this.audioContext.createOscillator();
            clickOsc.type = 'sine';
            clickOsc.frequency.setValueAtTime(800 + Math.random() * 300, now);
            clickOsc.frequency.exponentialRampToValueAtTime(200, now + 0.02);

            const bufferSize = this.audioContext.sampleRate * 0.04;
            const buffer = this.audioContext.createBuffer(1, bufferSize, this.audioContext.sampleRate);
            const data = buffer.getChannelData(0);

            for (let i = 0; i < bufferSize; i++) {
                data[i] = (Math.random() * 2 - 1) * Math.exp(-i / (bufferSize * 0.08));
            }

            const noiseSource = this.audioContext.createBufferSource();
            noiseSource.buffer = buffer;

            const clickGain = this.audioContext.createGain();
            const noiseGain = this.audioContext.createGain();
            const masterGain = this.audioContext.createGain();

            const filter = this.audioContext.createBiquadFilter();
            filter.type = 'highpass';
            filter.frequency.setValueAtTime(300, now);
            filter.Q.setValueAtTime(1, now);

            clickOsc.connect(clickGain);
            noiseSource.connect(noiseGain);

            clickGain.connect(filter);
            noiseGain.connect(filter);
            filter.connect(masterGain);
            masterGain.connect(this.audioContext.destination);

            clickGain.gain.setValueAtTime(0.3, now);
            clickGain.gain.exponentialRampToValueAtTime(0.001, now + 0.04);

            noiseGain.gain.setValueAtTime(0.25, now);
            noiseGain.gain.exponentialRampToValueAtTime(0.001, now + 0.03);

            masterGain.gain.setValueAtTime(0.6, now);

            clickOsc.start(now);
            clickOsc.stop(now + 0.04);

            noiseSource.start(now);
            noiseSource.stop(now + 0.03);
        } catch (e) {
            console.warn('Sound play error:', e);
        }
    }

    async typeText(text, element, accentIndices = []) {
        return new Promise((resolve) => {
            let index = 0;
            const cursor = document.createElement('span');
            cursor.className = 'typing-cursor';
            element.appendChild(cursor);

            const typeChar = () => {
                if (index < text.length) {
                    const char = text[index];
                    const span = document.createElement('span');
                    span.className = 'typing-char';

                    if (accentIndices.includes(index)) {
                        span.classList.add('red-accent');
                    }

                    // Handle space characters with custom width for visibility
                    if (char === ' ') {
                        span.style.display = 'inline-block';
                        span.style.width = '1.5rem';
                        span.style.minWidth = '1.5rem';
                        span.innerHTML = '&nbsp;&nbsp;';
                    } else {
                        span.textContent = char;
                    }

                    element.insertBefore(span, cursor);

                    this.playKeyClick();

                    index++;
                    const delay = char === ' ' ? 100 : 80 + Math.random() * 120;
                    setTimeout(typeChar, delay);
                } else {
                    cursor.remove();
                    resolve();
                }
            };

            typeChar();
        });
    }

    async startAnimation() {
        await new Promise(resolve => setTimeout(resolve, 500));

        await this.typeText(this.mainText, this.mainTextEl, this.redAccentIndices);

        await new Promise(resolve => setTimeout(resolve, 600));

        await this.typeText(this.subText, this.subTextEl);

        await new Promise(resolve => setTimeout(resolve, 800));

        this.exitPreloader();
    }

    exitPreloader() {
        this.preloaderEl.classList.add('slide-up');

        setTimeout(() => {
            this.preloaderEl.remove();
            document.body.style.overflow = 'auto';

            // Mark preloader as completed using localStorage
            const stored = safeStorage.set('preloaderDone', 'true');

            if (stored) {
                console.log('✅ Preloader completed - localStorage flag set');
            } else {
                console.log('⚠️ Preloader completed - localStorage blocked (privacy mode)');
            }
        }, 800);
    }
}

// ============================================
// DEV/TESTING HELPERS (Hidden from users)
// ============================================

// Option 1: URL parameter reset (?resetPreloader)
if (location.search.includes('resetPreloader')) {
    try {
        localStorage.removeItem('preloaderDone');
        console.log('🔄 Preloader reset via URL parameter');
    } catch (e) {
        console.warn('⚠️ Could not reset preloader:', e.message);
    }
}

// Option 2: Logo double-click reset (hidden feature for dev/testing)
document.addEventListener('DOMContentLoaded', () => {
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('dblclick', () => {
            try {
                localStorage.removeItem('preloaderDone');
                console.log('🔄 Preloader reset via logo double-click');
                location.reload();
            } catch (e) {
                console.warn('⚠️ Could not reset preloader:', e.message);
            }
        });
    }
});

// ============================================
// MAIN PRELOADER LOGIC
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    // STRICT: Only run on homepage - prevent execution on internal pages
    const isHomepage = location.pathname === '/' ||
        location.pathname === '/index.html' ||
        location.pathname.endsWith('/index.html') ||
        location.pathname.endsWith('/');

    if (!isHomepage) {
        console.log('⏭️ Not on homepage - preloader disabled');
        return; // Exit immediately if not on homepage
    }

    // Check localStorage for preloader completion flag
    const hasSeenPreloader = safeStorage.get('preloaderDone');
    console.log('🔍 Storage check:', hasSeenPreloader ? 'Already completed' : 'First visit');

    if (hasSeenPreloader === 'true') {
        // Preloader already shown - skip it
        console.log('⏭️ Skipping preloader - already completed');
        const preloader = document.getElementById('preloader');
        const tapPrompt = document.getElementById('tap-prompt');

        if (preloader) preloader.remove();
        if (tapPrompt) tapPrompt.remove();
        document.body.style.overflow = 'auto';
    } else {
        // First visit - show preloader
        console.log('🎬 Showing preloader - first visit');
        new PreloaderAnimation();
    }
});
