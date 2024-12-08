document.addEventListener('DOMContentLoaded', function() {
    const progress = document.getElementById('progress');
    const steps = document.querySelectorAll('.step');
    
    // Calculate progress based on active/completed steps
    function updateProgress() {
        const activeSteps = document.querySelectorAll('.step.active, .step.completed').length;
        const totalSteps = steps.length;
        const progressWidth = ((activeSteps - 1) / (totalSteps - 1)) * 100;
        progress.style.width = `${progressWidth}%`;
    }
    
    // Call on page load
    updateProgress();
});