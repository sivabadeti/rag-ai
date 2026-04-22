import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <div className="flex flex-col items-center justify-center text-center px-6 min-h-[85vh] bg-slate-900">
      
      <h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold mb-6 leading-tight">
        AI Knowledge <span className="text-purple-400">Chatbot</span>
      </h1>

      <p className="text-gray-400 max-w-2xl mb-8 text-base sm:text-lg">
        Ask questions and get answers from your custom knowledge base using a simple RAG system.
      </p>

      <div className="flex gap-4">
        <Link
          to="/chat"
          className="bg-purple-500 px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-purple-600 transition"
        >
          Start Chat
        </Link>

        <Link
          to="/about"
          className="border border-slate-600 px-6 py-3 rounded-lg text-sm sm:text-base hover:bg-slate-800 transition"
        >
          Learn More
        </Link>
      </div>

    </div>
  );
}