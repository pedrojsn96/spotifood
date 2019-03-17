import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		Authorization:
			'Bearer BQAEcIl1u4rd8jXVDcYRzzryDqOTcIbEDP9zomrHNJ1IVpLI2lCB-WzUtIDrd0ChRP_1-6awYxBvFzuy8JqAS6RxT3_wYZNzitr9UtsEgdpL_uL_TQ1AGtpDeV-TGs0UEIEk9IoixfXYLP3QVh0GTOVG5LU5XYNdq4q-wrE9Fbnlw-3OJ5fA'
	}
});

export default api;
