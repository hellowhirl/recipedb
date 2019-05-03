import React, { Component } from 'react';
import './App.css';
import RecipeCard from './components/RecipeCard';
import { recipes } from './recipes.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        {
          recipes.map(m =>
            <RecipeCard
              key={m.id}
              name={m.name}
              ingredients={m.ingredients}
             />
          )
        }
      </div>
    );
  }
}

export default App;
