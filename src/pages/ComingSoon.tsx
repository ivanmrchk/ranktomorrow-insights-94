import { useState, FormEvent } from "react";
import { toast } from "sonner";

const ComingSoon = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    toast.success("You're on the list! We'll be in touch soon.");
    setEmail("");
  };

  return (
    <div
      className="min-h-screen flex flex-col antialiased text-white relative"
      style={{
        background: "linear-gradient(145deg, #0a0e1a 0%, #111827 40%, #0f1629 70%, #0a0e1a 100%)",
        backgroundImage: `linear-gradient(145deg, #0a0e1a 0%, #111827 40%, #0f1629 70%, #0a0e1a 100%), linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px)`,
        backgroundSize: "100% 100%, 64px 64px, 64px 64px",
        fontFamily: "'Inter', system-ui, sans-serif",
      }}
    >
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div
          className="absolute rounded-full"
          style={{
            top: "-20%", right: "-10%", width: 600, height: 600,
            background: "rgba(20,184,166,0.04)", filter: "blur(120px)",
            animation: "subtle-shift 12s ease-in-out infinite",
          }}
        />
        <div
          className="absolute rounded-full"
          style={{
            bottom: "-15%", left: "-5%", width: 500, height: 500,
            background: "rgba(45,212,191,0.03)", filter: "blur(100px)",
            animation: "subtle-shift 12s ease-in-out infinite 4s",
          }}
        />
      </div>

      {/* Main content */}
      <main className="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
        {/* Hero */}
        <section className="w-full max-w-3xl mx-auto text-center pt-20 sm:pt-28 lg:pt-36 pb-16">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full mb-8" style={{ border: "1px solid rgba(20,184,166,0.2)", background: "rgba(20,184,166,0.06)" }}>
            <span className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ background: "#2dd4bf" }} />
            <span className="text-xs font-medium tracking-wide uppercase" style={{ color: "#2dd4bf" }}>Coming Soon</span>
          </div>

          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
            <span className="text-white">RankTomorrow is</span><br />
            <span style={{ background: "linear-gradient(to right, #2dd4bf, #14b8a6)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>Launching Soon.</span>
          </h1>

          <p className="text-lg sm:text-xl font-medium max-w-2xl mx-auto mb-4" style={{ color: "#d1d5db" }}>
            AI-powered SEO automation built to engineer topical authority and scalable search growth.
          </p>

          <p className="text-sm sm:text-base max-w-xl mx-auto mb-12 leading-relaxed" style={{ color: "#6b7280" }}>
            We're finalizing the automation engine that transforms keyword research into structured content systems.
          </p>

          {/* Waitlist form */}
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto mb-4">
            <label htmlFor="email" className="sr-only">Email address</label>
            <input
              id="email"
              type="email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="you@company.com"
              className="w-full sm:flex-1 h-12 px-4 rounded-lg text-white text-sm transition focus:outline-none"
              style={{
                background: "rgba(255,255,255,0.05)",
                border: "1px solid rgba(255,255,255,0.1)",
                color: "#fff",
              }}
              onFocus={(e) => { e.currentTarget.style.boxShadow = "0 0 0 2px rgba(20,184,166,0.4)"; e.currentTarget.style.borderColor = "rgba(20,184,166,0.4)"; }}
              onBlur={(e) => { e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.1)"; }}
            />
            <button
              type="submit"
              className="w-full sm:w-auto h-12 px-6 rounded-lg font-semibold text-sm transition-colors whitespace-nowrap cursor-pointer"
              style={{ background: "#14b8a6", color: "#0a0e1a" }}
              onMouseEnter={(e) => { e.currentTarget.style.background = "#2dd4bf"; }}
              onMouseLeave={(e) => { e.currentTarget.style.background = "#14b8a6"; }}
            >
              Join the Waitlist
            </button>
          </form>
          <p className="text-xs" style={{ color: "#4b5563" }}>No spam. Early access only.</p>
        </section>

        {/* Feature cards */}
        <section className="w-full max-w-4xl mx-auto pb-20 sm:pb-28">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">
            {[
              {
                title: "AI Keyword Clustering",
                desc: "Generate structured topical authority maps automatically.",
                icon: (
                  <svg className="w-5 h-5" style={{ color: "#2dd4bf" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                  </svg>
                ),
              },
              {
                title: "Content Architecture Engine",
                desc: "Create SEO-ready outlines and internal linking systems.",
                icon: (
                  <svg className="w-5 h-5" style={{ color: "#2dd4bf" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
                  </svg>
                ),
              },
              {
                title: "Automation Workflows",
                desc: "Turn strategy into repeatable publishing systems.",
                icon: (
                  <svg className="w-5 h-5" style={{ color: "#2dd4bf" }} fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182" />
                  </svg>
                ),
              },
            ].map((card) => (
              <article
                key={card.title}
                className="rounded-2xl p-6 sm:p-7 transition-all duration-300"
                style={{
                  background: "rgba(255,255,255,0.03)",
                  border: "1px solid rgba(255,255,255,0.06)",
                  backdropFilter: "blur(12px)",
                }}
                onMouseEnter={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.05)"; e.currentTarget.style.borderColor = "rgba(20,184,166,0.15)"; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = "rgba(255,255,255,0.03)"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.06)"; }}
              >
                <div className="w-10 h-10 rounded-xl flex items-center justify-center mb-5" style={{ background: "rgba(20,184,166,0.1)" }}>
                  {card.icon}
                </div>
                <h3 className="text-white font-semibold text-sm mb-2">{card.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: "#6b7280" }}>{card.desc}</p>
              </article>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="relative z-10 py-8 px-4" style={{ borderTop: "1px solid rgba(255,255,255,0.04)" }}>
        <div className="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <span className="text-sm font-semibold tracking-tight" style={{ color: "#9ca3af" }}>RankTomorrow</span>
          <span className="text-xs" style={{ color: "#4b5563" }}>© {new Date().getFullYear()} RankTomorrow. All rights reserved.</span>
        </div>
      </footer>

      <style>{`
        @keyframes subtle-shift {
          0%, 100% { opacity: 0.4; transform: translate(0, 0) scale(1); }
          50% { opacity: 0.6; transform: translate(-10px, 10px) scale(1.05); }
        }
      `}</style>
    </div>
  );
};

export default ComingSoon;
