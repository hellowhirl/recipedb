import React, { Component } from 'react';
import { recipes } from '../recipes.json';

function Detail({ match }) {
  const receipeId = parseInt(match.params.recipeId);

  const recipeFound = recipes.find(function(recipe) {
    return recipe.id === receipeId;
  });

  const image = recipeFound.image;
  const imagePath = `./images/recipe_images/${image}.jpg`;
  const ingreds = recipeFound.list;
  const ingredItems = [];

  for (const [index, value] of ingreds.entries()) {
    ingredItems.push(
      <li key={index} className="ingredientName col-md-3 col-6">
        {value}
      </li>
    );
  }

  return (
    <div>
      <img src={imagePath} />
      <h1>{recipeFound.name}</h1>
      <h4>Ingredients:</h4>
      <div>{ingredItems}</div>
      <h4>Instructions:</h4>
      <p>{recipeFound.instructions}</p>
    </div>
  );
}

export default Detail;
