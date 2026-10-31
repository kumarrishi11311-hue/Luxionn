
let currentMode = "Quick";

function setMode(mode) {
  currentMode = mode;

  document.getElementById("mode").innerText =
    "Mode: " + mode;
}

function sendMessage() {
  const input = document.getElementById("message");
  const chat = document.getElementById("chat");

  const message = input.value.trim();

  if (!message) return;

  const userMessage = document.createElement("p");
  userMessage.textContent = "You: " + message;
  chat.appendChild(userMessage);

  const aiMessage = document.createElement("p");

  aiMessage.textContent =
    "LUXIONN: Prototype active. AI brain is not connected yet.";

  chat.appendChild(aiMessage);

  input.value = "";
  chat.scrollTop = chat.scrollHeight;
}
