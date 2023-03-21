import React, { useState, useEffect, useCallback } from 'react'
import Item from './Item'
import axios from "axios"
import List from '@mui/material/List';

const IngredientList = ({ recipe }) => {
    const [items, setItems] = useState([])
    const [sections, setSections] = useState([])
    const [ingredients, setIngredients] = useState([])

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

    const getItem = useCallback((id) => {
        for (let i = 0; i < items.length; i++) {
            if (items[i].id === id) {
                return items[i]
            }
        }
        return {}
    }, [items])

    const getSectionName = (id) => {
        for (let i = 0; i < sections.length; i++) {
            if (sections[i].id === id) {
                return sections[i].name
            }
        }
        return ""
    }

    const sortIngredients = () => {
        if (items.length > 0) {
            const sortedArr = [];
            for (let i = 0; i < recipe.ingredients.length; i++) {
                let item = getItem(recipe.ingredients[i])
                sortedArr.push(item)
            }
            sortedArr.sort((s1, s2) => {
                const name1 = s1.name.toUpperCase();
                const name2 = s2.name.toUpperCase();
    
                if (name1 > name2) {
                    return 1;
                }
    
                if (name1 < name2) {
                    return -1;
                }
    
                return 0;
            })
            setIngredients(sortedArr)
        }
    }

    useEffect(sortIngredients, [items, getItem, recipe.ingredients])

    return (
        <>
            <List>
                {

                    ingredients.map((item) => {
                        return <Item key={item.id} itemIn={item} sectionName={getSectionName(item.section)} />
                    }

                    )
                }
            </List>
        </>
    )
}

export default IngredientList
