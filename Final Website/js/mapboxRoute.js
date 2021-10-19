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

var marker=new mapboxgl.Marker();
var marker1=new mapboxgl.Marker();
var marker2=new mapboxgl.Marker();

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
				"coordinates": [144.34930394,	-38.16468171]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.628917,	-35.45572166]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.29567224,	-36.86679253]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.21200023,	-36.88524463]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [148.46865669,	-37.70659278]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.58876692,	-38.6077248]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.46233555,	-36.19816235]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.46623007,	-37.20147681]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.63533678,	-38.22474925]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [147.23365,	-36.46338]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.11824755,	-36.43358517]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.21311059,	-38.12216713]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.36416933,	-36.39325854]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.03510618,	-36.37230037]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.15883898,	-36.80957986]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.52291097,	-37.16353782]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [141.03539329,	-37.52595142]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.5293234,	-38.31134594]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.4661622,	-37.20134593]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [147.64739601,	-36.19702283]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.96588117,	-37.68786809]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.95065903,	-36.22657034]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.94818317,	-36.19892634]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [147.37871,	-37.81712999]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.26094734,	-37.26703578]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.61958166,	-37.47399594]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.79099766,	-38.07295833]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.09140974,	-37.10450551]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.14626667,	-38.21081295]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [147.86483837,	-37.82092611]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.3185633,	-36.69151974]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.01354669,	-36.02609968]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.69276055,	-38.27537556]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.86238502,	-36.1286267]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.04867939,	-38.29059554]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.49500641,	-37.38366484]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.08983512,	-36.63912288]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.46659661,	-38.20279313]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.10355897,	-36.29874443]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.07579576,	-37.68310562]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [147.64703999,	-37.82589]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.70221748,	-36.47820339]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.53163425,	-36.23912757]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.35777811,	-36.8175012]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.43122882,	-36.24420151]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.89428835,	-37.85265523]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.31189085,	-38.24619627]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.73714544,	-37.24268266]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.95179645,	-38.52903431]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.10364238,	-36.21073004]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.56610703,	-36.56112628]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.17565114,	-34.23963709]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.20489248,	-37.3753115]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.67067216,	-35.47244523]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.23308566,	-36.05324323]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.18400784,	-38.60994854]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.22267666,	-36.46499252]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.61083774,	-36.0102818]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.08892384,	-37.74369233]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.76808304,	-34.61787868]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.88958445,	-37.28904318]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.66526477,	-37.05560794]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.31237009,	-38.44021385]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.65873248,	-37.47327859]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.27728455,	-36.4075097]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.71506103,	-38.55726535]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.65968784,	-35.98297329]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.46853607,	-36.14034736]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.17454791,	-38.02823925]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.74431316,	-37.52501317]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.16388174,	-37.33594485]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.46193102,	-36.35287668]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.2524899,	-37.83072973]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.35876225,	-38.18110147]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.29441705,	-36.63219999]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.87049546,	-36.35350175]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.51318677,	-37.54284181]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [147.27757008,	-37.84874911]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.16295455,	-38.20628308]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.6823894,	-38.6593855]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.96741902,	-36.66132594]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [141.51638321,	-38.03286114]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.34183161,	-38.12966029]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.65287383,	-38.28735948]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.52287453,	-36.74695789]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.10938861,	-36.73910497]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.78229861,	-38.06208211]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.26057346,	-38.33592352]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.49824107,	-37.6858458]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.30034293,	-36.32502829]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.67912512,	-36.79286047]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.63706677,	-36.54578047]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.4256421,	-36.30973388]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.99576237,	-37.39940536]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.47824178,	-37.68708178]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.14241727,	-37.34515369]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.40964186,	-36.28274665]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.17460299,	-38.0281744]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.87987429,	-38.53020018]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.25759576,	-38.49668708]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.63785726,	-37.67906997]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.12061242,	-36.49553797]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.75895308,	-36.71126315]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.38042265,	-36.48718042]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.45529705,	-37.58202722]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.34038109,	-38.1665818]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [149.13361523,	-37.57046514]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.49869926,	-36.61714781]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.53987878,	-38.23638812]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.44415862,	-38.23611919]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.82431956,	-37.07555191]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.82935704,	-35.81540407]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.85538087,	-37.55934636]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.00554999,	-36.19909999]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.55299953,	-38.75114326]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.30109612,	-36.32547348]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.31349856,	-36.42551417]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.6598793,	-35.96988641]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.13784157,	-36.14552116]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.37992838,	-38.05064738]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.64597802,	-36.72999558]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.26501238,	-37.6630531]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.22266911,	-36.41412596]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.4747955,	-38.4721676]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.72889,	-38.05512999]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.52281002,	-36.65014428]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.65941437,	-36.6941432]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.32970849,	-39.0239926]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.78323543,	-38.39056627]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.15517658,	-37.95395765]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.36204165,	-36.31094897]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [141.28908866,	-38.1632767]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.13753292,	-36.02230937]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.02631,	-38.29380536]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.39974513,	-36.33140853]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.38450083,	-36.99698056]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.15981932,	-37.24035807]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [141.55797639,	-38.30411379]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [141.07146981,	-38.05422694]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.11532986,	-36.90533847]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.22235185,	-37.06743586]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.35866956,	-38.08418179]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.00180841,	-36.92478878]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.74297238,	-37.45324689]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.35979255,	-37.93455479]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.06116708,	-37.55018589]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.7214613,	-37.05695643]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.35438435,	-38.1020106]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.77276307,	-36.43364744]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.61923378,	-35.9698592]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.10364142,	-36.21132895]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [147.60356253,	-37.07074061]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.92211165,	-38.10016616]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.05742723,	-37.39033866]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [148.36886541,	-37.74931095]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.70610128,	-37.5114124]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.39607313,	-38.25597955]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.99902817,	-37.17906636]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.85336557,	-37.46254031]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.1511551,	-37.58477219]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.28938192,	-36.7762861]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.94732461,	-36.52269037]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.37848821,	-38.16059406]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [141.12490021,	-37.90258206]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.35652928,	-38.04056092]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.60302942,	-36.3817509]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.52121357,	-38.24570626]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.58683301,	-38.38496406]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.54343,	-38.84465]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.48954189,	-36.78359702]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [147.69700581,	-37.90024733]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.25007266,	-36.0753336]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.79923561,	-34.61475333]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [141.18497999,	-34.27494999]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.16141397,	-37.69750978]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.47841885,	-35.98439401]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.38907253,	-37.26378297]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [141.92851475,	-35.93038783]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.9247881,	-36.83460517]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.07839144,	-37.00385627]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.21580905,	-37.8914627]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.18549344,	-37.33047812]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.28629623,	-36.75390541]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.72314732,	-37.10456728]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.92960957,	-38.661814]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.70273754,	-37.29078963]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.06642836,	-38.45570247]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.06871074,	-36.47100122]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.49818061,	-36.41057569]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.61040411,	-38.02691817]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [148.39016964,	-37.69259402]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.19588999,	-34.30590999]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.76491712,	-35.36321805]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.44691004,	-38.52542194]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.07305121,	-37.55300859]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.89893189,	-37.23200613]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.34434251,	-38.10601345]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.45517325,	-38.36160493]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.64217722,	-36.1304299]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.04387979,	-34.21588202]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.789634,	-36.61437137]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.20350877,	-34.47314471]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.39915077,	-37.4108276]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.41587982,	-36.36839994]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.83002868,	-38.44745411]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [143.38019589,	-37.44880691]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.8391021,	-36.56795956]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.37975302,	-38.32812876]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.57152082,	-37.15006188]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [142.05450371,	-36.80181881]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.74987,	-36.39930999]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [146.18644546,	-38.25104953]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [141.74465876,	-38.24867153]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.09087193,	-37.90625073]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.27330699,	-38.00620717]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.00718646,	-37.87806527]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.15723488,	-37.92545356]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.98181132,	-37.78566583]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.15695141,	-37.93322462]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.1431069,	-37.9797902]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.49766304,	-38.21529432]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.99177591,	-37.80722333]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.30669469,	-38.02606821]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.99215398,	-37.80502923]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.26955788,	-37.81048808]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.9511615,	-37.64332412]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.98104876,	-37.85025563]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.19663295,	-37.96893236]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.14339463,	-37.92459684]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.05903618,	-37.94723966]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.13630611,	-37.83042393]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.28280973,	-38.11302421]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.15738762,	-38.112641]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.6828597,	-37.87758723]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.42310251,	-38.17580453]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.14709496,	-37.91733192]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.86140082,	-37.81315181]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.98036607,	-37.8579729]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.1642668,	-37.88879321]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.95223798,	-37.82184185]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.17297994,	-38.09953495]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.12233493,	-38.14020167]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.81392795,	-37.8736813]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.98409187,	-37.8604501]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.24924144,	-38.00338915]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.07646029,	-37.95470082]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.12469573,	-37.81368796]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.92860951,	-37.64055017]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.00616521,	-37.89979888]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.99226251,	-37.85764343]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.33846435,	-38.05994321]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.01718197,	-37.8272674]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.13585682,	-38.14663968]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.96060004,	-37.77613246]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.95920847,	-37.84224299]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.69594133,	-37.80501906]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.30527081,	-38.02528298]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.94306012,	-37.80544657]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.96734483,	-37.81739381]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.20372407,	-37.97518685]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.36113964,	-37.96117796]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.78126685,	-37.69747471]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.0104907,	-37.86040444]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.63530139,	-37.92022975]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.98838257,	-37.90385371]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.97259622,	-37.76656118]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.22469252,	-37.9959476]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.03423,	-37.8287388]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.16788814,	-38.10538904]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.23307497,	-37.92800452]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.01943676,	-37.86286457]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.28546312,	-37.92500471]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.00144857,	-37.85891392]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.01904955,	-37.90139173]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.92959897,	-37.7881501]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.16221498,	-37.99762539]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.05909199,	-37.94720888]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.96843037,	-37.79230021]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.66163664,	-37.68314065]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.0690468,	-37.75972979]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.05912489,	-37.94714659]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.98420139,	-37.85066722]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.13669711,	-37.96050861]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.95648512,	-37.81178674]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.14010814,	-37.91635889]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.31854983,	-38.15994358]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.29891129,	-38.06527724]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.14623431,	-37.9823965]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.95597314,	-37.80593231]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.08975694,	-37.70311313]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.96550108,	-37.73400257]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.07816192,	-37.88725623]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.99317468,	-37.75870679]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.99349452,	-37.79699429]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.92891547,	-37.64379979]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.95534699,	-37.80854634]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.98816385,	-37.79438766]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.05678807,	-38.22038274]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.88344479,	-37.81281984]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.13239043,	-37.85187632]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.03091142,	-37.74100814]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.07966948,	-37.9387668]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.91617824,	-37.70635574]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.97503006,	-37.78492109]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.93612157,	-37.78362184]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.18100632,	-37.92145558]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.98821065,	-37.79406064]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.02572754,	-37.93187067]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.15670866,	-37.93314508]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.96780962,	-37.83339542]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.15201262,	-37.85250436]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.9355259,	-37.78332253]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.22056557,	-37.98558601]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.97052401,	-37.79743768]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.95746244,	-37.82034449]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.2221988,	-37.97769878]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.24709834,	-38.00307642]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.2523867,	-38.10934859]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.94931909,	-37.80931533]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.9784605,	-37.84476868]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.99480268,	-37.78552371]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.95122895,	-37.64334799]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.97731358,	-37.8598093]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.95878627,	-37.78987678]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.9486414,	-37.80550816]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.02931188,	-37.68454956]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.96169919,	-37.71074953]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.94246065,	-37.7894518]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.07131083,	-37.98215435]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.16310947,	-37.99300913]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.91342342,	-37.61643337]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.99362256,	-37.75871289]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.14333122,	-37.9799492]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.99314902,	-37.75880079]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [145.23969215,	-38.07777911]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.73977364,	-37.7559055]
			},
			"properties": {
				"clearance": "13' 2"
			}
		},
{
			"type": "Feature",
			"geometry": {
				"type": "Point",
				"coordinates": [144.98807371,	-37.79447705]
			},
			"properties": {
				"clearance": "13' 2"
			}
		}	
]
};

