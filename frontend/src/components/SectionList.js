import React, { useState, useEffect } from 'react'
import Section from './Section'
import axios from "axios"

const SectionList = () => {
    const [sections, setSections] = useState([])

    const fetchSections = () => {
        axios.get("http://127.0.0.1:8000/api/section/")
            .then(response => {
                const sectionArr = response.data;
                sectionArr.sort((s1, s2) => s1.order - s2.order);
                setSections(sectionArr)
            })
            .catch(error => {
                console.log(error)
            });
    }

    useEffect(fetchSections, []);

    return (
        <>
            {
                sections.map((section) => (
                    <Section key={section.id} section={section} />
                ))
            }
        </>
    )
}

export default SectionList
