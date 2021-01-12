import React from 'react'
import Buisness from '../buisness/buisness'
import './buisnesslist.css'

const BuisnessList = props => {
    return (
        <div className="BusinessList">
            {props.buisnesses.map( buisness => {
                return <Buisness buisness = {buisness} key = {buisness.id} />;
            })}
        </div>
    )
};

export default BuisnessList;




