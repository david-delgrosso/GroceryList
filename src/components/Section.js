import React, { useState, useEffect } from 'react'
import ItemForm from './ItemForm'
import { Accordion } from 'react-bootstrap';
import ListGroup from 'react-bootstrap/ListGroup';
import './Item.css'


const Section = ({ section, index, updateSection, deleteSection }) => {
    const [items, setItems] = useState([...section.items])

    useEffect(() => {
        updateSection(section.id, items)
    }, [items, section, updateSection])

    const addItem = item => {
        const newItems = [...items, item]
        setItems(newItems)
    }

    const handleItemDelete = (e,id) => {
        e.stopPropagation();
        setItems((prev) => {
            return prev.filter(item => item.id !== id)
        })
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

    const handleSectionDelete = () => {
        deleteSection(section.id)
    }

    return (
        <>
            <Accordion.Item eventKey={index}>
                <Accordion.Header>{section.name}</Accordion.Header>
                <Accordion.Body>
                    <ListGroup as="ul">
                        {
                            items.map((item) => (
                                <ListGroup.Item key={item.id} as="li" className={item.need ? "" : "complete"} onClick={() => clickItem(item.id)} >
                                    {item.name}
                                    <button className="delete-item-button" onClick={(e) => handleItemDelete(e, item.id)}>Delete</button>
                                </ListGroup.Item>
                            ))
                        }
                        <ListGroup.Item as="li">
                            <ItemForm onSubmit={addItem} />
                        </ListGroup.Item>
                    </ListGroup>
                    <div className="delete-section-button-div">
                        <button className="delete-section-button" onClick={handleSectionDelete} >Delete Section</button>
                    </div>
                </Accordion.Body>
            </Accordion.Item>
        </>
    )
}

export default Section
