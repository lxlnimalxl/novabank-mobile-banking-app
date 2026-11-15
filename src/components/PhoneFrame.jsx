import React from 'react';

export default function PhoneFrame({
  children,
  activeScreen,
  onScreenChange,
  screensList,
}) {
  return (
    <div className="min-h-screen bg-[#0B0F19] flex flex-col lg:flex-row items-center justify-center p-0 sm:p-6 lg:p-12 relative overflow-hidden font-['Plus_Jakarta_Sans',sans-serif]">
      {/* Background Ambient Glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3629B7]/25 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-[#FF4267]/15 rounded-full blur-[120px] pointer-events-none" />

      {/* Desktop Left Info & Screen Switcher Panel */}
      <div className="hidden lg:flex flex-col justify-between max-w-sm mr-12 text-white z-10 py-6">
        <div>
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs font-semibold text-[#52D5BA] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#52D5BA] animate-pulse" />
            International Portfolio #2
          </div>

          <h1 className="text-4xl font-extrabold tracking-tight leading-tight">
            iBank <span className="text-[#A8A3D7]">FinPay</span>
          </h1>
          <p className="text-sm text-gray-400 mt-3 leading-relaxed">
            1:1 Pixel-Perfect implementation of the modern Mobile Banking &
            E-Money Management App UI Kit from Figma.
          </p>

          {/* Screen Switcher */}
          <div className="mt-8">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block mb-3">
              Explore App Screens
            </span>
            <div className="flex flex-col gap-2">
              {screensList.map((screen) => (
                <button
                  key={screen.id}
                  onClick={() => onScreenChange(screen.id)}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                    activeScreen === screen.id
                      ? 'bg-[#3629B7] text-white shadow-lg shadow-[#3629B7]/40 translate-x-1'
                      : 'bg-white/5 text-gray-300 hover:bg-white/10 hover:text-white'
                  }`}
                >
                  <span className="flex items-center gap-2.5">
                    <span>{screen.icon}</span>
                    <span>{screen.label}</span>
                  </span>
                  <span className="text-xs opacity-60 font-mono">
                    {screen.figmaNode}
                  </span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Tech Stack Badges */}
        <div className="mt-8 pt-6 border-t border-white/10 flex flex-wrap gap-2 text-[11px] text-gray-400 font-mono">
          <span className="px-2.5 py-1 bg-white/5 rounded-md border border-white/10">React 19</span>
          <span className="px-2.5 py-1 bg-white/5 rounded-md border border-white/10">Tailwind v4</span>
          <span className="px-2.5 py-1 bg-white/5 rounded-md border border-white/10">Figma 1:1</span>
          <span className="px-2.5 py-1 bg-white/5 rounded-md border border-white/10">PWA Ready</span>
        </div>
      </div>

      {/* Mobile / Device Frame Container */}
      <div className="relative z-20 w-full sm:w-[395px] flex-shrink-0">
        {/* iPhone Frame on sm+ screens */}
        <div className="w-full sm:w-[375px] sm:h-[812px] bg-white sm:rounded-[50px] shadow-2xl sm:shadow-[0_25px_70px_rgba(0,0,0,0.6)] sm:border-[10px] sm:border-[#1E293B] overflow-hidden flex flex-col relative mx-auto">
          {/* Hardware Dynamic Island Notch (Only on sm+) */}
          <div className="hidden sm:flex absolute top-3 left-1/2 -translate-x-1/2 w-[110px] h-[26px] bg-black rounded-full z-40 items-center justify-end px-3">
            <div className="w-3 h-3 rounded-full bg-[#111] ring-1 ring-white/10" />
          </div>

          {/* Screen Content Viewport */}
          <div className="flex-grow flex flex-col overflow-y-auto no-scrollbar relative min-h-screen sm:min-h-0">
            {children}
          </div>
        </div>
      </div>

      {/* Mobile Screen Switcher Bar (Visible on mobile/tablet) */}
      <div className="lg:hidden w-full max-w-sm mt-4 px-4 flex gap-2 overflow-x-auto no-scrollbar py-2 z-20">
        {screensList.map((screen) => (
          <button
            key={screen.id}
            onClick={() => onScreenChange(screen.id)}
            className={`px-3 py-2 rounded-xl text-xs font-semibold whitespace-nowrap transition-all cursor-pointer ${
              activeScreen === screen.id
                ? 'bg-[#3629B7] text-white shadow-md'
                : 'bg-white/10 text-gray-300'
            }`}
          >
            {screen.icon} {screen.label}
          </button>
        ))}
      </div>
    </div>
  );
}
