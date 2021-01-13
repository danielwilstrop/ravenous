import React from 'react';
import './buisness.css'

const Buisness = props => {
    return (
        <div className="Business">
            <div className="image-container">
                <img src={props.buisness.imageSrc} alt=''/>
             </div>
                <h2>{props.buisness.name}</h2>
                <div className="Business-information">
                    <div className="Business-address">
                        <p>{props.buisness.address}</p>
                        <p>{props.buisness.city}</p>
                        <p>{props.buisness.zipCode}</p>
                    </div>
                    <div className="Business-reviews">
                        <h3>{props.buisness.category}</h3>
                        <h3 className="rating">Rating {props.buisness.rating}</h3>
                        <h3 className="rating">Reviews {props.buisness.reviewCount}</h3>
                    </div>
                </div>
        </div>
    )
}

export default Buisness;