mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhYXYiLCJhIjoiY2tzbDVrNGhzMDRzdzJvbzJmZ3pxaDk1ZCJ9.8r9fmco1WMtfXTrMvSOlcQ'; 
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/chaav/cksx2g8zh836f18ptnof7sxvb', 
	center: [145.128904, -37.980748],
	zoom: 8.50,
	minZoom: 8
});

map.addControl(new mapboxgl.NavigationControl(),'bottom-right');

map.addControl(new MapboxDirections({
	accessToken: mapboxgl.accessToken,
 
	// Limit seach results to Australia.
	countries: 'au',
 
	// Use a bounding box to further limit results
	// to the geographic bounds representing the
	// region of Victoria.
	bbox: [140.954590,-39.138582,150.314941,-33.961586],
 
	// Apply a client-side filter to further limit results
	// to those strictly within the Victoria region.
	filter: function (item) {
		// returns true if item contains New South Wales region
		return item.context.some((i) => {
		// ID is in the form {index}.{id} per https://github.com/mapbox/carmen/blob/master/carmen-geojson.md
		// This example searches for the `region`
		// named `New South Wales`.
		return (
		i.id.split('.').shift() === 'region' &&
		i.text === 'Victoria'
		);
		});
	},
	mapboxgl: mapboxgl
	}),'top-left'
);

