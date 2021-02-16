import { Autocomplete as AutocompleteMaps } from "@react-google-maps/api";
import PropTypes from "prop-types";
import React, { useCallback, useRef } from "react";
import { useDispatch } from "react-redux";
import { addMarker } from "../redux/markers/actions";

export const Autocomplete = ({ recenter }) => {
	const dispatch = useDispatch();

	const autocompleteRef = useRef(null);
	const inputRef = useRef(null);

	const onLoad = useCallback(ref => {
		autocompleteRef.current = ref;
	}, []);

	const onPlaceChanged = useCallback(() => {
		if (autocompleteRef.current === null) {
			console.error("still loading");

			return;
		}

		inputRef.current.value = "";

		const {
			place_id: id,
			formatted_address: name,
			geometry: { location },
		} = autocompleteRef.current.getPlace();
		const coordinates = {
			lat: location.lat(),
			lng: location.lng(),
		};

		dispatch(addMarker({ id, name, coordinates }));

		recenter(coordinates);
	}, [dispatch, recenter]);

	return (
		<AutocompleteMaps onLoad={onLoad} onPlaceChanged={onPlaceChanged}>
			<input className="input" ref={inputRef} />
		</AutocompleteMaps>
	);
};

Autocomplete.propTypes = {
	recenter: PropTypes.func,
};
