import React from 'react';
import Header from './Component/Header';
import Slider from './Components/Slider';
import ProductionHouse from './Components/ProductionHouse';
import GenreMovieList from './Components/GenreMovieList';
import './App.css';

const App = () => {
  return (
    <div className='bg-[#16181F] w-full max-w-screen overflow-x-hidden'>
      <Header />
      <Slider />
      <ProductionHouse />
      <GenreMovieList />
    </div>
  );
};

export default App;
