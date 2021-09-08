mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhYXYiLCJhIjoiY2tzbDVrNGhzMDRzdzJvbzJmZ3pxaDk1ZCJ9.8r9fmco1WMtfXTrMvSOlcQ'; 
const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/chaav/cksx2g8zh836f18ptnof7sxvb', 
	center: [145.128904, -37.980748],
	zoom: 8.50,
	minZoom: 8
});

map.addControl(new mapboxgl.NavigationControl(),'bottom-right');

map.addControl(new MapboxGeocoder({
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

map.on('load', () => {

	map.addSource('fatal-accident', {
		type: 'vector',
		url: 'mapbox://chaav.ckt8dfivj1vfw27plmqoi6eji-4946w'
	});
	map.addLayer({
		'id': 'fatal-accident',
		'type': 'circle',
		'source': 'fatal-accident',
		'source-layer': 'All_Fatal_Data',
		'layout': {
			'visibility': 'visible'
		},
		'paint': {
			'circle-color': '#ff0000',
			'circle-radius': 3,
			'circle-stroke-width': 0,
			'circle-stroke-color': '#000000'
		}
	});

	map.addSource('serious-accident', {
		type: 'vector',
		url: 'mapbox://chaav.3z5wr4xu'
	});
	map.addLayer({
		'id': 'serious-accident',
		'type': 'circle',
		'source': 'serious-accident',
		'source-layer': 'All_Serious_Data-do0a0g',
		'layout': {
			'visibility': 'visible'
		},
		'paint': {
			'circle-color': '#ffab1a',
			'circle-radius': 3,
			'circle-stroke-width': 0,
			'circle-stroke-color': '#000000'
		}
	});

	map.addSource('other-accident', {
		type: 'vector',
		url: 'mapbox://chaav.ckt8dpi0716k02dryign96hbi-9lwdz'
	});
	map.addLayer({
		'id': 'other-accident',
		'type': 'circle',
		'source': 'other-accident',
		'source-layer': 'All_Other_Data',
		'layout': {
			'visibility': 'visible'
		},
		'paint': {
			'circle-color': '#ADD8E6',
			'circle-radius': 3,
			'circle-stroke-width': 0,
			'circle-stroke-color': '#000000'
		}
	});

	map.addSource('early-morning-all', {
		type: 'vector',
		url: 'mapbox://chaav.d048m7u2'
	});
	map.addLayer({
		'id': 'early-morning-all',
		'type': 'circle',
		'source': 'early-morning-all',
		'source-layer': 'All_Early_Morning-6tgoq1',
		'layout': {
			'visibility': 'none'
		},
		'paint': {
			'circle-color': '#FFFF00',
			'circle-radius': 3,
			'circle-stroke-width': 0,
			'circle-stroke-color': '#000000'
		}
	});

	map.addSource('morning-all', {
		type: 'vector',
		url: 'mapbox://chaav.1e13anaq'
	});
	map.addLayer({
		'id': 'morning-all',
		'type': 'circle',
		'source': 'morning-all',
		'source-layer': 'All_Morning-c9ftux',
		'layout': {
			'visibility': 'none'
		},
		'paint': {
			'circle-color': '#00FF00',
			'circle-radius': 3,
			'circle-stroke-width': 0,
			'circle-stroke-color': '#000000'
		}
	});

	map.addSource('afternoon-all', {
		type: 'vector',
		url: 'mapbox://chaav.20u4nfrt'
	});
	map.addLayer({
		'id': 'afternoon-all',
		'type': 'circle',
		'source': 'afternoon-all',
		'source-layer': 'All_Afternoon-4f4bm9',
		'layout': {
			'visibility': 'none'
		},
		'paint': {
			'circle-color': '#F21BE4',
			'circle-radius': 3,
			'circle-stroke-width': 0,
			'circle-stroke-color': '#000000'
		}
	});

	map.addSource('evening-all', {
		type: 'vector',
		url: 'mapbox://chaav.2trc5vf3'
	});
	map.addLayer({
		'id': 'evening-all',
		'type': 'circle',
		'source': 'evening-all',
		'source-layer': 'All_Evening-3d6zb0',
		'layout': {
			'visibility': 'none'
		},
		'paint': {
			'circle-color': '#B1C9F2',
			'circle-radius': 3,
			'circle-stroke-width': 0,
			'circle-stroke-color': '#000000'
		}
	});


	const mouseRolloverpopupFatal = new mapboxgl.Popup({
		closeButton: false,
		closeOnClick: false
	});

	const mouseClickpopupFatal = new mapboxgl.Popup({ offset: [0, -15] })

	const mouseRolloverpopupSerious = new mapboxgl.Popup({
		closeButton: false,
		closeOnClick: false
	});

	const mouseClickpopupSerious = new mapboxgl.Popup({ offset: [0, -15] })

	const mouseRolloverpopupOther = new mapboxgl.Popup({
		closeButton: false,
		closeOnClick: false
	});

	const mouseClickpopupOther = new mapboxgl.Popup({ offset: [0, -15] })

	const mouseRolloverpopupAEM = new mapboxgl.Popup({
		closeButton: false,
		closeOnClick: false
	});

	const mouseClickpopupAEM = new mapboxgl.Popup({ offset: [0, -15] })

	const mouseRolloverpopupAM = new mapboxgl.Popup({
		closeButton: false,
		closeOnClick: false
	});

	const mouseClickpopupAM = new mapboxgl.Popup({ offset: [0, -15] })

	const mouseRolloverpopupAA = new mapboxgl.Popup({
		closeButton: false,
		closeOnClick: false
	});

	const mouseClickpopupAA = new mapboxgl.Popup({ offset: [0, -15] })

	const mouseRolloverpopupAE = new mapboxgl.Popup({
		closeButton: false,
		closeOnClick: false
	});

	const mouseClickpopupAE = new mapboxgl.Popup({ offset: [0, -15] })




	map.on('mouseenter', 'fatal-accident', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
 
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
 
		mouseRolloverpopupFatal.setLngLat(coordinates).setHTML(`<h3>${severity}</h3><p>${accidenttype}<br>${dayofweek} - ${accidenttime}</p>`).addTo(map);
	});


	map.on('mouseleave', 'fatal-accident', () => {
		map.getCanvas().style.cursor = '';
		mouseRolloverpopupFatal.remove();
	});

	map.on('click', 'fatal-accident', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
		const lganame =  e.features[0].properties.lganame;
		const accidentdate =  e.features[0].properties.accidentdate;
		const dcacode =  e.features[0].properties.dcacode;
		const lightcondition =  e.features[0].properties.lightcondition;
		const regionname =  e.features[0].properties.regionname;
		const totalpersons =  e.features[0].properties.totalpersons;
		const fatality =  e.features[0].properties.fatality;
		const seriousinjury =  e.features[0].properties.seriousinjury;
		const otherinjury =  e.features[0].properties.otherinjury;
		const noninjured =  e.features[0].properties.noninjured;
		const bicyclist =  e.features[0].properties.bicyclist;
		const driver =  e.features[0].properties.driver;
		const pedestrian =  e.features[0].properties.pedestrian;
		const timeofday =  e.features[0].properties.timeofday;


		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}

		mouseClickpopupFatal.setLngLat(coordinates).setHTML(`<h3>${accidentdate}&nbsp&nbsp${accidenttime}&nbsp&nbsp${dayofweek}</h3><ul><li>Severity - ${severity}</li><li>Accident Type - ${accidenttype}</li>
		<li>Accidents Definition - ${dcacode}</li><li>Light Condition - ${lightcondition}</li><li>Local Government Area - ${lganame}</li><li>Region Name - ${regionname}</li><li>Total Person - ${totalpersons}</li>
		<li>Fatality - ${fatality}</li><li>Serious Injury - ${seriousinjury}</li><li>Other Injury - ${otherinjury}</li><li>Non Injury - ${noninjured}</li><li>Bicyclist - ${bicyclist}</li>
		<li>Driver - ${driver}</li><li>Pedestrian - ${pedestrian}</li></ul>`).addTo(map);

	});

//
	map.on('mouseenter', 'serious-accident', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
 
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
 
		mouseRolloverpopupSerious.setLngLat(coordinates).setHTML(`<h3>${severity}</h3><p>${accidenttype}<br>${dayofweek} - ${accidenttime}</p>`).addTo(map);
	});


	map.on('mouseleave', 'serious-accident', () => {
		map.getCanvas().style.cursor = '';
		mouseRolloverpopupSerious.remove();
	});

	map.on('click', 'serious-accident', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
		const lganame =  e.features[0].properties.lganame;
		const accidentdate =  e.features[0].properties.accidentdate;
		const dcacode =  e.features[0].properties.dcacode;
		const lightcondition =  e.features[0].properties.lightcondition;
		const regionname =  e.features[0].properties.regionname;
		const totalpersons =  e.features[0].properties.totalpersons;
		const fatality =  e.features[0].properties.fatality;
		const seriousinjury =  e.features[0].properties.seriousinjury;
		const otherinjury =  e.features[0].properties.otherinjury;
		const noninjured =  e.features[0].properties.noninjured;
		const bicyclist =  e.features[0].properties.bicyclist;
		const driver =  e.features[0].properties.driver;
		const pedestrian =  e.features[0].properties.pedestrian;
		const timeofday =  e.features[0].properties.timeofday;


		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}

		mouseClickpopupSerious.setLngLat(coordinates).setHTML(`<h3>${accidentdate}&nbsp&nbsp${accidenttime}&nbsp&nbsp${dayofweek}</h3><ul><li>Severity - ${severity}</li><li>Accident Type - ${accidenttype}</li>
		<li>Accidents Definition - ${dcacode}</li><li>Light Condition - ${lightcondition}</li><li>Local Government Area - ${lganame}</li><li>Region Name - ${regionname}</li><li>Total Person - ${totalpersons}</li>
		<li>Fatality - ${fatality}</li><li>Serious Injury - ${seriousinjury}</li><li>Other Injury - ${otherinjury}</li><li>Non Injury - ${noninjured}</li><li>Bicyclist - ${bicyclist}</li>
		<li>Driver - ${driver}</li><li>Pedestrian - ${pedestrian}</li></ul>`).addTo(map);

	});

