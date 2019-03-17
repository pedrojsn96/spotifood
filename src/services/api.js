import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		Authorization:
			'Bearer BQD9uK4iCP5cDiDTNQsQLyYJ3hHLgg7SOq27vCXMezM9q2OtdTG_Ou15HdHo8-xtU-AkkY7BMngHwOB5HIfTPfw-SiZ9aaH2v6uvbX5W6qRTqY76qQvqmQb0XFgfYdCIhAC4JriJEX4da1OTqlEg1muEXvhE3vIlYipHYd5z4dsvezBqX8Me'
	}
});

export default api;
