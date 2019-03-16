import React, { Component } from 'react';

import api from '../services/api';

import './SearchPlaylist.css';

import { InputGroup, FormControl } from 'react-bootstrap';

export default class SearchPlaylist extends Component {
	state = {
		search: '',
		playlists: ''
	};

	handleNewSearch = async e => {
		if (e.keyCode !== 13) return;

		const search = this.state.search;

		const searchResponse = await api.get('featured-playlists', {
			params: {
				locale: search,
				limit: 2
			}
		});

		console.log('SEARCH: ', searchResponse);

		this.setState({ search: '' });
	};

	handleSearchChange = e => {
		this.setState({ search: e.target.value });
		console.log(this.state.search);
	};
	render() {
		return (
			<InputGroup className="search-form">
				<InputGroup.Prepend>
					<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					placeholder="Search a playlist"
					aria-label="Search"
					aria-describedby="basic-addon1"
					value={this.state.search}
					onChange={this.handleSearchChange}
					onKeyDown={this.handleNewSearch}
				/>
			</InputGroup>
		);
	}
}
