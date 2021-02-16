import { ADD_MARKER } from "./types";

export const markersReducer = (state = [], action) => {
	switch (action.type) {
		case ADD_MARKER:
			return [...state, action.payload];
		default:
			return state;
	}
};
