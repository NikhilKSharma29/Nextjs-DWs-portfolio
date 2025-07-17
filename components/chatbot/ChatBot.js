// /components/chat/ChatUI.jsx
import React, { useEffect, useRef, useState } from "react";

const ChatBot = () => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [chatStarted, setChatStarted] = useState(false);

  const bottomRef = useRef(null);

  const handleSend = async () => {
    if (!inputValue.trim()) return;

    if (!chatStarted) setChatStarted(true);

    const userMessage = { text: inputValue, sender: "user" };
    setMessages((prev) => [...prev, userMessage]);
    setInputValue("");
    setIsLoading(true);

    try {
      const res = await fetch("https://dummyjson.com/posts/1");
      const data = await res.json();
      const botMessage = {
        text: data.body || "Here's a response from AI 🤖",
        sender: "bot",
      };
      setMessages((prev) => [...prev, botMessage]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { text: "Failed to fetch response ❌", sender: "bot" },
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="w-full h-screen flex items-center justify-center relative top-7 px-4">
      <div className="w-full max-w-96 h-[80vh] flex flex-col glassy-border bg-opacity-50 backdrop-blur-lg rounded-2xl shadow-2xl overflow-hidden border border-blue-700">
        <div className="bg-blue-700/80 text-center py-4 text-xl font-bold text-white shadow-sm tracking-wider">
          🤖 AI Chat
        </div>
        {!chatStarted && (
          <h2 className="text-center text-blue-400 font-bold text-xl sm:text-2xl mb-3 animate-pulse">
            Ask me anything 💬
          </h2>
        )}
        {/* Chat Messages */}
        <div className="flex-1 overflow-y-auto px-4 py-3 space-y-4 scrollbar-thin scrollbar-thumb-blue-600">
          {messages.map((msg, idx) => (
            <div
              key={idx}
              className={`flex items-start gap-3 ${
                msg.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender === "bot" && (
                <div className="min-w-[32px] h-[32px] bg-white text-black rounded-full flex items-center justify-center font-bold text-xs shadow-md">
                  AI
                </div>
              )}

              <div
                className={`px-4 py-2 max-w-[80%] rounded-xl text-sm sm:text-base shadow-md transition-all duration-300 ${
                  msg.sender === "user"
                    ? "bg-blue-600 text-white rounded-br-none"
                    : "bg-white text-black rounded-bl-none"
                }`}
              >
                {msg.text}
              </div>

              {msg.sender === "user" && (
                <div className="min-w-[32px] h-[32px] bg-blue-600 text-white rounded-full flex items-center justify-center font-bold text-xs shadow-md">
                  You
                </div>
              )}
            </div>
          ))}

          {isLoading && (
            <div className="text-gray-400 italic text-center animate-pulse">
              AI is typing...
            </div>
          )}

          <div ref={bottomRef}></div>
        </div>
        {/* Input Section */}
        <div className="flex items-center gap-3 px-4 py-3 border-t border-blue-700 bg-[#0a0a0a]/70">
          <input
            type="text"
            placeholder="Type something awesome..."
            className="flex-1 px-4 py-2 bg-gray-800 text-white placeholder-gray-400 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600 text-sm sm:text-base"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && handleSend()}
          />
          <button
            onClick={handleSend}
            className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};
export default ChatBot;
