import React, { useState, useEffect } from 'react'
import ItemForm from './ItemForm'
import { Accordion } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import './Item.css'


const Section = ({ section, index, onSectionUpdate }) => {
    const [items, setItems] = useState([...section.items])

    useEffect(() => {
        onSectionUpdate(section.id, items)
    }, [items])

    const addItem = item => {
        const newItems = [...items, item]
        setItems(newItems)
    }

    const clickItem = (id) => {
        let updatedItems = items.map(item => {
            if (item.id === id) {
                item.need = !item.need
            }
            return item
        })
        setItems(updatedItems)
    }

    return (
        <Accordion.Item eventKey={index}>
            <Accordion.Header>{section.name}</Accordion.Header>
            <Accordion.Body>
                <ListGroup as="ul">
                    {
                        items.map((item) => (
                            <ListGroup.Item as="li" className={item.need ? "" : "complete"} onClick={() => clickItem(item.id)} >
                                {item.name}
                            </ListGroup.Item>
                        ))
                    }
                    <ListGroup.Item as="li">
                        <ItemForm onSubmit={addItem} />
                    </ListGroup.Item>
                </ListGroup>
            </Accordion.Body>
        </Accordion.Item>
    )
}

export default Section
