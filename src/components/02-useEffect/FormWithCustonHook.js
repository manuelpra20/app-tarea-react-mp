
import React, { useEffect } from 'react'
import { useForm } from '../../hooks/useForm';
import  './effect.css';



export const FormWithCustonHook= () => {

    const [formValues, hanleInputChange] = useForm({
        name: '',
        email: '',
        password: ''
    });

    const {name, email, password} = formValues;

    useEffect(() => {
        console.log('email cambio')
    }, [email])

    const hanleSubmit = (e) => {
        e.preventDefault();
        console.log(formValues);
    }

    return (
        <form onSubmit={hanleSubmit}>
            <h1>FormWithCustonHook</h1>
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

            <div className="form-group">
                <input
                type="password"
                name="password"
                className="form-control"
                placeholder="*****"
                autoComplete="off"
                value={ password }
                onChange={hanleInputChange}
                />
            </div>

            <button type="submit" className="btn btn-primary">
                    Guardar
            </button>


        </form>
    )
}


