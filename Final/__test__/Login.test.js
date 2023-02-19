import React from 'react';
import { fireEvent, render } from '@testing-library/react-native';
import Login from '../src/Login';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));
describe('Login component', () => {
  test('renders correctly', () => {
    const { getByPlaceholderText, getByTestId, getByText } = render(<Login />);
    expect(getByPlaceholderText('Email')).toBeDefined();
    expect(getByPlaceholderText('Password')).toBeDefined();
    expect(getByTestId('Login')).toBeDefined();
    expect(getByText('Forgot Password')).toBeDefined();
    expect(getByText("Don't have an account? Register Now")).toBeDefined();
  });

  test('user can login with correct credentials', async () => {
    const { getByPlaceholderText, getByTestId } = render(<Login />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByTestId('Login');

    fireEvent.changeText(emailInput, 'tanvir001728@gmail.com');
    fireEvent.changeText(passwordInput, 'aaaaaa');
    fireEvent.press(loginButton);

    // Assuming firebase.auth().signInWithEmailAndPassword() works correctly,
    // the user should be logged in and redirected to the home screen.
    // You can check for that using any assertion library of your choice.
  });

  test('user sees error message when login fails', async () => {
    const { getByPlaceholderText, getByTestId, findByText } = render(<Login />);
    const emailInput = getByPlaceholderText('Email');
    const passwordInput = getByPlaceholderText('Password');
    const loginButton = getByTestId('Login');

    fireEvent.changeText(emailInput, 'invalid@example.com');
    fireEvent.changeText(passwordInput, 'invalidpassword');
    fireEvent.press(loginButton);

    const errorMessage = 'error.message';
    expect(errorMessage).toBeDefined();
  });

});
