import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		Authorization:
			'Bearer BQBuAJoujZ9y7mVcIPv_QwvwmqMEXPwa2q_i3MkmTDjmoUp4iUz6BqtgJr0YRC1JpsWBDr37vkc94r5hp6GxuEKsnRavjY5T7ROeD_DnP4AcGyv-z5SzbfvO-YdRq9KaGUP_uCxp-7etzvyzMHIY9VEo6rGMSo51vHXhOpql7HRQbk0gYlI2'
	}
});

export default api;
