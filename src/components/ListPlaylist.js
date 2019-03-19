import React, { Component } from 'react';

import { Button } from 'react-bootstrap';

import api from '../services/api';

import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as playlistsActions from '../actions/playlists';

import './ListPlaylist.css';

import Playlist from '../components/Playlist';

class ListPlaylist extends Component {
	state = {
		limit: 4,
		offset: 4,
		loadingMore: false,
		showLoadMore: true
	};

	handleClick = e => {
		const { limit, offset } = this.state;
		this.setState({
			offset: offset + limit,
			loadingMore: true
		});

		const response = api
			.get('browse/featured-playlists', {
				params: {
					limit: 4,
					offset: offset
				}
			})
			.then(data => {
				const newData = data.data.playlists.items;
				if (newData.length === 0) {
					this.setState({ showLoadMore: false });
					return;
				}
				const playlists = [...this.props.playlists[0], ...newData];
				this.props.listPlaylists(playlists);
				this.setState({ loadingMore: false });
			})
			.catch(error => {
				console.log(error);
			});
	};

	render() {
		const { playlists } = this.props;
		const { loadingMore, showLoadMore } = this.state;

		let data = playlists[0];

		if (data !== undefined) {
			return (
				<>
					{data.map(item => (
						<Playlist key={item.id} playlist={item} />
					))}
					{showLoadMore ? (
						<div className="load-more-button">
							<Button
								onClick={() => this.handleClick()}
								style={{
									backgroundColor: 'rgb(0, 225, 85)',
									border: 0,
									fontWeight: '500'
								}}
							>
								{loadingMore ? 'Loading...' : 'Load More'}
							</Button>
						</div>
					) : null}
				</>
			);
		} else {
			return null;
		}
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
)(ListPlaylist);
