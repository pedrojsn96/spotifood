import React, { Component } from 'react';

import './Login.css';
import spotifyLogo from '../spotify.png';

import { Button } from 'react-bootstrap';

import axios from 'axios';

export default class Login extends Component {
	handleLogin = async e => {
		const response = await axios.get('https://accounts.spotify.com/authorize', {
			params: {
				client_id: '77e2595877a442789caa9dc925f30ef4',
				response_type: 'code',
				redirect_uri: 'http://localhost:3000'
			},
			headers: {
				'Access-Control-Allow-Origin': '*'
			}
		});
		console.log(response);
	};

	render() {
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
					<Button
						onClick={this.handleLogin}
						style={{
							backgroundColor: 'rgb(0, 225, 85)',
							border: 0,
							fontWeight: '500',
							textAlign: 'center'
						}}
					>
						Log In with Spotify
					</Button>
				</div>
			</form>
		);
	}
}
