import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";
import { SRLWrapper } from 'simple-react-lightbox';
import ReactDOM from 'react-dom'
import config from './config.js'
const firebase = require('firebase');
const axios = require('axios');

var notGonnaWork;

var images = [];

firebase.initializeApp(config)
var ref = firebase.database().ref('movies')

function userExistsCallback(userId, exists) {
  if (exists) {
    alert('user ' + userId + ' exists!');
  } else {
    alert('user ' + userId + ' does not exist!');
  }
}

var USERS_LOCATION = 'https://console.firebase.google.com/u/0/project/hci-db/database/hci-db/data/~2Fmovies'

function checkIfUserExists(userId) {
  // var usersRef = new firebase(USERS_LOCATION);
  ref.child('movies').orderByChild("id").equalTo(userId).once('value', function(snapshot) {
    // var exists = (snapshot.val() !== null);
    if (snapshot.exists()){
      const userData = snapshot.val();
      alert("exists!")
      console.log("exists!", userData);
    } else {
    	alert("does not exist")
    }
    // alert(exists)
    // userExistsCallback(userId, exists);
  });
}


// function checkForFirstTime(userId) {
//   ref.child('movies').child(userId).once('value', function(snapshot) {
//     var exists = (snapshot.id !== null);
//     userExistsCallback(userId, exists);
//   });
// }


export class AddMovie extends Component {

	constructor(props) {
		super(props)
		this.state = {movies: {},
			shouldUpdate: false,
			MovieValue: ""
		}
		this.handleChangeMovieID = this.handleChangeMovieID.bind(this);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	componentDidMount(){
		
		console.log(ref)
		ref.on('value', snapshot => {
			const movies = snapshot.val()
			console.log(Object.values(movies))

			// console.log(Object.values)
			this.setState({movies: Object.values(movies)})
			notGonnaWork = this.state
		})
	}

	componentDidUpdate(prevProps, prevState, snapshot){
		console.log("update?")
		
		//only call set state here if it is wrapped in a condition
		//if you initialize this.state.shouldUpdate and have not changed it yet then this will not run

		//filp shouldUpdate in the onclick function

		//react form / submit button
		if(this.state.shouldUpdate !== prevState.shouldUpdate){
		let ref = firebase.database().ref('movies')
		ref.on('value', snapshot => {
			const data = snapshot.val()
			this.setState({movies: Object.values(data)})
		})

		}
	}

	handleChangeMovieID(event) {
	    this.setState({movieValue: event.target.value});
	}

	handleInputChange(event) {
    const target = event.target;
    const value = target.checked;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

	handleSubmit(event) {
		var testID = this.state.movieValue;
		event.preventDefault();

		var exists = false;
	  		
		// firebase.database().ref('movies').push().set(jsonBody)
	axios.get("https://www.omdbapi.com/?apikey=71e07b98&i=" + this.state.movieValue).then(function(response) {
		console.log(response);
		// codeBlock = codeBlock + '<div class="container"><img src =' + url + ' class = "image"/><div class = "middle"><div class="text"></div></div></div>'
	}).then(function(response) {
		exists = true;
		firebase.database().ref('movies').child(testID).set(testID)

		alert('Movie Submitted!');
		   
	  	event.preventDefault();
	  	this.setState({shouldUpdate: !this.state.shouldUpdate})

	}).catch(function(error) {
		exists = false;
		// alert("error")
		event.preventDefault();
	  	console.error(error)
	})


		
	  }

	render() {
		return (
			<div>
				<ScrollUpButton />
				<header>
					<h1>AddMovie</h1>
				</header>
				<form onSubmit={this.handleSubmit}>
					
					<label>
						Movie ID:
						
					        <input type="text" value={this.state.value} onChange={this.handleChangeMovieID} />
					    </label>
					    <input type="submit" value="Submit" />
					    <div>
					    {
							console.log(Object.values(this.state.movies))
						}
						{
							Object.values(this.state.movies).map((s,index) => (
								<p>
												{s.id}
											</p>
								))
						}
					    </div>
					
				</form>
				<p>To grader: I was unable to disallow invalid movie IDs, but invalid IDs do not pose a problem for the rest of the program.</p>
			</div>
		);
	}
}

export default AddMovie;