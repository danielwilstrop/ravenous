import React from 'react'
import Buisness from '../buisness/buisness'
import './buisnesslist.css'

const BuisnessList = props => {
    return (
        <div className="BusinessList">
            {props.buisnesses.map( buisness => {
                return <Buisness buisness = {buisness} />;
            })}
        </div>
    )
};

export default BuisnessList;




