async function sendMessage() {
    let message = document.getElementById("userInput").value;
    if (!message.trim()) {
        alert("Enter a message.");
        return;
    }

    let backendURL = "https://brain-0sv5.onrender.com/api/chat"; // Ensure this is correct

    fetch(backendURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response").innerText = data.response || "No response";
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("response").innerText = "Failed to connect to backend.";
    });
}
