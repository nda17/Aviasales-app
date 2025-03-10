import { createSlice } from '@reduxjs/toolkit';

const initialState: string[] = [
	'all',
	'no-transfers',
	'one-transfers',
	'two-transfers',
	'three-transfers'
];

const specificFilters = initialState.filter(item => item !== 'all');

export const transfersFilterSlice = createSlice({
	name: 'transfersFilter',
	initialState: {
		activeFilters: initialState
	},
	reducers: {
		changeTransfersFilter: (
			state,
			action: { payload: { value: string } }
		) => {
			const newFilter = action.payload.value;
			const currentFilters = state.activeFilters;

			if (newFilter === 'all') {
				state.activeFilters = currentFilters.includes('all')
					? []
					: initialState;
				return;
			}

			let updatedFilters = currentFilters.filter(item => item !== 'all');
			updatedFilters = updatedFilters.includes(newFilter)
				? updatedFilters.filter(item => item !== newFilter)
				: [...updatedFilters, newFilter];

			const allSpecificSelected = specificFilters.every(filter =>
				updatedFilters.includes(filter)
			);

			state.activeFilters = allSpecificSelected
				? [...updatedFilters, 'all']
				: updatedFilters;
		}
	}
});

export const { changeTransfersFilter } = transfersFilterSlice.actions;
export default transfersFilterSlice.reducer;
