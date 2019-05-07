import React, { Component } from 'react';
import './App.css';
import SearchBar from './components/SearchBar';
import ResultCounter from './components/ResultCounter';
import RecipeCard from './components/RecipeCard';
import { recipes } from './recipes.json';

class App extends Component {
  render() {
    return (
      <div className="App">
        <SearchBar/>
        <ResultCounter/>
        {
          recipes.map(m =>
            <RecipeCard
              key={m.id}
              name={m.name}
              ingredients={m.ingredients}
              image={m.image}
              time={m.prepTime}
              percent={m.tempPercent}
             />
          )
        }
      </div>
    );
  }
}

export default App;
