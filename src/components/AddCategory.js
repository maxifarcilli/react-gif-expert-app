import React, { useState } from 'react';
import PropTypes from 'prop-types';

const AddCategory = ( { addCategory } ) => {
    
    const [inputValue, setInputValue] = useState('');

    const handleImputChange = ( e ) => {
        setInputValue( e.target.value );
    }
    
    const handleSubmit = (e) =>{
        e.preventDefault();

        if (inputValue.trim().length > 2){
            addCategory( categories => [inputValue,...categories]);
            setInputValue('');
        }

        console.log('Submit hecho');
    }

    return (
        <form onSubmit={ handleSubmit }>
            <input 
                type="text" 
                value={ inputValue }
                onChange={ handleImputChange }
            />
        </form>
    )
}

AddCategory.propTypes ={
    addCategory: PropTypes.func.isRequired
}

export default AddCategory;