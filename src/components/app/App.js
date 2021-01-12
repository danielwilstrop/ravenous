import './App.css';
import React, {useState} from 'react'
import BuisnessList from '../buisnesslist/buisnesslist'
import SearchBar from '../searchbar/searchbar'
import Yelp from '../../util/yelp';


const App = props => {
  const [buisnesses, setBuisnesses] = useState([])

  const searchYelp = (term, location, sortBy) => {
    Yelp.search(term, location, sortBy).then((buisnesses) => {
      setBuisnesses(buisnesses)
    })
  }

  return (
    <div className="App">
      <h1>Ravenous</h1>
      <SearchBar searchYelp = {searchYelp} />
      <BuisnessList buisnesses = {buisnesses} />
    </div>
  )
};


export default App;
