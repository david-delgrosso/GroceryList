import React, { useState } from 'react';
import uuid from 'react-uuid';
import { TextField, InputAdornment, styled, useTheme } from '@mui/material'
import { TiArrowRightThick } from 'react-icons/ti'

const StyledTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.form.background + " !important",
    input: { color: theme.palette.form.text + " !important" },
    width: "80%",
}))

const SectionForm = (props) => {
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
            items: [],
        })
        setValue('');
    };

    return (
        <div className="section-form-div">
            <StyledTextField
                placeholder="Add section..."
                type="text"
                value={value}
                InputProps={{
                    endAdornment: (
                        <InputAdornment position="end">
                            <TiArrowRightThick style={{ color: MuiTheme.palette.form.accent }} onClick={(e) => handleSubmit(e)} />
                        </InputAdornment>
                    )
                }}
                onChange={handleChange}
            />
        </div>
    )
}

export default SectionForm
