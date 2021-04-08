
import '@testing-library/jest-dom';
import { useFetchGifs } from "../../hooks/useFetchGifs";
import { renderHook } from '@testing-library/react-hooks';


describe('Pruebas en el hook useFetchGifs', () => {

    test('Debe retornar el estado inicial', async() => {
        /* ESTA PRUEBA DEBE RETORNAR EL ESTADO INICAL 
            data: [],
            loading: true
        */

        // CREANDO COMPONENTE VIRTUAL DONDE PUEDO MONTAR EL CUSTOM HOOK A PROBAR
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
        const { data, loading } = result.current;

        await waitForNextUpdate();

        expect(data).toEqual([]);
        expect(loading).toBe(true); 
    });


    test('Debe retornar un arreglo de gifs y loading en false', async() => {
        
        // CREANDO COMPONENTE VIRTUAL DONDE PUEDO MONTAR EL CUSTOM HOOK A PROBAR
        const { result, waitForNextUpdate } = renderHook(() => useFetchGifs('Dragon Ball'));
        await waitForNextUpdate();

        const { data, loading } = result.current;

        expect(data.length).toEqual(10);
        expect(loading).toBe(false); 
    });
    
});