let backendURL = "";  // Will be fetched dynamically

// Fetch backend URL from the backend
fetch("https://028220f1-d08d-43d7-b0bc-61c0929d115b-00-2qy4ckqmiipmb.pike.replit.dev/api/url")
  .then(response => response.json())
  .then(data => {
    backendURL = data.backend_url;
    console.log("Backend URL set to:", backendURL);
  })
  .catch(error => console.error("Failed to fetch backend URL:", error));

function sendMessage() {
    let messageInput = document.getElementById("message");
    let message = messageInput.value.trim();

    if (message === "") {
        alert("Please enter a message.");
        return;
    }

    fetch(`${backendURL}/api/data`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ message: message })
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("response").innerText = data.response;
    })
    .catch(error => {
        console.error("Error:", error);
        document.getElementById("response").innerText = "Error sending message.";
    });
}
