import React from 'react';
import PropTypes from 'prop-types'; // snippet: impt.

const GifGridItem = ( { title , url } ) => {

    return (
        <div className='card animate__animated animate__fadeIn' >
            <img src={ url } alt={ title } />
            <p>{ title }</p>
        </div>
    )
}

GifGridItem.propTypes = {
    title: PropTypes.string.isRequired,
    url: PropTypes.string.isRequired
}


export default GifGridItem;

/*
    Pruebas unitarias
    1
    ------------------------------------------------
        debe de mostrar el componente correctamente:
            - shallow
            - wrapper
            - wrapper.toMatchSnapshow()
    
    2
    ------------------------------------------------
        agregar proptypes requeridos en title y url.
*/