<!DOCTYPE html>
<html>
<head>
    <meta charset='utf-8' />
    <title></title>
    <meta name='viewport' content='initial-scale=1,maximum-scale=1,user-scalable=no' />
    <link href="https://fonts.googleapis.com/css?family=Open+Sans" rel="stylesheet">
    <script src='https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.js'></script>
    <link href='https://api.tiles.mapbox.com/mapbox-gl-js/v1.12.0/mapbox-gl.css' rel='stylesheet' />
    
       
    <style>
      body {
        margin: 0;
        padding: 0;
      }

      #map {
        position: absolute;
        top: 0;
        bottom: 0;
        width: 100%;
      }

      .marker {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
}

.marker.sonne {
  background-image: url('assets/PNGs/Sun_Try.png');
}
.marker.merkur {
  background-image: url('assets/PNGs/Mercury_Drawing_SketchNtoon.png');
}
.marker.venus {
  background-image: url('assets/PNGs/Venus_withcontour.png');
}
.marker.erde {
  background-image: url('assets/PNGs/Earth_try_1.png');
}
.marker.mond {
  background-image: url('assets/PNGs/Moon_Try1.png');
}

    </style>
</head>
<body>

<div id='map'></div>

<script>

mapboxgl.accessToken = 'pk.eyJ1Ijoic2VyYXBoaW5lIiwiYSI6ImNraDNlZ2c3ZTEzMTkydG8zMm1hdzZ3aHoifQ.aaP-5x-PK-v2CQPNxOaIvQ';

var map = new mapboxgl.Map({
  container: 'map',
  style: 'mapbox://styles/seraphine/ckhd6nsco25pa19mc8yrr4wq0',
  center: [8.291631, 47.068675],
  zoom: 16
});

  map.on('load', function () {
  map.loadImage(
    'https://upload.wikimedia.org/wikipedia/commons/7/7c/201408_cat.png',
  function (error, image) {
    if (error) throw error;
      map.addImage('cat', image);
      map.addLayer({
'id': 'points',
'type': 'symbol',
'source': 'point',
'layout': {
'icon-image': 'cat',
'icon-size': 0.25
}
});
}
);
});

var geojson = {
  type: 'FeatureCollection',
  features: [{
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.2893320, 47.0680295]
    },
    properties: {
      title: 'Mapbox',
      description: 'sonne',  
      icon:'assets/PNGs/Sun_Try.png'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.2900936, 47.0684207]
    },
    properties: {
      title: 'Mapbox',
      description: 'merkur'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.2904847, 47.0686277]
    },
    properties: {
      title: 'Mapbox',
      description: 'venus'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.2908257, 47.0688409]
    },
    properties: {
      title: 'Mapbox',
      description: 'erde'
    }
  },
  {
    type: 'Feature',
    geometry: {
      type: 'Point',
      coordinates: [8.290869, 47.068865]
    },
    properties: {
      title: 'Mapbox',
      description: 'mond'
    }
  }]
};


// add markers to map
        var planeten = ["Sonne", "Merkur", "Venus", "Erde", "Mond"];
        var index = 0;
        geojson.features.forEach(function(marker) {
            // create a DOM element for the marker
            var el = document.createElement("div");
            el.className = "marker " + planeten[index];
            index += 1;
            // add marker to map
            new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
        });

</script>

</body>
</html>