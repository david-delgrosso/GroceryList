import React, { useState, useEffect, useContext } from 'react';
import { useTheme, styled, Container, TextField, InputAdornment, List, ListItem, ListItemText } from '@mui/material'
import { BsSearch } from 'react-icons/bs'
import { TiBackspace } from 'react-icons/ti'
import axios from "axios"
import { UrlContext } from '../UrlContext';

const StyledTextField = styled(TextField)(({ theme }) => ({
    backgroundColor: theme.palette.background.primary + " !important",
    input: { color: theme.palette.text.primary + " !important" },
    marginBottom: "0",
    width: "100%",
    display: "flex",
}))

export const StyledContainer = styled(Container)({
    display: "flex !important",
    flexDirection: "column",
    alignItems: "center",
    alignSelf: "center",
    boxSizing: "unset !important",
    maxWidth: "1000px !important",
    width: "90%",
    padding: "0"
});

const StyledListItem = styled(ListItem)(({ theme, need }) => ({
    background: need ? theme.palette.background.item.need : theme.palette.background.item.dontneed,
    color: need ? theme.palette.text.item.need : theme.palette.text.item.dontneed,
    borderRadius: "1rem",
    padding: "0.5rem 1rem",
    margin: "0.25rem",
}))

const StyledListItemText = styled(ListItemText)(() => ({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center"
}))

const SelectBar = ({ updateParentItemValue, updateParentSectionValue }) => {
    const [value, setValue] = useState('');
    const [results, setResults] = useState([]);
    const [items, setItems] = useState([]);
    const [sections, setSections] = useState([]);
    const MuiTheme = useTheme();
    const ip = useContext(UrlContext)

    const handleChange = (event) => {
        setValue(event.target.value);
    };

    useEffect(() => {
        axios.get(String(ip) + "api/item/")
            .then(response => {
                setItems(response.data)
            })
            .catch(error => {
                console.log(error)
            });

        axios.get(String(ip) + "api/section/")
            .then(response => {
                setSections(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }, [ip])

    useEffect(() => {
        const resultsTemp = []
        for (let i = 0; i < items.length; i++) {
            if (items[i].name.includes(value)) {
                resultsTemp.push(items[i])
            }
        }
        if (value.length === 0) {
            setResults([])
        }
        else {
            setResults(resultsTemp)
        }
    }, [value, items]);

    const getSectionName = (id) => {
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].id === id) {
                return sections[i].name
            }
        }
        return ""
    }

    const clickItem = (result) => {
        updateParentItemValue(result.name)
        updateParentSectionValue(getSectionName(result.section))
        setValue('')
    }

    return (
        <>
            <StyledContainer>
                <div style={{ display: "flex", justifyContent: "center" }}>
                    <StyledTextField
                        placeholder="Search ingredients..."
                        type="text"
                        value={value}
                        InputProps={{
                            startAdornment: (
                                <InputAdornment position="start">
                                    <BsSearch style={{ color: MuiTheme.palette.accent }} />
                                </InputAdornment>
                            ),
                            endAdornment: (
                                <InputAdornment position="end">
                                    <TiBackspace style={{ color: MuiTheme.palette.accent }} onClick={() => { setValue('') }} />
                                </InputAdornment>
                            )
                        }}
                        onChange={handleChange}
                    />
                </div>
                <List sx={{ width: "100%" }}>
                    {
                        results.map((result) => {
                            result.need = false
                            return (
                                <StyledListItem
                                    key={result.id}
                                    need={result.need}
                                    as="li"
                                    onClick={() => clickItem(result)}
                                >
                                    <StyledListItemText primary={result.name} secondary={getSectionName(result.section)} />

                                </StyledListItem>
                            )
                        })
                    }
                </List>
            </StyledContainer>
        </>
    )
}

export default SelectBar
