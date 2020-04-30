import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";


export class Videos extends Component {
	render() {
		return (
			<div>
			 <ScrollUpButton />
				<h1>Videos</h1>
				<div class="row">
					<iframe className="youtube" src="https://www.youtube.com/embed/kPRA0W1kECg" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1">
	        </iframe>
	        <iframe className="youtube" src="https://www.youtube.com/embed/puSkP3uym5k" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1">
	        </iframe>
	        </div>
	        <div class="row">
	        <iframe className="youtube" src="https://www.youtube.com/embed/j9nOPUxjVrM" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1">
	        </iframe>
	        <iframe className="youtube" src="https://www.youtube.com/embed/pJZ4zgiKv-c" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="1">
	        </iframe>
				</div>
				
			</div>
		);
	}
}
export default Videos;