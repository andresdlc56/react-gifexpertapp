import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { GifGripItem } from '../../components/GifGripItem';


describe('Pruebas en componente <GifGripItem />', () => {

    const gif = {
        title: 'mrw GIF',
        url: 'https://giphy.com/gifs/UOvFfXGINpmN2'
    }

    const wrapper = shallow(<GifGripItem title={ gif.title } url={ gif.url }/>);



    test('El Componente se debe mostrar correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });



    test('Debe tener un parrafo con el title', () => {
        const parrafo = wrapper.find('p').text().trim();
        
        expect(parrafo).toBe(gif.title);
    });



    test('Debe tener la img igual al url y alt de los props', () => {
        const img = wrapper.find('img');
        const urlImg = img.prop('src');
        const altImg = img.prop('alt');

        expect(urlImg).toBe(gif.url);
        expect(altImg).toBe(gif.title);
    });


    test('Debe tener la clase animate__bounce', () => {

        const div = wrapper.find('div');

        // OBTENIENDO UN STRING CON LAS CLASES QUE TIENE EL DIV EVALUADO
        const clases = div.prop('className');

        // SEPARANDO LAS CLASES
        const arrayClases = clases.split(' ');

        // CAPTURANDO LA CLASE A BUSCAR
        const indexClase = arrayClases.indexOf("animate__bounce");

        expect(arrayClases[indexClase]).toBe('animate__bounce');
    });
});