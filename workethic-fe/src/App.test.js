import { render, screen } from '@testing-library/react';
import { BrowserRouter, Router } from 'react-router-dom';
import App from './App';
import Login from './Pages/Login';

test('renders login in nav', () => {
  render(<BrowserRouter><Login/></BrowserRouter>);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});