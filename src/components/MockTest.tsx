import { motion } from "motion/react";
import { PlayCircle, ShieldCheck, Timer, ChevronRight, Activity } from "lucide-react";

export default function MockTest() {
  const tests = [
    { title: "JEE Advanced Full Mock", duration: "180m", questions: 54, type: "Full Length", status: "Live", color: "from-red-500/20" },
    { title: "Inorganic Chemistry Sprint", duration: "45m", questions: 30, type: "Subjective", status: "Upcoming", color: "from-emerald-500/20" },
    { title: "Fluid Mechanics Drill", duration: "60m", questions: 25, type: "Topic Wise", status: "Ready", color: "from-blue-500/20" },
  ];

  return (
    <section id="mock" className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
           <div>
              <span className="ticker-text mb-4 block flex items-center gap-2">
                 <Activity className="w-3 h-3 text-cyan-400" />
                 Simulation Chambers
              </span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Stress-Test Protocols</h2>
           </div>
           <button className="text-[10px] font-black uppercase tracking-[0.2em] px-8 py-3 rounded-full border border-white/10 hover:border-white/30 transition-all">
              View Deployment History
           </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {tests.map((test, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="glass-card p-10 bg-white/[0.01] border-white/5 group relative overflow-hidden"
            >
              <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${test.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity`} />
              
              <div className="flex items-center justify-between mb-12">
                <div className="w-14 h-14 rounded-2xl bg-white/[0.03] border border-white/5 flex items-center justify-center group-hover:scale-110 transition-transform duration-500">
                  <PlayCircle className="w-7 h-7 text-white/20 group-hover:text-cyan-400 transition-colors" />
                </div>
                <div className="flex flex-col items-end gap-1">
                   <div className="font-mono text-[9px] text-white/20 uppercase tracking-widest">Protocol-441</div>
                   <span className={`px-4 py-1.5 rounded-full text-[9px] font-black uppercase tracking-[0.2em] border ${
                     test.status === 'Live' 
                     ? 'bg-red-500/10 text-red-500 border-red-500/20 animate-pulse' 
                     : 'bg-white/5 text-white/30 border-white/10'
                   }`}>
                     {test.status}
                   </span>
                </div>
              </div>

              <h3 className="text-xl font-black tracking-tight mb-4 group-hover:text-cyan-400 transition-colors">{test.title}</h3>
              
              <div className="grid grid-cols-2 gap-4 mb-10">
                <div className="flex items-center gap-3 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                  <Timer className="w-4 h-4 text-white/10" />
                  {test.duration}
                </div>
                <div className="flex items-center gap-3 text-white/30 text-[10px] font-bold uppercase tracking-widest">
                  <ShieldCheck className="w-4 h-4 text-white/10" />
                  {test.type}
                </div>
              </div>

              <button className="w-full py-5 bg-white/[0.03] border border-white/5 rounded-2xl text-[10px] uppercase tracking-[0.2em] font-black flex items-center justify-center gap-3 hover:bg-white hover:text-black transition-all">
                Initiate Sequence
                <ChevronRight className="w-4 h-4" />
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
