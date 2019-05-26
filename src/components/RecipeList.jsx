import React, { Component } from 'react';
import { recipes } from '../recipes.json';
import RecipeCard from './RecipeCard';

class RecipeList extends Component {
  render() {
    return (
      <div>
        {recipes.map(m => (
          <RecipeCard
            key={m.id}
            // name={m.name}
            // ingredients={m.ingredients}
            // image={m.image}
            // time={m.prepTime}
            {...m}
            percent={m.tempPercent}
          />
        ))}
      </div>
    );
  }
}

export default RecipeList;
