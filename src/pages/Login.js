import React, { Component } from 'react';

import { Switch, Redirect } from 'react-router-dom';

import './Login.css';
import spotifyLogo from '../spotify.png';

import { Button } from 'react-bootstrap';

export default class Login extends Component {
	state = {
		loading: false
	};

	getHashParams = () => {
		var hashParams = {};
		var e,
			r = /([^&;=]+)=?([^&;]*)/g,
			q = window.location.hash.substring(1);
		while ((e = r.exec(q))) {
			hashParams[e[1]] = decodeURIComponent(e[2]);
		}
		return hashParams;
	};

	handleSignin = e => {
		e.preventDefault();
		// window.open(
		// 	`https://accounts.spotify.com/authorize?client_id=77e2595877a442789caa9dc925f30ef4&response_type=token&redirect_uri=http%3A%2F%2Flocalhost%3A3000&scope=user-read-private%20user-read-email&state=34fFs29kd09`,
		// 	'_self'
		// );
		window.open(
			`https://accounts.spotify.com/authorize?client_id=77e2595877a442789caa9dc925f30ef4&response_type=token&redirect_uri=https%3A%2F%2Fspotifood-p.herokuapp.com&scope=user-read-private%20user-read-email&state=34fFs29kd09`,
			'_self'
		);
	};

	handleLogin = (token, type, expires_in) => {
		this.setState({
			loading: true
		});
		console.log('ENTREI HANDLE LOGIN');
		localStorage.setItem('@SpotiFood:token', token);
		localStorage.setItem('@SpotiFood:type', type);
		localStorage.setItem('@SpotiFood:expires_in', expires_in);

		// window.location.replace('http://localhost:3000/home');
		// window.location.replace('http://spotifood-p.herokuapp.com/home');
		this.setState({
			loading: false
		});
		console.log(this.state);
		window.history.pushState({ urlPath: '/auth' }, '', '/auth');
		window.location.reload();
		// return window.history.pushState({ urlPath: '/auth' }, '', '/list');
		return (
			<Switch>
				<Redirect path="/auth" to="/home" />
			</Switch>
		);
	};

	componentDidMount() {
		console.log('ENTREI');
		const { access_token, token_type, expires_in } = this.getHashParams();
		console.log(access_token, token_type, expires_in);

		if (access_token !== undefined) {
			console.log('ENTREI CONDICAO');
			this.handleLogin(access_token, token_type, expires_in);
			// this.setState({
			// 	loading: true
			// });
		}
	}

	render() {
		console.log('RENDER');
		const { loading } = this.state;
		console.log(this.state);
		return (
			<form className="form-signin">
				<div className="text-center mb-4">
					<img
						className="mb-4"
						src={spotifyLogo}
						alt=""
						width="72"
						height="72"
					/>
					<h1 className="title-text">SpotiFood</h1>
				</div>
				<div className="row justify-content-center">
					{loading ? (
						<div className="text-center">
							<div className="spinner-border text-success" role="status">
								<span className="sr-only">Loading...</span>
							</div>
						</div>
					) : (
						<Button
							onClick={this.handleSignin}
							style={{
								backgroundColor: 'rgb(0, 225, 85)',
								border: 0,
								fontWeight: '500',
								textAlign: 'center'
							}}
						>
							Log In with Spotify
						</Button>
					)}
				</div>
			</form>
		);
	}
}
