<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>RankTomorrow — Launching Soon | AI-Powered SEO Automation</title>
    <meta name="description" content="RankTomorrow is an AI-powered SEO automation platform built to engineer topical authority and scalable search growth. Join the waitlist for early access.">
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
        tailwind.config = {
            theme: {
                extend: {
                    fontFamily: { sans: ['Inter', 'system-ui', 'sans-serif'] },
                    colors: {
                        brand: {
                            950: '#0a0e1a',
                            900: '#0f1629',
                            800: '#151d35',
                            700: '#1c2744',
                        },
                        teal: {
                            400: '#2dd4bf',
                            500: '#14b8a6',
                            600: '#0d9488',
                        }
                    }
                }
            }
        }
    </script>
    <style>
        body { font-family: 'Inter', system-ui, sans-serif; }

        .bg-grid {
            background-image:
                linear-gradient(rgba(255,255,255,0.02) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.02) 1px, transparent 1px);
            background-size: 64px 64px;
        }

        .glow-teal {
            box-shadow: 0 0 80px rgba(20, 184, 166, 0.08), 0 0 160px rgba(20, 184, 166, 0.04);
        }

        .gradient-bg {
            background: linear-gradient(145deg, #0a0e1a 0%, #111827 40%, #0f1629 70%, #0a0e1a 100%);
        }

        .glass-card {
            background: rgba(255, 255, 255, 0.03);
            border: 1px solid rgba(255, 255, 255, 0.06);
            backdrop-filter: blur(12px);
        }

        .glass-card:hover {
            background: rgba(255, 255, 255, 0.05);
            border-color: rgba(20, 184, 166, 0.15);
        }

        @keyframes subtle-shift {
            0%, 100% { opacity: 0.4; transform: translate(0, 0) scale(1); }
            50% { opacity: 0.6; transform: translate(-10px, 10px) scale(1.05); }
        }
        .animate-glow { animation: subtle-shift 12s ease-in-out infinite; }
    </style>
</head>
<body class="gradient-bg bg-grid text-white min-h-screen flex flex-col antialiased">

    {{-- Ambient glow --}}
    <div class="fixed inset-0 pointer-events-none overflow-hidden" aria-hidden="true">
        <div class="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] rounded-full bg-teal-500/[0.04] blur-[120px] animate-glow"></div>
        <div class="absolute bottom-[-15%] left-[-5%] w-[500px] h-[500px] rounded-full bg-teal-400/[0.03] blur-[100px] animate-glow" style="animation-delay: 4s;"></div>
    </div>

    {{-- Main content --}}
    <main class="relative z-10 flex-1 flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">

        {{-- Hero --}}
        <section class="w-full max-w-3xl mx-auto text-center pt-20 sm:pt-28 lg:pt-36 pb-16">
            {{-- Badge --}}
            <div class="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-teal-500/20 bg-teal-500/[0.06] mb-8">
                <span class="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                <span class="text-xs font-medium tracking-wide text-teal-400 uppercase">Coming Soon</span>
            </div>

            <h1 class="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6">
                <span class="text-white">RankTomorrow is</span><br>
                <span class="bg-gradient-to-r from-teal-400 to-teal-500 bg-clip-text text-transparent">Launching Soon.</span>
            </h1>

            <p class="text-lg sm:text-xl text-gray-300 font-medium max-w-2xl mx-auto mb-4">
                AI-powered SEO automation built to engineer topical authority and scalable search growth.
            </p>

            <p class="text-sm sm:text-base text-gray-500 max-w-xl mx-auto mb-12 leading-relaxed">
                We're finalizing the automation engine that transforms keyword research into structured content systems.
            </p>

            {{-- Waitlist form --}}
            <form
                method="POST"
                action="{{ route('waitlist.store') ?? '#' }}"
                class="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto mb-4"
            >
                @csrf
                <label for="email" class="sr-only">Email address</label>
                <input
                    id="email"
                    name="email"
                    type="email"
                    required
                    placeholder="you@company.com"
                    class="w-full sm:flex-1 h-12 px-4 rounded-lg bg-white/[0.05] border border-white/10 text-white placeholder-gray-500 text-sm focus:outline-none focus:ring-2 focus:ring-teal-500/40 focus:border-teal-500/40 transition"
                >
                <button
                    type="submit"
                    class="w-full sm:w-auto h-12 px-6 rounded-lg bg-teal-500 hover:bg-teal-400 text-brand-950 font-semibold text-sm transition-colors whitespace-nowrap cursor-pointer"
                >
                    Join the Waitlist
                </button>
            </form>
            <p class="text-xs text-gray-600">No spam. Early access only.</p>
        </section>

        {{-- Feature cards --}}
        <section class="w-full max-w-4xl mx-auto pb-20 sm:pb-28">
            <div class="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-5">

                {{-- Card 1 --}}
                <article class="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300">
                    <div class="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5">
                        <svg class="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M9.813 15.904 9 18.75l-.813-2.846a4.5 4.5 0 0 0-3.09-3.09L2.25 12l2.846-.813a4.5 4.5 0 0 0 3.09-3.09L9 5.25l.813 2.846a4.5 4.5 0 0 0 3.09 3.09L15.75 12l-2.846.813a4.5 4.5 0 0 0-3.09 3.09ZM18.259 8.715 18 9.75l-.259-1.035a3.375 3.375 0 0 0-2.455-2.456L14.25 6l1.036-.259a3.375 3.375 0 0 0 2.455-2.456L18 2.25l.259 1.035a3.375 3.375 0 0 0 2.455 2.456L21.75 6l-1.036.259a3.375 3.375 0 0 0-2.455 2.456Z" />
                        </svg>
                    </div>
                    <h3 class="text-white font-semibold text-sm mb-2">AI Keyword Clustering</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">Generate structured topical authority maps automatically.</p>
                </article>

                {{-- Card 2 --}}
                <article class="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300">
                    <div class="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5">
                        <svg class="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6A2.25 2.25 0 0 1 6 3.75h2.25A2.25 2.25 0 0 1 10.5 6v2.25a2.25 2.25 0 0 1-2.25 2.25H6a2.25 2.25 0 0 1-2.25-2.25V6ZM3.75 15.75A2.25 2.25 0 0 1 6 13.5h2.25a2.25 2.25 0 0 1 2.25 2.25V18a2.25 2.25 0 0 1-2.25 2.25H6A2.25 2.25 0 0 1 3.75 18v-2.25ZM13.5 6a2.25 2.25 0 0 1 2.25-2.25H18A2.25 2.25 0 0 1 20.25 6v2.25A2.25 2.25 0 0 1 18 10.5h-2.25a2.25 2.25 0 0 1-2.25-2.25V6ZM13.5 15.75a2.25 2.25 0 0 1 2.25-2.25H18a2.25 2.25 0 0 1 2.25 2.25V18A2.25 2.25 0 0 1 18 20.25h-2.25a2.25 2.25 0 0 1-2.25-2.25v-2.25Z" />
                        </svg>
                    </div>
                    <h3 class="text-white font-semibold text-sm mb-2">Content Architecture Engine</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">Create SEO-ready outlines and internal linking systems.</p>
                </article>

                {{-- Card 3 --}}
                <article class="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300">
                    <div class="w-10 h-10 rounded-xl bg-teal-500/10 flex items-center justify-center mb-5">
                        <svg class="w-5 h-5 text-teal-400" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="1.5">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182M2.985 19.644l3.181-3.182" />
                        </svg>
                    </div>
                    <h3 class="text-white font-semibold text-sm mb-2">Automation Workflows</h3>
                    <p class="text-gray-500 text-sm leading-relaxed">Turn strategy into repeatable publishing systems.</p>
                </article>

            </div>
        </section>

    </main>

    {{-- Footer --}}
    <footer class="relative z-10 border-t border-white/[0.04] py-8 px-4">
        <div class="max-w-4xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
            <span class="text-sm font-semibold text-gray-400 tracking-tight">RankTomorrow</span>
            <span class="text-xs text-gray-600">&copy; {{ date('Y') }} RankTomorrow. All rights reserved.</span>
        </div>
    </footer>

</body>
</html>
