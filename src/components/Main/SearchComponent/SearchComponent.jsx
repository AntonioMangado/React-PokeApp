import React from "react";
import PkmnList from './PkmnList'
import Search from './Search'

const SearchComponent = () => {
  return (
    <section>
      <Search/>
      <PkmnList/>
    </section>
  );
};

export default SearchComponent;
