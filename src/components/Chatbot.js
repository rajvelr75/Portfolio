// src/components/ChatbotSocketIO.js
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "https://portfolio-backend-h28u.onrender.com"; // update this

const Chatbot = () => {
  const [socket, setSocket] = useState(null);
  const [messages, setMessages] = useState([
    { sender: "bot", text: "Hello! How can I assist you today?" }
  ]);
  const [input, setInput] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const newSocket = io(SOCKET_SERVER_URL);
    setSocket(newSocket);

    newSocket.on("response", (data) => {
      setMessages((prev) => [...prev, { sender: "bot", text: data.text }]);
    });

    return () => newSocket.close();
  }, []);

  const sendMessage = () => {
    if (!input.trim() || !socket) return;

    setMessages((prev) => [...prev, { sender: "user", text: input }]);
    socket.emit("user_input", { input });
    setInput("");
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col items-end">
      {isOpen && (
        <div className="w-80 h-96 bg-white rounded-xl shadow-lg overflow-hidden flex flex-col animate-slide-up">
          <div className="flex-1 overflow-y-auto p-4 space-y-2">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-2 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? "bg-blue-100 self-end text-right"
                    : "bg-gray-200 self-start text-left"
                }`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          <div className="flex border-t border-gray-300">
            <input
              className="flex-1 px-3 py-2 outline-none text-sm text-black"
              placeholder="Type a message..."
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === "Enter" && sendMessage()}
            />
            <button
              className="px-4 bg-blue-500 text-white text-sm"
              onClick={sendMessage}
            >
              Send
            </button>
          </div>
        </div>
      )}

      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-14 h-14 rounded-full bg-blue-600 text-white text-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300"
        title="Chat with me"
      >
        🤖
      </button>
    </div>
  );
};

export default Chatbot;
