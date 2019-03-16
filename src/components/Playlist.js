import React, { Component } from 'react';

import './Playlist.css';

import spotifyLogo from '../spotify.png';

export default class Playlist extends Component {
	render() {
		const { playlist } = this.props;

		return (
			<li className="playlist">
				<div className="img-playlist">
					<img height={100} src={playlist.images[0].url} alt="SpotiFood" />
				</div>
				<div className="info-playlist">
					<p>{playlist.name}</p>
					<p>{playlist.owner.display_name}</p>
					<a href={playlist.external_urls.spotify} target="blank">
						{playlist.external_urls.spotify}
					</a>
				</div>
			</li>
		);
	}
}
