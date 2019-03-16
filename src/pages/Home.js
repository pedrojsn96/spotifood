import React, { Component } from 'react';

// import { Button } from 'react-bootstrap';
import spotifyLogo from '../spotify.png';

//styles
import './Home.css';

// api
import api from '../services/api';

//components
import Playlist from '../components/Playlist';

export default class Home extends Component {
	state = {
		search: '',
		playlists: []
	};

	async componentDidMount() {
		const response = await api.get('featured-playlists', {
			params: {
				limit: 5
			}
		});

		this.setState({ playlists: response.data.playlists.items });
	}

	handleNewSearch = async e => {
		if (e.keyCode !== 13) return;

		const search = this.state.search;

		alert(search);

		await api.get('featured-playlists', {
			locale: search,
			limit: 5
		});

		this.setState({ search: '' });
	};

	handleSearchChange = e => {
		this.setState({ search: e.target.value });
	};

	render() {
		return (
			<div className="container">
				<div className="title-header">
					<h1 className="title-text">SpotiFood</h1>
					<img className="logo" height={36} src={spotifyLogo} alt="SpotiFood" />
				</div>
				<div className="content-wrapper">
					<div className="search-content-wrapper">
						<form>
							<input
								value={this.state.search}
								onChange={this.handleSearchChange}
								onKeyDown={this.handleNewSearch}
								placeholder="Search"
							/>
						</form>
					</div>
					<div className="playlists-content-wrapper">
						{this.state.playlists.map(item => (
							<Playlist key={item.id} playlist={item} />
						))}
					</div>
				</div>
			</div>
		);
	}
}
