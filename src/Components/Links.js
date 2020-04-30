import React, { Component } from 'react';
import github1 from '../Images/github.png';
import github2 from '../Images/github2.png';
import ScrollUpButton from "react-scroll-up-button";


export class Links extends Component {
	render() {
		return (
			<div>
			<ScrollUpButton />
				<h1>Links</h1>
				<div class="unit">
				<img className="logo" src={github1} />
				<a href="https://github.com/WilliamStansbury/HCI">Link to my repo for this class</a>
				</div>
				<div class="unit">
				<img className="logo" src={github2} />
				<a href="https://github.com/WilliamStansbury/HCI">The same link with another picture</a>
				</div>
			</div>
			);
	}
}
export default Links;