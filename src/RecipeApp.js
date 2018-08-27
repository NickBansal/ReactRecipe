import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import RecipeList from './RecipeList/RecipeList';
import './RecipeApp.css';

class RecipeApp extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
