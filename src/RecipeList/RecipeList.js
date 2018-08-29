import React, { Component } from 'react';
import './RecipeList.css';
import Recipe from './Recipe/Recipe';
import propTypes from 'prop-types';


class RecipeList extends Component {
    static defaultProps = {
        recipes: [
            {
                title: 'Ham Sandwich',
                ingredients: ['Ham', 'Bread', 'Butter'],
                instructions: "Put ham on bread, get shwifty",
                img: "http://i.dailymail.co.uk/i/pix/2015/09/11/15/2C2FC85900000578-3230809-image-a-35_1441983513225.jpg"
                
            },
            {
                title: "Hot Dog",
                ingredients: ["Sausage", "Buns", "Ketchup"],
                instructions: "Put Sausage in bread",
                img: "https://thecanberrandotcom.files.wordpress.com/2012/05/the-hotdog-could-hurt-later.jpg",
            },
            {
                title: "Broiled Pasta",
                ingredients: ["Pasta", "Water", "Ketchup"],
                instructions: "Boil pasta and then add that Ketchup",
                img: "https://s-i.huffpost.com/gadgets/slideshows/322745/slide_322745_3050836_free.jpg",
            }
        ]
    }
    
    static PropTypes= {
        recipes: propTypes.arrayOf(propTypes.object).isRequired
    };
    
    render() {

        // const shouldIShowThis = true
        // {shouldIShowThis && <stuff />} 

        
        const recipes = this.props.recipes.map((r, index) => (
                <Recipe key={index} {...r} />
            ));
            
        return (
                <div className="recipe-list">
                    {recipes}
                </div>
            )
        }
    };

export default RecipeList;