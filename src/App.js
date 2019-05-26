import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import SearchBar from './components/SearchBar';
import ResultCounter from './components/ResultCounter';
import RecipeCard from './components/RecipeCard';
import RecipeList from './components/RecipeList';
import Detail from './components/Detail';

import Container from 'react-bootstrap/Container';
import Button from 'react-bootstrap/Button';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <SearchBar />
          <ResultCounter />
          <Switch>
            <Route exact path="/" component={RecipeList} />
            <Route path="/:recipeId" component={Detail} />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
