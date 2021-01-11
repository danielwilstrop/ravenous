import React, {useState} from 'react'
import './searchbar.css'

const SearchBar = props => {
    const renderSortByOptions = () => {
        return Object.keys(sortByOptions).map(sortByOption => {
            let sortByOptionValue = sortByOptions[sortByOption]
                return <li className = {getSortByClass(sortByOptionValue)} key = {sortByOptionValue} onClick ={handleSortByChange.bind(this,sortByOptionValue)}> {sortByOption} </li>
        })
    }
    const [term, setTerm] = useState('')
    const [location, setLocation] = useState('')
    const [sortBy, setSortBy] = useState('best_match')
    const sortByOptions = {
        'Best Match': 'best_match',
        'Highest Rated': 'rating',
        'Most Reviewed': 'review_count'
      }

      const getSortByClass = (sortByOption) => {
        if (sortBy === sortByOption){
            return 'active'
        } else {
            return ''
        }
      };

      const handleSortByChange = (sortByOption) => {
            setSortBy(sortByOption)
      }

      const handleTermChange = (event) => {
            setTerm(event.target.value)
      }

      const hanldeLocationChange = (event) => {
            setLocation(event.target.value)
      }

    return (
        <div className="SearchBar">
            <div className="SearchBar-sort-options">
                <ul>
                {renderSortByOptions()}
                </ul>
            </div>
            <div className="SearchBar-fields">
                <input placeholder="Search Businesses" onChange = {handleTermChange} />
                <input placeholder="Where?" onChange = {hanldeLocationChange} />
            </div>
            <div className="SearchBar-submit">
                <a>Let's Go</a>
            </div>
        </div>
    )
}

export default SearchBar;