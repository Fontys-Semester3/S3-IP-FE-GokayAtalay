import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TasksOverview from '../Components/TasksOverview';
import CreateTask from '../Pages/CreateTask';

test('renders createPage', () => {
  render(<BrowserRouter><CreateTask/></BrowserRouter>);
  const linkElement = screen.getByText("Task Title");
  expect(linkElement).toBeInTheDocument();
});
