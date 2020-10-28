import React from 'react';
import { render, screen, waitFor } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';
import { getSingleCharacter } from '../services/rickAndMorty';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../services/rickAndMorty.js');

describe('Main list container', () => {
  it('displays a list of characters', async() => {
    getSingleCharacter.mockResolvedValue([
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
    render(
      <MemoryRouter> 
        <CharacterDetail /> 
      </MemoryRouter>
    );

    const characters = await screen.findByTestId('detail');
    return waitFor(() => {
      expect(characters).not.toBeEmptyDOMElement();
    });
  });
});
