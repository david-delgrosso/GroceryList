import React, { useState, useEffect } from 'react'
import SectionForm from './SectionForm'
import SectionList from './SectionList'
import '../App.css'

const Main = () => {
    const [sections, setSections] = useState(() => {
      const savedSections = localStorage.getItem("sections")
      return savedSections !== null ? JSON.parse(savedSections) : []
    })

    useEffect(() => {
      localStorage.setItem("sections", JSON.stringify(sections))
    }, [sections])

    const addSection = section => {
        const newSections = [...sections, section]
        setSections(newSections)
    }

    return (
    <div className="container">
      <SectionForm onSubmit={addSection} />
      <SectionList sections={sections} />
    </div>
  )
}

export default Main
