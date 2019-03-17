import React, { Component } from 'react';

import './ListPlaylist.css';

import Playlist from '../components/Playlist';

export default class ListPlaylist extends Component {
	render() {
		const { playlists } = this.props;
		let data = playlists[0];

		if (data !== undefined) {
			return data.map(item => <Playlist key={item.id} playlist={item} />);
		} else {
			return null;
		}
	}
}
