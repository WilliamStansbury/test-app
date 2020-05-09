import React, { Component } from 'react';
import ScrollUpButton from "react-scroll-up-button";
import config from './config.js'
const firebase = require('firebase');

const sample = ["hi", "hello", "how are you"];
var notGonnaWork;
export class Messages extends Component {

	constructor(props) {
		super(props)
		this.state = {data: {},
		shouldUpdate: false,
		nameValue: "",
		bioValue: "",
		messageValue: "",
		dateValue: "",
		messageVisisble: false }



		this.handleChangeName = this.handleChangeName.bind(this);
		this.handleChangeBio = this.handleChangeBio.bind(this);
		this.handleChangeEmail = this.handleChangeEmail.bind(this);
		this.handleChangeMessage = this.handleChangeMessage.bind(this);
		this.handleInputChange = this.handleInputChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
	}
	componentDidMount(){
		firebase.initializeApp(config)
		let ref = firebase.database().ref('data')
		console.log(ref)
		ref.on('value', snapshot => {
			const data = snapshot.val()
			console.log(Object.values(data))

			// console.log(Object.values)
			this.setState({data: Object.values(data)})
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
		let ref = firebase.database().ref('data')
		ref.on('value', snapshot => {
			const data = snapshot.val()
			this.setState({data: Object.values(data)})
		})

		}
	}

	  handleChangeName(event) {
	    this.setState({nameValue: event.target.value});
	  }
	  handleChangeBio(event) {
	    this.setState({bioValue: event.target.value});
	  }
	  handleChangeEmail(event) {
	    this.setState({emailValue: event.target.value});
	  }
	  handleChangeMessage(event) {
	    this.setState({messageValue: event.target.value});
	  }

	  handleInputChange(event) {
    const target = event.target;
    const value = target.name === 'messageVisisble' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });
  }

	  handleSubmit(event) {
	  	console.log("start submit")
	  	var jsonBody = {
					"bio":this.state.bioValue,
					"can_post": this.state.messageVisisble,
					"date" : "currentDate??",
					"email": this.state.emailValue,
					"message": this.state.messageValue,
					"name": this.state.nameValue
				}
	  	if (this.state.nameValue.length < 5) {
	  		alert("Name is too short.");
	  		console.log("name too short")
	  	}
	  	else if (this.state.nameValue.length > 20) {
	  		alert("Name is too long.");
	  		console.log("name too long")
	  	}
	  	else if (this.state.bioValue.length > 100) {
	  		alert("Bio is too long.");
	  		console.log("bio too long")
	  	}
	  	else if (this.state.messageValue.length < 20) {
	  		alert("Message is too short.");
	  		console.log(this.state.messageValue.length)
	  	}
	  	else if (this.state.messageValue.length > 500) {
	  		alert("Message is too long.");
	  		console.log("message too long")
	  	} else {
	  		alert('Message submitted!');
				firebase.database().ref('data').push().set(jsonBody)		   
	  	}
	  	event.preventDefault();
	  	this.setState({shouldUpdate: !this.state.shouldUpdate})
	  }

	render() {
		return (
			<div>
				<header>
					<ScrollUpButton />
					<h1>Messages</h1>
					</header>
					<body>

				
					<div class = "column">
					<form onSubmit={this.handleSubmit}>
					<p>
						<label>
	          Name:
	          <input type="text" value={this.state.value} onChange={this.handleChangeName} />
	        </label>
					</p>
	        <p><label>
	          Bio:
	          <input type="text" value={this.state.value} onChange={this.handleChangeBio} />
	        </label>
	        </p>
	        <p><label>
	          Message:
	          <input type="text" value={this.state.value} onChange={this.handleChangeMessage} />
	        </label>
	        </p>
	        <p>
	        	<label>
	          Email:
	          <input type="text" value={this.state.value} onChange={this.handleChangeEmail} />
	        </label>
	        </p>
	        <p>
	        	<input type="submit" value="Submit" />
	        </p>
	        
	      </form>
	      <label>
	          Make message visible:
	          <input
	            name="messageVisisble"
	            type="checkbox"
	            checked={this.state.messageVisisble}
	            onChange={this.handleInputChange} />
	        </label>
	        </div>
						
						<div class = "column">
					{
							console.log(Object.values(this.state.data))
						}
						{
							Object.values(this.state.data).map((s,index) => (
								s.can_post==true ?
										<div>
											<p>
												{s.name}
											</p>
											<p>
												{s.bio}
											</p>
											<p>
												{s.message}
											</p>
											<p>
												{s.date}
											</p>
											<p>
												------------
											</p>
										</div>
									:
									<div></div>
								))
						}
						</div>
						
					</body>
				
				</div>
			);
	}
}
export default Messages;