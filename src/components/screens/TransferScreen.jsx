import React, { useState } from 'react';
import StatusBar from '../StatusBar';
import beneficiaryEmma from '../../assets/beneficiary-emma.png';
import beneficiaryJustin from '../../assets/beneficiary-justin.png';

export default function TransferScreen({ onBack, onTransferSuccess }) {
  const [selectedTxType, setSelectedTxType] = useState('card');
  const [selectedBeneficiary, setSelectedBeneficiary] = useState(null);
  const [saveBeneficiary, setSaveBeneficiary] = useState(true);

  const [formData, setFormData] = useState({
    name: 'Emma',
    cardNumber: '4756 8920 1029 9018',
    amount: '250.00',
    content: 'Monthly investment fund',
  });

  const beneficiaries = [
    { id: 1, name: 'Emma', avatar: beneficiaryEmma, card: '4756 •••• 9018' },
    { id: 2, name: 'Justin', avatar: beneficiaryJustin, card: '5219 •••• 3412' },
  ];

  const handleSelectBeneficiary = (b) => {
    setSelectedBeneficiary(b.id);
    setFormData({
      ...formData,
      name: b.name,
      cardNumber: b.card.replace('••••', '7721'),
    });
  };

  const handleConfirm = (e) => {
    e.preventDefault();
    onTransferSuccess({
      ...formData,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      ref: 'TXN-' + Math.floor(100000000 + Math.random() * 900000000),
    });
  };

  return (
    <div className="w-full min-h-full bg-white flex flex-col justify-between overflow-x-hidden pb-6">
      {/* 1. Header with back button */}
      <div className="w-full bg-white px-6 pb-4">
        <StatusBar theme="dark" />

        <div className="flex items-center gap-4 mt-2">
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
          <h2 className="text-xl font-bold text-[#343434]">Transfer</h2>
        </div>

        {/* Account / Card Selector Dropdown */}
        <div className="mt-4">
          <div className="w-full flex items-center justify-between px-4 py-3.5 border border-gray-200 rounded-[14px] bg-white text-sm text-gray-500 shadow-2xs hover:border-[#3629B7] transition-colors cursor-pointer">
            <span className="font-medium text-[#343434]">
              Amazon Platinium (4756 •••• 9018)
            </span>
            <svg
              className="w-4 h-4 text-gray-400"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 9l4-4 4 4m0 6l-4 4-4-4" />
            </svg>
          </div>
        </div>
      </div>

      {/* 2. Choose Transaction Type */}
      <div className="px-6 mt-1">
        <h3 className="text-xs font-semibold text-gray-400 tracking-wider">
          Choose transaction
        </h3>

        <div className="grid grid-cols-3 gap-3 mt-3">
          {/* Option 1: Card number */}
          <button
            type="button"
            onClick={() => setSelectedTxType('card')}
            className={`p-3 rounded-[16px] text-left flex flex-col justify-between aspect-square transition-all duration-200 cursor-pointer ${
              selectedTxType === 'card'
                ? 'bg-[#3629B7] text-white shadow-md'
                : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
            }`}
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M20 4H4c-1.11 0-1.99.89-1.99 2L2 18c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V6c0-1.11-.89-2-2-2zm0 14H4v-6h16v6zm0-10H4V6h16v2z" />
            </svg>
            <span className="text-[11px] font-semibold leading-tight">
              Transfer via card number
            </span>
          </button>

          {/* Option 2: Same Bank */}
          <button
            type="button"
            onClick={() => setSelectedTxType('same-bank')}
            className={`p-3 rounded-[16px] text-left flex flex-col justify-between aspect-square transition-all duration-200 cursor-pointer ${
              selectedTxType === 'same-bank'
                ? 'bg-[#3629B7] text-white shadow-md'
                : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
            }`}
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
            </svg>
            <span className="text-[11px] font-semibold leading-tight">
              Transfer to the same bank
            </span>
          </button>

          {/* Option 3: Other Bank */}
          <button
            type="button"
            onClick={() => setSelectedTxType('other-bank')}
            className={`p-3 rounded-[16px] text-left flex flex-col justify-between aspect-square transition-all duration-200 cursor-pointer ${
              selectedTxType === 'other-bank'
                ? 'bg-[#3629B7] text-white shadow-md'
                : 'bg-gray-50 text-gray-400 hover:bg-gray-100'
            }`}
          >
            <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
              <path d="M4 10v7h3v-7H4zm6 0v7h3v-7h-3zM2 22h19v-3H2v3zm14-12v7h3v-7h-3zm-4.5-9L2 6v2h19V6l-9.5-5z" />
            </svg>
            <span className="text-[11px] font-semibold leading-tight">
              Transfer to another bank
            </span>
          </button>
        </div>
      </div>

      {/* 3. Beneficiaries List */}
      <div className="px-6 mt-5">
        <div className="flex items-center justify-between">
          <h3 className="text-xs font-semibold text-gray-400 tracking-wider">
            Choose beneficiary
          </h3>
          <button className="text-xs font-semibold text-[#3629B7] hover:underline cursor-pointer">
            Find beneficiary
          </button>
        </div>

        <div className="flex items-center gap-3 mt-3 overflow-x-auto no-scrollbar py-1">
          {/* Add New Beneficiary Button */}
          <div className="flex flex-col items-center gap-1.5 flex-shrink-0 cursor-pointer group">
            <div className="w-[60px] h-[60px] rounded-[18px] bg-gray-50 border border-dashed border-gray-300 flex items-center justify-center text-gray-400 group-hover:border-[#3629B7] group-hover:text-[#3629B7] transition-all">
              <svg className="w-6 h-6 stroke-current stroke-2 fill-none" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4v16m8-8H4" />
              </svg>
            </div>
            <span className="text-xs font-medium text-gray-500">New</span>
          </div>

          {/* Existing Beneficiaries */}
          {beneficiaries.map((b) => (
            <button
              key={b.id}
              onClick={() => handleSelectBeneficiary(b)}
              className={`flex flex-col items-center gap-1.5 flex-shrink-0 p-1 rounded-2xl transition-all cursor-pointer ${
                selectedBeneficiary === b.id
                  ? 'ring-2 ring-[#3629B7] ring-offset-2'
                  : ''
              }`}
            >
              <div className="w-[56px] h-[56px] rounded-[18px] overflow-hidden shadow-xs hover:scale-105 transition-transform">
                <img
                  src={b.avatar}
                  alt={b.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <span className="text-xs font-semibold text-[#343434]">
                {b.name}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* 4. Transfer Form */}
      <form onSubmit={handleConfirm} className="px-6 mt-4 flex flex-col gap-3">
        {/* Name input */}
        <div>
          <input
            type="text"
            required
            placeholder="Name"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
            className="w-full px-4 py-3.5 border border-gray-200 rounded-[14px] text-sm text-[#343434] outline-none focus:border-[#3629B7] focus:ring-1 focus:ring-[#3629B7] transition-all placeholder-gray-400"
          />
        </div>

        {/* Card Number */}
        <div>
          <input
            type="text"
            required
            placeholder="Card number"
            value={formData.cardNumber}
            onChange={(e) => setFormData({ ...formData, cardNumber: e.target.value })}
            className="w-full px-4 py-3.5 border border-gray-200 rounded-[14px] text-sm text-[#343434] outline-none focus:border-[#3629B7] focus:ring-1 focus:ring-[#3629B7] transition-all placeholder-gray-400 font-mono"
          />
        </div>

        {/* Amount */}
        <div className="relative">
          <input
            type="number"
            required
            step="0.01"
            placeholder="Amount"
            value={formData.amount}
            onChange={(e) => setFormData({ ...formData, amount: e.target.value })}
            className="w-full px-4 py-3.5 pl-8 border border-gray-200 rounded-[14px] text-sm font-semibold text-[#343434] outline-none focus:border-[#3629B7] focus:ring-1 focus:ring-[#3629B7] transition-all placeholder-gray-400"
          />
          <span className="absolute left-3.5 top-1/2 -translate-y-1/2 text-gray-500 font-bold">
            $
          </span>
        </div>

        {/* Content / Memo */}
        <div>
          <input
            type="text"
            placeholder="Content"
            value={formData.content}
            onChange={(e) => setFormData({ ...formData, content: e.target.value })}
            className="w-full px-4 py-3.5 border border-gray-200 rounded-[14px] text-sm text-[#343434] outline-none focus:border-[#3629B7] focus:ring-1 focus:ring-[#3629B7] transition-all placeholder-gray-400"
          />
        </div>

        {/* Checkbox */}
        <label className="flex items-center gap-2.5 mt-1 cursor-pointer">
          <input
            type="checkbox"
            checked={saveBeneficiary}
            onChange={(e) => setSaveBeneficiary(e.target.checked)}
            className="w-4 h-4 rounded text-[#3629B7] focus:ring-[#3629B7] border-gray-300"
          />
          <span className="text-xs text-gray-500 font-medium select-none">
            Save to directory of beneficiary
          </span>
        </label>

        {/* Confirm Action Button */}
        <button
          type="submit"
          className="mt-3 w-full py-4 bg-[#3629B7] hover:bg-[#2c2196] text-white text-base font-bold rounded-[14px] shadow-lg shadow-[#3629B7]/25 active:scale-98 transition-all cursor-pointer"
        >
          Confirm
        </button>
      </form>
    </div>
  );
}
