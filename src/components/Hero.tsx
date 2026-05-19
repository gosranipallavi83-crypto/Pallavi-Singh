import { motion } from "motion/react";
import { ChevronRight } from "lucide-react";

export default function Hero() {
  return (
    <section id="hero" className="relative pt-44 pb-24 px-6 md:px-10 overflow-hidden min-h-screen flex items-center">
      {/* Dynamic Background Elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
          x: [0, 50, 0],
          y: [0, -30, 0]
        }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
        className="absolute top-1/4 -left-24 w-96 h-96 bg-blue-500/10 rounded-full blur-[120px]" 
      />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-[1.2fr_1fr] gap-20 items-center">
        <div className="relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-cyan-400 text-[10px] md:text-sm font-black tracking-[0.4em] uppercase mb-8 flex items-center gap-3"
          >
            <div className="h-[1px] w-8 bg-cyan-400/50" />
            Empowering Future Engineers
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="hero-h1 mb-10"
          >
            Surgical<br />Precision<br />For JEE.
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-lg md:text-xl text-white/40 max-w-lg mb-14 leading-relaxed"
          >
            Master the toughest concepts with AI-driven analytics. Identify weaknesses and 
            ascend the ranks with data-backed training.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center gap-8"
          >
            <motion.button 
              whileHover={{ scale: 1.05, boxShadow: "0 0 40px rgba(255,255,255,0.15)" }}
              whileTap={{ scale: 0.95 }}
              className="w-full sm:w-auto px-12 py-5 bg-white text-black rounded-full font-black text-xs uppercase tracking-[0.2em] transition-all"
            >
              Start Mission
            </motion.button>
            <button className="group flex items-center gap-2 text-white/40 hover:text-white text-xs font-bold uppercase tracking-[0.2em] transition-colors">
              Exploration
              <ChevronRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </button>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.9, rotateY: 20 }}
          whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative group perspective-1000"
        >
          <div className="glass-card p-12 relative overflow-hidden ring-1 ring-white/10">
            <div className="absolute top-0 right-0 p-8">
               <div className="flex gap-1">
                  <div className="w-1 h-1 rounded-full bg-cyan-400 animate-pulse" />
                  <div className="w-1 h-1 rounded-full bg-cyan-400/50" />
                  <div className="w-1 h-1 rounded-full bg-cyan-400/20" />
               </div>
            </div>

            <div className="flex justify-between items-end mb-12">
              <span className="ticker-text">Neural Mastery Index</span>
              <span className="font-mono text-[10px] text-white/10 uppercase tracking-widest">S-Class v0.9</span>
            </div>

            <div className="relative mb-14">
               <svg className="w-48 h-48 mx-auto -rotate-90">
                  <circle
                    className="text-white/5"
                    strokeWidth="8"
                    stroke="currentColor"
                    fill="transparent"
                    r="84"
                    cx="96"
                    cy="96"
                  />
                  <motion.circle
                    initial={{ strokeDasharray: "0 527" }}
                    whileInView={{ strokeDasharray: "442 527" }}
                    viewport={{ once: true }}
                    transition={{ duration: 2, delay: 1, ease: "easeOut" }}
                    className="text-cyan-400"
                    strokeWidth="8"
                    strokeDashcap="round"
                    stroke="currentColor"
                    fill="transparent"
                    r="84"
                    cx="96"
                    cy="96"
                  />
               </svg>
               <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span className="text-4xl font-black tracking-tighter">84%</span>
                  <span className="text-[10px] uppercase font-bold text-white/20 tracking-widest">Mastery</span>
               </div>
            </div>

            <div className="grid grid-cols-2 gap-6">
               <div className="p-6 bg-white/[0.02] rounded-3xl border border-white/5 flex flex-col gap-1">
                  <span className="ticker-text opacity-40">Accuracy</span>
                  <span className="font-mono text-2xl font-bold text-emerald-400">91.2%</span>
               </div>
               <div className="p-6 bg-white/[0.02] rounded-3xl border border-white/5 flex flex-col gap-1">
                  <span className="ticker-text opacity-40">Rank Est.</span>
                  <span className="font-mono text-2xl font-bold text-blue-400">#412</span>
               </div>
            </div>
          </div>
          
          {/* Decorative Elements */}
          <div className="absolute -top-6 -right-6 w-12 h-12 border-t-2 border-r-2 border-cyan-400/20" />
          <div className="absolute -bottom-6 -left-6 w-12 h-12 border-b-2 border-l-2 border-cyan-400/20" />
        </motion.div>
      </div>
    </section>
  );
}
