export const rippleScripts = [
  {
    id: 1,
    category: 'Work',
    question: 'Do you prioritize speed or accuracy today?',
    optionA: {
      label: 'Speed',
      value: 'speed',
      reflection: 'You picked speed → faster output, but accuracy may suffer. Is this aligned with your long-term goals?',
      valueUpheld: 'Efficiency',
      valueStrained: 'Precision',
      potentialRipple: 'Quick delivery may require rework later'
    },
    optionB: {
      label: 'Accuracy',
      value: 'accuracy',
      reflection: 'You chose accuracy → more reliable results, but progress may be slower. Does this match your current priorities?',
      valueUpheld: 'Quality',
      valueStrained: 'Speed',
      potentialRipple: 'Thorough work builds long-term trust'
    }
  },
  {
    id: 2,
    category: 'Health',
    question: 'Do you push through fatigue or rest?',
    optionA: {
      label: 'Push Through',
      value: 'push',
      reflection: 'You chose to push → immediate progress, but you risk burnout. Is this sustainable?',
      valueUpheld: 'Determination',
      valueStrained: 'Self-care',
      potentialRipple: 'Fatigue can compound over time'
    },
    optionB: {
      label: 'Rest',
      value: 'rest',
      reflection: 'You chose rest → slower progress now, but healthier energy later. Do you feel okay with that trade-off?',
      valueUpheld: 'Well-being',
      valueStrained: 'Productivity',
      potentialRipple: 'Recovery enables sustained performance'
    }
  },
  {
    id: 3,
    category: 'Study',
    question: 'Do you review old material or learn something new?',
    optionA: {
      label: 'Review Old Material',
      value: 'review',
      reflection: 'Reviewing strengthens your foundation; new learning expands scope but may feel less secure. Which do you value more today?',
      valueUpheld: 'Mastery',
      valueStrained: 'Exploration',
      potentialRipple: 'Deep understanding creates confidence'
    },
    optionB: {
      label: 'Learn Something New',
      value: 'learn_new',
      reflection: 'Learning new material expands your knowledge; reviewing deepens what you know. What serves your goals better right now?',
      valueUpheld: 'Growth',
      valueStrained: 'Consolidation',
      potentialRipple: 'New knowledge opens unexpected doors'
    }
  },
  {
    id: 4,
    category: 'Personal Growth',
    question: 'Do you say yes to this opportunity or protect your time?',
    optionA: {
      label: 'Say Yes',
      value: 'yes',
      reflection: 'Saying yes expands experiences; saying no protects your focus. Which matters more this week?',
      valueUpheld: 'Opportunity',
      valueStrained: 'Boundaries',
      potentialRipple: 'New experiences can reshape your path'
    },
    optionB: {
      label: 'Protect Your Time',
      value: 'no',
      reflection: 'Protecting your time preserves focus; saying yes brings variety. Are you at peace with this choice?',
      valueUpheld: 'Focus',
      valueStrained: 'Flexibility',
      potentialRipple: 'Clear boundaries enable deeper work'
    }
  }
];

export const getRandomScript = () => {
  return rippleScripts[Math.floor(Math.random() * rippleScripts.length)];
};

export const getScriptByCategory = (category) => {
  return rippleScripts.find(script => script.category === category);
};
