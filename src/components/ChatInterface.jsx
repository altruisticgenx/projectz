import React, { useState } from 'react';
import { Menu, Shield, BookOpen } from 'lucide-react';
import ReflectionInput from './ReflectionInput';
import ChoicePresenter from './ChoicePresenter';
import RippleCard from './RippleCard';
import Logbook from './Logbook';
import { getRandomScript } from '../data/rippleScripts';

const ChatInterface = ({ 
  userValues, 
  processingMode, 
  onSaveReflection, 
  reflections,
  onOpenPrivacy 
}) => {
  const [showLogbook, setShowLogbook] = useState(false);
  const [currentScript, setCurrentScript] = useState(null);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [showRipple, setShowRipple] = useState(false);
  const [chatMessages, setChatMessages] = useState([
    { type: 'ai', text: "What's on your mind?" }
  ]);

  const handleInputSubmit = (input) => {
    // Add user message
    setChatMessages([...chatMessages, { type: 'user', text: input }]);
    
    // Get a random script and present choices
    const script = getRandomScript();
    setCurrentScript(script);
    
    // Add AI response with question
    setTimeout(() => {
      setChatMessages(prev => [
        ...prev,
        { type: 'ai', text: script.question }
      ]);
    }, 500);
  };

  const handleChoiceSelect = (choice) => {
    setSelectedChoice(choice);
    setShowRipple(true);
  };

  const handleSaveToLogbook = () => {
    if (currentScript && selectedChoice) {
      const reflection = {
        script: currentScript,
        choice: selectedChoice,
        timestamp: new Date().toISOString()
      };
      onSaveReflection(reflection);
      
      // Reset for new reflection
      setShowRipple(false);
      setCurrentScript(null);
      setSelectedChoice(null);
      setChatMessages([
        { type: 'ai', text: "Reflection saved. What else is on your mind?" }
      ]);
    }
  };

  const handleNewReflection = () => {
    setShowRipple(false);
    setCurrentScript(null);
    setSelectedChoice(null);
    setChatMessages([
      { type: 'ai', text: "Ready for another reflection. What's on your mind?" }
    ]);
  };

  if (showLogbook) {
    return (
      <Logbook
        reflections={reflections}
        onClose={() => setShowLogbook(false)}
      />
    );
  }

  return (
    <div className="min-h-screen bg-neutral-warm flex flex-col">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <button className="p-2 hover:bg-gray-100 rounded-lg transition-colors">
            <Menu className="w-6 h-6 text-gray-600" />
          </button>
          <h1 className="text-xl font-display font-bold text-deep-purple">
            AltruisticXAI
          </h1>
        </div>
        
        <div className="flex gap-2">
          <button
            onClick={onOpenPrivacy}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Privacy Settings"
          >
            <Shield className="w-6 h-6 text-gray-600" />
          </button>
          <button
            onClick={() => setShowLogbook(true)}
            className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
            title="Reflection Logbook"
          >
            <BookOpen className="w-6 h-6 text-gray-600" />
          </button>
        </div>
      </header>

      {/* Chat Area */}
      <div className="flex-1 overflow-y-auto p-4 max-w-4xl w-full mx-auto">
        <div className="space-y-4">
          {chatMessages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-md px-4 py-3 rounded-2xl ${
                  message.type === 'user'
                    ? 'bg-deep-purple text-white'
                    : 'bg-white text-gray-800 shadow-sm'
                }`}
              >
                {message.text}
              </div>
            </div>
          ))}

          {currentScript && !showRipple && (
            <div className="animate-slide-up">
              <ChoicePresenter
                script={currentScript}
                onSelect={handleChoiceSelect}
              />
            </div>
          )}

          {showRipple && currentScript && selectedChoice && (
            <div className="animate-slide-up">
              <RippleCard
                script={currentScript}
                choice={selectedChoice}
                onSave={handleSaveToLogbook}
                onNewReflection={handleNewReflection}
              />
            </div>
          )}
        </div>
      </div>

      {/* Input Area */}
      {!showRipple && (
        <div className="p-4 bg-white border-t border-gray-200">
          <div className="max-w-4xl mx-auto">
            <ReflectionInput onSubmit={handleInputSubmit} />
          </div>
        </div>
      )}
    </div>
  );
};

export default ChatInterface;
