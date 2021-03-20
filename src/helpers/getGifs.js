/**
 * 
 * Funcion que retorna una promesa con la coleccion de gifs
 * 
 * @returns Promise(gifs)
 * 
 */

const getGifs = async( category ) => {
    const url = `https://api.giphy.com/v1/gifs/search?q=${ encodeURI( category ) }&limit=10&api_key=iFnIqFtrBD55ZipB9OwRm4Orv1dOdXvJ`;
    const resp = await fetch( url );
    const { data } = await resp.json();

    const gifs = data.map( img => {
        return { 
            id: img.id,
            title: img.title,
            url: img.images.downsized_medium.url,
        }

    });
    
    return gifs;

}

export default getGifs;