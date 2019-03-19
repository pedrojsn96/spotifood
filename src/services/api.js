import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		Authorization:
			'Bearer BQB6ZXk-w-h8cC_eafpKLFiFL5-hdLLzFQnM2hx84kCvphzklvqs6noEX-oWRwkQiFljlXf7vXHkAfAQCoKHuaWxFFVlsZw6u8Kr7AwPp9ldx6EOgQ92aWPFIsZu7YhRW3LgiYeuFZpAGQNUbRXCPBhmw7HSF6gk8OWXkp9aulade_2m87pe'
	}
});

export default api;
