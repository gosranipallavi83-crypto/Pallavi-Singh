import { motion, AnimatePresence } from "motion/react";
import { Send, Bot, User, Loader2, Sparkles } from "lucide-react";
import { useState, useRef, useEffect } from "react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export default function AITutor() {
  const [messages, setMessages] = useState<Message[]>([
    { role: "assistant", content: "ORBIT CORE INITIALIZED. I am your specialized JEE neural assistant. How can I facilitate your training today?" }
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMsg = input.trim();
    setInput("");
    setMessages(prev => [...prev, { role: "user", content: userMsg }]);
    setLoading(true);

    try {
      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ message: userMsg }),
      });
      const data = await response.json();
      setMessages(prev => [...prev, { role: "assistant", content: data.text || "Neural connection timeout. Re-establishing link..." }]);
    } catch (error) {
      setMessages(prev => [...prev, { role: "assistant", content: "MISSION CRITICAL ERROR: AI core unresponsive. Check network uplink." }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="aitutor" className="py-24 px-6 md:px-10 bg-black relative overflow-hidden">
      <div className="max-w-5xl mx-auto relative z-10">
        <div className="flex flex-col items-center text-center mb-16">
          <motion.div 
            animate={{ 
              boxShadow: ["0 0 20px rgba(34, 211, 238, 0.2)", "0 0 60px rgba(34, 211, 238, 0.4)", "0 0 20px rgba(34, 211, 238, 0.2)"]
            }}
            transition={{ duration: 4, repeat: Infinity }}
            className="w-20 h-20 bg-cyan-400/10 rounded-3xl border border-cyan-400/30 flex items-center justify-center mb-10"
          >
            <Bot className="w-10 h-10 text-cyan-400" />
          </motion.div>
          <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter mb-6">Neural Oracle</h2>
          <p className="text-white/30 max-w-lg text-lg leading-relaxed">
            Stuck on complex calculus or organic synthesis? Invoke the ORBIT AI 
            for instant, high-precision doubt resolution.
          </p>
        </div>

        <div className="glass-card rounded-[2.5rem] overflow-hidden flex flex-col h-[700px] border-white/5 relative">
          <div className="absolute inset-0 bg-cyan-400/[0.01] pointer-events-none" />
          
          <div className="p-8 border-b border-white/5 bg-white/[0.02] flex items-center justify-between relative z-10">
            <div className="flex items-center gap-4">
              <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse" />
              <span className="ticker-text text-cyan-400">Gemini 1.5 Pro Neural Core Active</span>
            </div>
            <div className="flex items-center gap-2 group cursor-pointer">
               <Sparkles className="w-3 h-3 text-white/20 group-hover:text-cyan-400 transition-colors" />
               <span className="font-mono text-[9px] text-white/20 uppercase tracking-[0.2em] group-hover:text-white transition-colors">Session: ID-8842</span>
            </div>
          </div>

          <div 
            ref={scrollRef}
            className="flex-1 overflow-y-auto p-8 space-y-10 scroll-smooth relative z-10"
          >
            <AnimatePresence>
              {messages.map((msg, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`max-w-[85%] md:max-w-[70%] flex gap-6 ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
                    <div className={`w-10 h-10 rounded-xl flex-shrink-0 flex items-center justify-center border ${msg.role === 'user' ? 'bg-white text-black border-white' : 'bg-white/5 text-cyan-400 border-white/10'}`}>
                      {msg.role === 'user' ? <User className="w-5 h-5" /> : <Bot className="w-5 h-5" />}
                    </div>
                    <div className={`p-6 rounded-3xl text-[15px] leading-relaxed relative ${
                      msg.role === 'user' 
                      ? 'bg-blue-600 text-white shadow-xl shadow-blue-900/20' 
                      : 'bg-white/[0.03] text-white/70 border border-white/5'
                    }`}>
                      {msg.content}
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
            {loading && (
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="flex justify-start"
              >
                 <div className="flex gap-6">
                  <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                    <Loader2 className="w-5 h-5 text-cyan-400 animate-spin" />
                  </div>
                  <div className="p-6 rounded-3xl bg-white/[0.03] text-cyan-400/50 text-[15px] border border-white/5 flex items-center gap-3">
                    <span className="font-mono text-xs uppercase tracking-widest animate-pulse">Processing Neural Nodes...</span>
                  </div>
                </div>
              </motion.div>
            )}
          </div>

          <div className="p-8 pb-10 border-t border-white/5 bg-white/[0.02] relative z-10">
            <div className="relative flex items-center">
              <input
                type="text"
                value={input}
                onChange={(e) => setInput(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSend()}
                placeholder="Submit your query (e.g. Solve Schrödinger's wave equation for 1D box)"
                className="w-full bg-white/5 border border-white/10 rounded-full px-8 py-5 pr-16 text-white placeholder:text-white/20 focus:outline-none focus:ring-2 focus:ring-cyan-400/30 transition-all font-medium text-sm"
              />
              <motion.button 
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.9 }}
                onClick={handleSend}
                className="absolute right-3 p-4 bg-white text-black rounded-full hover:bg-cyan-400 transition-colors"
              >
                <Send className="w-4 h-4" />
              </motion.button>
            </div>
            <div className="mt-6 flex justify-center items-center gap-6 opacity-20">
               <span className="ticker-text">Latent Space: Verified</span>
               <div className="w-1 h-1 rounded-full bg-white" />
               <span className="ticker-text">Neural Stream: Encrypted</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
