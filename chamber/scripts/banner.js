function isBannerVisible() {
    const today = new Date();
    const dayOfWeek = today.getDay(); // Sunday (0) to Saturday (6)
    return dayOfWeek >= 1 && dayOfWeek <= 3; // Monday (1), Tuesday (2), Wednesday (3)
}

// Display or hide the banner based on the day of the week
function toggleBanner() {
    const banner = document.getElementById('banner');
    if (isBannerVisible()) {
        banner.style.display = 'block';
    } else {
        banner.style.display = 'none';
    }
}

// Close the banner when the "Close" button is clicked
document.getElementById('closeBanner').addEventListener('click', function() {
    document.getElementById('banner').style.display = 'none';
});

// Check and toggle banner visibility on page load
window.addEventListener('load', toggleBanner);