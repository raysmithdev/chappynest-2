import React from 'react';
import Client from '../Client';

class Login extends React.Component{
	state = {
		chores:[],
		users:[],
		dailyTask:[],
	}
	constructor(props){
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
	}

	handleSubmit(event) {
		event.preventDefault();
		let user = {
			username: this.usernameInput.value,
			password: this.passwordInput.value
		};
		Client.login(user, user => {
			if(user.hasOwnProperty('message')){
				alert(user.message);
			} else {
				//user is correct, store in App State.
				let self = this;
				this.props.loginUser(user,function(){
					// self.props.history.push('/');
					self.props.history.push('/'+user.type+'dashboard');
				});
			}
		});
	}

	render(){
		return(
		<div>	
			<header className="nav-bar">
				<ul>
					<li><a href="/signup">Signup</a></li>
					<li> <a href="/">Home</a></li>
				</ul>
			</header>

			<div className="title">
				<h2>Chappy Nest</h2>
			</div>

			<div className="form" id="login">
				<h1>LOGIN</h1>
				<form onSubmit={this.handleSubmit.bind(this)}> 
        			<input ref={(input) => { this.usernameInput =input}} placeholder="Email" type="text" name="username1" className="username" required />
        			<input ref={(input) => { this.passwordInput =input}} placeholder="Password" type="password" className="password1" name="password" required/>
        			<button id="login" className="btn" type="submit" >Sign In</button>
        		</form>
        		
        		<p className="link">Dont have an account? <span><a href="/signup">Sign Up</a></span></p>
			</div>
		</div>
			)
	}
}

export default Login;