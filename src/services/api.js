import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		Authorization:
			'Bearer BQB3gkrm14XNOODpR6WuoO_GaL-NoYsC4-FMvwD0QAWNCSRtBfGTMFz-KownX1bH6SUn5gfm_yzb4dRef4r37E5jjiQ5emOBy2c5_a6SdWWfK33ns9fYEGnXiJRrcuyEhyBRKAxG-6OBfEOUvYxqysVfqfcXpLW7ZR31F8QMxExlBkHxJijZ'
	}
});

export default api;
