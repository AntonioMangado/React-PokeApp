import React from "react";
import PokeBall from '../../../assets/images/pokeball.png'
import { Link } from 'react-router-dom'


const Nav = () => {
  return (
  <nav>
    <img id="nav-icon" src={PokeBall} alt="" />
    <ul id="nav-list">
      <Link to="/home"><li>HOME</li></Link>
      <Link to="/search"><li>SEARCH</li></Link>
      <Link to="/new"><li>NEW</li></Link>
    </ul>
  </nav>
  );
};

export default Nav;