//
	map.on('mouseenter', 'other-accident', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
 
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
 
		mouseRolloverpopupOther.setLngLat(coordinates).setHTML(`<h3>${severity}</h3><p>${accidenttype}<br>${dayofweek} - ${accidenttime}</p>`).addTo(map);
	});


	map.on('mouseleave', 'other-accident', () => {
		map.getCanvas().style.cursor = '';
		mouseRolloverpopupOther.remove();
	});

	map.on('click', 'other-accident', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
		const lganame =  e.features[0].properties.lganame;
		const accidentdate =  e.features[0].properties.accidentdate;
		const dcacode =  e.features[0].properties.dcacode;
		const lightcondition =  e.features[0].properties.lightcondition;
		const regionname =  e.features[0].properties.regionname;
		const totalpersons =  e.features[0].properties.totalpersons;
		const fatality =  e.features[0].properties.fatality;
		const seriousinjury =  e.features[0].properties.seriousinjury;
		const otherinjury =  e.features[0].properties.otherinjury;
		const noninjured =  e.features[0].properties.noninjured;
		const bicyclist =  e.features[0].properties.bicyclist;
		const driver =  e.features[0].properties.driver;
		const pedestrian =  e.features[0].properties.pedestrian;
		const timeofday =  e.features[0].properties.timeofday;


		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}

		mouseClickpopupOther.setLngLat(coordinates).setHTML(`<h3>${accidentdate}&nbsp&nbsp${accidenttime}&nbsp&nbsp${dayofweek}</h3><ul><li>Severity - ${severity}</li><li>Accident Type - ${accidenttype}</li>
		<li>Accidents Definition - ${dcacode}</li><li>Light Condition - ${lightcondition}</li><li>Local Government Area - ${lganame}</li><li>Region Name - ${regionname}</li><li>Total Person - ${totalpersons}</li>
		<li>Fatality - ${fatality}</li><li>Serious Injury - ${seriousinjury}</li><li>Other Injury - ${otherinjury}</li><li>Non Injury - ${noninjured}</li><li>Bicyclist - ${bicyclist}</li>
		<li>Driver - ${driver}</li><li>Pedestrian - ${pedestrian}</li></ul>`).addTo(map);

	});

