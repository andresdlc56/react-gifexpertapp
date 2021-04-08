import React, { useState } from 'react';

//Libreria necesaria para la validacion de los props
import PropTypes from 'prop-types';


/* ====================================

    ESTE ES EL SEGUNDO COMPONENTE (HIJO)
    MANEJA EL INPUT 

    ESTE COMPONENTE MODIFICA EL STATE DEL SU COMPONENTE PADRE

======================================= */


export const AddCategory = ({ setCategories }) => {
    
    const [inputValue, setValue] = useState('');


    // DEFINIENDO EVENTO QUE SE VA A DISPARAR CADA VEZ QUE SE TECLEA ALGO EN EL INPUT 
    const handleInputChange = ({ target }) => {

        //CAMBIANDO EL VALOR DEL useState "inputValue" POR EL VALOR DEL TARGET
        setValue(target.value);
    }

    
    // MANEJADOR DEL ENVIO DEL FORMULARIO
    const handleSubmit = (e) => {

        // EVITANDO EL REFRESCAMIENTO DE LA PANTALLA
        e.preventDefault();

        // VALIDACION 
        if(inputValue.trim().length > 2){
            /* DEBIDO A QUE NO TENGO ACCESO A LAS "categories" DIRECTAMENTE DESDE ESTE COMPONENTE POR QUE 
            NO LO PEDI EN LOS PROPS HAGO UNA REFERENCIA DEL MISMO */
            setCategories((cats) => [
                inputValue,
                ...cats
            ]);

            //LIMPIANDO EL VALOR DE INPUT
            setValue('');
        }

        
    }
    
    return (
        <form onSubmit={ handleSubmit }>
            <p>{ inputValue }</p>
            <input 
                type='text'
                value={ inputValue }
                onChange={ handleInputChange }
            />
        </form>  
    )
}


AddCategory.protoType = {
    setCategories: PropTypes.func.isRequired
}