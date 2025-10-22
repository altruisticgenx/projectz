import React from 'react';
import { CheckCircle, AlertCircle, Waves, Save, RefreshCw } from 'lucide-react';

const RippleCard = ({ script, choice, onSave, onNewReflection }) => {
  const reflection = script.reflections[choice];

  return (
    <div className="bg-white rounded-2xl shadow-card p-6 space-y-6 animate-fade-in">
      <h2 className="text-2xl font-display font-bold text-deep-purple text-center">
        Your Reflection
      </h2>

      {/* Values Upheld */}
      <div className="bg-green-50 border-l-4 border-success p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <CheckCircle className="w-6 h-6 text-success flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Values Upheld</h3>
            <ul className="space-y-1">
              {reflection.valuesUpheld.map((value, index) => (
                <li key={index} className="text-gray-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-success rounded-full"></span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Values Strained */}
      <div className="bg-amber-50 border-l-4 border-warning p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <AlertCircle className="w-6 h-6 text-warning flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Values Strained</h3>
            <ul className="space-y-1">
              {reflection.valuesStrained.map((value, index) => (
                <li key={index} className="text-gray-700 flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-warning rounded-full"></span>
                  {value}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Potential Ripple */}
      <div className="bg-blue-50 border-l-4 border-info p-4 rounded-lg">
        <div className="flex items-start gap-3">
          <Waves className="w-6 h-6 text-info flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-800 mb-2">Potential Ripple</h3>
            <p className="text-gray-700 leading-relaxed">
              {reflection.ripple}
            </p>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex gap-3 pt-2">
        <button
          onClick={onSave}
          className="flex-1 bg-deep-purple text-white px-6 py-3 rounded-button 
                     hover:bg-light-purple transition-colors flex items-center justify-center gap-2"
        >
          <Save className="w-5 h-5" />
          Save to Logbook
        </button>
        <button
          onClick={onNewReflection}
          className="flex-1 bg-gray-100 text-gray-700 px-6 py-3 rounded-button 
                     hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
        >
          <RefreshCw className="w-5 h-5" />
          New Reflection
        </button>
      </div>
    </div>
  );
};

export default RippleCard;
