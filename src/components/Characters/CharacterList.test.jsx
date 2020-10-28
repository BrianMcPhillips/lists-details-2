import React from 'react';
import { render } from '@testing-library/react';
import CharacterList from './CharacterList';
import { MemoryRouter } from 'react-router-dom';

describe('CharacterList component', () => {
  it('should render characters to page', () => {
    const characterStuff = [
      {
        name: 'Test 1',
        image: 'http://www.placecage.com/200/200'
      },
      {
        name: 'Test 2',
        image: 'http://www.placecage.com/300/300'
      }
    ];
    const { asFragment } = render(
      <MemoryRouter>
        <CharacterList characters={characterStuff}/>
      </MemoryRouter>
    );

    expect(asFragment()).toMatchSnapshot();
  });
});
