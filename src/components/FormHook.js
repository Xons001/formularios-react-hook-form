import React, {Fragment} from 'react';
import { useForm } from 'react-hook-form';

const FormHook = () => {

    const { register, handleSubmit, formState: { errors }} = useForm();

    const onSubmit = (data, e) => {
        console.log(data)
        e.target.reset();
    }

    return ( 
        <Fragment>
            <h1>Formulario</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
                <input
                    name="titulo"
                    className="form-control my-2"
                    placeholder='Ingresa el nombre del titulo'
                    {...register('titulo', {
                        required: { value: true, message: 'El nombre del titulo es requerido' },
                        minLength: { value: 2, message: 'El nombre del titulo tiene que ser mas largo' }
                    })}
                />
                {errors.titulo &&
                    <div className="alert alert-danger mt-1 p-1" >
                        {errors.titulo.message}
                    </div>
                }
                <button className="btn btn-primary" type="submit">Enviar</button>
            </form>
        </Fragment>
     );
}
 
export default FormHook