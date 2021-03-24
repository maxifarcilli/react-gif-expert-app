import React from 'react';
import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import GifGrid from '../../components/GifGrid';
import { useFetchGifs } from '../../hooks/useFetchGifs';

jest.mock('../../hooks/useFetchGifs');

describe('Pruebas sobre el componente <GifGrid />', () => {
   
    const categoria = 'test_category';

/*
    beforeEach( () => {
        jest.clearAllMocks(); // limpia cada simulacion en cada test.

        wrapper = 
    });
*/
    test('Debe de mostrar bien el componente <GifGrid />', () => {
        
        useFetchGifs.mockReturnValue({
            data: [],
            loading: true
        });

        const wrapper = shallow( 
            <GifGrid 
                key={categoria}
                category={categoria}
            /> 
        ); 

        expect( wrapper ).toMatchSnapshot();

    });
    
    test('Debe de mostrar items cuando se cargan imagenes con useFetchGifs', () => {
        
        const gifs = [{
            id: '123',
            url: 'https://localhost/hola.jpg',
            title: 'cualquier cosa'
        }];

        useFetchGifs.mockReturnValue({
            data: gifs,
            loading: false
        });

        const wrapper = shallow( 
            <GifGrid 
                key={categoria}
                category={categoria}
            /> 
        ); 
        
        expect( wrapper.find('p').exists() ).toBe(false);
        expect( wrapper.find('GifGridItem').length ).toBe( gifs.length );
        
        
    }); 

});
