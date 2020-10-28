import React from 'react';
import { render } from '@testing-library/react';
import CharacterDetail from './CharacterDetail';

describe('Character component', () => {
  it('should render a Character to the page', () => {
    const { asFragment } = render(<CharacterDetail 
      name="Test McTest"
      status="mehhh"
      species="maybe human"
      image="http://www.placecage.com/200/200"
    />);

    expect(asFragment()).toMatchSnapshot();
  });
});
