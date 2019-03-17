import React, { Component } from 'react';

import api from '../services/api';
import axios from 'axios';

import './FilterPlaylist.css';

import {
	InputGroup,
	FormControl,
	Button,
	Collapse,
	Form,
	Alert
} from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playlistsActions from '../actions/playlists';

class FilterPlaylist extends Component {
	state = {
		search: '',
		datePicker: '',
		playlists: '',
		localeFilters: [],
		countryFilters: [],
		openFilterOptions: false,
		filterApplied: false
	};

	async componentDidMount() {
		const response = await axios.get(
			'https://www.mocky.io/v2/5a25fade2e0000213aa90776'
		);

		this.setState({
			localeFilters: response.data.filters[0].values,
			countryFilters: response.data.filters[1].values
		});
	}

	checkParams = params => {
		for (var propName in params) {
			if (params[propName] === null || params[propName] === undefined) {
				delete params[propName];
			}
		}
		return params;
	};

	handleApplyFilter = async e => {
		e.preventDefault();

		const country = this.country.value === 'empty' ? null : this.country.value;
		const locale = this.locale.value === 'empty' ? null : this.locale.value;
		const timestamp =
			this.state.datePicker === '' ? null : this.state.datePicker;

		const data = {
			country: country,
			locale: locale,
			timestamp: timestamp
		};

		const params = this.checkParams(data);

		const response = await api.get('browse/featured-playlists', {
			params: params
		});

		this.props.filterPlaylists(response.data.playlists.items);

		this.setState({
			openFilterOptions: false,
			filterApplied: true
		});
	};

	resetFilters = async e => {
		e.preventDefault();

		const response = await api.get('browse/featured-playlists', {
			params: {
				limit: 5
			}
		});

		this.props.listPlaylists(response.data.playlists.items);

		this.setState({
			filterApplied: false
		});
	};

	closeModal = () => {
		this.setState({
			filterApplied: false
		});
	};

	handleNewSearch = async e => {
		if (e.keyCode !== 13) return;

		const search = this.state.search;

		const searchResponse = await api.get('search', {
			params: {
				type: 'playlist',
				q: search,
				limit: 5
			}
		});

		this.props.searchPlaylists(searchResponse.data.playlists.items);
		this.setState({ search: '' });
	};

	handleSearchChange = e => {
		this.setState({ search: e.target.value });
	};

	handleDatePickerChange = date => {
		this.setState({ datePicker: moment(date, 'YYYY-MM-DD HH:mm').format() });
	};

	render() {
		const { openFilterOptions, localeFilters, countryFilters } = this.state;
		return (
			<>
				<div className="filter-options">
					<InputGroup className="search-form">
						<InputGroup.Prepend>
							<InputGroup.Text>@</InputGroup.Text>
						</InputGroup.Prepend>
						<FormControl
							placeholder="Search a playlist ... (Press Enter to Search)"
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
							<p className="filter-title-text">Filters Options</p>
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
												<option value="empty">Choose...</option>
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
												<option value="empty">Choose...</option>
												{countryFilters.map((item, index) => (
													<option key={index} value={item.value}>
														{item.name}
													</option>
												))}
											</FormControl>
										</Form.Group>
									</Form.Row>
									<Form.Row>
										<Form.Group>
											<Form.Label
												style={{
													color: 'rgb(236, 236, 236)',
													fontWeight: 'bold'
												}}
											>
												Timestamp
											</Form.Label>
										</Form.Group>
									</Form.Row>

									<DatePicker
										selected={this.state.date}
										onChange={this.handleDatePickerChange}
									/>
									<br />
									<Button
										variant="primary"
										type="submit"
										style={{ marginTop: 10 }}
									>
										Apply
									</Button>
								</Form>
							</div>
						</div>
					</Collapse>
					<Alert
						dismissible
						show={this.state.filterApplied}
						onClose={this.closeModal}
						variant="success"
					>
						<Alert.Heading>Filters applied!</Alert.Heading>
						<hr />
						<div className="d-flex justify-content-start">
							<Button onClick={this.resetFilters} variant="outline-success">
								Remove Filters
							</Button>
						</div>
					</Alert>
				</div>
			</>
		);
	}
}

const mapStateToProps = state => ({
	playlists: state.playlists
});

const mapDispatchToProps = dispatch =>
	bindActionCreators(playlistsActions, dispatch);

export default connect(
	mapStateToProps,
	mapDispatchToProps
)(FilterPlaylist);
