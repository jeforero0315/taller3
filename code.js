// code.js
(function() {
    const app = document.querySelector(".app");
    const socket = io();
    let uname;

    const joinUserButton = document.getElementById("join-user");
    if (joinUserButton) {
        joinUserButton.addEventListener("click", function() {
            let usernameInput = document.getElementById("username");
            let username = usernameInput ? usernameInput.value : "";

            if (username.length === 0) {
                return;
            }

            socket.emit("newuser", username);
            uname = username;
            document.querySelector(".join-screen").classList.remove("active");
            document.querySelector(".chat-screen").classList.add("active");
        });
    }

    const sendMessageButton = document.getElementById("send-message");
    if (sendMessageButton) {
        sendMessageButton.addEventListener("click", function() {
            let messageInput = document.getElementById("message-input");
            let message = messageInput ? messageInput.value : "";
            
            if (message.length === 0) {
                return;
            }

            socket.emit("chat", {
                username: uname,
                text: message
            });

            messageInput.value = "";
        });
    }

    const exitChatButton = document.getElementById("exit-chat");
    if (exitChatButton) {
        exitChatButton.addEventListener("click", function() {
            socket.emit("exituser", uname);
            document.querySelector(".join-screen").classList.add("active");
            document.querySelector(".chat-screen").classList.remove("active");
        });
    }

    socket.on("update", function(update) {
        renderMessage("update", update);
    });

    socket.on("chat", function(message) {
        renderMessage("other", message);
    });

    function renderMessage(type, message) {
        let messageContainer = document.querySelector(".chat-screen .messages");
        let el = document.createElement("div");

        if (type == "update") {
            el.innerText = message;
        } else if (type == "other") {
            el.innerHTML = `
                <div>
                    <div class="name">${message.username}</div>
                    <div class="text">${message.text}</div>
                </div>
            `;
        }

        messageContainer.appendChild(el);
        messageContainer.scrollTop = messageContainer.scrollHeight - messageContainer.clientHeight;
    }
})();
