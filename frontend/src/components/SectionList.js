import React, { useState, useEffect, useContext } from 'react'
import Section from './Section'
import axios from "axios"
import { UrlContext } from '../UrlContext';

const SectionList = () => {
    const [sections, setSections] = useState([])
    const ip = useContext(UrlContext)

    const fetchSections = () => {
        axios.get(String(ip) + "api/section/")
            .then(response => {
                const sectionArr = response.data;
                sectionArr.sort((s1, s2) => s1.order - s2.order);
                setSections(sectionArr)
            })
            .catch(error => {
                console.log(error)
            });
    }

    useEffect(fetchSections, [ip]);

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
