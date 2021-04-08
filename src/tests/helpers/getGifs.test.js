import { getGifs } from "../../helpers/getGifs";

describe('Pruebas en el helper getGifs Fetch', () => {

    test('Debe traer 10 elementos', async () => {
        const gifs = await getGifs('Dragon Ball');
        expect(gifs.length).toBe(10);
    });


    test('Debe retornar un array vacio', async () => {
        const gifs = await getGifs('');
        expect(gifs.length).toBe(0);
    });
    
});