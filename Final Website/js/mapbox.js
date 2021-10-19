mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhYXYiLCJhIjoiY2tzbDVrNGhzMDRzdzJvbzJmZ3pxaDk1ZCJ9.8r9fmco1WMtfXTrMvSOlcQ'; 

const bounds = [
[140.954590,-39.138582], // Southwest coordinates
[150.314941,-33.961586] // Northeast coordinates
];

const toggleableLayerIds = ['fatal-accident', 'serious-accident', 'other-accident'];
const toggleableLayerIdsHide = ['early-morning-all', 'morning-all', 'afternoon-all', 'evening-all'];
const toggleableLayerIdsHideday = ['all-weekday-early-morning', 'all-weekday-morning', 'all-weekday-afternoon', 'all-weekday-evening', 'all-weekend-early-morning', 'all-weekend-morning', 'all-weekend-afternoon', 'all-weekend-evening'];
const dropdownData = [ 'all-weekend','all-weekday'];
var onceFlagDay = 0;
var lastLayerActive = '';

const map = new mapboxgl.Map({
	container: 'map',
	style: 'mapbox://styles/chaav/cksx2g8zh836f18ptnof7sxvb', 
	center: [145.128904, -37.980748],
	zoom: 8.50,
	minZoom: 8,
	maxBounds: bounds
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

function loadLayer(idName, url, baseLayer, color, visibilityFlag) {
	map.addSource(idName, {
		type: 'vector',
		url: url
	});
	map.addLayer({
		'id': idName,
		'type': 'circle',
		'source': idName,
		'source-layer': baseLayer,
		'layout': {
			'visibility': visibilityFlag
		},
		'paint': {
			'circle-color': color,
			'circle-radius': 4,
			'circle-stroke-width': 0,
			'circle-stroke-color': '#000000'
		}
	});
}


map.on('load', () => {

	loadLayer('fatal-accident', 'mapbox://chaav.ckt8dfivj1vfw27plmqoi6eji-4946w', 'All_Fatal_Data', '#ff0000','visible');
	loadLayer('serious-accident', 'mapbox://chaav.3z5wr4xu', 'All_Serious_Data-do0a0g', '#ffab1a','none');
	loadLayer('other-accident', 'mapbox://chaav.ckt8dpi0716k02dryign96hbi-9lwdz', 'All_Other_Data', '#ADD8E6','none');
	loadLayer('early-morning-all', 'mapbox://chaav.d048m7u2', 'All_Early_Morning-6tgoq1', '#FFFF00','none');
	loadLayer('morning-all', 'mapbox://chaav.1e13anaq', 'All_Morning-c9ftux', '#00FF00','none');
	loadLayer('afternoon-all', 'mapbox://chaav.20u4nfrt', 'All_Afternoon-4f4bm9', '#F21BE4','none');
	loadLayer('evening-all', 'mapbox://chaav.2trc5vf3', 'All_Evening-3d6zb0', '#B1C9F2','none');
	loadLayer('all-weekday-early-morning','mapbox://chaav.crgew6kp', 'All_Weekday_Early_Morning-72wqwh', '#E36BE3','none');
	loadLayer('all-weekday-morning', 'mapbox://chaav.ckh3kad5', 'All_Weekday_Morning-299ebg', '#EAFCAE','none');
	loadLayer('all-weekday-afternoon', 'mapbox://chaav.8wpapwz1', 'All_Weekday_Afternoon-7qzrjb', '#F0AACD','none');
	loadLayer('all-weekday-evening', 'mapbox://chaav.6w7sda9l', 'All_Weekday_Evening-d0o86z', '#5640F7','none');
	loadLayer('all-weekend-early-morning', 'mapbox://chaav.9btj6j1s', 'All_Weekend_Early_Morning-cotm5q', '#4193A3','none');
	loadLayer('all-weekend-morning', 'mapbox://chaav.dqgud0a5', 'All_Weekend_Morning-dqi32d', '#9470DB','none');
	loadLayer('all-weekend-afternoon', 'mapbox://chaav.69o5z9z1', 'All_Weekend_Afternoon-dasyjb', '#C0FAF9','none');
	loadLayer('all-weekend-evening', 'mapbox://chaav.ca9d1ix1', 'All_Weekend_Evening-0w3ngj', '#44C0DB','none');
	loadLayer('all-weekday', 'mapbox://chaav.dqgrmepr', 'All_Weekday-68fi9h', '#DE9C2A','none');
	loadLayer('all-weekend', 'mapbox://chaav.9hjp1c2d', 'All_Weekend-bf07dh', '#78C4FA','none');


	const allMapLayers = toggleableLayerIds.concat(toggleableLayerIdsHide, toggleableLayerIdsHideday, dropdownData);
	const allLayers =  ['fatalaccident', 'seriousaccident', 'otheraccident', 'earlymorningall', 'morningall', 'afternoonall', 'eveningall', 'allweekdayearlymorning', 'allweekdaymorning', 'allweekdayafternoon', 'allweekdayevening', 'allweekendearlymorning', 'allweekendmorning', 'allweekendafternoon', 'allweekendevening', 'allweekend','allweekday'];
	
	var popupVar = 'mouseRolloverpopup';
	var clickVar = 'mouseClickpopup';
	var i = 0;

	for (const layerName of allLayers){
		window[popupVar + layerName] = new mapboxgl.Popup({closeButton: false,closeOnClick: false});
		window[clickVar + layerName] = new mapboxgl.Popup({ offset: [0, -15] });
	
	map.on('mouseenter', allMapLayers[i], (e) => {
		map.getCanvas().style.cursor = 'pointer';
 
		const coordinates = e.features[0].geometry.coordinates.slice();

		const severity = e.features[0].properties.severity;
		const accidenttype = e.features[0].properties.accidenttype;
		const accidenttime = e.features[0].properties.accidenttime;
		const dayofweek = e.features[0].properties.dayofweek;
 
		while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
			coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
		}
 
		eval(popupVar + layerName).setLngLat(coordinates).setHTML(`<h3>${severity}</h3><p>${accidenttype}<br>${dayofweek} - ${accidenttime}</p>`).addTo(map);
	});


	map.on('mouseleave', allMapLayers[i], () => {
		map.getCanvas().style.cursor = '';
		eval(popupVar + layerName).remove();
	});

	map.on('click', allMapLayers[i], (e) => {
	
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

		eval(clickVar + layerName).setLngLat(coordinates).setHTML(`<h3>${accidentdate}&nbsp&nbsp${accidenttime}&nbsp&nbsp${dayofweek}</h3><ul><li>Severity - ${severity}</li><li>Accident Type - ${accidenttype}</li>
		<li>Accidents Definition - ${dcacode}</li><li>Light Condition - ${lightcondition}</li><li>Local Government Area - ${lganame}</li><li>Region Name - ${regionname}</li><li>Total Person - ${totalpersons}</li>
		<li>Fatality - ${fatality}</li><li>Serious Injury - ${seriousinjury}</li><li>Other Injury - ${otherinjury}</li><li>Non Injury - ${noninjured}</li><li>Bicyclist - ${bicyclist}</li>
		<li>Driver - ${driver}</li><li>Pedestrian - ${pedestrian}</li></ul>`).addTo(map);

	});
	i = i + 1;
	}
});


function hideAll(mergeArray) {
	for (const checkLayer of mergeArray) {
		map.setLayoutProperty(checkLayer, 'visibility', 'none');
		document.getElementById(checkLayer).className = '';
	}
	for (const checkDayLayer of toggleableLayerIdsHideday ) {
		map.setLayoutProperty(checkDayLayer , 'visibility', 'none');
	}

}

// After the last frame rendered before the map enters an "idle" state.
map.on('idle', () => {

	// Set up the corresponding toggle button for each layer.
	for (const id of toggleableLayerIds) {
		// Skip layers that already have a button set up.
		if (document.getElementById(id)) {
			continue;
		}
 
		// Create a link.
		const link = document.createElement('a');
		link.id = id;
		//link.href = '#';
		if (id === 'fatal-accident'){
			link.textContent = 'Fatal Accident';
			link.className = 'active';
		} else if (id === 'serious-accident'){
			link.textContent = 'Serious Accident';
			link.className = '';
		} else {
			link.textContent = 'Other Accident';
			link.className = '';
		}
	 
		// Show or hide layer when the toggle is clicked.
		link.onclick = function (e) {
			const clickedLayer = this.id;
			e.preventDefault();
			e.stopPropagation();
	 
			const visibility = map.getLayoutProperty(
				clickedLayer,
				'visibility'
			);

			const mergeAllOtherLayer = toggleableLayerIdsHide.concat(dropdownData);
			hideAll(mergeAllOtherLayer)
			/*for (const checkLayer of mergeAllOtherLayer) {
				map.setLayoutProperty(checkLayer, 'visibility', 'none');
				document.getElementById(checkLayer).className = '';
			}*/

			var showSeverFlag = 'False';
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
		//link.href = '#';
		if (id === 'early-morning-all'){
			link.textContent = 'Early Morning';
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
					map.setLayoutProperty(
						'fatal-accident',
						'visibility',
						'visible'
					);
					document.getElementById('fatal-accident').className = 'active';
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
					document.getElementById(hideid).className = '';
				}
			}
		};
	 
		const layers = document.getElementById('dropdownTime');
		layers.appendChild(link);
	}

////
	for (const id of dropdownData) {
		// Skip layers that already have a button set up.
		if (document.getElementById(id)) {
			continue;
		}
 
		// Create a link.
		const link = document.createElement('a');
		link.id = id;
		//link.href = '#';
		if (id === 'all-weekday'){
			link.textContent = 'Weekday';
		} else {
			link.textContent = 'Weekend';
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
			const mergeAllOtherLayer = toggleableLayerIdsHide.concat(dropdownData, toggleableLayerIds);
			for (const checkTimeLayer of toggleableLayerIdsHide){
				const checkTimeLayervisibility = map.getLayoutProperty(
					checkTimeLayer,
					'visibility'
				);
				console.log(checkTimeLayer + "=" + checkTimeLayervisibility + "=" + onceFlagDay);
				if (onceFlagDay <= 1) {
					if (checkTimeLayervisibility === 'visible') {
						hideAll(mergeAllOtherLayer)
						onceFlagDay = onceFlagDay + 1;
						lastLayerActive = checkTimeLayer;
						switch(true){
							case checkTimeLayer === 'early-morning-all' && id === 'all-weekday':
								console.log("1");
								map.setLayoutProperty(
									'all-weekday-early-morning',
									'visibility',
									'visible'
								);
								document.getElementById('early-morning-all').className = 'active';
								document.getElementById('all-weekday').className = 'active';
								break;
							case checkTimeLayer === 'morning-all' && id === 'all-weekday':
								console.log("2");
								map.setLayoutProperty(
									'all-weekday-morning',
									'visibility',
									'visible'
								);
								document.getElementById('morning-all').className = 'active';
								document.getElementById('all-weekday').className = 'active';
								break;
							case checkTimeLayer === 'afternoon-all' && id === 'all-weekday':
								console.log("3");
								map.setLayoutProperty(
									'all-weekday-afternoon',
									'visibility',
									'visible'
								);
								document.getElementById('afternoon-all').className = 'active';
								document.getElementById('all-weekday').className = 'active';
								break;
							case checkTimeLayer === 'evening-all' && id === 'all-weekday':
								console.log("4");
								map.setLayoutProperty(
									'all-weekday-evening',
									'visibility',
									'visible'
								);
								document.getElementById('evening-all').className = 'active';
								document.getElementById('all-weekday').className = 'active';
								break;
							case checkTimeLayer === 'early-morning-all' && id === 'all-weekend':
								console.log("5");
								map.setLayoutProperty(
									'all-weekend-early-morning',
									'visibility',
									'visible'
								);
								document.getElementById('early-morning-all').className = 'active';
								document.getElementById('all-weekend').className = 'active';
								break;
							case checkTimeLayer === 'morning-all' && id === 'all-weekend':
								console.log("6");
								map.setLayoutProperty(
									'all-weekend-morning',
									'visibility',
									'visible'
								);
								document.getElementById('morning-all').className = 'active';
								document.getElementById('all-weekend').className = 'active';
								break;
							case checkTimeLayer === 'afternoon-all' && id === 'all-weekend':
								console.log("7");
								map.setLayoutProperty(
									'all-weekend-afternoon',
									'visibility',
									'visible'
								);
								document.getElementById('afternoon-all').className = 'active';
								document.getElementById('all-weekend').className = 'active';
								break;
							case checkTimeLayer === 'evening-all' && id === 'all-weekend':
								console.log("8");
								map.setLayoutProperty(
									'all-weekend-evening',
									'visibility',
									'visible'
								);
								document.getElementById('evening-all').className = 'active';
								document.getElementById('all-weekend').className = 'active';
								break;
						}
						break;
					} else if (onceFlagDay === 1) {
						hideAll(mergeAllOtherLayer)
						onceFlagDay = onceFlagDay - 1;
						switch(lastLayerActive){
							case 'early-morning-all':
								console.log("1");
								map.setLayoutProperty(
									'early-morning-all',
									'visibility',
									'visible'
								);
								document.getElementById('early-morning-all').className = 'active';
								document.getElementById(id).className = '';
								break;
							case 'morning-all':
								console.log("2");
								map.setLayoutProperty(
									'morning-all',
									'visibility',
									'visible'
								);
									document.getElementById('morning-all').className = 'active';
								document.getElementById(id).className = '';
								break;
							case 'afternoon-all':
								console.log("3");
								map.setLayoutProperty(
									'afternoon-all',
									'visibility',
									'visible'
								);
									document.getElementById('afternoon-all').className = 'active';
								document.getElementById(id).className = '';
								break;
							case 'evening-all':
								console.log("4");
								map.setLayoutProperty(
									'evening-all',
									'visibility',
									'visible'
								);
								document.getElementById('evening-all').className = 'active';
								document.getElementById(id).className = '';
								break;
						}
						break;
					} else if (visibility === 'visible') {
						hideAll(mergeAllOtherLayer)
						map.setLayoutProperty(clickedLayer, 'visibility', 'none');
						for (const checkLayer of dropdownData) {
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
							map.setLayoutProperty(
								'fatal-accident',
								'visibility',
								'visible'
							);
							document.getElementById('fatal-accident').className = 'active';
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
							document.getElementById(hideid).className = '';
						}
					}
				} else {
					alert("Double Time selection is not allowed");
					hideAll(mergeAllOtherLayer)
				}
			}
		};
	 
		const layers = document.getElementById('dropdownDay');
		layers.appendChild(link);
	}
});


/* When the user clicks on the button, 
toggle between hiding and showing the dropdown content */
function severity() {
	document.getElementById("myDropdown").classList.toggle("show");
}

function time() {
	document.getElementById("dropdownTime").classList.toggle("showtime");
}

function day() {
	document.getElementById("dropdownDay").classList.toggle("showday");
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
	if (!event.target.matches('.dropbtnday')) {
		var dropdowns = document.getElementsByClassName("dropdown-content-day");
		var i;
		for (i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if (openDropdown.classList.contains('showday')) {
				openDropdown.classList.remove('showday');
			}
		}
	}
}
