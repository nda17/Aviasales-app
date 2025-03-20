import { API_URL } from '@/config/api.config';
import { PUBLIC_PAGES } from '@/config/pages/public.config';
import { setTickets } from '@/store/slices/ticketsSlice';
import {
	createApi,
	fetchBaseQuery,
	retry
} from '@reduxjs/toolkit/query/react';

export const ticketsApi = createApi({
	reducerPath: 'ticketsApi',
	baseQuery: retry(fetchBaseQuery({ baseUrl: API_URL }), {
		maxRetries: 5
	}),

	endpoints: builder => ({
		getSearchId: builder.query<string, void>({
			query: () => PUBLIC_PAGES.SEARCH,
			transformResponse: (response: { searchId: string }) =>
				response.searchId
		}),

		getTickets: builder.query({
			query: searchId => `${PUBLIC_PAGES.TICKETS}${searchId}`,
			async onQueryStarted(_, { dispatch, queryFulfilled }) {
				try {
					const { data } = await queryFulfilled; // Ждем выполнения запроса
					if (data.tickets && !data.stop) {
						dispatch(setTickets(data.tickets));
					}
				} catch (e) {
					console.error('Ошибка при загрузке данных:', e);
				}
			}
		})
	})
});

export const { useGetSearchIdQuery, useGetTicketsQuery } = ticketsApi;
