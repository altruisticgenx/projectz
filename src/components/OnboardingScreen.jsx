import React, { useState } from 'react';
import { ChevronRight } from 'lucide-react';

const OnboardingScreen = ({ onComplete, onSkip }) => {
  const [selectedValues, setSelectedValues] = useState([]);
  const [step] = useState(1);

  const valueOptions = [
    { id: 'speed', label: 'Speed & Efficiency', description: 'Quick results and fast execution' },
    { id: 'quality', label: 'Quality & Thoroughness', description: 'Careful attention to detail' },
    { id: 'balance', label: 'Balance & Well-being', description: 'Sustainable pace and harmony' },
    { id: 'growth', label: 'Growth & Learning', description: 'Continuous improvement' },
    { id: 'connection', label: 'Connection & Collaboration', description: 'Working with others' },
    { id: 'autonomy', label: 'Autonomy & Independence', description: 'Self-directed work' }
  ];

  const toggleValue = (valueId) => {
    setSelectedValues(prev => 
      prev.includes(valueId)
        ? prev.filter(id => id !== valueId)
        : [...prev, valueId]
    );
  };

  const handleContinue = () => {
    onComplete(selectedValues);
  };

  const totalSteps = 1;

  return (
    <div className="min-h-screen bg-gradient-bg-subtle flex items-center justify-center p-4">
      <div className="max-w-2xl w-full bg-white rounded-2xl shadow-card p-8 animate-slide-up">
        <div className="flex justify-between items-center mb-6">
          <div className="flex gap-2">
            {[...Array(totalSteps)].map((_, i) => (
              <div
                key={i}
                className={`w-8 h-2 rounded-full transition-colors ${
                  i + 1 <= step ? 'bg-deep-purple' : 'bg-gray-200'
                }`}
              />
            ))}
          </div>
          <button
            onClick={onSkip}
            className="text-neutral-gray hover:text-deep-purple transition-colors text-sm"
          >
            Skip
          </button>
        </div>

        <h2 className="text-3xl font-display font-bold text-gray-800 mb-3">
          What matters most to you?
        </h2>
        <p className="text-neutral-gray mb-8">
          Select the values that resonate with you today. You can choose multiple or skip this step.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          {valueOptions.map(option => (
            <button
              key={option.id}
              onClick={() => toggleValue(option.id)}
              className={`p-4 rounded-card text-left transition-all ${
                selectedValues.includes(option.id)
                  ? 'bg-light-purple text-white shadow-card'
                  : 'bg-gray-50 hover:bg-gray-100 text-gray-700'
              }`}
            >
              <div className="flex items-start gap-3">
                <div className={`w-5 h-5 rounded border-2 flex-shrink-0 mt-0.5 flex items-center justify-center ${
                  selectedValues.includes(option.id)
                    ? 'bg-white border-white'
                    : 'border-gray-300'
                }`}>
                  {selectedValues.includes(option.id) && (
                    <svg className="w-3 h-3 text-deep-purple" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                    </svg>
                  )}
                </div>
                <div>
                  <div className="font-semibold mb-1">{option.label}</div>
                  <div className={`text-sm ${
                    selectedValues.includes(option.id) ? 'text-white/90' : 'text-gray-500'
                  }`}>
                    {option.description}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <button
          onClick={handleContinue}
          className="w-full bg-deep-purple text-white px-6 py-3 rounded-button font-semibold 
                     hover:bg-light-purple transition-colors flex items-center justify-center gap-2"
        >
          Continue
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default OnboardingScreen;
