import React, { useState, useEffect } from 'react'
import { styled } from '@mui/material'
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import axios from "axios"

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

const Item = ({ itemIn, sectionName }) => {
    const [item, setItem] = useState({})

    useEffect(() => { setItem(itemIn) }, [itemIn])

    const clickItem = () => {
        const urlstr = "http://127.0.0.1:8000/api/item/" + String(item.id)
        axios.patch(urlstr, { need: !item.need })
          .then(response => {
            setItem(response.data)
          })
          .catch(error => {
            console.log(error)
          });
      }

    return (
        <StyledListItem
            key={item.id}
            need={item.need}
            as="li"
            onClick={clickItem}
        >
            <StyledListItemText primary={item.name} secondary={sectionName} />

        </StyledListItem>
    )
}

export default Item
