import React from 'react';
import { render, cleanup } from '@testing-library/react';
import App from './App';
import { getAllCharacters } from '../../services/rickAndMorty';

jest.mock('../../services/rickAndMorty.js');

describe('App component', () => {
  afterEach(() => cleanup());
  it('renders App', () => {
    getAllCharacters.mockResolvedValue([
      {
        name: 'test',
        status: 'test',
        species: 'test',
        image: 'https://www.placecage.com/200/200'
      },
      {
        name: 'test2',
        status: 'test2',
        species: 'test2',
        image: 'https://www.placecage.com/200/200'
      }
    ]);
    const { asFragment } = render(<App />);
    expect(asFragment()).toMatchSnapshot();
  });
});
