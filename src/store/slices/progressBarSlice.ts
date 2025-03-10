import { createSlice } from '@reduxjs/toolkit';

const initialState = {
	progress: 0
};

export const progressBarSlice = createSlice({
	name: 'progress',
	initialState: initialState,
	reducers: {
		setProgressBar: (state, action) => {
			state.progress = action.payload;
		}
	}
});

export const { setProgressBar } = progressBarSlice.actions;
export default progressBarSlice.reducer;
