# chat-box
# 💬 WebSocket Chat App (Client-side Bot)

A simple real-time chat application built with **WebSocket + Vanilla JavaScript**, featuring a **serial (step-by-step) computer reply system**. Each user message triggers the **next predefined bot response** in sequence.

---

## 🚀 Features

* Real-time messaging using WebSocket
* User messages shown instantly in chat UI
* Computer/Bot replies **in fixed order (serial replies)**
* Bot replies loop back to the start after the last message
* Clean, beginner-friendly JavaScript

---

## 🛠 Tech Stack
* HTML
* CSS
* JavaScript (Vanilla)
* WebSocket (ws)

---

## 📂 Project Structure

```
project-folder/
│
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## ⚙️ How It Works

* User sends a message
* Message is displayed immediately
* WebSocket sends the message to the server
* A **client-side bot** replies after 1 second
* Bot replies follow a **fixed sequence** using an index counter

---

## 🤖 Bot Reply Logic

Bot replies are stored in an array and sent one-by-one:

```js
let botIndex = 0;

const botReplies = [
  "Hello Mayank 👋",
  "I am here to help you 😊",
  "Mai bilkul mast hu, tum kaise ho?",
  "Tumhare computer se baat ho rahi hai 😂",
  "Aur batao, kya chal raha hai?",
  "System fully active 🚀"
];
```

Each message increments `botIndex`. After the last reply, it resets to `0`.

---

## ▶️ How to Run

### 1️⃣ Start WebSocket Server (Example)

Make sure a WebSocket server is running on:

```
ws://localhost:8080
```

(You can use Node.js + `ws` library)

---

### 2️⃣ Open Client

Simply open `index.html` in your browser.

---

## ✅ Example Conversation Flow

| User Message    | Computer Reply              |
| --------------- | --------------------------- |
| Hi              | Hello Mayank 👋             |
| Kaise ho        | I am here to help you 😊    |
| Kya kar rahe ho | Mai bilkul mast hu...       |
| 😂              | Tumhare computer se baat... |
| Next            | Aur batao...                |
| Next            | System fully active 🚀      |

---

## 🧠 Notes

* Bot replies are **not random**
* Replies do **not depend on user text**
* Ideal for learning chat flow logic and state handling

---

## 🔮 Future Improvements

* Typing indicator ("Computer is typing...")
* Message-based smart replies
* Multi-user support
* Server-side bot logic

---

## 👤 Author

**Mayank**
Frontend Developer | Learning WebSockets & JavaScript

---

✨ Happy Coding!
