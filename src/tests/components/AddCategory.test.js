import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import AddCategory from '../../components/AddCategory';

describe('Pruebas sobre el componente <AddCategory />', () => {
   
    const addCategory = jest.fn();

    let wrapper;

    beforeEach( () => {
        jest.clearAllMocks(); // limpia cada simulacion en cada test.

        wrapper = shallow( 
            <AddCategory addCategory={ addCategory }/> 
            );
    });
    
    test('Debe de mostrarse correctamente', () => {
        
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe cambiar en el input', () => {
        
        
        const value = 'Hola Mundo';
        const input = wrapper.find('input');
        input.simulate('change', { target: { value } });

        expect( wrapper.find('input').prop('value') ).toEqual( value );

    });
    
    test('No debe postear por ser menor a 2 caracteres la informacion con submit', () => {
        
        wrapper.find('form').simulate('submit', { 
            preventDefault(){} 
        });

        expect( addCategory ).not.toHaveBeenCalled();

    });
    
    // Tarea
    test('Debe de llamar el addCategory y limpiar la caja de texto', () => {
        
        const value = 'Hola Mundo';
        const input = wrapper.find('input');
        
        // 1. Simular inputChange
        input.simulate('change', { 
            target: { value } 
        });
        
        // 2. Simular el submit
        wrapper.find('form').simulate('submit', { 
            preventDefault(){} 
        });

        // 3. llamar a addCategory
        expect( addCategory ).toHaveBeenCalledWith( expect.any(Function) );
        
        // 4. el valor del input debe de estar ''
        expect( input.prop('value') ).toBe( '' );
    });
    

});
