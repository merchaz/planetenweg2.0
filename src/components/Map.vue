<template>
  <div class="bg-wrapper">
    <div class="bg">
      <div class="btns">
        <router-link to="/Walking"><img id="closeBtn" src="~@/assets/closeBtn.svg"></router-link>
      </div>
    </div>
  </div>
  <div id="map"></div>
</template>
          
<style scoped>

#map {
  position: absolute;
  top: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: border-box;
  border: 10px solid #f2d7b6; 
}

.btns {
  z-index: 2;
}
body{
  transition: opacity 1s ease-in-out;
}

</style>

<script>
import "mapbox-gl/dist/mapbox-gl.css";
import mapboxgl from "mapbox-gl";
// eslint-disable-next-line no-unused-vars
 var localMap;
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

    map.addControl(
      new mapboxgl.GeolocateControl({
        positionOptions: {
        enableHighAccuracy: true
        },
        trackUserLocation: true,
        showAccuracyCircle: false

      }), 'top-left'
    );
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
