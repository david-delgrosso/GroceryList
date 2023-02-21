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

  const deleteSection = id => {
    const removeSection = [...sections].filter(section => section.id !== id)
    setSections(removeSection)
  }

  const updateSection = (id, newItems) => {
    let updatedSections = sections.map(section => {
      if (section.id === id) {
        section.items = newItems
      }
      return section
    })
    setSections(updatedSections)
  }

  return (
    <div className="container">
      <SectionForm onSubmit={addSection} />
      <SectionList sections={sections} updateSection={updateSection} deleteSection={deleteSection} />
    </div>
  )
}

export default Main
