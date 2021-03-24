import '@testing-library/jest-dom';
import getGifs from "../../helpers/getGifs";

describe('Pruebas en getGifs Fetch', () => {
    
    test('Debe de traer 10 elementos', async() => {
       
        const gifs = await getGifs('Messi');

        expect(gifs.length ).toBe( 10 );

    });
    
});
