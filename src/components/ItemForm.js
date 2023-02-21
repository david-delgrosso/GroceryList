import React, { useState } from 'react'
import './Form.css'
import uuid from 'react-uuid';

const ItemForm = (props) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({
            id: uuid(),
            name: value,
            need: true
        })
        setValue('');
    };

    return (
        <form className="item-form" onSubmit={handleSubmit}>
            <input
                type="text"
                className="item-form-input"
                value={value}
                onChange={handleChange}
                placeholder="Enter your item name here..."
            />
            <button className="item-form-button" type="submit">Add Item</button>
        </form>
    )
}

export default ItemForm