//
	map.on('mouseenter', 'early-morning-all', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
 
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
 
		mouseRolloverpopupAEM.setLngLat(coordinates).setHTML(`<h3>${severity}</h3><p>${accidenttype}<br>${dayofweek} - ${accidenttime}</p>`).addTo(map);
	});


	map.on('mouseleave', 'early-morning-all', () => {
		map.getCanvas().style.cursor = '';
		mouseRolloverpopupAEM.remove();
	});

	map.on('click', 'early-morning-all', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
		const lganame =  e.features[0].properties.lganame;
		const accidentdate =  e.features[0].properties.accidentdate;
		const dcacode =  e.features[0].properties.dcacode;
		const lightcondition =  e.features[0].properties.lightcondition;
		const regionname =  e.features[0].properties.regionname;
		const totalpersons =  e.features[0].properties.totalpersons;
		const fatality =  e.features[0].properties.fatality;
		const seriousinjury =  e.features[0].properties.seriousinjury;
		const otherinjury =  e.features[0].properties.otherinjury;
		const noninjured =  e.features[0].properties.noninjured;
		const bicyclist =  e.features[0].properties.bicyclist;
		const driver =  e.features[0].properties.driver;
		const pedestrian =  e.features[0].properties.pedestrian;
		const timeofday =  e.features[0].properties.timeofday;


		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}

		mouseClickpopupAEM.setLngLat(coordinates).setHTML(`<h3>${accidentdate}&nbsp&nbsp${accidenttime}&nbsp&nbsp${dayofweek}</h3><ul><li>Severity - ${severity}</li><li>Accident Type - ${accidenttype}</li>
		<li>Accidents Definition - ${dcacode}</li><li>Light Condition - ${lightcondition}</li><li>Local Government Area - ${lganame}</li><li>Region Name - ${regionname}</li><li>Total Person - ${totalpersons}</li>
		<li>Fatality - ${fatality}</li><li>Serious Injury - ${seriousinjury}</li><li>Other Injury - ${otherinjury}</li><li>Non Injury - ${noninjured}</li><li>Bicyclist - ${bicyclist}</li>
		<li>Driver - ${driver}</li><li>Pedestrian - ${pedestrian}</li></ul>`).addTo(map);

	});
