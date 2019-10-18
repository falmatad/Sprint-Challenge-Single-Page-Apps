import React, { useEffect, useState } from "react";
import axios from "axios";
import CharacterCard from "./CharacterCard";
import styled from "styled-components";

export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [characters, setCharacters] = useState([]);
  const [query, setQuery] = useState("");
  const [filteredCharacters, setFilteredCharacters] = useState([]);
  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    axios.get("https://rickandmortyapi.com/api/character/")
      .then(response => {
        setCharacters(response.data.results);
        setFilteredCharacters(response.data.results)
        console.log(response.data.results);
      })
      .catch(error => {
				console.log(error);
			});
  }, []);
  useEffect(() => {
    setFilteredCharacters(
      characters.filter(element =>
        element.name.toLowerCase().includes(query.toLowerCase())
      )
    )
  }, [characters, query])
  const handleInputChange = event => {
    setQuery(event.target.value);
  }
    const CharacterPage = styled.div`
        display:flex;
        justify-content: space-evenly;
        flex-wrap: wrap;
        align-items: space-evenly;
  `;
  return (
    <section className="character-list">
      <form className="search">
        <input
          type="text"
          onChange={handleInputChange}
          value={query}
          name="name"
          tabIndex="0"
          className="prompt search-name"
          placeholder="search by name"
          autoComplete="off"
        />
      </form>
      <CharacterPage>
			{filteredCharacters.map((character, index) => {
				return <CharacterCard key={index} character={character} />
      })}
      </CharacterPage>
		</section>
  );
}
