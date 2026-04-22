import { NavLink } from "react-router-dom";
import { useState } from "react";
import { motion } from "framer-motion";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const linkClass = ({ isActive }) =>
    `relative group ${
      isActive ? "text-white" : "text-gray-300"
    } hover:text-white transition`;

  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="sticky top-0 z-50 backdrop-blur-md bg-slate-900/70 border-b border-slate-700"
    >
      <div className="flex justify-between items-center px-6 py-4 max-w-6xl mx-auto">

        {/* Logo */}
        <h1 className="text-xl font-bold text-purple-400">
          RAG AI
        </h1>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8">

          <NavLink to="/" className={linkClass}>
            Home
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

          <NavLink to="/chat" className={linkClass}>
            Chat
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

          <NavLink to="/about" className={linkClass}>
            About
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

          <NavLink to="/features" className={linkClass}>
            Features
            <span className="absolute left-0 -bottom-1 h-[2px] w-0 bg-purple-400 transition-all duration-300 group-hover:w-full"></span>
          </NavLink>

        </div>

        {/* Mobile button */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden text-white text-2xl"
        >
          ☰
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="md:hidden bg-slate-800 flex flex-col items-center gap-4 py-4"
        >
          <NavLink to="/">Home</NavLink>
          <NavLink to="/chat">Chat</NavLink>
          <NavLink to="/about">About</NavLink>
          <NavLink to="/features">Features</NavLink>
        </motion.div>
      )}
    </motion.nav>
  );
}