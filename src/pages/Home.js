import React, { Component } from 'react';

// import { Button } from 'react-bootstrap';
import spotifyLogo from '../spotify.png';

//styles
import './Home.css';

// api
import api from '../services/api';

//components
import FilterPlaylist from '../components/FilterPlaylist';
import ListPlaylist from '../components/ListPlaylist';

export default class Home extends Component {
	state = {
		search: '',
		playlists: []
	};

	async componentDidMount() {
		const response = await api.get('browse/featured-playlists', {
			params: {
				limit: 10
			}
		});

		this.setState({ playlists: response.data.playlists.items });
	}

	render() {
		return (
			<div className="container">
				<div className="title-header">
					<h1 className="title-text">SpotiFood</h1>
					<img className="logo" height={36} src={spotifyLogo} alt="SpotiFood" />
				</div>
				<div className="content-wrapper">
					{/* <div className="search-content-wrapper">
						<FilterPlaylist />
					</div> */}
					<FilterPlaylist />
					<div className="playlists-content-wrapper">
						<ListPlaylist playlists={this.state.playlists} />
					</div>
				</div>
			</div>
		);
	}
}
