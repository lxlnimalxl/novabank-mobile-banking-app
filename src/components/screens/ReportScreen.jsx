import React, { useState } from 'react';
import StatusBar from '../StatusBar';
import cardsStack from '../../assets/cards-stack.png';

export default function ReportScreen({ onBack }) {
  const [selectedMonth, setSelectedMonth] = useState('Apr');

  const chartData = [
    { month: 'Jan', upper: 45, lower: 30 },
    { month: 'Feb', upper: 65, lower: 40 },
    { month: 'Mar', upper: 90, lower: 55 },
    { month: 'Apr', upper: 55, lower: 35 },
    { month: 'May', upper: 70, lower: 45 },
    { month: 'Jun', upper: 60, lower: 40 },
  ];

  const transactions = [
    {
      group: 'Today',
      items: [
        {
          id: 1,
          name: 'Water Bill',
          status: 'Unsuccessfully',
          amount: '- $280',
          isNegative: true,
          iconBg: 'bg-[#3629B7]',
          iconType: 'water',
        },
      ],
    },
    {
      group: 'Yesterday',
      items: [
        {
          id: 2,
          name: 'Income: Salary Oct',
          status: 'Direct Deposit',
          amount: '+$1200',
          isNegative: false,
          iconBg: 'bg-[#FF4267]',
          iconType: 'salary',
        },
        {
          id: 3,
          name: 'App Store Subscription',
          status: 'Successful',
          amount: '- $14.99',
          isNegative: true,
          iconBg: 'bg-[#0890FE]',
          iconType: 'app',
        },
      ],
    },
  ];

  return (
    <div className="w-full min-h-full bg-[#3629B7] flex flex-col justify-between overflow-x-hidden pb-6">
      {/* 1. Header with Back Button */}
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
          <h2 className="text-xl font-bold text-white">Transaction report</h2>
        </div>

        {/* Small card preview */}
        <div className="mt-3 w-full max-w-[327px] mx-auto">
          <img
            src={cardsStack}
            alt="Active Card"
            className="w-full h-auto object-contain drop-shadow-md"
          />
        </div>
      </div>

      {/* 2. White Analytics & History Sheet */}
      <div className="w-full bg-white rounded-t-[32px] pt-6 px-6 shadow-[0px_-8px_30px_rgba(0,0,0,0.06)] mt-2 flex-grow">
        <div className="max-w-[327px] mx-auto">
          {/* Balance Block */}
          <div className="bg-[#F8F9FE] rounded-[20px] p-5 border border-gray-100/60 shadow-xs">
            <span className="text-xs font-semibold text-gray-500 uppercase tracking-wider">
              Balance
            </span>
            <div className="flex items-baseline gap-1.5 mt-0.5">
              <span className="text-3xl font-extrabold text-[#3629B7]">1000</span>
              <span className="text-xs font-bold text-gray-400">USD</span>
            </div>

            {/* 6-Month Chart */}
            <div className="mt-6 flex items-end justify-between h-[110px] pt-2 px-1 border-b border-dashed border-gray-200">
              {chartData.map((bar) => {
                const isSelected = selectedMonth === bar.month;
                return (
                  <button
                    key={bar.month}
                    onClick={() => setSelectedMonth(bar.month)}
                    className="flex flex-col items-center gap-1.5 h-full justify-end cursor-pointer group"
                  >
                    {/* Two-tone Bar */}
                    <div className="w-2.5 flex flex-col items-center rounded-full overflow-hidden transition-all duration-300 group-hover:w-3">
                      <div
                        style={{ height: `${bar.upper}px` }}
                        className={`w-full ${
                          isSelected ? 'bg-[#3629B7]' : 'bg-[#5655B9]/70'
                        } rounded-t-full`}
                      />
                      <div
                        style={{ height: `${bar.lower}px` }}
                        className={`w-full ${
                          isSelected ? 'bg-[#FF4267]' : 'bg-[#FF4267]/60'
                        } rounded-b-full`}
                      />
                    </div>

                    {/* Month Label */}
                    <span
                      className={`text-[11px] font-bold mt-1 transition-colors ${
                        isSelected ? 'text-[#3629B7]' : 'text-gray-400'
                      }`}
                    >
                      {bar.month}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Transaction Activity Feed */}
          <div className="mt-6 flex flex-col gap-5 pb-4">
            {transactions.map((group, gIdx) => (
              <div key={gIdx}>
                <h3 className="text-xs font-bold text-gray-400 tracking-wider mb-3">
                  {group.group}
                </h3>

                <div className="flex flex-col gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.id}
                      className="flex items-center justify-between p-1 hover:bg-gray-50 rounded-xl transition-colors"
                    >
                      <div className="flex items-center gap-3">
                        <div
                          className={`w-11 h-11 rounded-[14px] ${item.iconBg} flex items-center justify-center text-white shadow-xs`}
                        >
                          {item.iconType === 'water' && (
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                              <path d="M12 2.69l5.66 5.66a8 8 0 11-11.31 0z" />
                            </svg>
                          )}
                          {item.iconType === 'salary' && (
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                              <path d="M20 6h-2.18c.11-.31.18-.65.18-1 0-1.66-1.34-3-3-3-1.05 0-1.96.54-2.5 1.35l-.5.65-.5-.65C10.96 2.54 10.05 2 9 2 7.34 2 6 3.34 6 5c0 .35.07.69.18 1H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2z" />
                            </svg>
                          )}
                          {item.iconType === 'app' && (
                            <svg className="w-5 h-5 fill-current" viewBox="0 0 24 24">
                              <path d="M4 6h16v12H4z" />
                            </svg>
                          )}
                        </div>

                        <div>
                          <h4 className="text-sm font-bold text-[#343434]">
                            {item.name}
                          </h4>
                          <span className="text-xs text-gray-400 font-medium">
                            {item.status}
                          </span>
                        </div>
                      </div>

                      <span
                        className={`text-sm font-extrabold ${
                          item.isNegative ? 'text-[#FF4267]' : 'text-[#3629B7]'
                        }`}
                      >
                        {item.amount}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
