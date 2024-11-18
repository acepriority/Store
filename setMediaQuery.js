(function () {
    // Define media queries for desktop and mobile
    const desktopQuery = window.matchMedia("(min-width: 1024px)");
    const mobileQuery = window.matchMedia("(max-width: 1023px)");

    // Function to update class, exact height, and custom CSS variable based on screen size
    function updateHtmlAttributes() {
    const htmlElement = document.documentElement; // <html> element

    // Clear existing classes to avoid conflicts
    htmlElement.classList.remove("desktop", "mobile");

    // Add appropriate class based on screen size
    if (desktopQuery.matches) {
        htmlElement.classList.add("desktop");
    } else if (mobileQuery.matches) {
        htmlElement.classList.add("mobile");
    }

    // Get the exact viewport height in pixels
    const viewportHeight = window.innerHeight;

    // Set the exact height and CSS variable for full viewport height
    htmlElement.style.height = `${viewportHeight}px`;
    htmlElement.style.setProperty("--full-viewport-height", `${viewportHeight}px`);
    }

    // Initial check to apply the correct class and height when the page loads
    updateHtmlAttributes();

    // Update class, height, and variable on resize to handle orientation changes
    window.addEventListener("resize", updateHtmlAttributes);
})();