import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import SearchComponent from './SearchComponent'
import DetailedCard from './SearchComponent/PkmnList/DetailedCard'
import Home from './Home'
import Search from './SearchComponent'

const Main = () => {
  return (
    <main>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/search' element={<SearchComponent />} />
          <Route path='/details/:id' element={<DetailedCard />} />
          <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </main>
  );
};

export default Main;
