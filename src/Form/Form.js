import React, { Component } from 'react';
import './Form.css';



class Form extends Component {
	render () {
		return (
			<div className="Form">
				<form>
				<p>Add new recipe...</p>
		          <input type='text' />
		          <input type='text' />
		          <input type='text' />
		          <input type='text' />
		          <button type="submit">SAVE</button>
		        </form>
			</div>
		)
	}
}


export default Form;