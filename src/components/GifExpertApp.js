import React, { useState } from 'react';
import { AddCategory } from './AddCategory';
import { GifGrip } from './GifGrip';


/* ====================================

    ESTE ES EL COMPONENTE PRINCIAL (PADRE)

======================================= */

export const GifExpertApp = () => {


    // CREANDO UN useState PARA MANEJAR LAS CATEGORIAS 
    const [categories, setCategories] = useState(['Dragon Ball']);


    return (
        <>
            <h2>GifExpertApp</h2> 

            <AddCategory setCategories={ setCategories }/>

            <hr/> 


            <ol>
                {
                    // BARRIENDO EL ARREGLO DE CATEGORIAS
                    categories.map((category) => ( 
                        <GifGrip 
                            key={ category }
                            category={ category }
                        />
                    ))
                }
            </ol>

          
        </>
    )
}
