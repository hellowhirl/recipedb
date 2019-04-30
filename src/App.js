import React, { Component } from 'react';
import './App.css';
import RecipeCard from './components/RecipeCard';

class App extends Component {
  render() {
    return (
      <div className="App">

          <RecipeCard />

      </div>
    );
  }
}

export default App;
