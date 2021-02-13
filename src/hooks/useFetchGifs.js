
/*============================================== 

    LOS CUSTON HOOK, SON HOOKS DEFINIDOS POR EL PROGRAMADOR 
    PARA MANEJAR PROCESOS QUE SE REPETIRAN CONTINUAMENTE 

    PARATICULARMENTE ESTE HOOK SE ENCARGAR DE MANEJAR LAS PETICIONES
    A LA API DE GIFS

========================================== */

import { useEffect, useState } from "react"
import { getGifs } from "../helpers/getGifs";

export const useFetchGifs = (category) => {
    
    //ESTE SERA EL ESTADO POR DEFECTO DE ESTE HOOK
    const [state, setState] = useState({
        data: [],
        loading: true
    });

    /* EFECTO QUE SE ACTIVARA CADA VEZ QUE LA CATEGORIA CAMBIE */
    useEffect(() => {

        getGifs(category)
            .then(gifs => {
                setTimeout(() => {
                    setState({
                        data: gifs,
                        loading: false
                    })
                }, 3000);
            })
        
        
       
    }, [category])
    
    

    return state;
}
