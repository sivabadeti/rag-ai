export default function Footer() {
  return (
    <footer className="border-t border-slate-700 bg-slate-900 text-gray-400">
      
      <div className="max-w-6xl mx-auto px-6 py-10 grid gap-8 sm:grid-cols-2 md:grid-cols-3">

        {/* Brand */}
        <div>
          <h2 className="text-white font-semibold text-lg mb-2">
            RAG AI
          </h2>
          <p className="text-sm">
            A simple AI chatbot built using Retrieval-Augmented Generation with a vector database.
          </p>
        </div>

        {/* Navigation */}
        <div>
          <h3 className="text-white font-medium mb-2">Navigation</h3>
          <ul className="space-y-1 text-sm">
            <li><a href="/" className="hover:text-white transition">Home</a></li>
            <li><a href="/chat" className="hover:text-white transition">Chat</a></li>
            <li><a href="/about" className="hover:text-white transition">About</a></li>
          </ul>
        </div>

        {/* Tech / Info */}
        <div>
          <h3 className="text-white font-medium mb-2">Tech Stack</h3>
          <p className="text-sm">
            React · Tailwind CSS · FastAPI · Chroma DB
          </p>
        </div>

      </div>

      {/* Bottom line */}
      <div className="border-t border-slate-700 text-center text-xs py-4">
        © {new Date().getFullYear()} RAG AI. All rights reserved.
      </div>

    </footer>
  );
}