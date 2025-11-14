import React, { useState, useRef, useEffect } from "react";
import { FiArrowRight } from "react-icons/fi";

export default function ChatWidget({
  title = "Chat with us",
  placeholder = "Type a message...",
}) {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, from: "bot", text: "Hi there! How can I help you today?" },
  ]);
  const [input, setInput] = useState("");
  const messagesRef = useRef(null);

  useEffect(() => {
    // auto-scroll to bottom when messages change
    if (messagesRef.current) {
      messagesRef.current.scrollTop = messagesRef.current.scrollHeight;
    }
  }, [messages, open]);

  function sendMessage() {
    const trimmed = input.trim();
    if (!trimmed) return;

    const userMsg = { id: Date.now(), from: "user", text: trimmed };
    setMessages((m) => [...m, userMsg]);
    setInput("");

    // fake bot reply (replace with API call)
    setTimeout(() => {
      setMessages((m) => [
        ...m,
        { id: Date.now() + 1, from: "bot", /* text: `You said: ${trimmed}` */ },
      ]);
    }, 700);
  }

  function handleKeyDown(e) {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      sendMessage();
    }
  }

  return (
    <div className="fixed inset-0 pointer-events-none">
      {/* Floating button */}
      <div className="fixed bottom-6 right-6 z-50 pointer-events-auto">
        <button
          aria-label={open ? "Close chat" : "Open chat"}
          onClick={() => setOpen((s) => !s)}
          className="w-14 h-14 rounded-full bg-primary shadow-lg flex items-center justify-center text-white hover:bg-primary focus:outline-none focus:ring-4 focus:ring-primary transition-transform transform-gpu"
        >
          {/* Chat icon */}
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8 10h.01M12 10h.01M16 10h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-.83L3 20l1.17-3.88A7.966 7.966 0 013 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
            />
          </svg>
        </button>
      </div>

      {/* Chat panel */}
      <div
        className={`fixed bottom-24 right-6 z-40 pointer-events-auto transform transition-all duration-300 ease-out ${
          open
            ? "opacity-100 translate-y-0"
            : "opacity-0 translate-y-6 pointer-events-none"
        }`}
        style={{ minWidth: 320, maxWidth: 420 }}
      >
        <div className="flex flex-col bg-white rounded-2xl shadow-2xl overflow-hidden ring-1 ring-black/5">
          {/* Header */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white text-sm font-semibold">
                AI
              </div>
              <div className="flex flex-col">
                <span className="font-medium text-sm">{title}</span>
                <span className="text-xs text-gray-500">
                  Typically replies in a few minutes
                </span>
              </div>
            </div>
            <div className="flex items-center gap-2">
              <button
                onClick={() =>
                  setMessages([
                    {
                      id: Date.now(),
                      from: "bot",
                      text: "Hi there! How can I help you today?",
                    },
                  ])
                }
                className="text-xs px-2 py-1 rounded-md border border-gray-200 bg-gray-50 hover:bg-gray-100"
                title="Reset chat"
              >
                Reset
              </button>
              <button
                onClick={() => setOpen(false)}
                className="p-2 rounded-md hover:bg-gray-100"
                aria-label="Close chat panel"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 text-gray-600"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  strokeWidth={2}
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div
            ref={messagesRef}
            className="px-4 py-3 space-y-3 overflow-y-auto max-h-72 min-h-[180px]"
          >
            {messages.map((m) => (
              <div
                key={m.id}
                className={`flex ${
                  m.from === "user" ? "justify-end" : "justify-start"
                }`}
              >
                <div
                  className={`${
                    m.from === "user"
                      ? "bg-primary text-white rounded-xl rounded-br-none"
                      : "bg-gray-100 text-gray-800 rounded-xl rounded-bl-none"
                  } px-3 py-2 max-w-[80%]`}
                >
                  <div className="whitespace-pre-wrap text-sm">{m.text}</div>
                </div>
              </div>
            ))}
          </div>

          {/* Input area */}
          <div className="px-3 py-3 border-t border-gray-100 bg-white">
            <div className="flex gap-2 items-end">
              <textarea
                value={input}
                placeholder={placeholder}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={handleKeyDown}
                className="flex-1 resize-none min-h-[38px] max-h-32 px-3 py-2 text-sm rounded-md border border-gray-200 focus:outline-none focus:ring-2 focus:ring-indigo-200"
              />
              <button
                onClick={sendMessage}
                className="inline-flex items-center justify-center px-4 py-2 rounded-md bg-primary text-white font-medium hover:bg-primary disabled:opacity-60"
                disabled={input.trim() === ""}
                aria-label="Send message"
              >
                <FiArrowRight/>
              </button>
            </div>
          </div>
        </div>

        {/* small tail on the chat panel for visual */}
        <div className="w-full flex justify-end -mt-2 pr-6">
          <div
            className="w-6 h-6 bg-white rotate-45 shadow-sm"
            style={{ transformOrigin: "center" }}
          />
        </div>
      </div>
    </div>
  );
}
