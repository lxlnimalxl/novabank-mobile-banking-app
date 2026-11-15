import React, { useState } from 'react';

export default function ActionSheetModal({ type, onClose, onSuccess }) {
  const [amount, setAmount] = useState('50.00');
  const [target, setTarget] = useState('+1 (555) 234-8921');
  const [success, setSuccess] = useState(false);

  if (!type) return null;

  const getTitle = () => {
    switch (type) {
      case 'withdraw':
        return 'ATM & Cash Withdraw';
      case 'mobile':
        return 'Mobile Prepaid Recharge';
      case 'bill':
        return 'Pay Utility Bill';
      case 'save':
        return 'Save Online Deposit';
      default:
        return 'Quick Action';
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSuccess(true);
    setTimeout(() => {
      setSuccess(false);
      onSuccess(getTitle(), amount);
      onClose();
    }, 1200);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center p-0 sm:p-4 bg-black/60 backdrop-blur-xs animate-fade-in">
      <div className="w-full sm:max-w-sm bg-white rounded-t-[32px] sm:rounded-[28px] p-6 shadow-2xl relative">
        {/* Handle bar on mobile */}
        <div className="w-12 h-1 bg-gray-300 rounded-full mx-auto mb-4 sm:hidden" />

        <div className="flex items-center justify-between">
          <h3 className="text-lg font-bold text-[#343434]">{getTitle()}</h3>
          <button
            onClick={onClose}
            className="p-1 text-gray-400 hover:text-gray-600 rounded-full cursor-pointer"
          >
            ✕
          </button>
        </div>

        {success ? (
          <div className="py-8 text-center">
            <div className="w-12 h-12 bg-emerald-50 text-emerald-500 rounded-full mx-auto flex items-center justify-center mb-2">
              ✓
            </div>
            <h4 className="text-base font-bold text-[#343434]">
              Transaction Completed!
            </h4>
            <p className="text-xs text-gray-400 mt-1">
              ${amount} processed successfully.
            </p>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="mt-4 flex flex-col gap-3.5">
            <div>
              <label className="text-xs font-semibold text-gray-400 block mb-1">
                {type === 'mobile'
                  ? 'Phone Number'
                  : type === 'bill'
                  ? 'Biller Code / Account'
                  : 'Destination Account'}
              </label>
              <input
                type="text"
                required
                value={target}
                onChange={(e) => setTarget(e.target.value)}
                className="w-full px-3.5 py-3 border border-gray-200 rounded-[14px] text-sm text-[#343434] outline-none focus:border-[#3629B7]"
              />
            </div>

            <div>
              <label className="text-xs font-semibold text-gray-400 block mb-1">
                Amount
              </label>
              <div className="relative">
                <input
                  type="number"
                  required
                  step="1"
                  value={amount}
                  onChange={(e) => setAmount(e.target.value)}
                  className="w-full px-3.5 py-3 pl-8 border border-gray-200 rounded-[14px] text-sm font-bold text-[#343434] outline-none focus:border-[#3629B7]"
                />
                <span className="absolute left-3 top-1/2 -translate-y-1/2 font-bold text-gray-400">
                  $
                </span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-2 w-full py-3.5 bg-[#3629B7] hover:bg-[#2c2196] text-white font-bold text-sm rounded-[14px] shadow-sm active:scale-98 transition-all cursor-pointer"
            >
              Confirm Payment
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
