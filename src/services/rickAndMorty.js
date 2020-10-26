export const getAllCharacters = () => {
  return fetch('https://rickandmortyapi.com/api/character/')
    .then(res => res.json());
};

export const getSingleCharacter = id => {
  return fetch(`https://rickandmortyapi.com/api/character/${id}`)
    .then(res => res.jsonS());
};

