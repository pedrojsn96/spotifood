import React, { Component } from 'react';

// import { Button } from 'react-bootstrap';
import spotifyLogo from '../spotify.png';

//styles
import './Home.css';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playlistsActions from '../actions/playlists';

// api
import api from '../services/api';

//components
import FilterPlaylist from '../components/FilterPlaylist';
import ListPlaylist from '../components/ListPlaylist';

class Home extends Component {
	state = {
		search: '',
		playlists: []
	};

	async componentDidMount() {
		const response = await api.get('browse/featured-playlists', {
			params: {
				limit: 5
			}
		});
		this.props.listPlaylists(response.data.playlists.items);
	}

	render() {
		return (
			<div className="container">
				<div className="title-header">
					<h1 className="title-text">SpotiFood</h1>
					<img className="logo" height={36} src={spotifyLogo} alt="SpotiFood" />
				</div>
				<div className="content-wrapper">
					<FilterPlaylist />
					<div className="playlists-content-wrapper">
						<ListPlaylist playlists={this.props.playlists} />
					</div>
				</div>
			</div>
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
)(Home);
