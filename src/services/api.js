import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/browse/',
	headers: {
		Authorization:
			'Bearer BQD4GDcYovl22rGD1GExNWWpT0zZuNaDYs3x8-7a3mWPmxjgkd4MLgZEeo8sjfEPISLx8oWDQ6_29_hDp9Nybi1gxXBdxenSYvHrpjUifl_kBNB8bdVHNXB2M00JzUX3s_NBjwyiA_X4qpN-UhmccBTe2FOAe15eZDjsD5PbsUrQvgBwhxMh'
	}
});

export default api;
