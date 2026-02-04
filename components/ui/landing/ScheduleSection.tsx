export default function ScheduleSection() {
  const workshopSchedule = [
    { time: "10:00 AM - 10:30 AM", event: "Welcome & Introduction", icon: "fas fa-hand-paper" },
    { time: "10:30 AM - 12:30 PM", event: "Session 1: Cybersecurity Fundamentals", icon: "fas fa-graduation-cap" },
    { time: "12:30 PM - 01:30 PM", event: "Lunch Break", icon: "fas fa-utensils" },
    { time: "01:30 PM - 03:30 PM", event: "Session 2: CTF Strategies & Tools", icon: "fas fa-tools" },
    { time: "03:30 PM - 05:00 PM", event: "Session 3: Hands-on Lab Session", icon: "fas fa-laptop-code" }
  ];

  const ctfSchedule = [
    { time: "03:00 PM", event: "Check-In & Registration", icon: "fas fa-check-circle" },
    { time: "04:00 PM - 06:00 PM", event: "Technical Briefing & Rules", icon: "fas fa-clipboard-list" },
    { time: "06:00 PM - 07:00 PM", event: "Dinner Break", icon: "fas fa-pizza-slice" },
    { time: "07:00 PM", event: "CTF Competition Begins!", icon: "fas fa-rocket", highlight: true },
    { time: "09:00 PM", event: "Midnight Snacks", icon: "fas fa-cookie-bite" },
    { time: "12:00 AM onwards", event: "Competition Continues", icon: "fas fa-moon" },
    { time: "08:00 AM", event: "Competition Ends", icon: "fas fa-clock" },
    { time: "08:00 AM - 09:00 AM", event: "Breakfast", icon: "fas fa-coffee" },
    { time: "10:00 AM", event: "Prize Distribution & Closing", icon: "fas fa-trophy", highlight: true }
  ];

  return (
    <section id="schedule" className="w-full bg-black py-20 px-4">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-2 bg-red-950/50 border border-red-600/50 rounded mb-4">
            <span className="text-red-500 font-semibold text-sm uppercase tracking-widest">[TIMELINE.SYS]</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            <span className="text-red-600">&gt;</span> Complete <span className="text-red-600">Schedule</span>
          </h2>
          <p className="text-white/70 text-lg">3 days of intensive learning and competition</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8">
          <div className="bg-linear-to-br from-red-950/20 to-black p-8 rounded-2xl border border-red-900/30 shadow-[0_0_30px_rgba(220,38,38,0.1)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <i className="fas fa-book text-2xl text-red-600"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Workshop Day</h3>
                <p className="text-white/60 text-sm">April 16, 2026</p>
              </div>
            </div>
            <div className="space-y-4">
              {workshopSchedule.map((item, index) => (
                <div key={index} className="flex gap-4 group">
                  <div className="flex flex-col items-center">
                    <div id = "Changed" className="w-10 h-10 min-w-10 min-h-10 bg-red-950/30 rounded-full flex items-center justify-center group-hover:bg-red-600 transition-colors border border-red-900/50">
                      <i className={`${item.icon} text-sm text-red-600 group-hover:text-white`}></i>
                    </div>
                    {index < workshopSchedule.length - 1 && (
                      <div className="w-0.5 h-full bg-red-400/20 my-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="text-red-400 text-sm font-semibold mb-1">{item.time}</div>
                    <div className="text-white font-medium">{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-linear-to-br from-red-950/30 to-black p-8 rounded-2xl border border-red-600/50 shadow-[0_0_50px_rgba(220,38,38,0.2)]">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-12 h-12 bg-red-600/20 rounded-full flex items-center justify-center">
                <i className="fas fa-moon text-2xl text-red-600"></i>
              </div>
              <div>
                <h3 className="text-2xl font-bold text-white">Overnight CTF</h3>
                <p className="text-white/60 text-sm">April 17-18, 2026</p>
              </div>
            </div>
            <div className="space-y-4">
              {ctfSchedule.map((item, index) => (
                <div key={index} className={`flex gap-4 group ${item.highlight ? 'bg-amber-400/10 -mx-4 px-4 py-2 rounded-lg' : ''}`}>
                  <div className="flex flex-col items-center">
                    <div className={`w-10 h-10 min-w-10 min-h-10 rounded-full flex items-center justify-center transition-colors border ${
                      item.highlight ? 'bg-red-600 animate-pulse border-red-500' : 'bg-red-950/30 group-hover:bg-red-600 border-red-900/50'
                    }`}>
                      <i className={`${item.icon} text-sm ${item.highlight ? 'text-white' : 'text-red-600 group-hover:text-white'}`}></i>
                    </div>
                    {index < ctfSchedule.length - 1 && (
                      <div className="w-0.5 h-full bg-amber-400/20 my-2"></div>
                    )}
                  </div>
                  <div className="flex-1 pb-4">
                    <div className="text-red-400 text-sm font-semibold mb-1 font-mono">{item.time}</div>
                    <div className={`font-medium ${item.highlight ? 'text-red-500' : 'text-white'}`}>{item.event}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        <div className="mt-12 bg-linear-to-r from-red-950/30 to-red-900/20 border border-red-900/50 rounded-xl p-6 shadow-[0_0_30px_rgba(220,38,38,0.1)]">
          <div className="flex items-start gap-4">
            <i className="fas fa-exclamation-triangle text-3xl text-red-600"></i>
            <div>
              <h4 className="text-xl font-bold text-red-500 mb-2">IMPORTANT_NOTES.TXT</h4>
              <ul className="text-white/80 space-y-1 text-sm">
                <li>• Teams of 2-4 members recommended for the events</li>
                <li>• Food and refreshments provided throughout the event</li>
                <li>• Bring your laptop and charger - WiFi will be provided</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
