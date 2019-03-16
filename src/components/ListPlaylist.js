import React, { Component } from 'react';

import './ListPlaylist.css';

import Playlist from '../components/Playlist';

export default class ListPlaylist extends Component {
	render() {
		const { playlists } = this.props;

		return playlists.map(item => <Playlist key={item.id} playlist={item} />);
	}
}
