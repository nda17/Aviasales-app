import { axiosClassicRequest } from '@/api/axios.ts';
import { API_URL } from '@/config/api.config.ts';

class TicketsService {
	async getSearchId() {
		return axiosClassicRequest.get(`${API_URL}/search`);
	}

	async getAllTickets(searchId: string) {
		return await axiosClassicRequest.get(
			`${API_URL}/tickets?searchId=${searchId}`
		);
	}
}

export default new TicketsService();
