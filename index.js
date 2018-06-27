
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
      'line-color':'#d3d3d3',
      'line-width': 1,
      'line-opacity': .8,
      'line-opacity-transition': {duration: 10000}

    }
  })

  map.addLayer({
    'id': 'polygonTest',
    'type': 'fill',
    'source': {
      'type': 'geojson',
      'data': geojsonPolygon
    },
    'paint': {
      'fill-color':'#d3d3d3',
      'fill-opacity':.3
    }
  })

  test();
  function test(timestamp) {
    for (i = 0; i < geojson.features.length; i++) {
      if (geojson.features[i].geometry.coordinates[1][1] < geojson1.features[i].geometry.coordinates[1][1] + 2) {
        geojson.features[i].geometry.coordinates[0][0] += 0.004;
        geojson.features[i].geometry.coordinates[0][1] += Math.sin(0.010);
        geojson.features[i].geometry.coordinates[1][0] += 0.005;
        geojson.features[i].geometry.coordinates[1][1] += 0.005;
        map.setPaintProperty('line-animation', 'line-opacity', 0);
      } else {
        geojson.features[i].geometry.coordinates[0][0] = geojson1.features[i].geometry.coordinates[0][1];
        geojson.features[i].geometry.coordinates[0][1] = geojson1.features[i].geometry.coordinates[0][1];
        geojson.features[i].geometry.coordinates[1][0] = geojson1.features[i].geometry.coordinates[1][0];
        geojson.features[i].geometry.coordinates[1][1] = geojson1.features[i].geometry.coordinates[1][1];
        map.setPaintProperty('line-animation', 'line-opacity', 1);
      }
    };
    map.getSource('line-animation').setData(geojson);
    requestAnimationFrame(test);
  }
});
