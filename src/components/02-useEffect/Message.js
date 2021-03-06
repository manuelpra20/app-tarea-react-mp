import React, { useEffect, useState } from 'react'

export const Message = () => {

    const [coords, setCords] = useState({x: 0, y: 0})
    const {x, y} = coords;

    useEffect(() => {

        const mouseMove = (e) => {
           const coords = { x: e.x, y: e.y };
           setCords(coords);
        }

        window.addEventListener('mousemove', mouseMove);


        return () => {
            window.removeEventListener('mousemove', mouseMove);
        }

    }, [])

    return (
        <div>
            <h1>EresGenial</h1>
            <p>
                x: {x} y: {y}
            </p>
        </div>
    )
}
