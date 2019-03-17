import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		Authorization:
			'Bearer BQB6IfTVWXIVjR12Myf6cxgu_ylLTTF3zZkQCG0x1fY6DBmgw2yL9MMw_CWixtgtx0VsafsvrWk_nmXFrA2c50_CrqHG-uI7JoeJwBDiOkPdGE5yTAXXi1wC33F2IWXcT6oIrsxA184jBcTMlKIvw_mVJJH0IbOxdu_gCco8ej9tjTQbHuM5'
	}
});

export default api;
