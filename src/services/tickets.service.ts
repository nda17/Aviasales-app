import { axiosClassicRequest } from '@/api/axios.ts';
import { API_URL } from '@/config/api.config.ts';
import { PUBLIC_PAGES } from '@/config/pages/public.config';

class TicketsService {
	async getSearchId() {
		return axiosClassicRequest.get(`${API_URL}${PUBLIC_PAGES.SEARCH}`);
	}

	async getAllTickets(searchId: string) {
		return await axiosClassicRequest.get(
			`${API_URL}${PUBLIC_PAGES.TICKETS}${searchId}`
		);
	}
}

export default new TicketsService();
