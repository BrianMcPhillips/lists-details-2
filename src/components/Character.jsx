import React from 'react';
import PropTypes from 'prop-types';

const Character = ({ 
  name,
  status,
  species,
  image 
}) => (
  <h2>{name}</h2>
  <h4>{status}</h4>
  <h3>{species</h3>
  <img src={image} alt={name} />
);

Character.propTypes = {
  name: PropTypes.string.isRequired,
  status: PropTypes.string.isRequired,
  species: PropTypes.string.isRequired,
  image: PropTypes.string.isRequired
};

export default Character;
