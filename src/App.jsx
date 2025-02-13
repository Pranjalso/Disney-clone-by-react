import React from 'react'
import Header from './Components/Header';
import Slider from './Components/Slider';
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ProductionHouse from './Components/ProductionHouse';
import GenreMovieList from './Components/GenreMovieList';


const App = () => {

  return (
    <div>
   <Header/>
  <Slider/>
  <ProductionHouse/>
<GenreMovieList/>


    </div>
  )
}

export default App;
