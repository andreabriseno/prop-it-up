import React from 'react';

const PersonCard = (props) => {
    return (
        <div>
            <h2>{ props.name } </h2>
            <p>{ props.age } </p>
            <p>{ props.hair } </p>
        </div>
    )
}

export default PersonCard;