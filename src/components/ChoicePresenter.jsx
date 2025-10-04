import React from 'react';

const ChoicePresenter = ({ script, onSelect }) => {
  return (
    <div className="space-y-4">
      <p className="text-center text-gray-700 font-medium mb-6">
        Which path feels right?
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <button
          onClick={() => onSelect(script.optionA.value)}
          className="bg-white p-6 rounded-card shadow-card hover:shadow-card-hover 
                     transition-all transform hover:-translate-y-1 text-left"
        >
          <h3 className="text-xl font-display font-bold text-deep-purple mb-2">
            {script.optionA.label}
          </h3>
          <p className="text-gray-600">
            {script.optionA.description}
          </p>
        </button>

        <button
          onClick={() => onSelect(script.optionB.value)}
          className="bg-white p-6 rounded-card shadow-card hover:shadow-card-hover 
                     transition-all transform hover:-translate-y-1 text-left"
        >
          <h3 className="text-xl font-display font-bold text-deep-purple mb-2">
            {script.optionB.label}
          </h3>
          <p className="text-gray-600">
            {script.optionB.description}
          </p>
        </button>
      </div>
    </div>
  );
};

export default ChoicePresenter;
