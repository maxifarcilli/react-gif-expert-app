import React, { useState } from 'react';
import AddCategory from './components/AddCategory';
import GifGrid from './components/GifGrid';

const GifExpertApp = ( { defaultCategories = [] } ) => {
    
    const [categories, setCategories] = useState( defaultCategories );
    

    return (
        <>

            <h1>GifExpertApp</h1>
            <AddCategory addCategory={ setCategories } />
            <hr />
            
            <section>
                {
                    categories.map( category => (
                        <GifGrid 
                            key={ category }
                            category={ category } />
                    ))
                }
            </section>
            
        </>
    );
};

export default GifExpertApp;


/**
 * Componente - GifExpertApp
 *  <h2>GifExpertApp</h2>
 *  <hr />
 */

