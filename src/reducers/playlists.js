export default function playlists(state = [], action) {
	switch (action.type) {
		case 'LIST_PLAYLISTS':
			return [...state, action.playlists];
		default:
			return state;
	}
}
