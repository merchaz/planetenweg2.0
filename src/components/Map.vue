<template>
  <div id="map"></div>
</template>
          
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

.marker.Sonne {
  background-image: url("~@/assets/Sun_withGlow.png");
}
.marker.Merkur {
  background-image: url("~@/assets/Mercury.png");
}
.marker.Venus {
  background-image: url("~@/assets/Venus.png");
}
.marker.Erde {
  background-image: url("~@/assets/Earth.png");
}
.marker.Mond {
  background-image: url("~@/assets/Moon.png");
}
</style>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";

 var localMap;
 console.log(localMap);
export default {
  name: "mapComp",
  props: {map: mapboxgl},
  mounted() {
      mapboxgl.accessToken =
      "pk.eyJ1Ijoic2VyYXBoaW5lIiwiYSI6ImNraDNlZ2c3ZTEzMTkydG8zMm1hdzZ3aHoifQ.aaP-5x-PK-v2CQPNxOaIvQ";

      var map = new mapboxgl.Map({
      container: "map",
      style: "mapbox://styles/seraphine/ckhd6nsco25pa19mc8yrr4wq0",
      center: [8.291631, 47.068675],
      zoom: 16,
    });
    var geojson = {
  type: "FeatureCollection",
  features: [
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [8.289332, 47.0680295],
      },
      properties: {
        title: "Mapbox",
        description: "sonne"
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [8.2900936, 47.0684207],
      },
      properties: {
        title: "Mapbox",
        description: "merkur"
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [8.2904847, 47.0686277],
      },
      properties: {
        title: "Mapbox",
        description: "venus"
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [8.2908257, 47.0688409],
      },
      properties: {
        title: "Mapbox",
        description: "erde"
      },
    },
    {
      type: "Feature",
      geometry: {
        type: "Point",
        coordinates: [8.290869, 47.068865],
      },
      properties: {
        title: "Mapbox",
        description: "mond"
      },
    },
  ],
};

// add markers to map
var planeten = ["Sonne", "Merkur", "Venus", "Erde", "Mond"];
var index = 0;
geojson.features.forEach(function (marker) {
  // create a DOM element for the marker
  var el = document.createElement("div");
  el.className = "marker " + planeten[index];
  index += 1;
  // add marker to map
  new mapboxgl.Marker(el).setLngLat(marker.geometry.coordinates).addTo(map);
});
  }
}




</script>
