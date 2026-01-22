const socket = new WebSocket('ws://localhost:8080');
const username = "Mayank";

let botIndex = 0; // ✅ REQUIRED

socket.onmessage = function (event) {
    const chatBox = document.getElementById('chat-box');
    const data = JSON.parse(event.data);

    if (data.username === username) return;

    const message = document.createElement('div');
    message.classList.add('message', 'received');
    message.innerHTML = `<strong>${data.username}:</strong> ${data.message}`;
    chatBox.appendChild(message);
    chatBox.scrollTop = chatBox.scrollHeight;
};

function sendMessage() {
    const messageInput = document.getElementById('message');
    const text = messageInput.value.trim();

    if (text !== '') {
        const chatBox = document.getElementById('chat-box');

        // User message
        const messageDiv = document.createElement('div');
        messageDiv.classList.add('message', 'sent');
        messageDiv.innerHTML = `<strong>${username}:</strong> ${text}`;
        chatBox.appendChild(messageDiv);

        socket.send(JSON.stringify({ username, message: text }));
        messageInput.value = '';
        chatBox.scrollTop = chatBox.scrollHeight;

        // 🤖 Serial Computer Reply
        setTimeout(() => {
            const botReplies = [
                "Hello Mayank 👋",
                "I am here to help you 😊",
                "Mai bilkul mast hu, tum kaise ho?",
                "Tumhare computer se baat ho rahi hai 😂",
                "Aur batao, kya chal raha hai?",
                "System fully active 🚀"
            ];

            const botMessage = document.createElement('div');
            botMessage.classList.add('message', 'received');
            botMessage.innerHTML = `<strong>Computer:</strong> ${botReplies[botIndex]}`;
            chatBox.appendChild(botMessage);
            chatBox.scrollTop = chatBox.scrollHeight;

            botIndex++;
            if (botIndex >= botReplies.length) {
                botIndex = 0;
            }
        }, 1000);
    }
}
