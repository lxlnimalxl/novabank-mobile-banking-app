import React, { useState } from 'react';
import StatusBar from '../StatusBar';
import avatarPush from '../../assets/avatar-push.png';

export default function SettingsScreen({ onBack, onLogout }) {
  const [touchIdEnabled, setTouchIdEnabled] = useState(true);

  return (
    <div className="w-full min-h-full bg-white flex flex-col justify-between overflow-x-hidden pb-6">
      {/* 1. Header with Royal Indigo background */}
      <div className="w-full bg-[#3629B7] px-6 pb-12 relative">
        <StatusBar theme="light" />

        <div className="flex items-center gap-4 mt-2">
          <button
            onClick={onBack}
            className="p-1 -ml-1 text-white hover:text-white/80 transition-colors cursor-pointer"
            aria-label="Back"
          >
            <svg
              className="w-6 h-6 stroke-current stroke-2 fill-none"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <h2 className="text-xl font-bold text-white">Setting</h2>
        </div>
      </div>

      {/* 2. White Profile & Settings Body */}
      <div className="w-full bg-white rounded-t-[32px] -mt-8 pt-0 px-6 flex-grow flex flex-col">
        {/* Floating Avatar & User Info */}
        <div className="flex flex-col items-center -mt-12">
          <div className="w-24 h-24 rounded-full overflow-hidden border-4 border-white shadow-lg">
            <img
              src={avatarPush}
              alt="Push Puttichai"
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="text-lg font-bold text-[#3629B7] mt-3">
            Push Puttichai
          </h3>
          <span className="text-xs text-gray-400">Premium Account Verified</span>
        </div>

        {/* Settings Menu List */}
        <div className="mt-8 flex flex-col divide-y divide-gray-100 max-w-[327px] mx-auto w-full">
          {/* Password */}
          <div className="py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 px-2 rounded-xl transition-colors">
            <span className="text-sm font-semibold text-[#343434]">Password</span>
            <svg
              className="w-5 h-5 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Touch ID Toggle */}
          <div className="py-4 flex items-center justify-between px-2">
            <span className="text-sm font-semibold text-[#343434]">Touch ID / Face ID</span>
            <button
              onClick={() => setTouchIdEnabled(!touchIdEnabled)}
              className={`w-11 h-6 rounded-full transition-colors relative cursor-pointer ${
                touchIdEnabled ? 'bg-[#3629B7]' : 'bg-gray-200'
              }`}
            >
              <span
                className={`w-5 h-5 bg-white rounded-full shadow-xs absolute top-0.5 transition-transform ${
                  touchIdEnabled ? 'left-5.5' : 'left-0.5'
                }`}
              />
            </button>
          </div>

          {/* Languages */}
          <div className="py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 px-2 rounded-xl transition-colors">
            <span className="text-sm font-semibold text-[#343434]">Languages</span>
            <div className="flex items-center gap-1.5 text-xs text-gray-400 font-medium">
              <span>English (US)</span>
              <svg
                className="w-4 h-4 text-gray-300"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </div>

          {/* App Information */}
          <div className="py-4 flex items-center justify-between cursor-pointer hover:bg-gray-50 px-2 rounded-xl transition-colors">
            <span className="text-sm font-semibold text-[#343434]">App information</span>
            <svg
              className="w-5 h-5 text-gray-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </div>

          {/* Customer Care */}
          <div className="py-4 flex items-center justify-between px-2">
            <span className="text-sm font-semibold text-[#343434]">Customer care</span>
            <span className="text-sm font-bold text-gray-400 font-mono">19008989</span>
          </div>

          {/* Sign Out */}
          <div className="pt-6">
            <button
              onClick={onLogout}
              className="w-full py-3 text-sm font-bold text-[#FF4267] border border-[#FF4267]/30 rounded-[14px] hover:bg-[#FF4267]/10 transition-colors cursor-pointer"
            >
              Sign Out
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
