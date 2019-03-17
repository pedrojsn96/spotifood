import React, { Component } from 'react';

import api from '../services/api';
import axios from 'axios';

import './FilterPlaylist.css';

import {
	InputGroup,
	FormControl,
	Button,
	Collapse,
	Form
} from 'react-bootstrap';

export default class FilterPlaylist extends Component {
	state = {
		search: '',
		playlists: '',
		localeFilters: [],
		countryFilters: [],
		openFilterOptions: false
	};

	async componentDidMount() {
		const response = await axios.get(
			'http://www.mocky.io/v2/5a25fade2e0000213aa90776'
		);

		this.setState({ localeFilters: response.data.filters[0].values });
		this.setState({ countryFilters: response.data.filters[1].values });
	}

	handleApplyFilter = async e => {
		e.preventDefault();

		const country = this.country.value;
		const locale = this.locale.value;

		const params = {
			country: country,
			locale: locale
		};

		const response = await api.get('browse/featured-playlists', {
			params: params
		});

		this.setState({
			playlists: response.data.playlists.items,
			openFilterOptions: false
		});
	};

	handleNewSearch = async e => {
		if (e.keyCode !== 13) return;

		const search = this.state.search;

		const searchResponse = await api.get('search', {
			params: {
				type: 'playlist',
				q: search,
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
		const { openFilterOptions, localeFilters, countryFilters } = this.state;
		return (
			<>
				<div className="filter-options">
					<InputGroup className="search-form">
						<InputGroup.Prepend>
							<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							placeholder="Search a playlist"
							aria-label="Search"
							value={this.state.search}
							onChange={this.handleSearchChange}
							onKeyDown={this.handleNewSearch}
						/>
					</InputGroup>

					<div className="button-filter-options">
						<Button
							onClick={() =>
								this.setState({ openFilterOptions: !openFilterOptions })
							}
							aria-controls="collapse-filter-options"
							aria-expanded={openFilterOptions}
							style={{
								backgroundColor: 'rgb(0, 225, 85)',
								border: 0,
								fontWeight: '500'
							}}
						>
							Filter Options
						</Button>
					</div>
				</div>
				<br />
				<div>
					<Collapse in={this.state.openFilterOptions}>
						<div className="collapse-filter-options">
							<p className="title-text">Filters Options</p>
							<div className="filter-form">
								<Form onSubmit={this.handleApplyFilter}>
									<Form.Row>
										<Form.Group controlId="locale" style={{ marginRight: 20 }}>
											<Form.Label
												style={{
													color: 'rgb(236, 236, 236)',
													fontWeight: 'bold'
												}}
											>
												Locale
											</Form.Label>
											<FormControl
												as="select"
												name="locale"
												ref={c => (this.locale = c)}
											>
												<option>Choose...</option>
												{localeFilters.map((item, index) => (
													<option key={index} value={item.value}>
														{item.name}
													</option>
												))}
											</FormControl>
										</Form.Group>
										<Form.Group controlId="country">
											<Form.Label
												style={{
													color: 'rgb(236, 236, 236)',
													fontWeight: 'bold'
												}}
											>
												Country
											</Form.Label>
											<FormControl
												as="select"
												name="country"
												ref={c => (this.country = c)}
											>
												<option>Choose...</option>
												{countryFilters.map((item, index) => (
													<option key={index} value={item.value}>
														{item.name}
													</option>
												))}
											</FormControl>
										</Form.Group>
									</Form.Row>
									<Button variant="primary" type="submit">
										Apply
									</Button>
								</Form>
							</div>
						</div>
					</Collapse>
				</div>
			</>
		);
	}
}
