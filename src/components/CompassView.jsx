import { useState } from 'react';
import { Compass, BookOpen, Shield, Home } from 'lucide-react';
import ChoicePresenter from './ChoicePresenter';
import RippleCard from './RippleCard';
import ReflectionInput from './ReflectionInput';
import { getRandomScript } from '../data/rippleScripts';

export default function CompassView({ onAddReflection, onNavigate }) {
  const [currentScript, setCurrentScript] = useState(null);
  const [showRipple, setShowRipple] = useState(false);
  const [selectedChoice, setSelectedChoice] = useState(null);
  const [messages, setMessages] = useState([]);

  const handleInputSubmit = (input) => {
    // Add user message
    setMessages(prev => [...prev, { type: 'user', text: input }]);
    
    // Show a script
    const script = getRandomScript();
    setCurrentScript(script);
    setMessages(prev => [...prev, { 
      type: 'assistant', 
      text: `I sense you're thinking about ${script.category.toLowerCase()}. ${script.question}`
    }]);
  };

  const handleChoice = (choice) => {
    setSelectedChoice(choice);
    setShowRipple(true);
    
    // Save to reflections
    onAddReflection({
      id: Date.now(),
      timestamp: Date.now(),
      category: currentScript.category,
      question: currentScript.question,
      choice: choice
    });
  };

  const handleContinue = () => {
    setShowRipple(false);
    setCurrentScript(null);
    setSelectedChoice(null);
    setMessages(prev => [...prev, {
      type: 'assistant',
      text: 'What else would you like to reflect on?'
    }]);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-pastel-neutral via-white to-pastel-blue/20">
      {/* Header */}
      <header className="bg-white/80 backdrop-blur-sm border-b border-gray-200 sticky top-0 z-10">
        <div className="max-w-6xl mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center gap-3">
              <Compass className="text-pastel-purple" size={32} />
              <h1 className="text-2xl font-bold text-gray-800">Compass</h1>
            </div>
            
            <div className="flex gap-2">
              <button
                onClick={() => onNavigate('compass')}
                className="px-4 py-2 rounded-xl text-gray-600 hover:bg-pastel-neutral transition-colors"
                title="Compass"
              >
                <Home size={20} />
              </button>
              <button
                onClick={() => onNavigate('logbook')}
                className="px-4 py-2 rounded-xl text-gray-600 hover:bg-pastel-neutral transition-colors"
                title="Logbook"
              >
                <BookOpen size={20} />
              </button>
              <button
                onClick={() => onNavigate('privacy')}
                className="px-4 py-2 rounded-xl text-gray-600 hover:bg-pastel-neutral transition-colors"
                title="Privacy"
              >
                <Shield size={20} />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="max-w-4xl mx-auto px-4 py-8">
        <div className="space-y-6">
          {/* Chat Messages */}
          {messages.length > 0 && (
            <div className="space-y-4">
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div
                    className={`max-w-md px-5 py-3 rounded-2xl ${
                      message.type === 'user'
                        ? 'bg-pastel-purple text-white'
                        : 'bg-white text-gray-800 shadow-md'
                    }`}
                  >
                    {message.text}
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Welcome State */}
          {messages.length === 0 && !currentScript && (
            <div className="card text-center py-12">
              <Compass className="mx-auto mb-4 text-pastel-purple" size={64} />
              <h2 className="text-2xl font-bold text-gray-800 mb-2">
                Welcome to your Compass
              </h2>
              <p className="text-gray-600 mb-6">
                Share what&apos;s on your mind, and I&apos;ll help you explore your values
              </p>
            </div>
          )}

          {/* Choice Presenter */}
          {currentScript && !showRipple && (
            <ChoicePresenter script={currentScript} onChoice={handleChoice} />
          )}

          {/* Ripple Feedback */}
          {showRipple && selectedChoice && (
            <RippleCard choice={selectedChoice} onContinue={handleContinue} />
          )}

          {/* Input Area */}
          {!currentScript && (
            <div className="sticky bottom-4">
              <ReflectionInput 
                onSubmit={handleInputSubmit} 
                disabled={!!currentScript}
              />
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
