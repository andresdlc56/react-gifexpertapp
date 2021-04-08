import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from "enzyme";
import { AddCategory } from '../../components/AddCategory';

describe('Pruebas en el componente <AddCategory />', () => {

    // REFERENCIA DE FUNCION setCategories(). jest.fn() nos da estadisticas del uso de esta funcion
    const setCategories = jest.fn();

    let wrapper = shallow(<AddCategory setCategories={ setCategories }/>);

    //INSTRUCCION QUE SE VA A EJECUTAR ANTES DE CADA TEST (IMPORTANTISIMO)
    beforeEach(() => {

        // LIMPIA LA SIMULACION DE ALGO EN LOS TESTS
        jest.clearAllMocks();

        //CAPTURANDO EL COMPONENTE A PROBAR
        wrapper = shallow(<AddCategory setCategories={ setCategories }/>);
    });


    test('Deberia mostrar el componente Correctamente', () => {
        expect(wrapper).toMatchSnapshot();
    });
    

    test('Debe cambiar la caja de texto', () => {   
        const input = wrapper.find('input');
        const value = 'Hola';

        // SIMULANDO EVENTO CHANGE EN EL INPUT
        input.simulate('change', { 
            target: { 
                value 
            } 
        });

        const parrafo = wrapper.find('p').text().trim();
        expect(parrafo).toBe(value);
    });
    

    test('No debe postear la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        // NO DEBE LLAMARSE LA FUNCION setCategories() DEBIDO A QUE EL inputValue DEL form ESTA VACIO
        expect(setCategories).not.toHaveBeenCalled();
    });
    

    test('Debe llamar el setCategories() y limpiar la caja de texto', () => {
        
        // CAPTURANDO EL INPUT
        const input = wrapper.find('input');
        const value = 'Hola Mundo';

        // SIMULANDO inputChange
        input.simulate('change', { target: { value } });

        // SIMULANDO EL SUBMIT DEL FORMULARIO
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        // VERIFICANDO QUE LA FUNCION setCategories SE EJECUTE
        expect(setCategories).toHaveBeenCalled();
        expect(setCategories).toHaveBeenCalledTimes(1); // VERIFICANDO QUE LA FUNCION EVALUADA SE EJECUTE 1 VEZ
        expect(setCategories).toHaveBeenCalledWith( expect.any(Function) ); // VERIFICANDO QUE setCategories llame a otra funcion

        // OBTENIENDO EL VALUE DEL INPUT
        const inputValue = input.prop('value');
        
        // VERIFICANDO QUE EL VALUE DEL INPUT SEA LIMPIADO DESPUES POSTEAR LA INFORMACION 
        expect(inputValue).toBe('');
    });

});