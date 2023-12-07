import { useState, useContext, React } from 'react'
import { PkmnListContext } from '../../../../context/PkmnListContext';
import axios from "axios"

const Search = () => {

  const [pkmn, setPkmn] = useState("")
  const { updateList } = useContext(PkmnListContext)
  
  const handleChange = (e) => {
    let pokemon = (e.target.value).toLowerCase()
    setPkmn(pokemon)
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pkmn}/`)
    let pokemon = res.data;
    // console.log(pokemon)
    updateList(pokemon)
    e.target.pokemon.value = "";
  }

  return (
    <article id="search-form-container">
      <form onSubmit={handleSubmit} id="search-form">
        <label htmlFor="pokemon">Who's your pokemon?</label>
        <input type="text" name="pokemon" onChange={handleChange}/>
        <button type="submit">Search</button>
      </form>
    </article>
  );
};

export default Search;
