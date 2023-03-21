import React, { useState } from 'react'
import SectionForm from './SectionForm'
import SectionList from './SectionList'
import RecipeForm from './RecipeForm'
import RecipeList from './RecipeList'
import '../App.css'
import SearchBar from './SearchBar'
import { useTheme, Typography, styled } from '@mui/material'
import { RerenderContext } from '../RerenderContext'

const StyledPageHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.header + " !important",
  padding: "0.25rem",
  fontWeight: "bold",
  fontSize: 28
}))

const Main = ({ page }) => {
  const [rerender, setRerender] = useState(false)
  const MuiTheme = useTheme();

  const toggleRerender = () => {
    setRerender(!rerender)
  }

  const renderPageSwitch = (pageName) => {
    switch(pageName) {
      case "groceries":
        return groceryPage
      case "recipes":
        return recipePage
      default:
        return
    }
  }

  const groceryPage = (
    <>
      <div className="page-header">
        <StyledPageHeader>Groceries</StyledPageHeader>
      </div>
      <SearchBar toggleRerender={toggleRerender} />
      <RerenderContext.Provider value={rerender}>
        <SectionList />
      </RerenderContext.Provider>
    </>
  )

  const recipePage = (
    <>
      <div className="page-header">
        <StyledPageHeader>Recipes</StyledPageHeader>
      </div>
      <RecipeList />
    </>
  )

  return (
    <div className="container" style={{ paddingTop: "2.6rem", background: MuiTheme.palette.background.primary }}>
      {renderPageSwitch(page)}
    </div >
  )
}

export default Main
