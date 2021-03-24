import '@testing-library/jest-dom';
import { renderHook } from '@testing-library/react-hooks'
import { useFetchGifs } from '../../hooks/useFetchGifs';

describe('Pruebas en el hook useFetchGifs', () => {
    
    test('Debe de retornar el estado inicial', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'soccer' ) );
        const { data , loading } = result.current;

        await waitForNextUpdate();

        expect( loading ).toBe( true );
        expect( data.length ).toBe( 0 );

    });

    test('Debe de retornar un arreglo de imagenes y el loading en false', async() => {
        
        const { result, waitForNextUpdate } = renderHook( () => useFetchGifs( 'soccer' ) );
        await waitForNextUpdate();
        
        const { data , loading } = result.current;

        expect( loading ).toBe( false );
        expect( data.length ).toBe( 10 );
    });
    
    
});
