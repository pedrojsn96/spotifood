import React, { Component } from 'react';

import './Playlist.css';

export default class Playlist extends Component {
	render() {
		const { playlist } = this.props;

		return (
			<li className="playlist">
				<div className="img-playlist">
					<a
						className="url-info-playlist"
						href={playlist.external_urls.spotify}
						target="blank"
					>
						<img height={100} src={playlist.images[0].url} alt="SpotiFood" />{' '}
					</a>
				</div>
				<div className="info-playlist">
					<p className="name-info-playlist">{playlist.name}</p>
					<p className="owner-info-playlist">
						Created by <span>{playlist.owner.display_name}</span>
					</p>
					<p className="owner-info-playlist">{playlist.tracks.total} songs</p>
				</div>
			</li>
		);
	}
}
