import React, { useState } from 'react'
import Section from './Section'
import { Accordion } from 'react-bootstrap';

const SectionList = ({ sections, onSectionUpdate }) => {

    return (
        <Accordion defaultActiveKey="0">
            {
                sections.map((section, index) => (
                    <Section section={section} index={index} onSectionUpdate={onSectionUpdate} />
                ))
            }
        </Accordion>
    )
}

export default SectionList
