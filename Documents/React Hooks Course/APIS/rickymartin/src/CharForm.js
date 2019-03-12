import React from 'react'

export default function ({ onClick, onChange }) {
    return (
        <div>
            <p>
                Nombre de tu personaje
                <input onChange={onChange} name="name" type="text" />
            </p>
            <p>
                Link de la imágen
                <input onChange={onChange} name="image" type="text" />
            </p>
            <button onClick={onClick}>Subir</button>
        </div>
    )
}