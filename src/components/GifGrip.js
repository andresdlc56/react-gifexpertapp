import React from 'react';
import { useFetchGifs } from '../hooks/useFetchGifs';
import { GifGripItem } from './GifGripItem';

//import { getGifs } from '../helpers/getGifs';

import PropTypes from 'prop-types';

export const GifGrip = ({ category }) => {

    /* -------------------------------
        REACT POR NATURALEZA VUELVE A LEER Y EJECUTAR TODO EL COMPONENTE
        AL NOTAR ALGUN CAMBIO EN SI 
    -------------------------------- */


    // IR A BUSCAR GIFS A LA API
    const { data, loading } = useFetchGifs(category);
    

    return (
        <>
            
        
            {
                loading
                    ? <p>LOADING...</p>
                    : 
                    <div>
                        <h3>{ category }</h3>
                        <div className="card-grid">
                            {
                                data.map((img) => (
                                    <GifGripItem 
                                        key={ img.id }
                                        { ...img }
                                    />
                                ))
                            } 
                        </div>
                    </div>
                    
            }

            
        </>
    )
}

GifGrip.protoType = {
    category: PropTypes.string.isRequired
}