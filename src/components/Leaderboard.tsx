import { motion } from "motion/react";
import { Trophy, TrendingUp, Medal } from "lucide-react";

export default function Leaderboard() {
  const users = [
    { rank: 1, name: "Aryan S.", score: 298, accuracy: "98%", status: "Legend" },
    { rank: 2, name: "Isha P.", score: 285, accuracy: "94%", status: "Pro" },
    { rank: 3, name: "Rahul M.", score: 272, accuracy: "92%", status: "Elite" },
    { rank: 12, name: "You", score: 215, accuracy: "88%", status: "Rising", highlights: true },
  ];

  return (
    <section id="leaderboard" className="py-20 px-6 bg-[#080815]">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-16">
          <Trophy className="w-12 h-12 text-yellow-500 mx-auto mb-4 glow-yellow" />
          <h2 className="text-4xl font-display font-bold mb-4">Elite Hall</h2>
          <p className="text-white/40">Competing with the brightest minds in the nation.</p>
        </div>

        <div className="glass-card rounded-[2.5rem] p-4 overflow-hidden border-white/5">
          <div className="space-y-2">
            {users.map((user, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                className={`p-6 rounded-[1.5rem] flex items-center gap-4 transition-all ${
                  user.highlights ? 'bg-blue-600/20 border border-blue-500/30' : 'hover:bg-white/5'
                }`}
              >
                <div className={`w-10 h-10 rounded-xl flex items-center justify-center font-display font-bold ${
                  user.rank === 1 ? 'bg-yellow-500 text-black' : 
                  user.rank === 2 ? 'bg-slate-300 text-black' : 
                  user.rank === 3 ? 'bg-amber-600 text-white' : 'glass text-white/50'
                }`}>
                  {user.rank}
                </div>

                <div className="flex-1">
                  <div className="font-bold text-lg">{user.name}</div>
                  <div className="text-xs text-white/30 uppercase tracking-widest">{user.status}</div>
                </div>

                <div className="text-right">
                  <div className="text-xl font-display font-bold text-white">{user.score}</div>
                  <div className="flex items-center justify-end gap-1 text-[10px] text-emerald-400 font-mono">
                    <TrendingUp className="w-3 h-3" />
                    {user.accuracy} ACC
                  </div>
                </div>

                {user.rank <= 3 && <Medal className={`w-6 h-6 ${
                  user.rank === 1 ? 'text-yellow-500' : 
                  user.rank === 2 ? 'text-slate-300' : 'text-amber-600'
                }`} />}
              </motion.div>
            ))}
          </div>

          <div className="p-8 text-center border-t border-white/5 mt-4">
            <button className="text-sm font-bold text-blue-400 hover:text-blue-300 uppercase tracking-widest">
              View Global Leaderboard
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
