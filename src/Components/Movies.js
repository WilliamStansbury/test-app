import React, { Component } from 'react';
import github1 from '../Images/github.png';
import ScrollUpButton from "react-scroll-up-button";
import { SRLWrapper } from 'simple-react-lightbox';

import amelie from '../movie_posters/amelie.jpg';
import bruges from '../movie_posters/bruges.jpg';
import fantastic from '../movie_posters/fantastic.jpg';
import fifth from '../movie_posters/fifth.jpg';
import heathers from '../movie_posters/heathers.jpg';
import right from '../movie_posters/right.jpg';
import scott from '../movie_posters/scott.jpg';
import shadows from '../movie_posters/shadows.jpg';
import smolShop from '../movie_posters/smolShop.jpg';
import spiderman from '../movie_posters/spiderman.jpg';
import tucker from '../movie_posters/tucker.jpg';
import whiplash from '../movie_posters/whiplash.jpg';

import NotreDame2 from '../Images/NotreDame2.jpg';
const axios = require('axios');


var movieIDs = [
		"tt4633694",
		"tt0091419",
		"tt2582802",
		"tt2091935",
		"tt3416742",
		"tt0432283",
		"tt1465522",
		"tt0119116",
		"tt0446029",
		"tt0211915",
		"tt0097493",
		"tt0780536"
		];

export class Movies extends Component {


	updateMovies() {
		var counter = 1;
		movieIDs.forEach(element => 
			axios.get("https://www.omdbapi.com/?apikey=71e07b98&i=" + element).then(function(response) {
	  		console.log(response);
	  		 var img = new Image();
	  		 var url = response.data.Poster;
	  		 console.log(url);
	  		 document.getElementById("testing" + counter).src = url;
	  		 counter++;
	  		 // img.onload = function() {
      //                ctx.drawImage(img, 1000, 1000);
      //            }
	  		 // img.source = "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg";
	  	}).catch(function(error) {
	  		console.error(error)
	  	})
		);
	}


	render() {
		var counter = 1;
		movieIDs.forEach(element => 
			axios.get("http://www.omdbapi.com/?apikey=71e07b98&i=" + element).then(function(response) {
	  		console.log(response);
	  		 var img = new Image();
	  		 var url = response.data.Poster;
	  		 console.log(url);
	  		 document.getElementById("testing" + counter).src = url;
	  		 counter++;
	  		 // img.onload = function() {
      //                ctx.drawImage(img, 1000, 1000);
      //            }
	  		 // img.source = "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg";
	  	}).catch(function(error) {
	  		console.error(error)
	  	})
		);

		const images = [
  {
    src: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
  {
    src: "https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg",
  },
]

var imgArray = new Array();
imgArray[0] = new Image();
imgArray[0].src = 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg';

imgArray[1] = new Image();
imgArray[1].src = 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg';

imgArray[0] = new Image();
imgArray[0].src = '../Images/NotreDame2.jpg'		

var testImage = new Image();
testImage.src = 'https://m.media-amazon.com/images/M/MV5BNjM0NTc0NzItM2FlYS00YzEwLWE0YmUtNTA2ZWIzODc2OTgxXkEyXkFqcGdeQXVyNTgwNzIyNzg@._V1_SX300.jpg';
		
		return (
			<div>
			<ScrollUpButton />
				<h1>Movies</h1>
				<div id="arrayImages"></div>

				<h3>Note to grader: I was unable to incorporate the images I got from the API into the SRL wrapper, so I am displaying the images I got from the OMDB API, and then below, I am including local images arranged in a lightbox.</h3>

				<h3>Below are the images recovered asynchronously from the OMDB API:</h3>

				<div class = "lightbox">
					<div class="container">
						<img id = "testing1" src = {github1} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
						<img id = "testing2" src = {github1} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
						<img id = "testing3" src = {github1} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
						<img id = "testing4" src = {github1} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
						<img id = "testing5" src = {github1} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
						<img id = "testing6" src = {github1} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
						<img id = "testing7" src = {github1} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
						<img id = "testing8" src = {github1} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
						<img id = "testing9" src = {github1} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
						<img id = "testing10" src = {github1} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
						<img id = "testing11" src = {github1} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
						<img id = "testing12" src = {github1} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>

				</div>



				<h3>Below are the same images stored locally inside an SRL wrapper:</h3>

				<SRLWrapper> 
				{
					<div>
					<div class = "lightbox">
						<div class="container">
							<img src = {amelie} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
							<img src = {bruges} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
							<img src = {fantastic} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
							<img src = {fifth} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
							<img src = {heathers} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
							<img src = {smolShop} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
							<img src = {right} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
							<img src = {scott} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
							<img src = {spiderman} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
							<img src = {tucker} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
							<img src = {shadows} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						<div class="container">
							<img src = {whiplash} class = "image"/>
							<div class = "middle">
								<div class="text"></div>
							</div>
						</div>
						</div>
					</div>

					//imgArray
				}
				</SRLWrapper>


			</div>
			);
	}
}

export default Movies;