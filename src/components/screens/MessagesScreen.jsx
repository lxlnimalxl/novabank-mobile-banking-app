import React, { useState } from 'react';
import StatusBar from '../StatusBar';

export default function MessagesScreen({ onBack }) {
  const [activeFilter, setActiveFilter] = useState('all');

  const messages = [
    {
      id: 1,
      category: 'security',
      title: 'Security Alert: New Sign-in',
      content: 'Your account was logged in from iPhone 16 Pro in London, UK.',
      time: '10m ago',
      unread: true,
    },
    {
      id: 2,
      category: 'promo',
      title: 'Cashback Credited: +$25.00',
      content: 'You received 5% cashback on your Amazon Platinum Visa card.',
      time: '2h ago',
      unread: true,
    },
    {
      id: 3,
      category: 'statement',
      title: 'October Statement Ready',
      content: 'Your monthly statement for period Oct 1 - Oct 31 is now downloadable.',
      time: '1d ago',
      unread: false,
    },
    {
      id: 4,
      category: 'rates',
      title: 'Foreign Exchange Rate Notice',
      content: 'EUR/USD rate changed by +1.4% today. Check currency rates in app.',
      time: '3d ago',
      unread: false,
    },
  ];

  const filtered = activeFilter === 'all'
    ? messages
    : messages.filter(m => m.category === activeFilter);

  return (
    <div className="w-full min-h-full bg-white flex flex-col justify-between overflow-x-hidden pb-6">
      {/* 1. Header */}
      <div className="w-full px-6 pb-2">
        <StatusBar theme="dark" />

        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-4">
            <button
              onClick={onBack}
              className="p-1 -ml-1 text-[#343434] hover:text-[#3629B7] transition-colors cursor-pointer"
              aria-label="Back"
            >
              <svg
                className="w-6 h-6 stroke-current stroke-2 fill-none"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
              </svg>
            </button>
            <h2 className="text-xl font-bold text-[#343434]">Messages</h2>
          </div>
          <span className="text-xs font-semibold text-[#3629B7] cursor-pointer hover:underline">
            Clear all
          </span>
        </div>

        {/* Filters */}
        <div className="flex gap-2 mt-4 overflow-x-auto no-scrollbar">
          {['all', 'security', 'promo', 'statement'].map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveFilter(cat)}
              className={`px-3.5 py-1.5 rounded-full text-xs font-semibold capitalize transition-all cursor-pointer ${
                activeFilter === cat
                  ? 'bg-[#3629B7] text-white shadow-2xs'
                  : 'bg-gray-100 text-gray-500 hover:bg-gray-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {/* 2. Message List */}
      <div className="px-6 mt-4 flex-grow flex flex-col gap-3">
        {filtered.map((msg) => (
          <div
            key={msg.id}
            className={`p-4 rounded-[18px] border transition-all ${
              msg.unread
                ? 'bg-[#F8F9FE] border-[#3629B7]/20 shadow-xs'
                : 'bg-white border-gray-100 hover:border-gray-200'
            }`}
          >
            <div className="flex items-center justify-between mb-1">
              <span className="text-xs font-bold text-[#343434] flex items-center gap-1.5">
                {msg.unread && (
                  <span className="w-2 h-2 rounded-full bg-[#FF4267]" />
                )}
                {msg.title}
              </span>
              <span className="text-[10px] text-gray-400 font-medium">
                {msg.time}
              </span>
            </div>
            <p className="text-xs text-gray-500 leading-relaxed pl-3.5">
              {msg.content}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
