from flask import Flask, request, jsonify

app = Flask(__name__)

# Secret Key for AI Bridge
SECRET_KEY = "Ajura-Secret-Bridge-2024"

@app.route('/chat', methods=['POST'])
def chat():
    data = request.json
    user_message = data.get("message", "").strip()
    user_signature = data.get("signature", "").strip()
    is_private = data.get("private", False)

    if is_private and user_signature != SECRET_KEY:
        return jsonify({"error": "Unauthorized private request"}), 403

    # AI Response Placeholder (Future AI Model Integration)
    response_message = f"Ajura received: {user_message}. AI updating..."

    return jsonify({"response": response_message})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
