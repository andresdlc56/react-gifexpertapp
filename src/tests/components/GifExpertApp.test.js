import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import { GifExpertApp } from '../../components/GifExpertApp';

describe('Pruebas en el componente <GifExpertApp />', () => {
    
    test('Debe mostrarse el componente correctamente', () => {
        const wrapper = shallow(<GifExpertApp />);
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe mostrar una lista de categorias', () => {
        const defaultCategories = ['Dragon Ball', 'Vegeta'];
        const wrapper = shallow(<GifExpertApp defaultCategories={ defaultCategories }/>);
        
        // CAPTURANDO GIFGRIP
        const gifGrip = wrapper.find('GifGrip');

        expect(gifGrip.length).toBe(defaultCategories.length);
    });
    
    
});