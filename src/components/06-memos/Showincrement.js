import React from 'react'

export const Showincrement = ({increment}) => {
    console.log('me volvi a generar');
    return (
        <div>
            <button className="btn btn-primary" onClick={() => {
                increment(5);
            }}>Incrementar</button>
        </div>
    )
}
