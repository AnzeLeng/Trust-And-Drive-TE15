// The value for 'accessToken' begins with 'pk...'
    mapboxgl.accessToken = 'pk.eyJ1IjoiY2hhYXYiLCJhIjoiY2tzbDVrNGhzMDRzdzJvbzJmZ3pxaDk1ZCJ9.8r9fmco1WMtfXTrMvSOlcQ'; 
    const map = new mapboxgl.Map({
      container: 'map',
      // Replace YOUR_STYLE_URL with your style URL.
      style: 'mapbox://styles/chaav/cksx2g8zh836f18ptnof7sxvb', 
      center: [145.128904, -37.980748],
      zoom: 9.18
    });

    // Code from the next step will go here.

    /* 
Add an event listener that runs
  when a user clicks on the map element.
*/
map.on('click', ({ point }) => {
  // If the user clicked on one of your markers, get its information.
  const features = map.queryRenderedFeatures(point, {
    layers: ['accident-map-all'] // replace with your layer name
  });

  if (!features.length) {
    return;
  }
  const feature = features[0];

  // Code from the next step will go here.
/* 
    Create a popup, specify its options 
    and properties, and add it to the map.
  */
const popup = new mapboxgl.Popup({ offset: [0, -15] })
  .setLngLat(feature.geometry.coordinates)
  .setHTML(
    `<h3>${feature.properties.title}</h3><p>${feature.properties.description}</p>`
  )
  .addTo(map);
});
