// Initial theme setup
var theme = "light"; // Default to light theme

// Check for theme in localStorage
try {
    const localTheme = JSON.parse(localStorage.getItem("theme"));
    if (localTheme && localTheme.mode) {
    theme = localTheme.mode;
    }
} catch (e) {
    console.error("Failed to parse theme from localStorage:", e);
}

// Check theme-data script tag for a default theme, if not already set by localStorage
if (!localStorage.getItem("theme")) {
    try {
    const themeData = document.getElementById("theme-data");
    if (themeData) {
        const parsedThemeData = JSON.parse(themeData.textContent);
        if (parsedThemeData && parsedThemeData.mode && parsedThemeData.mode !== "<<DEFAULT_THEME>>") {
        theme = parsedThemeData.mode;
        }
    }
    } catch (e) {
    console.error("Failed to parse theme from theme-data script:", e);
    }
}

// Apply theme to body based on the final theme value
document.body.classList.toggle("dark", theme === "dark");

// Function to toggle theme and save preference
function toggleTheme() {
    const newTheme = document.body.classList.contains("dark") ? "light" : "dark";
    
    // Toggle the theme class on the body
    document.body.classList.toggle("dark", newTheme === "dark");
    
    // Save the selected theme to localStorage
    localStorage.setItem("theme", JSON.stringify({ mode: newTheme }));
}