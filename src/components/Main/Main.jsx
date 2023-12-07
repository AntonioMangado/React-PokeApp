import React from "react";
import { Route, Routes, Navigate } from 'react-router-dom'
import SearchComponent from './SearchComponent'
import DetailedCard from './SearchComponent/PkmnList/DetailedCard'

const Main = () => {
  return (
    <main>
      <Routes>
          <Route path='/' element={<SearchComponent />} />
          <Route path='/details' element={<DetailedCard />} />
          <Route path='/*' element={<Navigate to={'/'} />} />
      </Routes>
    </main>
  );
};

export default Main;
