import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import RecipeCard from './components/RecipeCard';
import { recipes } from './recipes.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        {
          recipes.map(m =>
            <RecipeCard
              key={m.id}
              name={m.name}
              ingredients={m.ingredients}
              image={m.image}
             />
          )
        }
      </div>
    );
  }
}

export default App;
