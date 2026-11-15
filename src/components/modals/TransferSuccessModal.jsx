import React from 'react';

export default function TransferSuccessModal({ data, onClose }) {
  if (!data) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="w-full max-w-[340px] bg-white rounded-[28px] p-6 text-center shadow-2xl relative">
        {/* Animated Checkmark Circle */}
        <div className="w-16 h-16 bg-emerald-50 text-emerald-500 rounded-full mx-auto flex items-center justify-center mb-4 ring-8 ring-emerald-50/50">
          <svg className="w-8 h-8 stroke-current stroke-3 fill-none" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
          </svg>
        </div>

        <h3 className="text-xl font-bold text-[#343434]">
          Transfer Successfully!
        </h3>
        <p className="text-xs text-gray-400 mt-1">
          Your payment has been sent instantly
        </p>

        {/* Amount Display */}
        <div className="my-5 py-3.5 bg-gray-50 rounded-2xl border border-gray-100/80">
          <span className="text-xs text-gray-400 font-semibold block uppercase">
            Amount Transferred
          </span>
          <span className="text-3xl font-extrabold text-[#3629B7] mt-0.5 block">
            ${data.amount || '250.00'}
          </span>
        </div>

        {/* Receipt Details */}
        <div className="flex flex-col gap-2.5 text-xs text-left mb-6 px-1">
          <div className="flex justify-between">
            <span className="text-gray-400">Recipient</span>
            <span className="font-bold text-[#343434]">{data.name}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Card Number</span>
            <span className="font-mono text-[#343434]">{data.cardNumber}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Reference No.</span>
            <span className="font-mono text-gray-500">{data.ref}</span>
          </div>
          <div className="flex justify-between">
            <span className="text-gray-400">Date</span>
            <span className="text-gray-500">{data.date}</span>
          </div>
        </div>

        {/* Back to Home Button */}
        <button
          onClick={onClose}
          className="w-full py-3.5 bg-[#3629B7] hover:bg-[#2c2196] text-white font-bold text-sm rounded-[14px] shadow-md shadow-[#3629B7]/25 active:scale-98 transition-all cursor-pointer"
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
