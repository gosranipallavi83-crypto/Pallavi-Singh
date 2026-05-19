import { motion } from "motion/react";

export default function Dashboard() {
  const stats = [
    { label: "Goal Probability", value: "84%", trend: "+2.4%", color: "text-blue-400" },
    { label: "Concept Mastery", value: "72%", trend: "+5.1%", color: "text-purple-400" },
    { label: "Avg Accuracy", value: "91.2%", trend: "TOP 5%", color: "text-emerald-400" },
    { label: "Time Per Q", value: "48s", trend: "-12s", color: "text-cyan-400" },
  ];

  return (
    <section id="dashboard" className="py-24 px-6 md:px-10">
       <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row gap-16 items-start mb-24">
           <div className="lg:w-1/3">
              <motion.div 
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 viewport={{ once: true }}
                 className="flex flex-col gap-6"
              >
                 <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-[0.9]">
                   Real-Time<br />Performance<br />Matrix
                 </h2>
                 <p className="text-white/30 text-lg leading-relaxed">
                   Your neural profile evolves with every solution. We provide 
                   surgical accuracy in rank prediction and focus optimization.
                 </p>
                 <div className="flex items-center gap-4 mt-4">
                    <div className="h-[1px] w-12 bg-white/10" />
                    <span className="ticker-text">Last Update: 2m ago</span>
                 </div>
              </motion.div>
           </div>

           <div className="lg:w-2/3 grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {stats.map((stat, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="glass-card p-10 bg-white/[0.01] border-white/5 hover:bg-white/[0.03] transition-all group"
                >
                   <div className="flex justify-between items-start mb-8">
                      <div className="text-[10px] text-white/30 uppercase font-black tracking-[0.2em]">{stat.label}</div>
                      <span className="text-[10px] font-mono text-emerald-400/50 bg-emerald-400/5 px-2 py-0.5 rounded">
                         {stat.trend}
                      </span>
                   </div>
                   <div className={`text-4xl font-mono font-bold tracking-tighter ${stat.color} group-hover:scale-110 transition-transform origin-left duration-500`}>
                      {stat.value}
                   </div>
                </motion.div>
              ))}
           </div>
        </div>

        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="glass-card p-12 min-h-[450px] relative overflow-hidden ring-1 ring-white/5"
        >
           <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-8">
              <div>
                 <span className="ticker-text mb-4 block">Performance Stream</span>
                 <h3 className="text-2xl font-black uppercase tracking-tight">Active Neural Processing</h3>
              </div>
              <div className="flex items-center gap-8">
                 {['Physics', 'Chemistry', 'Maths'].map((s, i) => (
                    <div key={s} className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-widest text-white/30">
                       <div className={`w-1.5 h-1.5 rounded-full ${i === 0 ? 'bg-blue-500' : i === 1 ? 'bg-purple-500' : 'bg-emerald-500'}`} />
                       {s}
                    </div>
                 ))}
              </div>
           </div>

           <div className="relative h-64 flex items-end gap-3 px-4">
              {[40, 65, 35, 80, 55, 95, 45, 70, 85, 60, 90, 75, 40, 85, 100].map((h, i) => (
                <div key={i} className="flex-1 group relative">
                   <motion.div 
                     initial={{ height: 0 }}
                     whileInView={{ height: `${h}%` }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.05, duration: 1.5, ease: "circOut" }}
                     className={`w-full rounded-t-sm transition-all duration-500 relative overflow-hidden ${
                       i % 3 === 0 ? 'bg-blue-500/20 group-hover:bg-blue-500/40' : 
                       i % 3 === 1 ? 'bg-purple-500/20 group-hover:bg-purple-500/40' : 
                       'bg-emerald-500/20 group-hover:bg-emerald-500/40'
                     }`}
                   >
                      <motion.div 
                         initial={{ y: "100%" }}
                         animate={{ y: "-100%" }}
                         transition={{ duration: 2, repeat: Infinity, ease: "linear", delay: i * 0.1 }}
                         className="absolute inset-0 bg-white/5" 
                      />
                   </motion.div>
                   
                   {/* Tooltip on hover placeholder */}
                   <div className="absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
                      <span className="font-mono text-[10px] bg-white text-black px-2 py-1 rounded-sm">{h}XP</span>
                   </div>
                </div>
              ))}
              
              <div className="absolute inset-0 pointer-events-none">
                 <div className="h-full w-full flex flex-col justify-between py-1 opacity-5">
                    {[1, 2, 3, 4].map(l => (
                       <div key={l} className="w-full h-[1px] bg-white" />
                    ))}
                 </div>
              </div>
           </div>
           
           <div className="flex justify-between mt-10 ticker-text opacity-10">
              {['00:00', '04:00', '08:00', '12:00', '16:00', '20:00', '23:59'].map(t => (
                 <span key={t}>{t}</span>
              ))}
           </div>
        </motion.div>
      </div>
    </section>
  );
}
