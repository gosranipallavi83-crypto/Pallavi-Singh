import { motion } from "motion/react";

export default function SubjectSection() {
  const subjects = [
    {
      name: "Physics",
      short: "P",
      progress: 72,
      color: "bg-amber-500",
      stats: "1.2k PYQs",
      accent: "amber"
    },
    {
      name: "Chemistry",
      short: "C",
      progress: 88,
      color: "bg-emerald-500",
      stats: "900 PYQs",
      accent: "emerald"
    },
    {
      name: "Mathematics",
      short: "M",
      progress: 61,
      color: "bg-blue-500",
      stats: "1.5k PYQs",
      accent: "blue"
    },
  ];

  return (
    <section id="subjects" className="py-24 px-6 md:px-10">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
           <div>
              <span className="ticker-text mb-4 block">Focus Segments</span>
              <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter">Academic Satellites</h2>
           </div>
           <div className="text-[10px] font-bold uppercase tracking-[0.2em] text-white/20">
              Curriculum v2026 Compatible
           </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {subjects.map((sub, i) => (
            <motion.div
              key={sub.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -5, backgroundColor: "rgba(255, 255, 255, 0.05)", borderColor: "rgba(255, 255, 255, 0.15)" }}
              viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 400, damping: 25, delay: i * 0.1 }}
              className="group glass-card p-10 bg-white/[0.02] border-white/5 cursor-pointer relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.02] -rotate-45 translate-x-16 -translate-y-16 group-hover:bg-white/[0.05] transition-colors" />
              
              <div className="flex items-center gap-6 mb-10">
                <motion.div 
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  className={`w-14 h-14 rounded-2xl flex items-center justify-center font-black text-2xl text-black ${sub.color} shadow-lg shadow-black/40`}
                >
                  {sub.short}
                </motion.div>
                <div>
                   <div className="text-xs font-bold tracking-[0.2em] uppercase text-white/20 mb-1">{sub.stats}</div>
                   <div className="text-xl font-black tracking-tight uppercase">{sub.name}</div>
                </div>
              </div>

              <div className="space-y-4 pt-4">
                <div className="flex justify-between items-end">
                  <div className="text-[10px] font-bold tracking-widest uppercase text-white/30">Mastery Level</div>
                  <div className="text-[10px] font-mono text-white/50">{sub.progress}%</div>
                </div>
                <div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${sub.progress}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.5, ease: "easeOut", delay: 0.3 + i * 0.1 }}
                    className="h-full bg-white relative"
                  >
                    <div className="absolute inset-0 bg-white blur-[4px] opacity-30" />
                  </motion.div>
                </div>
              </div>
              
              <div className="mt-10 flex justify-between items-center opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
                 <span className="text-[10px] font-bold uppercase tracking-widest text-cyan-400">Initialize Module</span>
                 <div className="w-8 h-8 rounded-full border border-white/10 flex items-center justify-center">
                    <div className="w-1.5 h-1.5 bg-white rounded-full animate-pulse" />
                 </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