const obstacle = turf.buffer(clearances, 0.11, { units: 'kilometers' });

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
      'fill-outline-color': '#f03b20'}
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


document.getElementById('PI').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
145.32553,-38.51893
],
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});
marker = new mapboxgl.Marker()
.setLngLat([145.32553,-38.51893])
.addTo(map);
marker2.remove();
marker1.remove();
});

document.getElementById('MD').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
145.35283,-37.82763
],
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});
marker1 = new mapboxgl.Marker()
.setLngLat([145.35283,-37.82763])
.addTo(map);
marker.remove();
marker2.remove();
//map.on('dragend', async function() {
//    directions.setDestinaion([145.35283,-37.82763]); // can be address
//})
/*map.on('moveend', () => {
console.log('A moveend event occurred.');
const end = {
    type: 'FeatureCollection',
    features: [
      {
        type: 'Feature',
        properties: {},
        geometry: {
          type: 'Point',
          coordinates: [145.35283,-37.82763]
        }
      }
    ]
  };
});*/
});


document.getElementById('GOR').addEventListener('click', () => {
// Fly to a random location by offsetting the point -74.50, 40
// by up to 5 degrees.
map.flyTo({
center: [
144.30426,-38.33874
],
essential: true // this animation is considered essential with respect to prefers-reduced-motion
});
marker2 = new mapboxgl.Marker()
.setLngLat([144.30426,-38.33874])
.addTo(map);
marker.remove();
marker1.remove();
});


