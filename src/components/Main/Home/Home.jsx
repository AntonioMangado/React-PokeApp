import React from "react";
import { Link } from 'react-router-dom'
import pkmnImage from '../../../assets/images/pkmn-sprites.webp'

const Home = () => {
  return (
    
      
      <section id="home-section">
        
        <h2>Click the button to start your search.</h2>
        
        <Link to='/search'>
          <button>SEARCH</button>
        </Link> 

        <img id="home-flavour-img" src={pkmnImage} alt="" />
      </section>
    
  );
};

export default Home;
