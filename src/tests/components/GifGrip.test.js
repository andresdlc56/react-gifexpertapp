import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGrip } from '../../components/GifGrip';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs'); // FINGIR LLAMADOS A ESE ARCHIVO (IMPORTANTISIMO)

describe('Pruebas en el componente <GifGrip />', () => {

    test('Debe mostrar el componente correctamente', () => {

        // SIMULANDO QUE EL CUSTON HOOK useFetchGifs() YA CARGO LA INFO
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow(<GifGrip category='Dragon Ball' />);

        expect(wrapper).toMatchSnapshot();
    });


    test('Debe mostrar items cuando se cargan los gifs con el hook useFetchGifs()', () => {
        
        // SIMULACION DE DATA DEVUELTA POR LA API GIFS
        const gifs = [{
            id: 'ABC',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier Cosa'
        },
        {
            id: '123',
            url: 'https://localhost/cualquier/cosa.jpg',
            title: 'Cualquier Cosa'
        }];

        // SIMULANDO QUE EL CUSTON HOOK useFetchGifs() YA CARGO LA INFO
        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });
        
        const wrapper = shallow(<GifGrip category='Dragon Ball' />);


        
        
        // VERIFICANDO QUE ESTE PARRAFO NO EXISTA EN EL COMPONENTE
        expect(wrapper.find('p').exists()).toBe(false);
        
        /* VERIFICANDO QUE EL COMPONENTE GifGripItem EXISTE LA MISMA CANTIDAD
        DE VECES QUE GIFS ENCONTRADOS */
        expect(wrapper.find('GifGripItem').length).toBe(gifs.length);
        
    });
    
});