import { motion } from "motion/react";
import { CheckCircle2, Clock, Calendar } from "lucide-react";

export default function StudyPlanner() {
  const schedule = [
    { time: "06:00 AM", task: "Organic Chemistry Revision", status: "completed", subject: "Chemistry" },
    { time: "09:00 AM", task: "Integer Type: Electrostatics", status: "in-progress", subject: "Physics" },
    { time: "02:00 PM", task: "Complex Numbers PYQs", status: "upcoming", subject: "Maths" },
    { time: "05:00 PM", task: "Full Syllabus Mock Test", status: "upcoming", subject: "Full" },
    { time: "09:00 PM", task: "AI Doubt Resolution Session", status: "upcoming", subject: "AI" },
  ];

  return (
    <section id="planner" className="py-20 px-6 bg-[#050510]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full glass border-white/10 text-xs font-medium text-emerald-400 mb-6 uppercase tracking-wider">
              <Calendar className="w-3 h-3" />
              Dynamic Daily Planner
            </div>
            <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
              Adaptive Study <br />
              <span className="text-emerald-400">Roadmaps</span>
            </h2>
            <p className="text-white/50 mb-8 max-w-md leading-relaxed">
              Our neural engine analyzes your weak points and creates a dynamic 
              daily schedule that optimizes for retention and problem-solving speed.
            </p>
            
            <div className="space-y-4">
              {[
                "Targeted revision cycles",
                "Spaced repetition alerts",
                "Personalized test frequency",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3 text-white/80">
                  <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                  <span className="font-medium">{item}</span>
                </div>
              ))}
            </div>

            <button className="mt-12 px-8 py-4 glass border-white/10 text-white rounded-2xl font-bold hover:bg-emerald-600 hover:text-white transition-all">
              Initialize My Roadmap
            </button>
          </div>

          <div className="glass-card rounded-[2.5rem] p-8 relative overflow-hidden">
            <div className="flex items-center justify-between mb-8">
              <h3 className="font-bold text-xl uppercase tracking-tight">Today's Focus</h3>
              <div className="text-sm text-white/40 font-mono">MAY 19, 2026</div>
            </div>

            <div className="space-y-4">
              {schedule.map((item, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className={`p-5 rounded-2xl border flex items-center gap-6 transition-all ${
                    item.status === 'in-progress' 
                    ? 'bg-blue-600/10 border-blue-500/50 glow-blue' 
                    : 'bg-white/5 border-white/5'
                  }`}
                >
                  <div className="flex flex-col items-center">
                    <Clock className={`w-5 h-5 mb-1 ${item.status === 'completed' ? 'text-emerald-400' : 'text-white/20'}`} />
                    <span className="text-[10px] font-mono whitespace-nowrap opacity-40">{item.time}</span>
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                       <span className={`text-[10px] uppercase font-bold px-2 py-0.5 rounded ${
                         item.subject === 'Physics' ? 'bg-blue-600/20 text-blue-400' :
                         item.subject === 'Chemistry' ? 'bg-emerald-600/20 text-emerald-400' :
                         item.subject === 'Maths' ? 'bg-purple-600/20 text-purple-400' : 'bg-white/10 text-white/60'
                       }`}>
                         {item.subject}
                       </span>
                    </div>
                    <div className={`font-bold text-sm ${item.status === 'completed' ? 'text-white/40 line-through' : 'text-white'}`}>
                      {item.task}
                    </div>
                  </div>

                  <div className={`w-2 h-2 rounded-full ${
                    item.status === 'completed' ? 'bg-emerald-400' :
                    item.status === 'in-progress' ? 'bg-blue-400 animate-pulse' : 'bg-white/10'
                  }`} />
                </motion.div>
              ))}
            </div>

            {/* Glowing Accent */}
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-600/20 rounded-full blur-[100px] pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  );
}
