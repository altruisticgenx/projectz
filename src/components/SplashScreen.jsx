import React from 'react';
import { Sparkles } from 'lucide-react';

const SplashScreen = ({ onStart }) => {
  return (
    <div className="min-h-screen gradient-bg flex items-center justify-center p-4">
      <div className="text-center animate-fade-in">
        <div className="mb-8 flex justify-center">
          <div className="w-24 h-24 bg-white rounded-full flex items-center justify-center shadow-lg">
            <Sparkles className="w-12 h-12 text-deep-purple" />
          </div>
        </div>
        
        <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-4">
          AltruisticXAI
        </h1>
        
        <p className="text-2xl md:text-3xl text-white/90 mb-12 font-light">
          Reflect. Decide. Grow.
        </p>
        
        <button
          onClick={onStart}
          className="bg-white text-deep-purple px-8 py-4 rounded-button text-lg font-semibold 
                     hover:shadow-card-hover transition-all duration-300 transform hover:scale-105"
        >
          Begin Your Reflection
        </button>
        
        <p className="mt-8 text-white/70 text-sm max-w-md mx-auto">
          A calm space for ethical reflection and values-driven decision making
        </p>
      </div>
    </div>
  );
};

export default SplashScreen;
