import { render, screen } from '@testing-library/react';
import App from './App';

test('renders AltruisticXAI splash screen', () => {
  render(<App />);
  const element = screen.getByText(/AltruisticXAI/i);
  expect(element).toBeInTheDocument();
});

test('renders tagline', () => {
  render(<App />);
  const tagline = screen.getByText(/Reflect. Decide. Grow./i);
  expect(tagline).toBeInTheDocument();
});

test('renders start button', () => {
  render(<App />);
  const button = screen.getByText(/Begin Your Reflection/i);
  expect(button).toBeInTheDocument();
});
