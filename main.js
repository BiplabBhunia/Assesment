document.addEventListener('DOMContentLoaded', function() {
    // Set current date
    const currentDateElement = document.getElementById('currentDate');
    if (currentDateElement) {
        const today = new Date();
        currentDateElement.textContent = today.toLocaleDateString();
    }

    // Handle form submission
    const signForm = document.querySelector('form');
    if (signForm) {
        signForm.addEventListener('submit', function(e) {
            const submitButton = this.querySelector('button[type="submit"]');
            submitButton.disabled = true;
            submitButton.textContent = 'Processing...';
        });
    }
});