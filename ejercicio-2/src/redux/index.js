import { combineReducers, createStore } from "redux";
import { markersReducer } from "./markers/reducer";

const rootReducer = combineReducers({
	markers: markersReducer,
});

export const store = createStore(rootReducer);
