// Toggle the chat window open/closed
function toggleChat() {
    const chat = document.getElementById('chat-window');
    chat.classList.toggle('hidden');
}

// Handle the user interaction
function handleChat() {
    const inputField = document.getElementById('user-input');
    const chatBody = document.getElementById('chat-body');
    const message = inputField.value.toLowerCase();

    if (message.trim() === "") return;

    // Show User Message
    chatBody.innerHTML += `<p class="user-msg">${inputField.value}</p>`;
    inputField.value = "";

    // AI Logic (Keyword Matching)
    let response = "I'm not sure about that. Try asking about 'Government subjects' or 'English antonyms'.";

    if (message.includes("hello") || message.includes("hi")) {
        response = "Hello! Ready to study today? Which subject are we tackling?";
    } else if (message.includes("government")) {
        response = "The Government section covers Nigerian Federalism and International Relations. Should I take you there?";
    } else if (message.includes("english") || message.includes("antonym")) {
        response = "I have a great list of antonyms and synonyms ready for you in the English section!";
    } else if (message.includes("who made you")) {
        response = "I was built by Mubarak to help students master their exams!";
    }

    // Show AI Response after a small "thinking" delay
    setTimeout(() => {
        chatBody.innerHTML += `<p class="bot-msg">${response}</p>`;
        chatBody.scrollTop = chatBody.scrollHeight; // Scroll to bottom
    }, 600);
}
