mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhYXYiLCJhIjoiY2tzbDVrNGhzMDRzdzJvbzJmZ3pxaDk1ZCJ9.8r9fmco1WMtfXTrMvSOlcQ'; 

const bounds = [
[140.954590,-39.138582], // Southwest coordinates
[150.314941,-33.961586] // Northeast coordinates
];

const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/chaav/cktguyqgw4mbr17o6htzhauqp', 
	center: [145.128904, -37.980748],
	zoom: 8.50,
	minZoom: 8,
	maxBounds: bounds
});

map.addControl(new mapboxgl.NavigationControl(),'bottom-right');

const directions = new MapboxDirections({
	accessToken: mapboxgl.accessToken,
	geocoder: {
		countries: 'au',
		bbox: [140.954590,-39.138582,150.314941,-33.961586],
 
		filter: function (item) {
		
			return item.context.some((i) => {
		
				return (
					i.id.split('.').shift() === 'region' &&
					i.text === 'Victoria'
				);
			});
		},
		//mapboxgl: mapboxgl
	}, 
 	//mapboxgl: mapboxgl
	profile: 'mapbox/driving',
	alternatives: 'false',
	geometries: 'geojson'
})

map.addControl(directions,'top-left');

map.scrollZoom.enable();

const clearances = {
	'type': 'FeatureCollection',
	'features': [
		{
			'type': 'Feature',
			'geometry': {
				'type': 'Point',
				'coordinates': [145.161534,	-37.90343471]
			},
			'properties': {
				'clearance': "13' 2"
			}
		},
		{
			'type': 'Feature',
			'geometry': {
				'type': 'Point',
				'coordinates': [145.2079508,	-38.00306081]
			},
			'properties': {
				'clearance': "13' 2"
			}
		},
		{
			'type': 'Feature',
			'geometry': {
				'type': 'Point',
				'coordinates': [145.0725717,	-37.97483647]
			},
			'properties': {
				'clearance': "13' 2"
			}
		}
	]
};

const obstacle = turf.buffer(clearances, 0.25, { units: 'kilometers' });

map.on('load', () => {
map.addLayer({
id: 'clearances',
type: 'fill',
source: {
type: 'geojson',
data: obstacle
},
layout: {},
paint: {
'fill-color': '#f03b20',
'fill-opacity': 0.5,
'fill-outline-color': '#f03b20'
}
});
 
// Create sources and layers for the returned routes.
// There will be a maximum of 3 results from the Directions API.
// We use a loop to create the sources and layers.
for (let i = 0; i < 3; i++) {
map.addSource(`route${i}`, {
type: 'geojson',
data: {
type: 'Feature'
}
});
 
map.addLayer({
id: `route${i}`,
type: 'line',
source: `route${i}`,
layout: {
'line-join': 'round',
'line-cap': 'round'
},
paint: {
'line-color': '#cccccc',
'line-opacity': 0.5,
'line-width': 13,
'line-blur': 0.5
}
});
}
});
 
directions.on('route', ({ route }) => {
const reports = document.getElementById('reports');
reports.innerHTML = '';
const report = reports.appendChild(document.createElement('div'));
// Add IDs to the routes
const routes = route.map((route, index) => ({
...route,
id: index
}));
 
// Hide all routes by setting the opacity to zero.
for (let i = 0; i < 3; i++) {
map.setLayoutProperty(`route${i}`, 'visibility', 'none');
}
 
for (const { id, geometry } of routes) {
// Make each route visible, by setting the opacity to 50%.
map.setLayoutProperty(`route${id}`, 'visibility', 'visible');
 
// Get GeoJSON LineString feature of route
const routeLine = polyline.toGeoJSON(geometry);
 
// Update the data for the route, updating the visual.
map.getSource(`route${id}`).setData(routeLine);
 
const isClear = turf.booleanDisjoint(obstacle, routeLine) === true;
 
const collision = isClear ? 'is good!' : 'is bad.';
const emoji = isClear ? '??' : '??';
const detail = isClear ? 'does not go' : 'goes';
report.className = isClear ? 'item' : 'item warning';
 
if (isClear) {
map.setPaintProperty(`route${id}`, 'line-color', '#74c476');
} else {
map.setPaintProperty(`route${id}`, 'line-color', '#de2d26');
}
 
// Add a new report section to the sidebar.
// Assign a unique `id` to the report.
report.id = `report-${id}`;
 
// Add the response to the individual report created above.
const heading = report.appendChild(document.createElement('h3'));
 
// Set the class type based on clear value.
heading.className = isClear ? 'title' : 'warning';
heading.innerHTML = `${emoji} Route ${id + 1} ${collision}`;
 
// Add details to the individual report.
const details = report.appendChild(document.createElement('div'));
details.innerHTML = `This route ${detail} through an avoidance area.`;
report.appendChild(document.createElement('hr'));
}
});