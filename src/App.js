import React, { useEffect, useState } from 'react';
import styled from 'styled-components';

import Character from './components/Character';

import fetchPeople from './functions/fetchPeople';

import './App.css';

const Characters = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;



const App = () => {
  // Try to think through what state you'll need for this app before starting. Then build out
  // the state properties here.
  const [ data, setData ] = useState(null);

  // Fetch characters from the API in an effect hook. Remember, anytime you have a 
  // side effect in a component, you want to think about which state and/or props it should
  // sync up with, if any.

  useEffect(() => {
    fetchPeople()
      .then(res => res.data)
      .then(res => Array.isArray(res) ? res : res.results)
      .then(data => setData(data))
      .catch(err => console.error(err));
  }, []);

  console.log('data:', data);

  return (
    <div className="App">
      <h1 className="Header">Star Wars Characters</h1>
      <Characters>
        {Array.isArray(data) && data.map(character => (
          <Character character={character} key={character.name} />
        ))}
      </Characters>
    </div>
  );
}

export default App;
