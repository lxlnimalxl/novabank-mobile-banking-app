import React, { useState, useEffect } from 'react';

export default function StatusBar({ theme = 'light' }) {
  const [time, setTime] = useState('9:09');

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const hours = now.getHours().toString().padStart(2, '0');
      const minutes = now.getMinutes().toString().padStart(2, '0');
      setTime(`${hours}:${minutes}`);
    };
    updateTime();
    const timer = setInterval(updateTime, 30000);
    return () => clearInterval(timer);
  }, []);

  const isLight = theme === 'light'; // Light text for dark/purple background, dark text for white background

  return (
    <div
      className={`w-full h-11 px-6 pt-3 flex items-center justify-between text-xs font-semibold select-none z-30 transition-colors duration-200 ${
        isLight ? 'text-white' : 'text-[#343434]'
      }`}
    >
      {/* Time */}
      <span className="font-bold tracking-tight text-[13px]">{time}</span>

      {/* Dynamic Island Pill Placeholder (subtle top notch) */}
      <div className="w-20 h-4 bg-black/20 rounded-full mx-auto hidden sm:block opacity-0" />

      {/* Status Icons: Cellular, Wifi, Battery */}
      <div className="flex items-center gap-1.5">
        {/* Cellular Signal */}
        <svg className="w-4 h-3 fill-current" viewBox="0 0 17 11">
          <rect x="0" y="8" width="2.5" height="3" rx="0.5" />
          <rect x="4" y="6" width="2.5" height="5" rx="0.5" />
          <rect x="8" y="3" width="2.5" height="8" rx="0.5" />
          <rect x="12" y="0" width="2.5" height="11" rx="0.5" />
        </svg>

        {/* Wifi Icon */}
        <svg className="w-3.5 h-3 fill-current" viewBox="0 0 16 12">
          <path d="M8 9.5a1.5 1.5 0 100 3 1.5 1.5 0 000-3zM4.5 7.5a5 5 0 017 0 .75.75 0 001.06-1.06 6.5 6.5 0 00-9.12 0 .75.75 0 001.06 1.06zM1.5 4.5a9.5 9.5 0 0113 0 .75.75 0 001.06-1.06 11 11 0 00-15.12 0 .75.75 0 001.06 1.06z" />
        </svg>

        {/* Battery */}
        <div className="flex items-center">
          <div
            className={`w-5 h-2.5 rounded-sm border px-0.5 flex items-center ${
              isLight ? 'border-white' : 'border-[#343434]'
            }`}
          >
            <div
              className={`w-3.5 h-1.5 rounded-2xs ${
                isLight ? 'bg-white' : 'bg-[#343434]'
              }`}
            />
          </div>
          <div
            className={`w-0.5 h-1 rounded-r-xs ${
              isLight ? 'bg-white' : 'bg-[#343434]'
            }`}
          />
        </div>
      </div>
    </div>
  );
}