//
	map.on('mouseenter', 'morning-all', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
 
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
 
		mouseRolloverpopupAM.setLngLat(coordinates).setHTML(`<h3>${severity}</h3><p>${accidenttype}<br>${dayofweek} - ${accidenttime}</p>`).addTo(map);
	});


	map.on('mouseleave', 'morning-all', () => {
		map.getCanvas().style.cursor = '';
		mouseRolloverpopupAM.remove();
	});

	map.on('click', 'morning-all', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
		const lganame =  e.features[0].properties.lganame;
		const accidentdate =  e.features[0].properties.accidentdate;
		const dcacode =  e.features[0].properties.dcacode;
		const lightcondition =  e.features[0].properties.lightcondition;
		const regionname =  e.features[0].properties.regionname;
		const totalpersons =  e.features[0].properties.totalpersons;
		const fatality =  e.features[0].properties.fatality;
		const seriousinjury =  e.features[0].properties.seriousinjury;
		const otherinjury =  e.features[0].properties.otherinjury;
		const noninjured =  e.features[0].properties.noninjured;
		const bicyclist =  e.features[0].properties.bicyclist;
		const driver =  e.features[0].properties.driver;
		const pedestrian =  e.features[0].properties.pedestrian;
		const timeofday =  e.features[0].properties.timeofday;


		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}

		mouseClickpopupAM.setLngLat(coordinates).setHTML(`<h3>${accidentdate}&nbsp&nbsp${accidenttime}&nbsp&nbsp${dayofweek}</h3><ul><li>Severity - ${severity}</li><li>Accident Type - ${accidenttype}</li>
		<li>Accidents Definition - ${dcacode}</li><li>Light Condition - ${lightcondition}</li><li>Local Government Area - ${lganame}</li><li>Region Name - ${regionname}</li><li>Total Person - ${totalpersons}</li>
		<li>Fatality - ${fatality}</li><li>Serious Injury - ${seriousinjury}</li><li>Other Injury - ${otherinjury}</li><li>Non Injury - ${noninjured}</li><li>Bicyclist - ${bicyclist}</li>
		<li>Driver - ${driver}</li><li>Pedestrian - ${pedestrian}</li></ul>`).addTo(map);

	});

