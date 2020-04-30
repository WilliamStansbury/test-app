import React, { Component } from 'react';
import londoneye from '../Images/londoneye.JPG';
import ScrollUpButton from "react-scroll-up-button";

export class Home extends Component {
	render() {
		return (
			<div>
			 <ScrollUpButton />
				<h1>Home</h1>
				<div class = "bio">
				<img src={londoneye} />
				<p>Hello yes this is text</p>
				</div>
			</div>
			);
	}
}
export default Home;