import { render, screen, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import TasksOverview from '../Components/TasksOverview';
import Login from '../Pages/Login';
import App from '../App';

const emptyData = [];

const data = [
  { title: "Task 1",
    body: "uihgfgnkfh fogjihofiguh joifgjhu gfoihugfohiujfgo hjoifg uhoifgujhoiufghoif huoifghoifguhf gujhofig",
    taskPriority: {
      id: 0,
      value: "No bueno"
    }
  },
  { title: "Task 2",
    body: "uihgfgnkfh fogjihofiguh joifgjhu gfoihugfohiujfgo hjoifg uhoifgujhoiufghoif huoifghoifguhf gujhofig",
    taskPriority: {
      id: 1,
      value: "Bueno"
    }},
  { title: "Task 3",
    body: "uihgfgnkfh fogjihofiguh joifgjhu gfoihugfohiujfgo hjoifg uhoifgujhoiufghoif huoifghoifguhf gujhofig",
    taskPriority: {
      id: 2,
      value: "Muy bueno"
    }}
];

test('renders login on screen', () => {
  render(<BrowserRouter><Login/></BrowserRouter>);
  const linkElement = screen.getByText(/Login/i);
  expect(linkElement).toBeInTheDocument();
});

test('renders items on screen', async () => {
  render(<TasksOverview data={data} />);

  await waitFor(() => {
    expect(screen.getByText('Task 1')).toBeInTheDocument();
    expect(screen.getByText('Task 3')).toBeInTheDocument();
    expect(screen.getByText('No bueno')).toBeInTheDocument();
    expect(screen.getByText('Bueno')).toBeInTheDocument();
    expect(screen.getByText('Muy bueno')).toBeInTheDocument();
  })
});

test('renders nothing on screen', () => {
  render(<TasksOverview data={emptyData} />);
  const Overview = screen.queryByTestId('overview-1');

  expect(Overview).not.toBeInTheDocument();
})

test('app displays login', () => {
  render(<BrowserRouter><App/></BrowserRouter>);
  expect(screen.getByText('Sign in with Google')).toBeInTheDocument();
});