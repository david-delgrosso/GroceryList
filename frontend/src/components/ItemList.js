import React, { useState, useEffect, useContext } from 'react'
import Item from './Item'
import axios from "axios"
import List from '@mui/material/List';
import { HiOutlineRefresh } from 'react-icons/hi'
import { RerenderContext } from '../RerenderContext'
import { UrlContext } from '../UrlContext';
import { useTheme } from '@mui/material'

const ItemList = ({ section }) => {
    const [items, setItems] = useState([])
    const rerender = useContext(RerenderContext)
    const ip = useContext(UrlContext)
    const MuiTheme = useTheme()

    const fetchItems = () => {
        axios.get(String(ip) + "api/items/", {
            params: {
                id: section.id
            }
        })
            .then(response => {
                const itemArr = response.data;
                itemArr.sort((s1, s2) => {
                    const name1 = s1.name.toUpperCase();
                    const name2 = s2.name.toUpperCase();

                    if (name1 > name2) {
                        return 1;
                    }

                    if (name1 < name2) {
                        return -1;
                    }

                    return 0;
                });
                setItems(itemArr)
            })
            .catch(error => {
                console.log(error)
            });
    }

    useEffect(fetchItems, [section, rerender, ip]);

    const handleRefresh = () => {
        fetchItems()
    }

    return (
        <>
            <div style={{ display: "flex", justifyContent: "center" }}>
                <HiOutlineRefresh style={{ color: MuiTheme.palette.accent }} size={24} onClick={() => handleRefresh()} />
            </div>
            <List>
                {
                    items.map((item) => (
                        <Item key={item.id} itemIn={item} sectionName={section.name} />
                    ))
                }
            </List>
        </>
    )
}

export default ItemList
