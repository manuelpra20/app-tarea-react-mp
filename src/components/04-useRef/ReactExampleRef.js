import React, { useState } from 'react'
import  '../02-useEffect/effect.css';
import { MultiplesCustomHooks } from '../03-exsamples/MultiplesCustomHooks';


export const ReactExampleRef = () => {

    const [show, setShow] = useState(false)

    return (
        <div>
            <h1>ReactExampleRef</h1>
            <hr />
           {show &&  <MultiplesCustomHooks />}
           <button className="btn btn-primary mt-5" onClick={() => {
               setShow(!show);
           }}>show/hide</button>
        </div>
    )
} 
