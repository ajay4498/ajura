async function sendMessage() {
    let userInput = document.getElementById("user-input").value;
    let chatBox = document.getElementById("chat-box");
    let isPrivate = document.getElementById("private-mode").checked;
    
    if (!userInput.trim()) return;

    chatBox.innerHTML += "<p><strong>You:</strong> " + userInput + (isPrivate ? " (Private)" : "") + "</p>";

    let response = await fetch("/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            message: userInput,
            signature: isPrivate ? "Ajura-Secret-Bridge-2024" : "",
            private: isPrivate
        })
    });

    let data = await response.json();
    chatBox.innerHTML += "<p><strong>Ajura AI:</strong> " + (data.response || "No response") + "</p>";
    document.getElementById("user-input").value = "";
}