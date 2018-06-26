
mapboxgl.accessToken = 'pk.eyJ1Ijoiam9obmpvaG4xMjMiLCJhIjoiY2ppbTQybG1xMDA2ODNwbndxMGlmeDhscyJ9.sr25iWKkM3Ku25e1AK0ugA';

var map = new mapboxgl.Map({
container: 'map',
style: 'mapbox://styles/mapbox/dark-v9'
});

map.on('load', function() {

  map.addLayer({
    'id': 'line-animation',
    'type': 'line',
    'source': {
      'type': 'geojson',
      'data': geojson
    },
    'paint': {
      'line-color':'red',
      'line-width': 1,
      'line-opacity': .8
    }
  })

  var x1 = geojson.features[0].geometry.coordinates[0][0];
  var y1 = geojson.features[0].geometry.coordinates[0][1];
  var x2 = geojson.features[0].geometry.coordinates[1][0];
  var y2 = geojson.features[0].geometry.coordinates[1][1];
  test();
  function test() {
    console.log()
    if (geojson.features[0].geometry.coordinates[1][1] < 3) {
      geojson.features[0].geometry.coordinates[0][0] += 0.004;
      geojson.features[0].geometry.coordinates[0][1] += 0.005;
      geojson.features[0].geometry.coordinates[1][0] += 0.005;
      geojson.features[0].geometry.coordinates[1][1] += 0.005;
    } else {
      geojson.features[0].geometry.coordinates[0][0] = x1;
      geojson.features[0].geometry.coordinates[0][1] = y1;
      geojson.features[0].geometry.coordinates[1][0] = x2;
      geojson.features[0].geometry.coordinates[1][1] = y2;
    }
    map.getSource('line-animation').setData(geojson);
    requestAnimationFrame(test);
  }
});
