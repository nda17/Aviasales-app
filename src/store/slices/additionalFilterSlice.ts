import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	activeFilter: 'cheap'
};

export const additionalFilterSlice = createSlice({
	name: 'additionalFilter',
	initialState: initialState,
	reducers: {
		changeAdditionalFilter: (state, action) => {
			state.activeFilter = action.payload.value;
		}
	}
});

export const { changeAdditionalFilter } = additionalFilterSlice.actions;
export default additionalFilterSlice.reducer;
