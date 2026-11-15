import React, { useState } from 'react';
import StatusBar from '../StatusBar';
import avatarPush from '../../assets/avatar-push.png';
import cardsStack from '../../assets/cards-stack.png';

import catWallet from '../../assets/cat-wallet.svg';
import catTransfer from '../../assets/cat-transfer.svg';
import catWithdraw from '../../assets/cat-withdraw.svg';
import catMobile from '../../assets/cat-mobile.svg';
import catBill from '../../assets/cat-bill.svg';
import catPiggy from '../../assets/cat-piggy.svg';
import catCard from '../../assets/cat-card.svg';
import catReport from '../../assets/cat-report.svg';
import catBeneficiary from '../../assets/cat-beneficiary.svg';

export default function HomeScreen({ onNavigate, onNotificationClick, onCardAction }) {
  const [activeCardIndex, setActiveCardIndex] = useState(0);

  const cards = [
    {
      id: 1,
      type: 'image',
      image: cardsStack,
      name: 'John Smith',
      tier: 'Amazon Platinium',
      number: '4756 •••• •••• 9018',
      balance: '$3.469.52',
    },
    {
      id: 2,
      type: 'gradient',
      bg: 'from-[#1E293B] to-[#0F172A]',
      name: 'John Smith',
      tier: 'Titanium Black Elite',
      number: '5219 •••• •••• 3412',
      balance: '$8.240.00',
      brand: 'Mastercard',
    },
  ];

  const categories = [
    {
      id: 'account',
      title: 'Account\nand Card',
      icon: catWallet,
      action: () => onNavigate('card-detail'),
    },
    {
      id: 'transfer',
      title: 'Transfer',
      icon: catTransfer,
      action: () => onNavigate('transfer'),
    },
    {
      id: 'withdraw',
      title: 'Withdraw',
      icon: catWithdraw,
      action: () => onCardAction('withdraw'),
    },
    {
      id: 'mobile',
      title: 'Mobile\nprepaid',
      icon: catMobile,
      action: () => onCardAction('mobile'),
    },
    {
      id: 'bill',
      title: 'Pay the\nbill',
      icon: catBill,
      action: () => onCardAction('bill'),
    },
    {
      id: 'save',
      title: 'Save\nonline',
      icon: catPiggy,
      action: () => onCardAction('save'),
    },
    {
      id: 'credit-card',
      title: 'Credit\ncard',
      icon: catCard,
      action: () => onNavigate('card-detail'),
    },
    {
      id: 'report',
      title: 'Transaction\nreport',
      icon: catReport,
      action: () => onNavigate('report'),
    },
    {
      id: 'beneficiary',
      title: 'Beneficiary',
      icon: catBeneficiary,
      action: () => onNavigate('transfer'),
    },
  ];

  return (
    <div className="w-full min-h-full bg-[#3629B7] flex flex-col justify-between overflow-x-hidden relative">
      {/* 1. Header Section */}
      <div className="w-full pb-4">
        <StatusBar theme="light" />

        {/* User Profile Bar */}
        <div className="px-6 pt-3 pb-2 flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-[50px] h-[50px] rounded-full overflow-hidden border-2 border-white/40 shadow-sm cursor-pointer hover:scale-105 transition-transform">
              <img
                src={avatarPush}
                alt="Push Puttichai"
                className="w-full h-full object-cover"
              />
            </div>
            <div>
              <h2 className="text-white text-base font-semibold tracking-normal">
                Hi, Push Puttichai
              </h2>
              <span className="text-white/70 text-xs font-normal">
                Online Banking Member
              </span>
            </div>
          </div>

          {/* Notification Bell with Badge */}
          <button
            onClick={onNotificationClick}
            className="relative p-2 text-white hover:text-white/80 transition-colors cursor-pointer"
            aria-label="Notifications"
          >
            {/* Bell Icon */}
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
              />
            </svg>
            {/* Red Badge 3 */}
            <span className="absolute top-1.5 right-1 w-4 h-4 bg-[#FF4267] text-white text-[10px] font-bold rounded-full flex items-center justify-center shadow-xs">
              3
            </span>
          </button>
        </div>
      </div>

      {/* 2. Bank Cards Carousel */}
      <div className="px-6 py-2">
        <div className="relative w-full max-w-[327px] mx-auto cursor-pointer group">
          {/* Card Component */}
          {cards[activeCardIndex].type === 'image' ? (
            <div
              onClick={() => setActiveCardIndex((prev) => (prev + 1) % cards.length)}
              className="w-full transition-transform duration-300 transform group-hover:scale-102"
            >
              <img
                src={cards[0].image}
                alt="Amazon Platinum Card"
                className="w-full h-auto object-contain drop-shadow-md"
              />
            </div>
          ) : (
            <div
              onClick={() => setActiveCardIndex((prev) => (prev + 1) % cards.length)}
              className="w-full h-[200px] rounded-[24px] bg-gradient-to-br from-[#1E293B] to-[#0F172A] p-6 text-white shadow-xl flex flex-col justify-between border border-slate-700/50"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h3 className="text-xl font-bold">John Smith</h3>
                  <p className="text-xs text-slate-400 mt-1">Titanium Black Elite</p>
                </div>
                <span className="text-sm font-extrabold tracking-wider text-rose-500">
                  MASTERCARD
                </span>
              </div>
              <div>
                <p className="text-xs tracking-widest text-slate-400 mb-1">
                  5219 •••• •••• 3412
                </p>
                <p className="text-2xl font-bold tracking-tight text-white">
                  $8.240.00
                </p>
              </div>
            </div>
          )}

          {/* Card Switcher Indicator Hint */}
          <div className="flex justify-center items-center gap-1.5 mt-3">
            {cards.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  activeCardIndex === idx
                    ? 'w-4 bg-white'
                    : 'w-1.5 bg-white/40'
                }`}
              />
            ))}
          </div>
        </div>
      </div>

      {/* 3. White Category Quick Actions Sheet */}
      <div className="w-full bg-white rounded-t-[32px] pt-7 pb-6 px-6 shadow-[0px_-8px_30px_rgba(0,0,0,0.06)] mt-4 flex-grow">
        {/* 3x3 Grid matching Figma 1:1 */}
        <div className="grid grid-cols-3 gap-3.5 max-w-[327px] mx-auto">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={cat.action}
              className="bg-white rounded-[16px] p-3.5 flex flex-col items-center justify-between text-center aspect-square shadow-[0px_4px_16px_rgba(0,0,0,0.05)] border border-gray-100/70 hover:shadow-md hover:-translate-y-0.5 active:scale-96 transition-all duration-200 cursor-pointer group"
            >
              {/* Icon */}
              <div className="w-7 h-7 flex items-center justify-center mb-1.5 transition-transform duration-200 group-hover:scale-110">
                <img
                  src={cat.icon}
                  alt={cat.title}
                  className="max-h-full max-w-full object-contain"
                />
              </div>

              {/* Title */}
              <span className="text-[12px] font-semibold text-[#343434] leading-[15px] whitespace-pre-line tracking-tight">
                {cat.title}
              </span>
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
