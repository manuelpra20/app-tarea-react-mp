import React, { useRef } from 'react'
import  '../02-useEffect/effect.css';


export const FocusScreen = () => {
    
    const inputRef = useRef();
    // console.log(ref);

    const handleClick = () => {
        inputRef.current.select();
    }
    return (
        <div>
            <h1>Focus screen</h1>
            <hr />
            
            <input
            ref = {inputRef }
                className="form-control"
                placeholder="Su Nombre"
        
            />
            <button className="btn btn-outline-primary mt-5" onClick={handleClick}>
                Focus
            </button>
        </div>
    )
}
