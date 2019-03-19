import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		Authorization:
			'Bearer BQC2Hz9txoD0g-PuOq3Vd7fCd18XE-d-96auoa286N7cUexSCR4dGLsUkLeOBy0XoKAmXqL3tsnxQEYtMoHLrlUdHw9YzMXb8z7dMpIA_RI6NsY7xbuVUGQ5Ej7X2ltYgils0egGtLykAqJDv4-pqpOsP2Z4MOJ_E-NLUPteWDSj-e7xjHG5'
	}
});

export default api;
