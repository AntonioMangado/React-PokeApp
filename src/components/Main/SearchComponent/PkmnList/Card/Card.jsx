import { useContext, React } from 'react'
import { useSearchParams } from 'react-router-dom';
import { PkmnListContext } from '../../../../../context/PkmnListContext';
import { Link } from 'react-router-dom'

const Card = () => {

    const { pkmnList } = useContext(PkmnListContext)
    const [searchParams, setSearchParams] = useSearchParams();

    // setSearchParams({ id: `${pkmnList.id}`,
    //                   name: `${pkmnList.name} `  
    //                 });
    
                  
    // const pokemonId = searchParams.get('id')
    // const queryURL = `/details?id=${pkmnList.id}&name=${pkmnList.name}`

    return (
    <article className="pkmn-card-container">
      {pkmnList.name ?
        <>
          <div id="pokemon-card" className={pkmnList.types[0].type.name} >
            <p id="id-p"><b># {pkmnList.id}</b>  </p>
            <img src={pkmnList.sprites.front_default} alt=""/>
            <h4 id="name-p"> {(pkmnList.name).slice(0,1).toUpperCase() + (pkmnList.name).slice(1)} </h4>
          </div>
          <Link 
            to={{
              pathname: `/details/${pkmnList.id}`,
              search: `?name=${pkmnList.name}`
            }}>
            <button>+ INFO</button>
          </Link> 
        </> :
        []}
    </article>
        
        );
};

export default Card;
