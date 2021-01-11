import './App.css';
import React from 'react'
import BuisnessList from '../buisnesslist/buisnesslist'
import SearchBar from '../searchbar/searchbar'

const App = props => {
  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar />
      <BuisnessList />
    </div>
  )
};


export default App;
