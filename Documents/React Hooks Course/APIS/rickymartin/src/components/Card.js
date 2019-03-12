import React from 'react'

function Card({ name, image }) {
    return (
        <div>
            <p>{name}</p>
            <img src={image} />
        </div>
    )
}

export default Card