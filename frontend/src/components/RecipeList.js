import React, { useState, useEffect } from 'react'
import Recipe from './Recipe'
import axios from "axios"

const RecipeList = () => {
  const [recipes, setRecipes] = useState([])

  const fetchRecipes = () => {
    axios.get("http://127.0.0.1:8000/api/recipe/")
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

  useEffect(fetchRecipes, []);

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
