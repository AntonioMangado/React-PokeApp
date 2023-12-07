import { useContext, React } from 'react'
import { PkmnListContext } from '../../../../../context/PkmnListContext';
import { Link } from 'react-router-dom'

const Card = () => {

    const { pkmnList } = useContext(PkmnListContext)

    return (
    
    <article className="pkmn-card-container">
      {pkmnList.name ?
        <>
          <div id="pokemon-card" className={pkmnList.types[0].type.name} >
            <p id="id-p"><b># {pkmnList.id}</b>  </p>
            <img src={pkmnList.sprites.front_default} alt=""/>
            <h4 id="name-p"> {(pkmnList.name).slice(0,1).toUpperCase() + (pkmnList.name).slice(1)} </h4>
          </div>
          <Link to='/details' >
            <button>+ INFO</button>
          </Link> 
        </> :
        []}
    </article>
        
        );
};

export default Card;
