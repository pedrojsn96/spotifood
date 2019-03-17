import axios from 'axios';

const api = axios.create({
	baseURL: 'https://api.spotify.com/v1/',
	headers: {
		Authorization:
			'Bearer BQD7vAJMptOd5n9d4Y2c-M8K9Gf1JZZ7BfA_w3WhDq9MnoI-eKCj7RVt26IHnmjSmtzoS_WSLSX0n1Ck718Dl0X2wo2WOcSVPzifrUsYXRqeXee_4uvtD6R2PaJTRGOSvkA4l_Y8t9IGuzbko2WUP5VM8Q9GAfS9pHrIlIdP65kTRXaoyHx1'
	}
});

export default api;
