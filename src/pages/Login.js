import React, { Component } from 'react';

import './Login.css';
import spotifyLogo from '../spotify.png';

import { Button } from 'react-bootstrap';

export default class Login extends Component {
	render() {
		return (
			<form className="form-signin">
				<div className="text-center mb-4">
					<img class="mb-4" src={spotifyLogo} alt="" width="72" height="72" />
					<h1 className="title-text">SpotiFood</h1>
				</div>
				<div className="row justify-content-center">
					<Button
						onClick={() => null}
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
