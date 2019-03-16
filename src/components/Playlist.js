import React, { Component } from 'react';

import './Playlist.css';

import spotifyLogo from '../spotify.png';

export default class Playlist extends Component {
	render() {
		const { playlist } = this.props;

		return (
			<li className="playlist">
				<div className="img-playlist">
					<img height={36} src={spotifyLogo} alt="SpotiFood" />
				</div>
				<div className="info-playlist">
					<p>{playlist.name}</p>
					<p>{playlist.owner.display_name}</p>
					<p>{playlist.external_urls.spotify}</p>
				</div>
			</li>
		);
	}
}
