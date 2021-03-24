import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGridItem from '../../components/GifGridItem';

describe('Pruebas sobre el componente <GifGridItem />', () => {

    const title = 'Titulo';
    const url = 'https://localhost/nofind.jpg';
    const wrapper = shallow( 
        <GifGridItem 
            title = { title }
            url = { url }
        /> 
    );
    
    
    test('Debe de mostrar el componente correctamente ', () => {
         
        expect( wrapper ).toMatchSnapshot();

    });

    test('Debe de tener un párrafo con el title', () => {
       
        const p = wrapper.find('p');
        expect( p.text().trim() ).toBe( title );

    });
    
    test('Debe de tener la imagen igual a url y alt de los props', () => {
       
        const img = wrapper.find('img');

        // Buscar properties en un elemento html con enzyme
        expect( img.prop('src') ).toBe( url );
        expect( img.prop('alt') ).toBe( title );

    });
    
    // Tarea resuelta por mi
    const className = 'animate__fadeIn';
    test('Debe de tener la clase css animate__fadeIn', () => {
        
        
        const div = wrapper.find('div');
        const existe = div.prop('className').includes(className);

        expect( existe ).toBe( true );

    });
    
    // Tarea resuelta por el curso
    test('Debe de tener la clase css animate__fadeIn (por el curso)', () => {
        
        
        const div = wrapper.find('div');
        const className = div.prop('className')

        expect( className.includes( 'animate__fadeIn' ) ).toBe( true );

    });

    
        
});
