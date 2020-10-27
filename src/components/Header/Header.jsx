import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <h1>Rick and Morty Characters</h1>
      <Link to = "/">
        <span>Back to List</span>
      </Link>
    </>
  );
}
