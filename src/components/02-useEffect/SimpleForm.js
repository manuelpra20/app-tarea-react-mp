
import React, { useEffect, useState } from 'react'
import  './effect.css';
import { Message } from './Message';

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const {name, email} = formState;

    useEffect(()=>{
        // console.log('hey');
    }, [] );

    useEffect(()=>{
        // console.log('formState Cambio');
    }, [formState] );


    useEffect(()=>{
        // console.log('email Cambio');
    }, [email] );

    const hanleInputChange = ( {target }) => {

        setFormState({
            ...formState,
            [target.name]: target.value
        });
    }

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className="form-group">
                <input
                type="text"
                name="name"
                className="form-control"
                placeholder="Tu Nombre"
                autoComplete="off"
                value={ name }
                onChange={hanleInputChange}
                />
            </div>
            <div className="form-group">
                <input
                type="text"
                name="email"
                className="form-control"
                placeholder="email@gmail.com"
                autoComplete="off"
                value={ email }
                onChange={hanleInputChange}
                />
            </div>


            { (name === '123') && <Message /> }

        </>
    )
}


