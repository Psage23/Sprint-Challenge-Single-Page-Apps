import React, { useEffect, useState } from "react";
import axios from 'axios';

const CharacterList=props => {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);

  useEffect(() => {
    const getCharacter = () => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get(`http://rickandmortyapi.com/api/character/`)
    .then(response => {
      setCharacters(response.data.results);
      console.log(response.data.results)
    })
    .catch(error => {
      console.error(error);
    })
    }
    getCharacter();
  }, []);

  return (
    <section className="character-list">
        {characters.map((character, index) => {
          return(
            <CharacterDetails
            key = {index}
            name = {character.name}
            status = {character.status}
            species = {character.species}
            />
          )
        })}
    </section>
  );
}

function CharacterDetails({character}){
  const {name, status, species } = character;
  return (
    <div className="name-card">
      <h2>{name}</h2>
      <div className="status">
        Status: <em>{status}</em>
      </div>
      <div className="species">
        Species: <strong>{species}</strong>
      </div>

      {species.map(e => (
        <div key={species} className="character-specie">
          {species}
        </div>
      ))}
    </div>
  )
}

export default CharacterList;