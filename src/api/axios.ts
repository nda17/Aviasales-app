import axios from 'axios';

const axiosOptions = {
	method: 'GET',
	headers: {
		accept: 'application/json'
	}
};

export const axiosClassicRequest = axios.create(axiosOptions);
