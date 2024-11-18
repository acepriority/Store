async function loadTemplate(templateUrl) {
    const appContainer = document.querySelector('.App-Container');
    appContainer.innerHTML = `<div class="loading">Loading...</div>`;
    try {
        const response = await fetch(templateUrl);
        if (!response.ok) {
            throw new Error(`Error: ${response.status}`);
        }
        const content = await response.text();
        appContainer.innerHTML = content;
    } catch (error) {
        appContainer.innerHTML = `
            <div class="template">
                <h2>Error</h2>
                <p>Unable to load the requested content. Please try again later.</p>
            </div>`;
        console.error('Error loading template:', error);
    }
}

document.querySelectorAll('.Switch-Link').forEach(link => {
    link.addEventListener('click', event => {
        event.preventDefault();

        document.querySelectorAll('.Switch-Link').forEach(l => {
            l.classList.remove('active');
        });

        link.classList.add('active');

        const templateUrl = link.closest('.SideBar-Switcher').getAttribute('data-template');
        loadTemplate(templateUrl);
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const defaultSwitcher = document.querySelector('.SideBar-Switcher[data-template="home.html"]');
    if (defaultSwitcher) {
        const defaultLink = defaultSwitcher.querySelector('.Switch-Link');
        if (defaultLink) {
            defaultLink.classList.add('active');
        }

        const defaultTemplateUrl = defaultSwitcher.getAttribute('data-template');
        loadTemplate(defaultTemplateUrl);
    }
});
