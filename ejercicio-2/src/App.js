import { GoogleMap, useJsApiLoader } from "@react-google-maps/api";
import "./App.css";

// Coordinates of Barcelona
const center = {
	lat: 41.3851,
	lng: 2.1734,
};

const App = () => {
	const { isLoaded, loadError } = useJsApiLoader({
		googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
	});

	if (!isLoaded) {
		return <span>loading...</span>;
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
		></GoogleMap>
	);
};

export default App;
