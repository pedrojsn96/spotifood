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
		playlists: []
	};

	async componentDidMount() {
		const response = await api.get('browse/featured-playlists');
		this.props.listPlaylists(response.data.playlists.items);
	}

	syncMethod = () => {
		api
			.get('browse/featured-playlists')
			.then(data => {
				this.props.listPlaylists(data.data.playlists.items);
			})
			.catch(error => {
				console.log(error);
			});
	};

	componentWillMount() {
		setInterval(() => {
			// window.location.reload();
			this.syncMethod();
		}, 30000);
	}

	render() {
		return (
			<div className="container">
				<div className="title-header">
					<h1 className="title-text">SpotiFood</h1>
					<img className="logo" height={36} src={spotifyLogo} alt="SpotiFood" />
				</div>
				{/* <div className="content-wrapper"> */}
				<div className="row">
					<FilterPlaylist />
					<div className="col-12">
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
