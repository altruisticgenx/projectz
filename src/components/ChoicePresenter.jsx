import { useState } from 'react';

export default function ChoicePresenter({ script, onChoice }) {
  const [hoveredOption, setHoveredOption] = useState(null);

  return (
    <div className="w-full max-w-2xl mx-auto space-y-6 animate-fade-in">
      <div className="card">
        <div className="text-sm font-medium text-pastel-purple mb-2">
          {script.category}
        </div>
        <h3 className="text-xl font-semibold text-gray-800 mb-6">
          {script.question}
        </h3>
        
        <div className="grid md:grid-cols-2 gap-4">
          <button
            onClick={() => onChoice(script.optionA)}
            onMouseEnter={() => setHoveredOption('A')}
            onMouseLeave={() => setHoveredOption(null)}
            className={`card transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              hoveredOption === 'A' ? 'ring-2 ring-pastel-blue' : ''
            }`}
          >
            <div className="text-lg font-semibold text-gray-800 mb-2">
              {script.optionA.label}
            </div>
            <div className="text-sm text-gray-600">
              Upholds: {script.optionA.valueUpheld}
            </div>
          </button>

          <button
            onClick={() => onChoice(script.optionB)}
            onMouseEnter={() => setHoveredOption('B')}
            onMouseLeave={() => setHoveredOption(null)}
            className={`card transition-all duration-300 hover:scale-105 hover:shadow-xl ${
              hoveredOption === 'B' ? 'ring-2 ring-pastel-green' : ''
            }`}
          >
            <div className="text-lg font-semibold text-gray-800 mb-2">
              {script.optionB.label}
            </div>
            <div className="text-sm text-gray-600">
              Upholds: {script.optionB.valueUpheld}
            </div>
          </button>
        </div>
      </div>
    </div>
  );
}
