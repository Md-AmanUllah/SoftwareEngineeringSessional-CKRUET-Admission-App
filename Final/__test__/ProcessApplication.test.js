import React from 'react';
import { render, fireEvent,waitFor } from '@testing-library/react-native';
import ProcessApplication from '../src/ProcessApplication';
import {firebase} from '../config';
import { NavigationContainer } from '@react-navigation/native';

jest.mock('@react-navigation/native', () => ({
  ...jest.requireActual('@react-navigation/native'),
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

// Mock the firebase library
jest.mock('../config', () => ({
  firebase: {
    firestore: jest.fn(() => ({
      collection: jest.fn(() => ({
        onSnapshot: jest.fn(),
        doc: jest.fn(() => ({
          delete: jest.fn(),
        })),
      })),
    })),
  },
}));

describe('ProcessApplication', () => {
  it('renders the table with correct data', async () => {
    // Set up mock data
    const mockData = [
      { roll: '123', name: 'John Doe', gpa: '3.5', payment: 'Paid' },
      { roll: '456', name: 'Jane Smith', gpa: '3.9', payment: 'Not paid' },
    ];

    // Set up mock onSnapshot function
    const onSnapshotMock = jest.fn((callback) => {
      callback({
        forEach: (callback) => {
          mockData.forEach((data) => {
            callback({
              id: 'some-id',
              data: () => data,
            });
          });
        },
      });
    });
    firebase.firestore().collection().onSnapshot = onSnapshotMock;

    const { getByText } = render(<ProcessApplication />);

    // Check that the table header is rendered
    expect(getByText('Roll')).toBeDefined();
    expect(getByText('Name')).toBeDefined();
    expect(getByText('GPA')).toBeDefined();
    expect(getByText('Payment')).toBeDefined();
    expect(getByText('Accept/Reject')).toBeDefined();

   
  });


  
});
