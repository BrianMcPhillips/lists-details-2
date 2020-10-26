import React, { useState, useEffect } from 'react';
import CharacterList from '../components/Characters/CharacterList';
import { getAllCharacters } from '../services/rickAndMorty';

const Container = () => {
  const [characters, setEvents] = useState([]);

  useEffect(() => {
    getAllCharacters()
      .then(characters => setEvents(characters));
  }, []);

  return (
    <CharacterList characters={characters} />
  );
};

export default Container;

