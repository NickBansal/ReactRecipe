import React, { Component } from 'react';
import './Recipe.css'
import PropTypes from 'prop-types';




class Recipe extends Component {
    
    static propTypes = {
        title: PropTypes.string.isRequired,
        ingredients: PropTypes.arrayOf(PropTypes.string).isRequired,
        instructions: PropTypes.string.isRequired,
        img: PropTypes.string.isRequired,
    }
      
    render () {
        const {title, img, instructions} = this.props;
        const ingredients = this.props.ingredients.map((ing, index) => (
            <li key={index}>{ing}</li>
            ));
        return (
            <div className="recipe-card">
                <img className="recipe-img" src={img} alt="food" />
                <div className="recipe-content">
                    <h3 className="recipe-title">{title}</h3>
                    <ul>
                        <h3>Ingredients: </h3>
                        <h4>{ingredients}</h4>
                    </ul>
                    <p>{instructions}</p>
                </div>
            </div>
            );
        }
    };

export default Recipe; 
