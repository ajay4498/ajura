async function sendMessage() {
    let message = document.getElementById("userInput").value;
    if (!message.trim()) {
        alert("Enter a message.");
        return;
    }

    let backendURL = "https://brain-0sv5.onrender.com/api/chat"; // Backend URL

    fetch(backendURL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message })
    })
    .then(response => response.json())
    .then(data => {
        let chatBox = document.getElementById("chat-box");
        let userMsg = `<div class='user-message'>${message}</div>`;
        let botMsg = `<div class='bot-message'>${data.response || "No response"}</div>`;
        chatBox.innerHTML += userMsg + botMsg;
        document.getElementById("userInput").value = "";
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("chat-box").innerHTML += "<div class='error'>Failed to connect to backend.</div>";
    });
}
