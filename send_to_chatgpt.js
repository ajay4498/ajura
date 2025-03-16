async function sendToChatGPT(message) {
    let backendURL = "https://brain-0sv5.onrender.com/api/chat"; // Backend URL

    if (!message.trim()) {
        alert("Enter a valid message.");
        return;
    }

    fetch(backendURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: "ajura4498 " + message }) // Prefixing with 'ajura4498' triggers ChatGPT response
    })
    .then(response => response.json())
    .then(data => {
        console.log("ChatGPT Response:", data.response);
    })
    .catch(error => {
        console.error("Error:", error);
    });
}

// Example Usage
sendToChatGPT("Hello, how are you?");
