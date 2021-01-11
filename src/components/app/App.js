import './App.css';
import React from 'react'
import BuisnessList from '../buisnesslist/buisnesslist'
import SearchBar from '../searchbar/searchbar'

const buisness = {
  imageSrc: 'https://content.codecademy.com/programs/react/ravenous/pizza.jpg',
  name: 'MarginOtto Pizzeria',
  address: '1010 Paddington Way',
  city: 'Flavortown',
  state: 'NY',
  zipCode: '10101',
  category: 'Italian',
  rating: 4.5,
  reviewCount: 90
}

const buisnesses = [buisness, buisness, buisness, buisness, buisness, buisness]

const App = props => {
  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar />
      <BuisnessList buisnesses = {buisnesses} />
    </div>
  )
};


export default App;
