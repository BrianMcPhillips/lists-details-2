export const getAllCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json())
    .then(json => json.results.map(character => ({
      name: character.name,
      status: character.status,
      species: character.species,
      image: character.image,
      id: character.id

    })));
};


export const getSingleCharacter = id => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.json());
};

