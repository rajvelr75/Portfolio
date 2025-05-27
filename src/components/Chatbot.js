// src/components/ChatbotSocketIO.js
import React, { useEffect, useState } from "react";
import { io } from "socket.io-client";

const SOCKET_SERVER_URL = "https://portfolio-backend-h28u.onrender.com";

const Chatbot = ({ theme }) => {
  const isLightTheme = theme === 'light';
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
        <div className={`w-80 h-96 rounded-xl shadow-lg overflow-hidden flex flex-col animate-slide-up ${
          isLightTheme 
            ? 'bg-white border border-gray-200 shadow-md' 
            : 'bg-gray-900 border border-gray-800 shadow-xl'
        }`}>
          {/* Header */}
          <div className={`p-3 border-b ${
            isLightTheme 
              ? 'bg-blue-600 text-white border-blue-700' 
              : 'bg-gray-800 text-gray-100 border-gray-700'
          }`}>
            <h3 className="font-semibold text-center">Chat Assistant</h3>
          </div>
          
          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {messages.map((msg, i) => (
              <div
                key={i}
                className={`p-3 rounded-lg max-w-[80%] ${
                  msg.sender === "user"
                    ? isLightTheme
                      ? "bg-blue-500 text-white rounded-br-none"
                      : "bg-blue-600 text-white rounded-br-none"
                    : isLightTheme
                      ? "bg-gray-100 text-gray-800 rounded-bl-none border border-gray-200"
                      : "bg-gray-800 text-gray-100 rounded-bl-none border border-gray-700"
                } ${msg.sender === "user" ? "ml-auto" : "mr-auto"}`}
              >
                {msg.text}
              </div>
            ))}
          </div>
          
          {/* Input Area */}
          <div className={`p-3 ${
            isLightTheme 
              ? 'bg-gray-50 border-t border-gray-200' 
              : 'bg-gray-800 border-t border-gray-700'
          }`}>
            <div className={`flex rounded-lg overflow-hidden ${
              isLightTheme ? 'border border-gray-300' : 'border border-gray-600'
            }`}>
              <input
                className={`flex-1 px-3 py-2 outline-none text-sm ${
                  isLightTheme 
                    ? 'bg-white text-gray-800 placeholder-gray-500' 
                    : 'bg-gray-900 text-gray-200 placeholder-gray-400'
                }`}
                placeholder="Type a message..."
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === "Enter" && sendMessage()}
              />
              <button
                className={`px-4 text-sm font-medium ${
                  isLightTheme 
                    ? 'bg-blue-600 text-white hover:bg-blue-700' 
                    : 'bg-blue-700 text-white hover:bg-blue-600'
                }`}
                onClick={sendMessage}
              >
                Send
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Toggle Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full text-2xl flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 ${
          isLightTheme 
            ? 'bg-blue-600 text-white hover:bg-blue-700 shadow-blue-200' 
            : 'bg-blue-700 text-white hover:bg-blue-600 shadow-gray-800'
        }`}
        title="Chat with me"
      >
         🤖 
      </button>
    </div>
  );
};

export default Chatbot;