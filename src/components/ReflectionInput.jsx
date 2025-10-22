import React, { useState } from 'react';
import { Send } from 'lucide-react';

const ReflectionInput = ({ onSubmit }) => {
  const [input, setInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      onSubmit(input);
      setInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input
        type="text"
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="What's on your mind?"
        className="flex-1 px-4 py-3 rounded-button border border-gray-300 
                   focus:outline-none focus:ring-2 focus:ring-deep-purple focus:border-transparent"
      />
      <button
        type="submit"
        disabled={!input.trim()}
        className="bg-deep-purple text-white px-6 py-3 rounded-button 
                   hover:bg-light-purple transition-colors disabled:opacity-50 
                   disabled:cursor-not-allowed flex items-center gap-2"
      >
        <Send className="w-5 h-5" />
      </button>
    </form>
  );
};

export default ReflectionInput;
