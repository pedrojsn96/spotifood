import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		Authorization:
			'Bearer BQCcpySDKJ4bkSqw6E84uHU4f2F9ccYqJqfFVWX3clS73QMx38XxridEAE3atwCat1MXh7lgZOYSg_sWRf_vvohmjL_jKqDMEJDAXR5xNGvbU-d60CcKyAATMaTHrazUj_a0oEjBYFscoFKOUTTGrxq6Sx0pJJqGqi4WV7DBNgi5bSAiQO_i'
	}
});

export default api;
