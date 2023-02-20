import { unstable_useId } from '@mui/material';
import React, { useState } from 'react'
import './Form.css'
import uuid from 'react-uuid';

const SectionForm = (props) => {
    const [value, setValue] = useState('');

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        props.onSubmit({
            id: uuid(),
            name: value,
            items: []
        })
        console.log(`Submitted value: ${value}`);
        setValue('');
    };

    return (
        <form className="section-form" onSubmit={handleSubmit}>
            <div className="section-form-div">
                <input
                    type="text"
                    className="section-form-input"
                    value={value}
                    onChange={handleChange}
                    placeholder="Enter section name here..."
                />
                <button className="section-form-button" type="submit">Add Section</button>
            </div>
        </form>
    )
}

export default SectionForm
