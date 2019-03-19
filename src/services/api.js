import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		Authorization:
			'Bearer BQCLjCVK_hoX3HOxm69ZDUXUCXJ1vKRwRlbaYhK6c9dx50HoJC2OXhBR5iF0zQekh6ql9MnXzyDARo_4MODIh9ft-YE6-O1gQDHD69j1qnBlqWgHrGQN8mCb0-T5dM1z791mrKDnKbOghgOs8Pw5DQ40eZSoiRtQ3EWfdqOzOrAnzwj-UJjT'
	}
});

export default api;
