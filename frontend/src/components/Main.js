import React, { useState, useContext } from 'react'
import SectionList from './SectionList'
import ItemForm from './ItemForm'
import RecipeList from './RecipeList'
import '../App.css'
import SearchBar from './SearchBar'
import { useTheme, Typography, styled } from '@mui/material'
import { RerenderContext } from '../RerenderContext'
import { PageContext } from '../PageContext'

const StyledPageHeader = styled(Typography)(({ theme }) => ({
  color: theme.palette.text.header + " !important",
  padding: "0.25rem",
  fontWeight: "bold",
  fontSize: 28
}))

const Main = () => {
  const [rerender, setRerender] = useState(false)
  const MuiTheme = useTheme();
  const page = useContext(PageContext)

  const toggleRerender = () => {
    setRerender(!rerender)
  }

  const renderPageSwitch = () => {
    switch (page) {
      case "groceries":
        return groceryPage
      case "recipes":
        return recipePage
      case "manageitems":
        return manageItemsPage
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

  const manageItemsPage = (
    <>
      <div className="page-header">
        <StyledPageHeader>Manage Items</StyledPageHeader>
      </div>
      <ItemForm />
    </>
  )

  return (
    <div className="container" style={{ paddingTop: "2.6rem", background: MuiTheme.palette.background.primary }}>
      {renderPageSwitch()}
    </div >
  )
}

export default Main
