import React from 'react';
import tabHome from '../assets/tab-home.svg';
import tabSearch from '../assets/tab-search.svg';
import tabMessage from '../assets/tab-message.svg';
import tabSettings from '../assets/tab-settings.svg';

export default function TabBar({ activeTab, onTabChange }) {
  const tabs = [
    { id: 'home', label: 'Home', icon: tabHome },
    { id: 'search', label: 'Search', icon: tabSearch },
    { id: 'messages', label: 'Messages', icon: tabMessage },
    { id: 'settings', label: 'Setting', icon: tabSettings },
  ];

  return (
    <div className="w-full bg-white border-t border-gray-100/80 shadow-[0px_-4px_16px_rgba(0,0,0,0.03)] pt-2 pb-6 px-6 z-20">
      <div className="flex items-center justify-between max-w-sm mx-auto">
        {tabs.map((tab) => {
          const isActive = activeTab === tab.id;
          return (
            <button
              key={tab.id}
              onClick={() => onTabChange(tab.id)}
              className="flex items-center justify-center transition-all duration-200 cursor-pointer"
            >
              {isActive ? (
                <div className="flex items-center gap-2 bg-[#3629B7] text-white px-4 py-2 rounded-full shadow-sm">
                  <svg className="w-4 h-4 fill-white" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
                  </svg>
                  <span className="text-xs font-semibold tracking-wide">
                    {tab.label}
                  </span>
                </div>
              ) : (
                <div className="p-2.5 rounded-full hover:bg-gray-100 transition-colors">
                  <img
                    src={tab.icon}
                    alt={tab.label}
                    className="w-5 h-5 object-contain opacity-60 hover:opacity-100 transition-opacity"
                  />
                </div>
              )}
            </button>
          );
        })}
      </div>

      {/* iOS Home Indicator Bar */}
      <div className="w-32 h-1 bg-gray-300 rounded-full mx-auto mt-3" />
    </div>
  );
}