//
	map.on('mouseenter', 'afternoon-all', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
 
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
 
		mouseRolloverpopupAA.setLngLat(coordinates).setHTML(`<h3>${severity}</h3><p>${accidenttype}<br>${dayofweek} - ${accidenttime}</p>`).addTo(map);
	});


	map.on('mouseleave', 'afternoon-all', () => {
		map.getCanvas().style.cursor = '';
		mouseRolloverpopupAA.remove();
	});

	map.on('click', 'afternoon-all', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
		const lganame =  e.features[0].properties.lganame;
		const accidentdate =  e.features[0].properties.accidentdate;
		const dcacode =  e.features[0].properties.dcacode;
		const lightcondition =  e.features[0].properties.lightcondition;
		const regionname =  e.features[0].properties.regionname;
		const totalpersons =  e.features[0].properties.totalpersons;
		const fatality =  e.features[0].properties.fatality;
		const seriousinjury =  e.features[0].properties.seriousinjury;
		const otherinjury =  e.features[0].properties.otherinjury;
		const noninjured =  e.features[0].properties.noninjured;
		const bicyclist =  e.features[0].properties.bicyclist;
		const driver =  e.features[0].properties.driver;
		const pedestrian =  e.features[0].properties.pedestrian;
		const timeofday =  e.features[0].properties.timeofday;


		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}

		mouseClickpopupAA.setLngLat(coordinates).setHTML(`<h3>${accidentdate}&nbsp&nbsp${accidenttime}&nbsp&nbsp${dayofweek}</h3><ul><li>Severity - ${severity}</li><li>Accident Type - ${accidenttype}</li>
		<li>Accidents Definition - ${dcacode}</li><li>Light Condition - ${lightcondition}</li><li>Local Government Area - ${lganame}</li><li>Region Name - ${regionname}</li><li>Total Person - ${totalpersons}</li>
		<li>Fatality - ${fatality}</li><li>Serious Injury - ${seriousinjury}</li><li>Other Injury - ${otherinjury}</li><li>Non Injury - ${noninjured}</li><li>Bicyclist - ${bicyclist}</li>
		<li>Driver - ${driver}</li><li>Pedestrian - ${pedestrian}</li></ul>`).addTo(map);

	});

//
	map.on('mouseenter', 'evening-all', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
 
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
 
		mouseRolloverpopupAE.setLngLat(coordinates).setHTML(`<h3>${severity}</h3><p>${accidenttype}<br>${dayofweek} - ${accidenttime}</p>`).addTo(map);
	});


	map.on('mouseleave', 'evening-all', () => {
		map.getCanvas().style.cursor = '';
		mouseRolloverpopupAE.remove();
	});

	map.on('click', 'evening-all', (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
		const lganame =  e.features[0].properties.lganame;
		const accidentdate =  e.features[0].properties.accidentdate;
		const dcacode =  e.features[0].properties.dcacode;
		const lightcondition =  e.features[0].properties.lightcondition;
		const regionname =  e.features[0].properties.regionname;
		const totalpersons =  e.features[0].properties.totalpersons;
		const fatality =  e.features[0].properties.fatality;
		const seriousinjury =  e.features[0].properties.seriousinjury;
		const otherinjury =  e.features[0].properties.otherinjury;
		const noninjured =  e.features[0].properties.noninjured;
		const bicyclist =  e.features[0].properties.bicyclist;
		const driver =  e.features[0].properties.driver;
		const pedestrian =  e.features[0].properties.pedestrian;
		const timeofday =  e.features[0].properties.timeofday;


		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}

		mouseClickpopupAE.setLngLat(coordinates).setHTML(`<h3>${accidentdate}&nbsp&nbsp${accidenttime}&nbsp&nbsp${dayofweek}</h3><ul><li>Severity - ${severity}</li><li>Accident Type - ${accidenttype}</li>
		<li>Accidents Definition - ${dcacode}</li><li>Light Condition - ${lightcondition}</li><li>Local Government Area - ${lganame}</li><li>Region Name - ${regionname}</li><li>Total Person - ${totalpersons}</li>
		<li>Fatality - ${fatality}</li><li>Serious Injury - ${seriousinjury}</li><li>Other Injury - ${otherinjury}</li><li>Non Injury - ${noninjured}</li><li>Bicyclist - ${bicyclist}</li>
		<li>Driver - ${driver}</li><li>Pedestrian - ${pedestrian}</li></ul>`).addTo(map);

	});


});

