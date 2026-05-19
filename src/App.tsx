import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import SubjectSection from "./components/SubjectSection";
import StudyPlanner from "./components/StudyPlanner";
import MockTest from "./components/MockTest";
import AITutor from "./components/AITutor";
import Leaderboard from "./components/Leaderboard";
import Dashboard from "./components/Dashboard";
import { motion, useScroll, useSpring } from "motion/react";

export default function App() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });

  return (
    <div className="relative min-h-screen bg-[#050508] text-white selection:bg-blue-500/30 font-sans">
      <div className="atmosphere" />

      {/* Scroll Progress Bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-0.5 bg-blue-500 origin-left z-[60]" 
        style={{ scaleX }}
      />

      <Navbar />
      
      <main className="relative z-10">
        <Hero />
        <Dashboard />
        <SubjectSection />
        <StudyPlanner />
        <AITutor />
        <MockTest />
        <Leaderboard />
      </main>

      <footer className="py-12 px-10 border-t border-white/5 bg-black/50 backdrop-blur-md relative z-10">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
           <div className="ticker-text space-x-12 flex">
              <div><span className="glow-dot" />SYSTEM ONLINE: LATENCY 14MS</div>
              <div className="hidden lg:block">TOP SCORER: ABHINAV S. (RANK #1) - 298/300</div>
              <div className="hidden lg:block">ENCRYPTED DATA STREAM SECURE</div>
           </div>
           
           <div className="flex gap-8 text-[10px] uppercase tracking-widest text-white/40">
              <a href="#" className="hover:text-white transition-colors">Twitter</a>
              <a href="#" className="hover:text-white transition-colors">Discord</a>
              <a href="#" className="hover:text-white transition-colors">Privacy</a>
           </div>
        </div>
      </footer>
    </div>
  );
}
