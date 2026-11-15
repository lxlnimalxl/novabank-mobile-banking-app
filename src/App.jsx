import React, { useState } from 'react';
import PhoneFrame from './components/PhoneFrame';
import TabBar from './components/TabBar';

import HomeScreen from './components/screens/HomeScreen';
import TransferScreen from './components/screens/TransferScreen';
import ReportScreen from './components/screens/ReportScreen';
import CardDetailScreen from './components/screens/CardDetailScreen';
import SettingsScreen from './components/screens/SettingsScreen';
import MessagesScreen from './components/screens/MessagesScreen';

import TransferSuccessModal from './components/modals/TransferSuccessModal';
import ActionSheetModal from './components/modals/ActionSheetModal';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState('home');
  const [activeTab, setActiveTab] = useState('home');
  const [transferReceipt, setTransferReceipt] = useState(null);
  const [actionSheetType, setActionSheetType] = useState(null);

  const screensList = [
    { id: 'home', label: 'Home Dashboard', icon: '🏠', figmaNode: '2:22909' },
    { id: 'transfer', label: 'Transfer Money', icon: '💸', figmaNode: '113:934' },
    { id: 'report', label: 'Transaction Report', icon: '📊', figmaNode: '122:3520' },
    { id: 'card-detail', label: 'Credit Card & Bills', icon: '💳', figmaNode: '2:22620' },
    { id: 'settings', label: 'App Settings', icon: '⚙️', figmaNode: '104:3705' },
    { id: 'messages', label: 'Messages & Alerts', icon: '🔔', figmaNode: '104:2499' },
  ];

  const handleScreenChange = (screenId) => {
    setCurrentScreen(screenId);
    if (['home', 'messages', 'settings'].includes(screenId)) {
      setActiveTab(screenId);
    }
  };

  const handleTabChange = (tabId) => {
    setActiveTab(tabId);
    if (tabId === 'home') setCurrentScreen('home');
    if (tabId === 'messages') setCurrentScreen('messages');
    if (tabId === 'settings') setCurrentScreen('settings');
    if (tabId === 'search') setCurrentScreen('report');
  };

  const handleTransferSuccess = (receiptData) => {
    setTransferReceipt(receiptData);
  };

  return (
    <PhoneFrame
      activeScreen={currentScreen}
      onScreenChange={handleScreenChange}
      screensList={screensList}
    >
      <div className="flex-grow flex flex-col justify-between h-full bg-white relative">
        {/* Active Screen View */}
        <div className="flex-grow overflow-y-auto no-scrollbar">
          {currentScreen === 'home' && (
            <HomeScreen
              onNavigate={(screen) => handleScreenChange(screen)}
              onNotificationClick={() => handleScreenChange('messages')}
              onCardAction={(type) => setActionSheetType(type)}
            />
          )}

          {currentScreen === 'transfer' && (
            <TransferScreen
              onBack={() => handleScreenChange('home')}
              onTransferSuccess={handleTransferSuccess}
            />
          )}

          {currentScreen === 'report' && (
            <ReportScreen onBack={() => handleScreenChange('home')} />
          )}

          {currentScreen === 'card-detail' && (
            <CardDetailScreen
              onBack={() => handleScreenChange('home')}
              onPayAction={() => handleScreenChange('home')}
            />
          )}

          {currentScreen === 'settings' && (
            <SettingsScreen
              onBack={() => handleScreenChange('home')}
              onLogout={() => handleScreenChange('home')}
            />
          )}

          {currentScreen === 'messages' && (
            <MessagesScreen onBack={() => handleScreenChange('home')} />
          )}
        </div>

        {/* Persistent Bottom Tab Bar */}
        <TabBar activeTab={activeTab} onTabChange={handleTabChange} />
      </div>

      {/* Transfer Receipt Modal */}
      {transferReceipt && (
        <TransferSuccessModal
          data={transferReceipt}
          onClose={() => {
            setTransferReceipt(null);
            handleScreenChange('home');
          }}
        />
      )}

      {/* Quick Action Sheet Modal */}
      {actionSheetType && (
        <ActionSheetModal
          type={actionSheetType}
          onClose={() => setActionSheetType(null)}
          onSuccess={(title, amount) => {
            console.log(`Action ${title} for ${amount} completed`);
          }}
        />
      )}
    </PhoneFrame>
  );
}