// After the last frame rendered before the map enters an "idle" state.
map.on('idle', () => {
	// If these two layers were not added to the map, abort
	if (!map.getLayer('fatal-accident') || !map.getLayer('serious-accident') || !map.getLayer('other-accident')) {
		return;
	}

	// Enumerate ids of the layers.
	const toggleableLayerIds = ['fatal-accident', 'serious-accident', 'other-accident'];
	const toggleableLayerIdsHide = ['early-morning-all', 'morning-all', 'afternoon-all', 'evening-all'];
 
	// Set up the corresponding toggle button for each layer.
	for (const id of toggleableLayerIds) {
		// Skip layers that already have a button set up.
		if (document.getElementById(id)) {
			continue;
		}
 
		// Create a link.
		const link = document.createElement('a');
		link.id = id;
		link.href = '#';
		if (id === 'fatal-accident'){
			link.textContent = 'Fatal Accident';
		} else if (id === 'serious-accident'){
			link.textContent = 'Serious Accident';
		} else {
			link.textContent = 'Other Accident';
		}
		link.className = 'active';
	 
		// Show or hide layer when the toggle is clicked.
		link.onclick = function (e) {
			const clickedLayer = this.id;
			e.preventDefault();
			e.stopPropagation();
	 
			const visibility = map.getLayoutProperty(
				clickedLayer,
				'visibility'
			);
	 
			// Toggle layer visibility by changing the layout object's visibility property.
			if (visibility === 'visible') {
				map.setLayoutProperty(clickedLayer, 'visibility', 'none');
				this.className = '';
			} else {
				this.className = 'active';
				map.setLayoutProperty(
					clickedLayer,
					'visibility',
					'visible'
				);
			}
		};
	 
		const layers = document.getElementById('myDropdown');
		layers.appendChild(link);
	}

	// Set up the corresponding toggle button for each layer.
	for (const id of toggleableLayerIdsHide ) {
		// Skip layers that already have a button set up.
		if (document.getElementById(id)) {
			continue;
		}
 
		// Create a link.
		const link = document.createElement('a');
		link.id = id;
		link.href = '#';
		if (id === 'early-morning-all'){
			link.textContent = 'Early Moring';
		} else if (id === 'morning-all'){
			link.textContent = 'Morning';
		} else if (id === 'afternoon-all'){
			link.textContent = 'Afternoon';
		} else {
			link.textContent = 'Evening';
		}
		//link.className = 'active';
	 
		// Show or hide layer when the toggle is clicked.
		link.onclick = function (e) {
			const clickedLayer = this.id;
			e.preventDefault();
			e.stopPropagation();
	 
			const visibility = map.getLayoutProperty(
				clickedLayer,
				'visibility'
			);
	 
			var showSeverFlag = 'False';
			// Toggle layer visibility by changing the layout object's visibility property.
			if (visibility === 'visible') {
				map.setLayoutProperty(clickedLayer, 'visibility', 'none');
				for (const checkLayer of toggleableLayerIdsHide) {
					var checkvisibility = map.getLayoutProperty(
						checkLayer,
						'visibility'
					);
					
					if (checkvisibility === 'visible') {
						showSeverFlag = 'False';
						break;
					} else {
						showSeverFlag = 'True';
					}
				}
				if (showSeverFlag === 'True') {
					for (const hideid of toggleableLayerIds) {
						map.setLayoutProperty(
							hideid,
							'visibility',
							'visible'
						);
					}
				}
				this.className = '';
			} else {
				this.className = 'active';
				map.setLayoutProperty(
					clickedLayer,
					'visibility',
					'visible'
				);
				for (const hideid of toggleableLayerIds) {
					map.setLayoutProperty(
						hideid,
						'visibility',
						'none'
					);
				}
			}
		};
	 
		const layers = document.getElementById('dropdownTime');
		layers.appendChild(link);
	}
});

/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function severity() {
	var dropdowns = document.getElementById("early-morning-all");
	if (!dropdowns.classList.contains('active')) {
		document.getElementById("myDropdown").classList.toggle("show");
	} else {
		alert("Filtering more based on Severity is disabled while viewing Time of Day or Day of Week");
	}
}

function time() {
	document.getElementById("dropdownTime").classList.toggle("showtime");
}

function day() {
	document.getElementById("dropdownDay").classList.toggle("show");
}


// Close the dropdown if the user clicks outside of it
window.onclick = function(event) {
	if (!event.target.matches('.dropbtnseverity')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
	if (!event.target.matches('.dropbtntime')) {
		var dropdowns = document.getElementsByClassName("dropdown-content-time");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('showtime')) {
				openDropdown.classList.remove('showtime');
			}
		}
	}
}
