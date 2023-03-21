import React, { useState, useEffect, useContext } from 'react'
import Recipe from './Recipe'
import axios from "axios"
import { UrlContext } from '../UrlContext';

const RecipeList = () => {
  const [recipes, setRecipes] = useState([])
  const ip = useContext(UrlContext)

  const fetchRecipes = () => {
    axios.get(String(ip) + "api/recipe/")
      .then(response => {
        const recipeArr = response.data;
        recipeArr.sort((r1, r2) => {
          const name1 = r1.name.toUpperCase();
          const name2 = r2.name.toUpperCase();

          if (name1 > name2) {
              return 1;
          }

          if (name1 < name2) {
              return -1;
          }

          return 0;
        });
        setRecipes(recipeArr)
      })
      .catch(error => {
        console.log(error)
      });
  }

  useEffect(fetchRecipes, [ip]);

  return (
    <>
      {
        recipes.map((recipe) => (
          <Recipe key={recipe.id} recipe={recipe} />
        ))
      }
    </>
  )
}

export default RecipeList
