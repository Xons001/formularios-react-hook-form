import React, {Fragment, useState} from 'react';
import { useForm } from 'react-hook-form';

const EjemploUno = () => {

    const { register, handleSubmit, formState: { errors }} = useForm();

    const [Entradas, setEntradas] = useState([])

    const onSubmit = (data, e) => {
        console.log(data)
        setEntradas([
            ...Entradas,
            data
        ])
        e.target.reset();
    }

    return ( 
        <Fragment>
            <h1>Ejemplo #1</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    placeholder="Ingrese el titulo"
                    className="form-control my-2"
                    {...register('titulo', {
                        required: { value: true, message: 'Campo Obligatorio' },
                        minLength: { value: 2, message: 'Minimo 2 letras' }
                    })}
                />
                {errors.titulo &&
                    <div className="alert alert-danger mt-1 p-1" >
                        {errors.titulo.message}
                    </div>
                }
                <input
                    name="descripcion"
                    placeholder="Ingrese descripcion"
                    className="form-control my-2"
                    {...register('descripcion', {
                        required: { value: true, message: 'Campo Obligatorio' }
                    })}
                />
                {errors.descripcion &&
                    <div className="alert alert-danger mt-1 p-1" >
                        {errors.descripcion.message}
                    </div>
                }
               <button className="btn btn-primary">Agregar</button>
            </form>

            <ul>
                {
                    Entradas.map(item =>
                        <li>{item.titulo} - {item.descripcion}</li>
                    )
                }
            </ul>
        </Fragment>
     );
}
 
export default EjemploUno;