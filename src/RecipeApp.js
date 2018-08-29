import React, { Component } from 'react';
import Navbar from './Navbar/Navbar';
import RecipeList from './RecipeList/RecipeList';
import Form from './Form/Form'


class RecipeApp extends Component {
	
	state = {
		showForm: false,
	}


	changeValue = () => {
        this.setState(prevState => ({
        	showForm: (!prevState.showForm),
        }));
    }


  render() {

    return (
      <div className="App">
        
        <Navbar changeValue = {this.changeValue}/>

        {this.state.showForm && <Form />} 

        <RecipeList />
      </div>
    );
  }
}

export default RecipeApp;
