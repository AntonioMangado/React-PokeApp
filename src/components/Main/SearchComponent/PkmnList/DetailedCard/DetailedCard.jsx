import { useState, useEffect, React, useContext } from 'react'
import { Link, useLocation, useSearchParams } from 'react-router-dom'
import axios from "axios"
import { PkmnListContext } from "../../../../../context/PkmnListContext";

const DetailedCard = () => {

  const location = useLocation();
  const pokemonName = new URLSearchParams(location.search).get('name');
  const [pkmnList, setPkmnList] = useState({})

  useEffect(() => {
    const getPokemon = async () => {
      let res = await axios.get(`https://pokeapi.co/api/v2/pokemon/${pokemonName}/`)
      let pokemon = res.data;
      setPkmnList(pokemon)
    }
    getPokemon()
  }, [pokemonName]);

  // Obtain the id in the param?
  const urlSearchString = window.location.pathname;

  const decimetersToMeters = (num) => {
    return num/10
  }

  const { updateList } = useContext(PkmnListContext)

  const deleteList = () => {
    updateList({})
  }

  return (
    <section id="detailed-card-container">
      {pkmnList.name ?
          <>
            <article id="detailed-card" className={pkmnList.types[0].type.name}>
              <div id="general-info-section" className={pkmnList.types[0].type.name}>
                <h3>{(pkmnList.name).slice(0,1).toUpperCase() + (pkmnList.name).slice(1)} # {pkmnList.id}</h3>
                <img src={pkmnList.sprites.front_default} alt=""/>
                <div id="types">{pkmnList.types.length != 2 ? <span className={pkmnList.types[0].type.name}>{(pkmnList.types[0].type.name).toUpperCase()}</span> : <><span className={pkmnList.types[0].type.name}>{(pkmnList.types[0].type.name).toUpperCase()}</span> <span className={pkmnList.types[1].type.name}>{(pkmnList.types[1].type.name).toUpperCase()}</span></>} </div>
                <div id="characteristics">
                  <div>Height: {decimetersToMeters(pkmnList.height)}m </div>
                  <div>Weight: {decimetersToMeters(pkmnList.weight)}kg </div>
                  <div>Ability: {(pkmnList.abilities[0].ability.name).slice(0,1).toUpperCase() + (pkmnList.abilities[0].ability.name).slice(1)} </div> 
                </div>
              </div>
              
              <div id="base-stats-section" className={pkmnList.types[0].type.name}>
                <h3>BASE STATS</h3>
                <p>HP: {pkmnList.stats[0].base_stat}</p>
                <p>ATK: {pkmnList.stats[1].base_stat}</p>
                <p>DEF: {pkmnList.stats[2].base_stat}</p>
                <p>STAK: {pkmnList.stats[3].base_stat}</p>
                <p>SDEF: {pkmnList.stats[4].base_stat}</p>
                <p>SPD: {pkmnList.stats[5].base_stat}</p>
              </div>
            </article>

            <Link to='/'>
              <button onClick={deleteList}>BACK TO SEARCH</button>
            </Link> 
          </> :
            []}
    </section>
  );
};

export default DetailedCard;


