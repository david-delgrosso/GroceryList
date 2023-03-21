import React, { useState, useEffect } from 'react'
import Item from './Item'
import axios from "axios"
import List from '@mui/material/List';

const IngredientList = ({ recipe }) => {
    const [items, setItems] = useState([])
    const [sections, setSections] = useState([])

    const fetchItems = () => {
        axios.get("http://127.0.0.1:8000/api/item/")
            .then(response => {
                setItems(response.data)
            })
            .catch(error => {
                console.log(error)
            });

        axios.get("http://127.0.0.1:8000/api/section/")
            .then(response => {
                setSections(response.data)
            })
            .catch(error => {
                console.log(error)
            });
    }

    useEffect(fetchItems, []);

    const getItem = (id) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                return items[i]
            }
        }
        return {}
    }

    const getSectionName = (id) => {
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].id === id) {
                return sections[i].name
            }
        }
        return ""
    }

    return (
        <>
            <List>
                {
                    recipe.ingredients.map((id) => {
                        const item = getItem(id)
                        return <Item key={item.id} itemIn={item} sectionName={getSectionName(item.section)} />
                    }

                    )
                }
            </List>
        </>
    )
}

export default IngredientList
