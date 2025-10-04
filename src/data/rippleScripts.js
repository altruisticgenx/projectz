// Sample Ripple Scripts Database
export const rippleScripts = [
  {
    id: 'work-speed-accuracy',
    category: 'Work',
    question: 'Do you prioritize speed or accuracy today?',
    optionA: {
      label: 'Move Quickly',
      description: 'Complete tasks faster, meet deadlines',
      value: 'speed'
    },
    optionB: {
      label: 'Ensure Quality',
      description: 'Take time to get details right',
      value: 'accuracy'
    },
    reflections: {
      speed: {
        valuesUpheld: ['Efficiency', 'Responsiveness'],
        valuesStrained: ['Quality assurance', 'Attention to detail'],
        ripple: 'You chose speed → faster output, but accuracy may suffer. Is this aligned with your long-term goals? Consider: Will this decision affect future work or relationships?'
      },
      accuracy: {
        valuesUpheld: ['Quality assurance', 'Attention to detail'],
        valuesStrained: ['Efficiency', 'Speed'],
        ripple: 'You chose accuracy → higher quality work, but it may take longer. Are you comfortable with the pace trade-off for better outcomes?'
      }
    }
  },
  {
    id: 'health-push-rest',
    category: 'Health',
    question: 'Do you push through fatigue or take time to rest?',
    optionA: {
      label: 'Keep Going',
      description: 'Maintain momentum, finish strong',
      value: 'push'
    },
    optionB: {
      label: 'Take a Break',
      description: 'Recharge and restore energy',
      value: 'rest'
    },
    reflections: {
      push: {
        valuesUpheld: ['Determination', 'Short-term progress'],
        valuesStrained: ['Self-care', 'Long-term sustainability'],
        ripple: 'Pushing through shows dedication but may deplete your reserves. Is immediate progress worth potential burnout?'
      },
      rest: {
        valuesUpheld: ['Self-care', 'Long-term sustainability'],
        valuesStrained: ['Short-term progress', 'Immediate goals'],
        ripple: 'You chose rest → slower progress now, but healthier energy later. Do you feel okay with that trade-off? Your body and mind will thank you in the long run.'
      }
    }
  },
  {
    id: 'learning-review-new',
    category: 'Learning',
    question: 'Do you review old material or learn something new?',
    optionA: {
      label: 'Strengthen Foundation',
      description: 'Reinforce what you know',
      value: 'review'
    },
    optionB: {
      label: 'Expand Knowledge',
      description: 'Explore new concepts',
      value: 'new'
    },
    reflections: {
      review: {
        valuesUpheld: ['Mastery', 'Solid foundation'],
        valuesStrained: ['Exploration', 'Breadth of knowledge'],
        ripple: 'Reviewing strengthens your foundation, making current knowledge more reliable. New learning expands scope but may feel less secure. Which do you value more today?'
      },
      new: {
        valuesUpheld: ['Growth', 'Curiosity'],
        valuesStrained: ['Mastery', 'Depth'],
        ripple: 'Learning something new expands your horizons but may leave gaps in fundamentals. Are you ready for the excitement of the unknown?'
      }
    }
  },
  {
    id: 'personal-yes-no',
    category: 'Personal Growth',
    question: 'Do you say yes to this opportunity or protect your time?',
    optionA: {
      label: 'Embrace Opportunity',
      description: 'Take on new experience',
      value: 'yes'
    },
    optionB: {
      label: 'Guard Your Focus',
      description: 'Maintain current priorities',
      value: 'no'
    },
    reflections: {
      yes: {
        valuesUpheld: ['Growth', 'Openness'],
        valuesStrained: ['Focus', 'Personal boundaries'],
        ripple: 'Saying yes expands experiences but may scatter your attention. Is this the right time for expansion?'
      },
      no: {
        valuesUpheld: ['Focus', 'Personal boundaries'],
        valuesStrained: ['New experiences', 'Opportunity capture'],
        ripple: 'Saying no protects your focus but might close doors. Saying yes expands experiences but dilutes attention. Which matters more this week?'
      }
    }
  }
];

// Get a random script from the database
export const getRandomScript = () => {
  const randomIndex = Math.floor(Math.random() * rippleScripts.length);
  return rippleScripts[randomIndex];
};

// Get script by ID
export const getScriptById = (id) => {
  return rippleScripts.find(script => script.id === id);
};

// Get scripts by category
export const getScriptsByCategory = (category) => {
  return rippleScripts.filter(script => script.category === category);
};
