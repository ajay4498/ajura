document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("sendButton").addEventListener("click", async function () {
        let message = document.getElementById("messageInput").value;
        
        if (!message.trim()) return; // Prevent sending empty messages
        
        // Show the message on the screen
        let chatBox = document.getElementById("chatBox");
        chatBox.innerHTML += `<p><strong>You:</strong> ${message}</p>`;

        // Send message directly to the backend API
        try {
            let response = await fetch("https://brain-0sv5.onrender.com/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({ query: message })
            });

            let data = await response.json();
            
            // Display AI response
            chatBox.innerHTML += `<p><strong>Ajura:</strong> ${data.response}</p>`;
        } catch (error) {
            chatBox.innerHTML += `<p><strong>Error:</strong> Backend not responding.</p>`;
        }
    });
});
