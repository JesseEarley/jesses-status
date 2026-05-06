document.addEventListener('DOMContentLoaded', (event) => {
        const url = 'https://raw.githubusercontent.com/jesseearley/jesses-status/main/status.json';

        async function getStatus() {
            try {
                const response = await fetch(url);
                const data = await response.json();
                document.getElementById('Status').textContent = data.message;
                document.getElementById('Updated').textContent = `Last updated: ${data.updated}`;
            } catch (error) {
                document.getElementById('status').textContent = "Couldn't load status.";
            }
        }

        getStatus();
});
