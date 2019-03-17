export default function playlists(state = [], action) {
	switch (action.type) {
		case 'LIST_PLAYLISTS':
			return [...state, action.playlists];
		case 'SEARCH_PLAYLISTS':
			return [action.playlists];
		case 'FILTER_PLAYLISTS':
			return [action.playlists];
		default:
			return state;
	}
}
