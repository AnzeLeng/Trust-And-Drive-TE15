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
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.77023803,-37.73644909]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.02972103,-37.82823576]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.96063312,-37.81830778]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.90039327,-37.68079766]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.89239327,-37.80325897]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.2437338,-38.05637152]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.97176136,-37.79048984]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.0654256,-37.87543217]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.27853496,-38.08707574]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.93527725,-37.68717513]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.94513631,-37.73909474]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.09177577,-37.9017185]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.37775772,-37.88664208]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.95885056,-37.81104595]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.04469257,-37.82419958]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.92104137,-37.65356971]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.72493432,-37.8554014]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.01760309,-37.66280889]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.28560079,-38.09929906]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.97687403,-37.8753257]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.747241,-37.7590219]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.11480867,-37.89800526]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.96538416,-37.7341651]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.19398853,-38.01673143]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.68289639,-37.8776057]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.92683955,-37.68613448]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.11061664,-38.01726686]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.96495748,-37.75070447]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.1024044,-38.00057783]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.74893829,-37.74693639]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.01058529,-37.94498463]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.94765403,-37.75347549]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.78044875,-37.71559961]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.92161024,-37.70754241]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.99031686,-37.89371071]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.03462965,-37.97762139]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.97873634,-37.79674614]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.074281,-37.83018077]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.01401597,-37.67929436]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.33840315,-38.0599582]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.19110078,-38.16242687]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.151949,-37.85245412]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.3253971,-38.12788324]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.02426073,-37.73556107]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.15439491,-37.84541337]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.24061389,-37.92764359]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.04576633,-37.7419206]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.12123814,-38.14296232]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.98202216,-37.8532126]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.29443235,-37.89891037]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.90326694,-37.80014974]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.74804997,-37.86224116]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.99574594,-37.85217598]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.82652017,-37.80662633]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.12476543,-37.81367692]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.26903418,-37.81887166]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.27250377,-38.01042908]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.00142878,-37.85919193]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.13005984,-37.89491341]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.00043858,-37.75955928]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.03241314,-37.63821831]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.67289885,-37.8320439]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.16225232,-37.99748232]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.98499366,-37.84569413]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.05625489,-37.93585281]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.23946,-38.07766]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.82396787,-37.82404464]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.3603386,-38.03958267]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.47582584,-37.94052109]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.07517386,-37.85057979]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.83623493,-37.75312126]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.06930597,-37.75860687]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.92940401,-37.67571191]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.20071033,-37.82699555]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.10447576,-37.84472037]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.10719425,-37.99090623]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.97506947,-37.78491725]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.70880223,-37.83621485]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.75537818,-37.81096925]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.17833146,-37.87556366]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.98562353,-37.86776322]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.99100909,-37.86532121]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.08091786,-37.9320527]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.96433892,-37.7718989]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.10904923,-37.84942056]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.77306096,-37.78300134]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.12477441,-37.81368005]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.08138828,-37.71765553]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.88670337,-37.76899685]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.96286371,-37.78102235]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.07618269,-37.90840198]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.08508931,-37.98048577]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.07596474,-37.82829958]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.96446837,-37.82305352]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.9758038,-37.83692455]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.0243665,-37.92284235]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.16226752,-37.99737329]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.15796333,-37.95475344]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.15144207,-37.94953633]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.19176862,-37.94537775]
			},
			"properties": {
				"clearance": "13' 2"
			}
		}	]
};

const obstacle = turf.buffer(clearances, 0.25, { units: 'kilometers' });

map.on('load', () => {
map.addLayer({
id: 'clearances',
type: 'circle',
source: {
type: 'geojson',
data: obstacle
},
layout: {},
paint: {
'circle-color': '#f03b20',
'circle-radius': 3
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