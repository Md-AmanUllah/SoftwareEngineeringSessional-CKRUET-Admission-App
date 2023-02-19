import React from 'react';
import { render } from '@testing-library/react-native';
import {firebase} from '../config';
import * as Print from 'expo-print';
import * as Sharing from 'expo-sharing';

import handledownload from './handledownload';

jest.mock('expo-print');
jest.mock('expo-sharing');

describe('handledownload', () => {
  it('should download and share the admit card for a given roll number', async () => {
    // Set up mock data
    const mockQuerySnapshot = {
      size: 1,
      forEach: (callback) => {
        const documentSnapshot = { data: () => ({
          regno: '123456',
          passingyear: '2021',
          gpa: '4.0',
          presentadd: '123 Main St',
          Permanentadd: '456 Elm St',
        })};
        callback(documentSnapshot);
      },
    };
    const mockCollectionRef = {
      where: jest.fn(() => ({
        get: jest.fn(() => Promise.resolve(mockQuerySnapshot)),
      })),
    };
    firebase.firestore = jest.fn(() => ({
      collection: jest.fn(() => mockCollectionRef),
    }));

    // Set up mock functions
    Print.printToFileAsync = jest.fn(() => Promise.resolve({
      uri: 'file://path/to/admit-card.pdf',
    }));
    Sharing.shareAsync = jest.fn(() => Promise.resolve());

    // Call the function with a mock roll number
    await handledownload('123');

    // Check that the data was fetched from firebase
    expect(mockCollectionRef.where).toHaveBeenCalledWith('roll', '==', '123');
    expect(mockQuerySnapshot.forEach).toHaveBeenCalled();

    // Check that the admit card HTML was generated and printed to a file
    expect(Print.printToFileAsync).toHaveBeenCalled();
    expect(Print.printToFileAsync.mock.calls[0][0].html).toContain('<h1>Admit Card</h1>');
    expect(Print.printToFileAsync.mock.calls[0][0].html).toContain('<p><strong>Name:</strong>');
    expect(Print.printToFileAsync.mock.calls[0][0].base64).toBeFalsy();

    // Check that the file was shared
    expect(Sharing.shareAsync).toHaveBeenCalledWith('file://path/to/admit-card.pdf');
  });
});
