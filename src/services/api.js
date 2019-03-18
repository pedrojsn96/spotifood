import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		Authorization:
			'Bearer BQC-7tVIsucH5KR3evmrNcLzObE1vfheMl5RCRB8ByAQIv2Bx3ZW51oJAlMYoBBl1qzTJ0TaTEJ9SZbwaizzPEYB14e-LEEgJSK_NzBP2SAyWQ6KkvC801VycKoGnjv22M8B8E1rB3EptgX55zAi3gR6nIf22WJFup4ni61vr0yOmr_Aop8D'
	}
});

export default api;
