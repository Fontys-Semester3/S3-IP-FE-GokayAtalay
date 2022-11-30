import { render, screen, cleanup, } from '@testing-library/react';
import UserService from '../Services/UserService';
import Navbar from '../Components/Navbar';
afterEach(cleanup);

test('no user in session', () => {
    const service = new UserService();
    const user = service.getUserSession();

    expect(user).toBeNull();
})

test('navbar shows login menu-item when not logged in', () => {
    render(<Navbar/>);

    expect(screen.getByText('Login')).toBeInTheDocument();
})

test('navbar shows tasks after login', () => {
    const service = new UserService();
    service.setUserSession(JSON.stringify({name: 'Gökay', sub: '97gh9gn0ih09u6ojhotyij956', email: 'gokayatalay@gmail.com'}));

    render(<Navbar/>);
    expect(screen.getByText('Tasks')).toBeInTheDocument();
})

  
test('user in session', () => {
    const service = new UserService();
    const user = service.setUserSession({name: 'Gökay', sub: '97gh9gn0ih09u6ojhotyij956', email: 'gokayatalay@gmail.com'});
  
    expect(user).not.toBeNull();
})

test('user not in session after logout', () => {
    const service = new UserService();
    service.setUserSession({name: 'Gökay', sub: '97gh9gn0ih09u6ojhotyij956', email: 'gokayatalay@gmail.com'});
    service.deleteUserSession();

    const user = service.getUserSession();
    expect(user).toBeNull();
})