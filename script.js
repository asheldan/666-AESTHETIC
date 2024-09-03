document.addEventListener('DOMContentLoaded', function() {
    const mascot = document.querySelector('.mascot');
    mascot.addEventListener('mouseover', function() {
        mascot.style.transform = 'scale(1.1)';
    });

    mascot.addEventListener('mouseout', function() {
        mascot.style.transform = 'scale(1)';
    });
});
