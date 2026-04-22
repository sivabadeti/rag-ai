export default function About() {
  return (
    <div className="min-h-screen bg-slate-900 text-gray-300 px-6 py-16">
      
      <div className="max-w-4xl mx-auto">

        {/* Title */}
        <h1 className="text-3xl md:text-4xl font-semibold text-white mb-6">
          About This Project
        </h1>

        {/* Description */}
        <p className="mb-6 text-gray-400 leading-relaxed">
          This project is a simple implementation of a Retrieval-Augmented Generation (RAG) system. 
          It allows users to ask questions and receive answers based on a custom knowledge base.
        </p>

        <p className="mb-10 text-gray-400 leading-relaxed">
          Instead of generating answers blindly, the system retrieves relevant information from stored data 
          using a vector database and then responds based on that context. This improves accuracy and reduces incorrect answers.
        </p>

        {/* How it works */}
        <h2 className="text-xl font-semibold text-white mb-4">
          How It Works
        </h2>

        <ul className="space-y-3 mb-10 text-gray-400">
          <li>• User submits a query through the interface</li>
          <li>• The system searches for relevant data using vector similarity</li>
          <li>• The most relevant context is retrieved</li>
          <li>• The response is generated based on that context</li>
        </ul>

        {/* Tech stack */}
        <h2 className="text-xl font-semibold text-white mb-4">
          Tech Stack
        </h2>

        <ul className="space-y-2 text-gray-400 mb-10">
          <li>• Frontend: React + Tailwind CSS</li>
          <li>• Backend: FastAPI</li>
          <li>• Vector Database: Chroma DB</li>
          <li>• Architecture: Retrieval-Augmented Generation (RAG)</li>
        </ul>

        {/* Closing */}
        <p className="text-gray-500 text-sm">
          This project demonstrates how modern AI systems can combine retrieval and generation to provide more reliable and context-aware answers.
        </p>

      </div>
    </div>
  );
}