import React, { useState } from 'react';
import StatusBar from '../StatusBar';
import cardsStack from '../../assets/cards-stack.png';

export default function CardDetailScreen({ onBack, onPayAction }) {
  const [paid, setPaid] = useState(false);

  const expenses = [
    {
      id: 1,
      title: 'Buy Camera',
      date: '02/11/2018',
      amount: '- $1200',
      iconBg: 'bg-[#3629B7]',
      type: 'camera',
    },
    {
      id: 2,
      title: 'Buy Television',
      date: '02/11/2018',
      amount: '- $1200',
      iconBg: 'bg-[#FF4267]',
      type: 'tv',
    },
    {
      id: 3,
      title: 'Buy Camera',
      date: '02/11/2018',
      amount: '- $1200',
      iconBg: 'bg-[#0890FE]',
      type: 'camera',
    },
    {
      id: 4,
      title: 'Buy Television',
      date: '02/11/2018',
      amount: '- $1200',
      iconBg: 'bg-[#FFAF2A]',
      type: 'tv',
    },
  ];

  const handlePay = () => {
    setPaid(true);
    setTimeout(() => {
      setPaid(false);
      onPayAction();
    }, 1500);
  };

  return (
    <div className="w-full min-h-full bg-[#3629B7] flex flex-col justify-between overflow-x-hidden pb-6">
      {/* 1. Header */}
      <div className="w-full px-6 pb-2">
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
          <h2 className="text-xl font-bold text-white">Credit card</h2>
        </div>

        {/* Card Component */}
        <div className="mt-3 w-full max-w-[327px] mx-auto">
          <img
            src={cardsStack}
            alt="Credit card"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>
      </div>

      {/* 2. White Details Sheet */}
      <div className="w-full bg-white rounded-t-[32px] pt-7 px-6 shadow-[0px_-8px_30px_rgba(0,0,0,0.06)] mt-2 flex-grow flex flex-col justify-between">
        <div className="max-w-[327px] mx-auto w-full">
          {/* Expenses List */}
          <div className="flex flex-col divide-y divide-gray-100">
            {expenses.map((exp) => (
              <div
                key={exp.id}
                className="py-3 flex items-center justify-between first:pt-0"
              >
                <div className="flex items-center gap-3.5">
                  <div
                    className={`w-11 h-11 rounded-[14px] ${exp.iconBg} flex items-center justify-center text-white shadow-xs`}
                  >
                    {exp.type === 'camera' && (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M12 12m-3.2 0a3.2 3.2 0 1 0 6.4 0 3.2 3.2 0 1 0 -6.4 0M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9z" />
                      </svg>
                    )}
                    {exp.type === 'tv' && (
                      <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                        <path d="M21 3H3c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h5v2h8v-2h5c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 14H3V5h18v12z" />
                      </svg>
                    )}
                  </div>

                  <div>
                    <h4 className="text-sm font-bold text-[#343434]">
                      {exp.title}
                    </h4>
                    <span className="text-xs text-gray-400 font-medium">
                      {exp.date}
                    </span>
                  </div>
                </div>

                <span className="text-sm font-extrabold text-[#FF4267]">
                  {exp.amount}
                </span>
              </div>
            ))}
          </div>

          {/* Total Row */}
          <div className="mt-4 pt-4 border-t border-gray-100 flex items-center justify-between">
            <span className="text-sm font-extrabold text-[#343434] tracking-wide">
              TOTAL
            </span>
            <span className="text-xl font-extrabold text-[#FF4267]">
              -$3100
            </span>
          </div>
        </div>

        {/* Action Button */}
        <div className="max-w-[327px] mx-auto w-full mt-6 mb-2">
          <button
            onClick={handlePay}
            disabled={paid}
            className={`w-full py-3.5 text-base font-bold rounded-[14px] shadow-sm active:scale-98 transition-all cursor-pointer ${
              paid
                ? 'bg-emerald-500 text-white'
                : 'bg-[#A8A3D7] hover:bg-[#3629B7] text-white hover:shadow-md'
            }`}
          >
            {paid ? '✓ Paid Successfully' : 'Pay'}
          </button>
        </div>
      </div>
    </div>
  );
}
