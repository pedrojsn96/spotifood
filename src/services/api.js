import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		Authorization:
			'Bearer BQBAhHg42D1cU6MLxLsbeMFx8QJuA8-PnOP95Ek2Zmb-lVKdyUuT-tN_aX3w9c28cgN5eW9ZbyPNFxIGk3-3UjSgvHLs-YmtrEjZHQCAJXWm4hYAymgsA5LvghQeQvdKY97ctwhZ0sfSValbvg4zObqZ_es5YeIw4ZF_RhVGQwpoh8OJkp6r'
	}
});

export default api;
