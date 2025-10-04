import React, { useState } from 'react';
import SplashScreen from './components/SplashScreen';
import OnboardingScreen from './components/OnboardingScreen';
import ChatInterface from './components/ChatInterface';
import PrivacyModal from './components/PrivacyModal';
import './App.css';

function App() {
  const [currentScreen, setCurrentScreen] = useState('splash');
  const [userValues, setUserValues] = useState([]);
  const [processingMode, setProcessingMode] = useState('cloud');
  const [showPrivacyModal, setShowPrivacyModal] = useState(false);
  const [reflections, setReflections] = useState([]);

  const handleStart = () => {
    setCurrentScreen('onboarding');
  };

  const handleOnboardingComplete = (values) => {
    setUserValues(values);
    setCurrentScreen('chat');
  };

  const handleSkipOnboarding = () => {
    setCurrentScreen('chat');
  };

  const handleSaveReflection = (reflection) => {
    setReflections([...reflections, {
      ...reflection,
      timestamp: new Date().toISOString()
    }]);
  };

  return (
    <div className="App min-h-screen bg-neutral-warm">
      {currentScreen === 'splash' && (
        <SplashScreen onStart={handleStart} />
      )}
      
      {currentScreen === 'onboarding' && (
        <OnboardingScreen 
          onComplete={handleOnboardingComplete}
          onSkip={handleSkipOnboarding}
        />
      )}
      
      {currentScreen === 'chat' && (
        <ChatInterface 
          userValues={userValues}
          processingMode={processingMode}
          onSaveReflection={handleSaveReflection}
          reflections={reflections}
          onOpenPrivacy={() => setShowPrivacyModal(true)}
        />
      )}

      {showPrivacyModal && (
        <PrivacyModal
          processingMode={processingMode}
          onProcessingModeChange={setProcessingMode}
          onClose={() => setShowPrivacyModal(false)}
          reflections={reflections}
          onDeleteAll={() => setReflections([])}
        />
      )}
    </div>
  );
}

export default App;
