import React, { useState } from 'react';
import { ChevronLeft, ChevronDown, ChevronUp, Download } from 'lucide-react';

const Logbook = ({ reflections, onClose }) => {
  const [expandedIndex, setExpandedIndex] = useState(null);

  const toggleExpand = (index) => {
    setExpandedIndex(expandedIndex === index ? null : index);
  };

  const formatDate = (timestamp) => {
    const date = new Date(timestamp);
    const today = new Date();
    const yesterday = new Date(today);
    yesterday.setDate(yesterday.getDate() - 1);

    if (date.toDateString() === today.toDateString()) {
      return `Today, ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
    } else if (date.toDateString() === yesterday.toDateString()) {
      return `Yesterday, ${date.toLocaleTimeString('en-US', { hour: 'numeric', minute: '2-digit' })}`;
    } else {
      return date.toLocaleDateString('en-US', { 
        month: 'short', 
        day: 'numeric', 
        hour: 'numeric', 
        minute: '2-digit' 
      });
    }
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(reflections, null, 2);
    const dataBlob = new Blob([dataStr], { type: 'application/json' });
    const url = URL.createObjectURL(dataBlob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `reflections-${new Date().toISOString().split('T')[0]}.json`;
    link.click();
  };

  return (
    <div className="min-h-screen bg-neutral-warm">
      {/* Header */}
      <header className="bg-white shadow-sm p-4 flex items-center gap-3">
        <button
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
        >
          <ChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        <h1 className="text-xl font-display font-bold text-deep-purple">
          Reflection Memory
        </h1>
      </header>

      {/* Content */}
      <div className="max-w-4xl mx-auto p-4 space-y-4">
        {reflections.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-500 text-lg">No reflections yet</p>
            <p className="text-gray-400 mt-2">Your saved reflections will appear here</p>
          </div>
        ) : (
          <>
            {reflections.map((reflection, index) => (
              <div
                key={index}
                className="bg-white rounded-card shadow-card overflow-hidden"
              >
                <button
                  onClick={() => toggleExpand(index)}
                  className="w-full p-4 flex justify-between items-center hover:bg-gray-50 transition-colors"
                >
                  <div className="text-left">
                    <div className="text-sm text-gray-500 mb-1">
                      {formatDate(reflection.timestamp)}
                    </div>
                    <div className="font-semibold text-gray-800">
                      {reflection.script.category}: {reflection.script.question}
                    </div>
                  </div>
                  {expandedIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-gray-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-400" />
                  )}
                </button>

                {expandedIndex === index && (
                  <div className="border-t border-gray-100 p-4 space-y-3 animate-slide-down">
                    <div>
                      <span className="font-medium text-gray-700">Your choice: </span>
                      <span className="text-deep-purple">
                        {reflection.choice === reflection.script.optionA.value
                          ? reflection.script.optionA.label
                          : reflection.script.optionB.label}
                      </span>
                    </div>

                    <div className="bg-green-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-700 mb-1">Values Upheld:</div>
                      <div className="text-sm text-gray-600">
                        {reflection.script.reflections[reflection.choice].valuesUpheld.join(', ')}
                      </div>
                    </div>

                    <div className="bg-amber-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-700 mb-1">Values Strained:</div>
                      <div className="text-sm text-gray-600">
                        {reflection.script.reflections[reflection.choice].valuesStrained.join(', ')}
                      </div>
                    </div>

                    <div className="bg-blue-50 p-3 rounded-lg">
                      <div className="font-medium text-gray-700 mb-1">Reflection:</div>
                      <div className="text-sm text-gray-600">
                        {reflection.script.reflections[reflection.choice].ripple}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}

            {/* Action Buttons */}
            <div className="flex gap-3 pt-4">
              <button
                onClick={handleExport}
                className="flex-1 bg-deep-purple text-white px-6 py-3 rounded-button 
                           hover:bg-light-purple transition-colors flex items-center justify-center gap-2"
              >
                <Download className="w-5 h-5" />
                Export All
              </button>
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Logbook;
