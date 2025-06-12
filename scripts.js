let backToTopButton = document.getElementById('back-to-top-btn');

window.onscroll = function() { toggleBackToTopVisibility() };

function toggleBackToTopVisibility() {
    if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
        backToTopButton.style.display = "block";
    } else {
        backToTopButton.style.display = "none";
    }
}

function backToTop() {
    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Remove hash from URL without reloading
    if (window.location.hash) {
        history.replaceState(null, '', window.location.pathname + window.location.search);
    }
}

// Creates a 'link preview' bar at bottom of screen, for project gallery items
document.querySelectorAll('.project-item[onclick]').forEach(function(item) {
    const url = item.getAttribute('onclick').match(/window\.open\('([^']+)'/)[1];
    item.addEventListener('mouseenter', function() {
        const bar = document.getElementById('link-preview-bar');
        bar.textContent = url;
        bar.style.display = 'block';
    });
    item.addEventListener('mouseleave', function() {
        document.getElementById('link-preview-bar').style.display = 'none';
    });
});