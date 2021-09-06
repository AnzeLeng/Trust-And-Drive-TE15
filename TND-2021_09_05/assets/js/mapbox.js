mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhYXYiLCJhIjoiY2tzbDVrNGhzMDRzdzJvbzJmZ3pxaDk1ZCJ9.8r9fmco1WMtfXTrMvSOlcQ'; 
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/chaav/cksx2g8zh836f18ptnof7sxvb', 
	center: [145.128904, -37.980748],
	zoom: 9.18
});

map.on('load', () => {
	map.addSource('all-accident', {
		type: 'vector',
		url: 'mapbox://chaav.cksx28n8h31zo27oe9ud0g6l5-85o42'
	});
	map.addLayer({
		'id': 'all-accident',
		'type': 'circle',
		'source': 'all-accident',
		'source-layer': 'Accident_Map_All',
		'paint': {
			'circle-color': '#ff0000',
			'circle-radius': 3,
			'circle-stroke-width': 0,
			'circle-stroke-color': '#000000'
		}
	});
	map.addSource('serious-accident', {
		type: 'vector',
		url: 'mapbox://chaav.ckt4dcpwq0hdy20nwk8xgdk67-7w8y1'
	});
	map.addLayer({
		'id': 'serious-accident',
		'type': 'circle',
		'source': 'serious-accident',
		'source-layer': 'Accident_Map_Serious',
		'paint': {
			'circle-color': '#ffab1a',
			'circle-radius': 3,
			'circle-stroke-width': 0,
			'circle-stroke-color': '#000000'
		}
	});
	const mouseRolloverpopup = new mapboxgl.Popup({
		closeButton: false,
		closeOnClick: false
	});

	const mouseClickpopup = new mapboxgl.Popup({ offset: [0, -15] })

	map.on('mouseenter', 'all-accident', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();
 
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
 
		mouseRolloverpopup.setLngLat(coordinates).setHTML(`<div class="popup"><h3>${e.features[0].properties.title}</h3><p>${e.features[0].properties.description}</p></div>`).addTo(map);
	});


	map.on('mouseleave', 'all-accident', () => {
		map.getCanvas().style.cursor = '';
		mouseRolloverpopup.remove();
	});

	map.on('click', 'all-accident', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}

		mouseClickpopup.setLngLat(coordinates).setHTML(`<h3>${e.features[0].properties.title}</h3><p>${e.features[0].properties.description}</p>`).addTo(map);

	});

});

/*
map.on('click', ({ point }) => {
	const features = map.queryRenderedFeatures(point, {
		layers: ['accident-map-all'] // replace with your layer name
	});

	if (!features.length) {
		return;
	}
	const feature = features[0];

	const popup = new mapboxgl.Popup({ offset: [0, -15] })
	.setLngLat(feature.geometry.coordinates)
	.setHTML(
		`<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
	)
	.addTo(map);
});
*/

