import { useState, useRef, useEffect } from "react";

export default function Chat() {
  const [messages, setMessages] = useState([]);
  const [query, setQuery] = useState("");
  const [loading, setLoading] = useState(false);
  const endRef = useRef(null);

  const sendMessage = async () => {
    if (!query.trim()) return;

    setMessages((prev) => [...prev, { role: "user", text: query }]);
    setQuery("");
    setLoading(true);

    try {
      const res = await fetch(
        `http://127.0.0.1:8000/ask?query=${encodeURIComponent(query)}`
      );
      const data = await res.json();

      setMessages((prev) => [
        ...prev,
        { role: "bot", text: data.answer },
      ]);
    } catch {
      setMessages((prev) => [
        ...prev,
        { role: "bot", text: "Server error." },
      ]);
    }

    setLoading(false);
  };

  useEffect(() => {
    endRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [messages]);

  return (
    <div className="flex flex-col h-screen max-w-4xl mx-auto px-4">

      {/* Chat messages */}
      <div className="flex-1 overflow-y-auto py-6 space-y-4">

        {messages.map((msg, i) => (
          <div
            key={i}
            className={`px-4 py-3 rounded-lg max-w-[80%] text-sm leading-relaxed ${
              msg.role === "user"
                ? "ml-auto bg-purple-500 text-white"
                : "bg-slate-800 border border-slate-700 text-gray-200"
            }`}
          >
            {msg.text}
          </div>
        ))}

        {loading && (
          <div className="bg-slate-800 border border-slate-700 px-4 py-3 rounded-lg w-fit text-sm text-gray-400">
            Thinking...
          </div>
        )}

        <div ref={endRef} />
      </div>

      {/* Input area */}
      <div className="flex gap-3 pb-6">

        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && sendMessage()}
          placeholder="Ask something..."
          className="flex-1 p-3 rounded-lg bg-slate-800 border border-slate-700 text-sm focus:outline-none focus:ring-2 focus:ring-purple-500"
        />

        <button
          onClick={sendMessage}
          className="bg-purple-500 px-5 py-2 rounded-lg text-sm hover:bg-purple-600 transition"
        >
          Send
        </button>

      </div>
    </div>
  );
}