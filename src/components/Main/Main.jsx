import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import SearchComponent from './SearchComponent'
import DetailedCard from './SearchComponent/PkmnList/DetailedCard'
import Home from './Home'

const Main = () => {
  return (
    <main>
      <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/home' element={<Home />} />
          <Route path='/details/:id' element={<DetailedCard />} />
          <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </main>
  );
};

export default Main;
