import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		Authorization:
			'Bearer BQBg2tyWSPevE1suOXwY1xWLPD6of5u2UjjV7nk6kcpmTE3b3ZH6h3JJU19FJAQgmjBrhTMom2fIxqS939gnKqEFwp8ZOvff-kU1HEltJf0p2vrETo83moeXsmUo5Hho5bVqGJe-T0nD6tnMc3coFaqKAwqSmP_pCpHE-4J06IezAsvGCC0u'
	}
});

export default api;
