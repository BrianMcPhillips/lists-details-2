import React from 'react';
import PropTypes from 'prop-types';
import Character from './Character';
import { Link } from 'react-router-dom';

const CharacterList = ({ characters }) => {
  const characterStuff = characters.map(character => ( 
    <li key={character.name}>
      <Link to={`/detail/${character.id}`}>
        <Character {...character} />
      </Link>
    </li>
  ));

  return (
    <ul data-testid="characters">
      {characterStuff}
    </ul>
  );
};

CharacterList.propTypes = {
  characters: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    status: PropTypes.string.isRequired,
    species: PropTypes.string.isRequired,
    image: PropTypes.string.isRequired
  })).isRequired
};

export default CharacterList;
