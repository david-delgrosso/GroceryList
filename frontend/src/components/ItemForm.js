import React, { useState } from 'react'
import uuid from 'react-uuid';
import { TextField, InputAdornment, styled, useTheme } from '@mui/material'
import { TiArrowRightThick } from 'react-icons/ti'

const StyledTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.form.background + " !important",
    input: { color: theme.palette.form.text + " !important" }
}))

const ItemForm = (props) => {
    const [value, setValue] = useState('');
    const MuiTheme = useTheme();

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
        <div className="item-form-div">
            <StyledTextField
                placeholder="Add item..."
                type="text"
                value={value}
                size="small"
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <TiArrowRightThick style={{ color: MuiTheme.palette.nav.text.secondary }} onClick={(e) => handleSubmit(e)} />
                        </InputAdornment>
                    )
                }}
                onChange={handleChange}
            />
        </div>
    )
}

export default ItemForm
