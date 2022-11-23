import { render, screen } from '@testing-library/react';
import App from './App';
import Login from './Pages/Login';

test('renders login in nav', () => {
  render(<Login />);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});
