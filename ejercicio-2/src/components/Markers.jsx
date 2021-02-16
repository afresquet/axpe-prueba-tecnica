import { Marker } from "@react-google-maps/api";
import React from "react";
import { useSelector } from "react-redux";
import { selectMarkers } from "../redux/markers/selectors";

export const Markers = () => {
	const markers = useSelector(selectMarkers);

	return markers.map(marker => (
		<Marker position={marker.coordinates} key={marker.id} />
	));
};
