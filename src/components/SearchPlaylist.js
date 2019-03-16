import React, { Component } from 'react';

import api from '../services/api';

import './SearchPlaylist.css';

import { InputGroup, FormControl } from 'react-bootstrap';

export default class SearchPlaylist extends Component {
	state = {
		search: ''
	};

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
			// <form>
			// 	<input
			// 		value={this.state.search}
			// 		onChange={this.handleSearchChange}
			// 		onKeyDown={this.handleNewSearch}
			// 		placeholder="Search"
			// 		className="search-input"
			// 	/>
			// </form>
			<InputGroup className="search-form">
				<InputGroup.Prepend>
					<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
				</InputGroup.Prepend>
				<FormControl
					placeholder="Search a playlist"
					aria-label="Search"
					aria-describedby="basic-addon1"
				/>
			</InputGroup>
		);
	}
}
