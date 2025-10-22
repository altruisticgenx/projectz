import { useState } from 'react';
import { Check } from 'lucide-react';

const valueOptions = [
  { id: 'speed', label: 'Speed', description: 'Quick results and fast iteration' },
  { id: 'quality', label: 'Quality', description: 'Thorough and reliable outcomes' },
  { id: 'balance', label: 'Balance', description: 'Harmony between competing priorities' },
  { id: 'growth', label: 'Growth', description: 'Learning and expanding capabilities' },
  { id: 'focus', label: 'Focus', description: 'Deep work on what matters most' },
  { id: 'wellbeing', label: 'Well-being', description: 'Health and sustainable energy' }
];

export default function Onboarding({ onComplete }) {
  const [selectedValues, setSelectedValues] = useState([]);
  const [step, setStep] = useState(1);

  const toggleValue = (valueId) => {
    setSelectedValues(prev =>
      prev.includes(valueId)
        ? prev.filter(id => id !== valueId)
        : [...prev, valueId]
    );
  };

  const handleContinue = () => {
    if (step === 1) {
      setStep(2);
    } else {
      onComplete(selectedValues);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-pastel-neutral to-pastel-blue/30">
      <div className="max-w-3xl w-full space-y-8 animate-fade-in">
        <div className="text-center space-y-2">
          <div className="text-sm font-medium text-pastel-purple">
            Step {step} of 2
          </div>
          <h2 className="text-3xl font-bold text-gray-800">
            {step === 1 ? 'What values matter to you?' : 'Almost there!'}
          </h2>
          <p className="text-gray-600">
            {step === 1 
              ? 'Select 2-3 values that resonate most (optional—you can skip this)'
              : 'Your compass is ready to help you reflect'
            }
          </p>
        </div>

        {step === 1 ? (
          <div className="grid md:grid-cols-2 gap-4">
            {valueOptions.map(value => (
              <button
                key={value.id}
                onClick={() => toggleValue(value.id)}
                className={`card text-left transition-all duration-300 ${
                  selectedValues.includes(value.id)
                    ? 'ring-2 ring-pastel-purple bg-pastel-purple/10'
                    : 'hover:shadow-xl'
                }`}
              >
                <div className="flex items-start justify-between">
                  <div className="flex-1">
                    <h3 className="font-semibold text-gray-800 mb-1">
                      {value.label}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {value.description}
                    </p>
                  </div>
                  {selectedValues.includes(value.id) && (
                    <Check className="text-pastel-purple ml-2 flex-shrink-0" size={24} />
                  )}
                </div>
              </button>
            ))}
          </div>
        ) : (
          <div className="card max-w-lg mx-auto text-center space-y-6">
            <div className="text-6xl">🧭</div>
            <div>
              <h3 className="font-semibold text-gray-800 mb-2">
                Your values have been set
              </h3>
              {selectedValues.length > 0 ? (
                <div className="flex flex-wrap gap-2 justify-center">
                  {selectedValues.map(id => {
                    const value = valueOptions.find(v => v.id === id);
                    return (
                      <span
                        key={id}
                        className="px-3 py-1 bg-pastel-purple/20 text-pastel-purple rounded-full text-sm font-medium"
                      >
                        {value.label}
                      </span>
                    );
                  })}
                </div>
              ) : (
                <p className="text-gray-600">
                  You can explore all values as you reflect
                </p>
              )}
            </div>
          </div>
        )}

        <div className="flex gap-4 justify-center">
          <button
            onClick={() => onComplete(selectedValues)}
            className="px-6 py-3 rounded-2xl font-medium text-gray-600 hover:text-gray-800 transition-colors"
          >
            Skip
          </button>
          <button
            onClick={handleContinue}
            className="btn-primary"
          >
            {step === 1 ? 'Continue' : 'Start Reflecting'}
          </button>
        </div>

        <div className="flex justify-center gap-2">
          <div className={`w-2 h-2 rounded-full ${step === 1 ? 'bg-pastel-purple' : 'bg-gray-300'}`} />
          <div className={`w-2 h-2 rounded-full ${step === 2 ? 'bg-pastel-purple' : 'bg-gray-300'}`} />
        </div>
      </div>
    </div>
  );
}
