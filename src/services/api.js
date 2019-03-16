import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/browse/',
	headers: {
		Authorization:
			'Bearer BQCN89evseTJAWOvL2H52oCgmcH-fIXRuzT5WbeB0SVns2ylvIze--MnLOaMEhHsunAqC102sn4D3BW3tYXn3ErJ7EJZhvAFlgJqp3vS-NFAkTLAxt_qMP6KyZQIZUB249b8j92KPGofWAs0RPm0SE1QkrMMMOUWiP5bNJgf8mQXmvzP4Tqm'
	}
});

export default api;
