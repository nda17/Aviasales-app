import { ticketsApi } from '@/store/api';
import additionalReducer from '@/store/slices/additionalFilterSlice';
import progressReducer from '@/store/slices/progressBarSlice';
import showMoreTicketsReducer from '@/store/slices/showMoreTicketsSlice';
import ticketsReducer from '@/store/slices/ticketsSlice';
import transfersReducer from '@/store/slices/transfersFilterSlice';
import { configureStore } from '@reduxjs/toolkit';
import { setupListeners } from '@reduxjs/toolkit/query';

export const store = configureStore({
	reducer: {
		[ticketsApi.reducerPath]: ticketsApi.reducer,
		progress: progressReducer,
		tickets: ticketsReducer,
		transfersFilter: transfersReducer,
		additionalFilter: additionalReducer,
		showMoreTickets: showMoreTicketsReducer
	},
	devTools: true,
	middleware: getDefaultMiddleware =>
		getDefaultMiddleware().concat(ticketsApi.middleware)
});

setupListeners(store.dispatch);
