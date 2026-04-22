import { Routes, Route, useLocation } from "react-router-dom";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Chat from "./components/Chat";
import About from "./components/About";
import Footer from "./components/Footer";

export default function App() {
  const location = useLocation();

  // ❌ Hide footer on chat page
  const hideFooter = location.pathname === "/chat";

  return (
    <div className="bg-slate-900 text-white min-h-screen flex flex-col">
      <Navbar />

      <div className="flex-1">
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/chat" element={<Chat />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>

      {/* ✅ Conditional footer */}
      {!hideFooter && <Footer />}
    </div>
  );
}