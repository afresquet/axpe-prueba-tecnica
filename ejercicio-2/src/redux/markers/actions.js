import { ADD_MARKER } from "./types";

export const addMarker = marker => ({
	type: ADD_MARKER,
	payload: marker,
});
