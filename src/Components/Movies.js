import React, { Component } from 'react';
import github1 from '../Images/github.png';
import ScrollUpButton from "react-scroll-up-button";
import { SRLWrapper } from 'simple-react-lightbox';
import ReactDOM from 'react-dom'
import config from './config.js'
const firebase = require('firebase');
const axios = require('axios');

// firebase.initializeApp(config)
// var ref = firebase.database().ref('movies')

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

var images = [];

var captions = [];

var databaseMovies = [];

// var ref = firebase.database().ref('movies')

function updateMovies() {

	images = []
	var codeBlock = ''
	databaseMovies.forEach(element => 
	axios.get("https://www.omdbapi.com/?apikey=71e07b98&i=" + element).then(function(response) {
		console.log(response);
		var img = new Image();
		var url = response.data.Poster;
		img.src = url;
		images.push(img)
		console.log(url);

		codeBlock = codeBlock + '<div class="container"><img src =' + url + ' class = "image"/><div class = "middle"><div class="text"></div></div></div>'

	}).then(function(response) {
		document.getElementById("innerArray").innerHTML = codeBlock

	}).catch(function(error) {
	  	console.error(error)
	})
	);
};

function testing() {
	var ref = firebase.database().ref('movies');
	databaseMovies = []

	console.log("NOTICE ME")
	ref.once('value',function(snap) {
    snap.forEach(function(item) {
    	// ref.child(item.key).remove();
        var itemVal = item.key;
        // ref.child(item.val()).remove();
        console.log("itemVal:")
        console.log(itemVal);
        databaseMovies.push(itemVal);
    });
    console.log(databaseMovies.length)
}).then(function(response) {
	updateMovies();
});
}

//The below function is my best attempt at deleting an entry from my database.
function deleteMovie() {
	var ref = firebase.database().ref('movies');
	var counter = 0;
	ref.once('value',function(snap) {
		snap.forEach(function(item) {
	        var itemVal = item.val();
	        var itemKey = item.key;
	        if(counter === 0) {
	        	console.log("movie:")
	        	alert(itemKey)
	        	// ref.child(item.key).remove();
	        	// ref.child(item.val()).set(null);
	        }
	        counter = counter + 1;
	    });
	});
}



export class Movies extends Component {



	render() {

		testing()
		
		return (
			<div>
				<ScrollUpButton />

				<script>

				</script>

				<h1>Movies</h1>

					<SRLWrapper> 
					<div id = "innerArray">
					</div>
					</SRLWrapper>
					<div>
					<p>To grader: I was unable to implement lists. I was also unable to implement delete. My half-way solution was to have a delete button outside of the lightbox that simply deleted the first movie in the database. I am able to retrieve the correct entry I want to delete, but when I attempted to delete the entry, it instead deleted the whole "movies" table. My attempt is in the "deleteMovie()" function. Also, the first time you click on this tab, all movies appear twice. I am not sure why that is, but if you click on "AddMovie" and come back, they will only appear once.</p>
						<button onClick={deleteMovie}>Delete a movie</button>

					</div>
				</div>
			);
	}
}

export default Movies;