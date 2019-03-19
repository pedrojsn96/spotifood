import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		Authorization:
			'Bearer BQB6BIUNDYhOXIJSWkooaotpksu8q1Rcc-Ef_7FroKIsr2rKoZD6ynXKwCC6f2cEDWWhG0cwSrUJ694OKjkVYDKP87HGUldq_uf90HQM7641wYCjvqgPeKwu_jfKuzokw_1CiqPUa7jfiCupIa4zrAy066H8I0r7KAhEVyTRbiJdmgguJj3E'
	}
});

export default api;
