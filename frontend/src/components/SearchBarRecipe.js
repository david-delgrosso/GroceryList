import React, { useState, useEffect } from 'react';
import './Form.css'
import './Item.css'
import { useTheme } from '@mui/material'
import { BsSearch } from 'react-icons/bs'
import { TiBackspace } from 'react-icons/ti'
import { TextField, InputAdornment, styled } from '@mui/material'
import ListGroup from 'react-bootstrap/ListGroup';

const StyledTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.form.background + " !important",
    input: { color: theme.palette.form.text + " !important" },
    width: "80%",
}))

const SearchBarRecipe = ({ sections, addItem }) => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);
    const MuiTheme = useTheme();

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        const data = sections
        const names = []
        const resultsTemp = []
        for (let i = 0; i < data.length; i++) {
            let sectionItems = data[i].items
            for (let j = 0; j < sectionItems.length; j++) {
                let item = sectionItems[j]
                names.push(item)
            }
        }
        for (let i = 0; i < names.length; i++) {
            if (names[i].name.includes(value)) {
                resultsTemp.push(names[i])
            }
        }

        if (value.length === 0) {
            setResults([])
        }
        else {
            setResults(resultsTemp)
        }
    }, [value, sections])

    const clickItem = (id) => {
        results.map(result => {
            if (result.id === id) {
                addItem(result)
            }
            return result
        })
    }

    return (
        <>
            <div className="search-form-div">
                <StyledTextField
                    placeholder="Search ingredients..."
                    type="text"
                    value={value}
                    size="small"
                    style={{ width: "100%"}}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <BsSearch style={{ color: MuiTheme.palette.form.accent }} />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <TiBackspace style={{ color: MuiTheme.palette.form.accent }} onClick={() => { setValue('') }} />
                            </InputAdornment>
                        )
                    }}
                    onChange={handleChange}
                />
            </div>
            <div className='search-results-div'>
                <ListGroup as="ul">
                    {
                        results.map((result, index) => {
                            return (
                                <ListGroup.Item
                                    key={index}
                                    as="li"
                                    style={result.need ? { background: MuiTheme.palette.item.background.need, color: MuiTheme.palette.item.text.need } : { background: MuiTheme.palette.item.background.dontneed, color: MuiTheme.palette.item.text.dontneed }}
                                    onClick={() => clickItem(result.id)}
                                >
                                    {result.name}
                                </ListGroup.Item>
                            )
                        })
                    }
                </ListGroup>
            </div>
        </>
    )
}

export default SearchBarRecipe
