import { useState, useContext } from 'react'
import { PkmnListContext } from './context/PkmnListContext'
import { BrowserRouter } from 'react-router-dom'
import './App.css'
import Header from './components/Header'
import Main from './components/Main'
import PkmnLogo from './assets/images/pkmn-logo.png';


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
            <img id="pkmn-logo" src={PkmnLogo} alt="" />
          <Main/>
        </PkmnListContext.Provider>
      </BrowserRouter>
    </>
  )
}

export default App
