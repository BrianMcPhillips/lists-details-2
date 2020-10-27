import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Character from '../components/Characters/Character';
import { getSingleCharacter } from '../services/rickAndMorty';

const CharacterDetail = () => {
  const [character, setCharacter] = useState([]);

  const { id } = useParams();
  useEffect(() => {
    getSingleCharacter(id)
      .then(character => setCharacter(character));
  }, []);
  return (
    <Character {...character} />
  );
};

export default CharacterDetail;
