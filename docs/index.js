// 1. Register the Service Worker
if ('serviceWorker' in navigator) {
    window.addEventListener('load', () => {
        navigator.serviceWorker.register('/sw.js')
            .then(reg => console.log('Service Worker Registered!'))
            .catch(err => console.error('Service Worker registration failed:', err));
    });
}

// 2. Update HTML UI based on network status
const statusDiv = document.getElementById('status');

function updateNetworkStatus() {
    if (navigator.onLine) {
        statusDiv.textContent = "🟢 You are Online. Images will cache on load.";
        statusDiv.className = "online";
    } else {
        statusDiv.textContent = "🔴 You are Offline. Serving images from Cache Storage.";
        statusDiv.className = "offline";
    }
}

// Listen for network changes
window.addEventListener('online', updateNetworkStatus);
window.addEventListener('offline', updateNetworkStatus);

// Initial check on page load
updateNetworkStatus();
