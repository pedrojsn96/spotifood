import React, { Component } from 'react';

import spotifyLogo from '../spotify.png';

//styles
import './Home.css';

import { Alert } from 'react-bootstrap';

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
		playlists: [],
		expiredToken: false
	};

	componentDidMount() {
		api
			.get('browse/featured-playlists')
			.then(data => {
				this.props.listPlaylists(data.data.playlists.items);
			})
			.catch(error => {
				if (error.response.status === 401) {
					this.setState({ expiredToken: true });
					setInterval(() => {
						this.setState({ expiredToken: false });
						window.location.replace('http://localhost:3000/');
					}, 3000);
				}
			});
	}

	syncMethod = () => {
		api
			.get('browse/featured-playlists')
			.then(data => {
				this.props.listPlaylists(data.data.playlists.items);
			})
			.catch(error => {
				if (error.response.status === 401) {
					this.setState({ expiredToken: true });
					setInterval(() => {
						this.setState({ expiredToken: false });
						window.location.replace('http://localhost:3000/');
					}, 3000);
				}
			});
	};

	componentWillMount() {
		setInterval(() => {
			this.syncMethod();
		}, 3000);
	}

	render() {
		const { expiredToken } = this.state;
		return (
			<div className="container">
				<div className="title-header">
					<h1 className="title-text">SpotiFood</h1>
					<img className="logo" height={36} src={spotifyLogo} alt="SpotiFood" />
				</div>
				<div className="row">
					<FilterPlaylist />
					<div className="col-12">
						{!expiredToken ? (
							<ListPlaylist playlists={this.props.playlists} />
						) : (
							<Alert
								dismissible
								show={this.state.filterApplied}
								onClose={this.closeModal}
								variant="danger"
								style={{ justifyContent: 'center' }}
							>
								<Alert.Heading>Tour token has been expired!</Alert.Heading>
								<hr />
							</Alert>
						)}
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
