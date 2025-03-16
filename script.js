let backendURL = ""; // This will be updated dynamically

// Fetch the backend URL from Replit
fetch("https://your-replit-url.replit.dev/api/url")
    .then(response => response.json())
    .then(data => {
        backendURL = data.backend_url;
    })
    .catch(error => {
        console.error("Error fetching backend URL:", error);
    });

function sendMessage() {
    let userInput = document.getElementById("userInput").value;
    
    if (!userInput) {
        alert("Please enter a message!");
        return;
    }

    fetch(`${backendURL}/api/data`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: userInput })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response").innerHTML = `<p>Response: ${data.response}</p>`;
    })
    .catch(error => {
        document.getElementById("response").innerHTML = `<p style="color:red;">Error: ${error.message}</p>`;
    });
}
