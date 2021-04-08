
import PropTypes from 'prop-types';

/* ============================ 

    LOS HELPERS SON FUNCIONES QUE HACEN ALGUN TRABAJO ESPECIFICO
    Y RETORNAN UN RESULTADO

================================== */


// DEFINIENDO FUNCION QUE HARA PETICIONES A LA API DE GIFS
export const getGifs = async (category) => {

        
    // URL ESTATICA CON SU API_KEY DEFINIDA, QUE RETORNA 10 GIFS DE DIGIMON
    const url = `https://api.giphy.com/v1/gifs/search?q=${encodeURI(category)}&limit=10&api_key=lnpBeorLYo5OWEYujGov7nLC4jwBpAMV`;
    const resp = await fetch(url); // PETICION HTTP EN JAVASCRIPT ACTUAL
    const { data }  = await resp.json(); // PETICION HTTP EN JAVASCRIPT ACTUAL. RETORNA UN ARRAY DE OBJECTOS


    // BARRIENDO EL ARREGLO DE OBJETOS (GIFS) Y CAPTURANDO UN ARRAY DE OBJECT CON SOLO LA INFO NECESARIA 
    const gifs = data.map((gif) => {
        return {
            id: gif.id,
            title: gif.title,
            url: gif.images?.downsized_medium.url
        }
    });

    return gifs;
}

getGifs.protoType = {
    category: PropTypes.string.isRequired
}