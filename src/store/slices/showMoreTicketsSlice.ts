import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	quantity: 5
};

export const showMoreTicketsSlice = createSlice({
	name: 'showMoreTickets',
	initialState: initialState,
	reducers: {
		setQuantityTickets: (state, action) => {
			state.quantity = state.quantity + action.payload;
		}
	}
});

export const { setQuantityTickets } = showMoreTicketsSlice.actions;
export default showMoreTicketsSlice.reducer;
