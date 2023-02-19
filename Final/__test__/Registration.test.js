import React from 'react';
import { render, fireEvent } from '@testing-library/react-native';
import Registration from '../src/Registration';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe('Registration', () => {
  test.only('renders correctly', () => {
    const { getByPlaceholderText, getByText,getByTestId } = render(<Registration />);
    expect(getByPlaceholderText('Email')).toBeTruthy();
    expect(getByPlaceholderText('Name')).toBeTruthy();
    expect(getByPlaceholderText('HSC Roll')).toBeTruthy();
    expect(getByPlaceholderText('Password')).toBeTruthy();
    expect(getByTestId('Register')).toBeTruthy();
    expect(getByText('Already have an account? Login Now')).toBeTruthy();
  });

  it('calls registerUser when Register button is pressed', () => {
    const registerUser = jest.fn();
    const { getByTestId } = render(<Registration registerUser={registerUser} />);
    fireEvent.changeText(getByTestId('Email'), 'test@example.com');
    fireEvent.changeText(getByTestId('Name'), 'Test User');
    fireEvent.changeText(getByTestId('HSC Roll'), '123456');
    fireEvent.changeText(getByTestId('Password'), 'password');
    fireEvent.press(getByTestId('Register'));
    expect(registerUser).toHaveBeenCalled();
  });

  it('updates email, name, roll, and password state when text inputs are changed', () => {
    const { getByPlaceholderText,getByTestId } = render(<Registration />);
    fireEvent.changeText(getByTestId('Email'), 'test@test.com');
    fireEvent.changeText(getByTestId('Name'), 'Test User');
    fireEvent.changeText(getByTestId('HSC Roll'), '123456');
    fireEvent.changeText(getByTestId('Password'), 'password');
    expect(getByTestId('Email').props.value).toBe('test@test.com');
    expect(getByTestId('Name').props.value).toBe('Test User');
    expect(getByTestId('HSC Roll').props.value).toBe('123456');
    expect(getByTestId('Password').props.value).toBe('password');
  });
});
