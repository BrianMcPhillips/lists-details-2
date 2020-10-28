import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import CharacterDetail from '../components/Characters/CharacterDetail';
import { getSingleCharacter } from '../services/rickAndMorty';

const CharacterDetailPage = () => {
  const [character, setCharacter] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    getSingleCharacter(id)
      .then(character => setCharacter(character));
  }, []);
  return (
    <div data-testid="detail">
      <CharacterDetail {...character} />
    </div>
  );
};

export default CharacterDetailPage;
