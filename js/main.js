function loadScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.async = true;
        script.onload = resolve;
        script.onerror = reject;
        document.head.appendChild(script);
    });
}

async function loadAllScripts() {
    try {
        await Promise.all([
            loadScript('js/dataHandler.js'),
            loadScript('js/pagination.js'),
            loadScript('js/sidebar.js'),
            loadScript('js/accordion.js')
        ]);
        console.log('All scripts loaded successfully.');
    } catch (error) {
        console.error('Error loading scripts:', error);
    }
}

loadAllScripts();