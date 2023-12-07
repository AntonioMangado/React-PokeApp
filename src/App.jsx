import { useState, useContext } from 'react'
import { PkmnListContext } from './context/PkmnListContext'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'

function App() {
  
  const [pkmnList, setPkmnList] = useState({})

  const updateList = (list) => {
    setPkmnList(list)
  }

  const PkmnData = {
    pkmnList,
    updateList
  }

  return (
    <>
      <BrowserRouter >
        <PkmnListContext.Provider value={PkmnData}>
          <Header/>
          <h1>PokeApp</h1>
          <Main/>
        </PkmnListContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
