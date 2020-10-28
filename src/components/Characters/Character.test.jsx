import React from 'react';
import { render } from '@testing-library/react';
import Character from './Character';

describe('Character component', () => {
  it('should render a Character to the page', () => {
    const { asFragment } = render(<Character 
      name="Test McTest"
      image="http://www.placecage.com/200/200"
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
