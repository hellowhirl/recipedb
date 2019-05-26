import React, { Component } from 'react';
import { recipes } from '../recipes.json';

function Detail({ match }) {
  const receipeId = parseInt(match.params.recipeId);

  const recipeFound = recipes.find(function(recipe) {
    return recipe.id === receipeId;
  });

  console.log({ recipeFound });

  return (
    <div>
      <h1>recipe details page</h1>
      <h3>ID: </h3>
    </div>
  );
}

export default Detail;
