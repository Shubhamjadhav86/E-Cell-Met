// Form submission handler for Startup Registration
document.addEventListener('DOMContentLoaded', function () {
    console.log('FormHandler.js loaded');

    const form = document.getElementById('startupForm');
    const submitBtn = document.getElementById('registerBtn');
    const lottieOverlay = document.getElementById('lottieSuccessOverlay');
    const lottieContainer = document.getElementById('lottieAnimation');

    console.log('Form:', form);
    console.log('Submit Button:', submitBtn);
    console.log('Lottie Overlay:', lottieOverlay);

    if (!form) {
        console.error('Startup form not found');
        return;
    }

    if (!submitBtn) {
        console.error('Submit button not found');
        return;
    }

    let lottieAnimation = null;

    // Handle button click
    submitBtn.addEventListener('click', async function (e) {
        e.preventDefault();
        console.log('Submit button clicked');

        // Get form values
        const startupName = document.getElementById('startupName').value.trim();
        const founderName = document.getElementById('founderName').value.trim();
        const email = document.getElementById('email').value.trim();
        const phone = document.getElementById('phone').value.trim();
        const stage = document.getElementById('startupStage').value;
        const domain = document.getElementById('domain').value;
        const website = document.getElementById('websiteUrl').value.trim();
        const description = document.getElementById('description').value.trim();
        const imagesInput = document.getElementById('startupImages');

        console.log('Form data:', { startupName, founderName, email, phone, stage, domain, website, description });

        // Client-side validation
        if (!startupName || !founderName || !email || !phone || !stage || !domain || !description) {
            console.log('Validation failed: missing required fields');
            alert('Please fill in all required fields');
            return;
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            console.log('Validation failed: invalid email');
            alert('Please enter a valid email address');
            return;
        }

        // Validate image count (max 10)
        if (imagesInput.files.length > 10) {
            alert('Maximum 10 images allowed');
            return;
        }

        // Prepare FormData (for multipart/form-data)
        const formData = new FormData();
        formData.append('startupName', startupName);
        formData.append('founderName', founderName);
        formData.append('email', email);
        formData.append('phone', phone);
        formData.append('stage', stage);
        formData.append('domain', domain);
        formData.append('website', website);
        formData.append('description', description);

        // Append images
        for (let i = 0; i < imagesInput.files.length; i++) {
            formData.append('images', imagesInput.files[i]);
        }

        console.log('Sending data to server with', imagesInput.files.length, 'images');

        // Disable button during submission
        submitBtn.disabled = true;
        submitBtn.textContent = 'Submitting...';

        try {
            // Send POST request to backend
            console.log('Making POST request to /api/startups');
            const response = await fetch('http://localhost:5000/api/startups', {
                method: 'POST',
                body: formData // No Content-Type header - browser sets it automatically with boundary
            });

            console.log('Response status:', response.status);
            const result = await response.json();
            console.log('Response data:', result);

            if (response.ok && result.success) {
                console.log('Submission successful - showing Lottie animation');

                // Show Lottie success animation
                showLottieSuccess();

                // Reset form
                form.reset();
            } else {
                console.log('Submission failed:', result.message);
                alert(result.message || 'Failed to submit. Please try again.');
            }

        } catch (error) {
            console.error('Error submitting form:', error);
            alert('Network error. Please check if the server is running.');
        } finally {
            // Re-enable button
            submitBtn.disabled = false;
            submitBtn.textContent = 'Register Startup';
        }
    });

    // Show Lottie success animation
    function showLottieSuccess() {
        if (!lottieOverlay || !lottieContainer) {
            console.error('Lottie elements not found');
            return;
        }

        console.log('Playing Lottie success animation');

        // Load and play Lottie animation
        lottieAnimation = lottie.loadAnimation({
            container: lottieContainer,
            renderer: 'svg',
            loop: false,
            autoplay: true,
            path: 'assets/Tick succesull.json'
        });

        // Show overlay with fade-in
        lottieOverlay.classList.add('show');

        // Hide after 1.5 seconds
        setTimeout(() => {
            hideLottieSuccess();
        }, 1500);
    }

    // Hide Lottie success animation
    function hideLottieSuccess() {
        console.log('Hiding Lottie animation');

        // Fade out
        lottieOverlay.classList.remove('show');

        // Destroy animation and clean up after fade out completes
        setTimeout(() => {
            if (lottieAnimation) {
                lottieAnimation.destroy();
                lottieAnimation = null;
            }
        }, 300);
    }
});
