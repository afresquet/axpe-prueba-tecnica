import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import { useCallback, useState } from "react";
import "./App.css";
import { Autocomplete } from "./components/Autocomplete";
import { Markers } from "./components/Markers";

const barcelona = {
	lat: 41.3851,
	lng: 2.1734,
};

const loaderOptions = {
	googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
	libraries: ["places"],
};

const mapOptions = {
	disableDefaultUI: true,
};

const App = () => {
	const { isLoaded, loadError } = useJsApiLoader(loaderOptions);

	const [center, setCenter] = useState(barcelona);
	const recenter = useCallback(location => {
		setCenter(location);
	}, []);

	if (!isLoaded) {
		return <span>Loading...</span>;
	}

	if (loadError) {
		return (
			<div>
				<span>Map could not be loaded.</span>
				<pre>{loadError.message}</pre>
			</div>
		);
	}

	return (
		<GoogleMap
			mapContainerClassName="map-container"
			center={center}
			zoom={12}
			options={mapOptions}
		>
			<Autocomplete recenter={recenter} />

			<Markers />
		</GoogleMap>
	);
};

export default App;
