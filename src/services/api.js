import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/browse/',
	headers: {
		Authorization:
			'Bearer BQD_dWJqHkO5pVRByw6EjwyQxDI-evQ0Tuu_Nx74B99ayGNeSTeaLNs61_IUhXGyWwiChugelgl5MvcjaZ88-JDKf_s7IRpIrbv_oNgxHKoX4aBAWUapEmNpD2-JI_yVt9JPKoidYM878uTjGodAESJEHLPscVVHb-BXoxA9267i1AUDMV7p'
	}
});

export default api;
