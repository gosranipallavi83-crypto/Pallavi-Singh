import { motion, AnimatePresence } from "motion/react";
import { Menu, X, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Dashboard", href: "#dashboard" },
    { name: "Subjects", href: "#subjects" },
    { name: "Mock Tests", href: "#mock" },
    { name: "AI Tutor", href: "#aitutor" },
  ];

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 px-6 md:px-10 ${
        scrolled ? "py-4 bg-black/60 backdrop-blur-xl border-b border-white/5" : "py-8 bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="font-black text-2xl tracking-tighter flex items-center gap-1 group cursor-pointer">
          JEE<span className="text-cyan-400 group-hover:text-white transition-colors duration-300">ORBIT</span>
        </div>

        {/* Desktop Nav */}
        <div className="hidden md:flex items-center gap-10">
          {navItems.map((item) => (
            <a
              key={item.name}
              href={item.href}
              className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/40 hover:text-white transition-all duration-300 relative group"
            >
              {item.name}
              <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-400 transition-all duration-300 group-hover:w-full" />
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-6">
          <motion.button 
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="text-[10px] font-bold text-cyan-400 tracking-[0.2em] uppercase cursor-pointer hover:text-white transition-colors flex items-center gap-2 px-5 py-2.5 rounded-full border border-cyan-400/20 hover:border-white/20"
          >
            PRO ACCESS
            <ChevronRight className="w-3 h-3" />
          </motion.button>
        </div>

        <button 
          className="md:hidden text-white p-2"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X /> : <Menu />}
        </button>
      </div>

      {/* Mobile Nav Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="absolute top-full left-0 right-0 bg-black/95 border-b border-white/10 p-6 flex flex-col gap-6 md:hidden overflow-hidden"
          >
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className="text-lg font-bold uppercase tracking-widest text-white/40 hover:text-white py-2"
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </a>
            ))}
            <button className="w-full py-4 bg-cyan-400 text-black font-black uppercase text-xs tracking-widest rounded-xl">
              GO PRO
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
