//THE MAIN GEOJSON FILE
var geojson = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [0, 0.5],[0, 1]
            ]
        },
        "direction": [3,5]
    },{
      "type": "Feature",
      "geometry": {
          "type": "LineString",
          "coordinates": [
              [0.5, 0.5],[0.5, 1]
          ]
      }
  },
  {
    "type": "Feature",
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [1, 0.8],[1, 1]
        ]
    }
},
{
  "type": "Feature",
  "geometry": {
      "type": "LineString",
      "coordinates": [
          [1.5, 1.1],[1.5, 1]
      ]
  }
},
  ]
};

// TO KEEP TRUCK OF THE ANIMATION AND INITIALIZE THE VALUES
var geojson1 = {
    "type": "FeatureCollection",
    "features": [
      {
        "type": "Feature",
        "geometry": {
            "type": "LineString",
            "coordinates": [
                [0, 0.1],[0, 1]
            ]
        }
    },{
      "type": "Feature",
      "geometry": {
          "type": "LineString",
          "coordinates": [
              [0.5, 0.5],[0.5, 1]
          ]
      }
  },
  {
    "type": "Feature",
    "geometry": {
        "type": "LineString",
        "coordinates": [
            [1, 0.8],[1, 1]
        ]
    }
},
{
  "type": "Feature",
  "geometry": {
      "type": "LineString",
      "coordinates": [
          [1.5, 1.1],[1.5, 1]
      ]
  }
},
  ]
};
//GEOJSON POLYGON
var geojsonPolygon = {
  "type": "FeatureCollection",
  "features": [
    {
      "type": "Feature",
      "properties": {},
      "geometry": {
        "type": "Polygon",
        "coordinates": [
          [
            [
              11.162109375,
              46.70973594407157
            ],
            [
              16.34765625,
              42.293564192170095
            ],
            [
              18.193359375,
              46.49839225859763
            ],
            [
              11.162109375,
              46.70973594407157
            ]
          ]
        ]
      }
    }
  ]
}
