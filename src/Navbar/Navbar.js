import React, { Component } from 'react';
import './Navbar.css';

class Navbar extends Component {
    
    render() {
       
    return (

        <header>
            <h2>RecipeApp</h2>
            <nav>
                <li onClick={this.props.changeValue}><a>New recipe</a></li>
                <li><a>Home</a></li>
                <li><a>About</a></li>
                <li><a>Contact Us</a></li>
            </nav>
        </header>
        )
    }
}

export default Navbar;