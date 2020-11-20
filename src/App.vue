<template>
  <div id="popupOverlay" v-if="showModal">
    <unlock-popup :planetName="unlockedPlanet"></unlock-popup>
  </div>
  <div id="nav">
    <router-link to="/">Home</router-link>
  </div>
  <router-view />
</template>

<script>
import unlockPopup from "./components/unlockPopup.vue";

// eslint-disable-next-line no-unused-vars
var mercsHome = {
  olX: 8.482823,
  olY: 47.193124,
  urX: 8.483493,
  urY: 47.192853,
};

var sonne = {
  olX: 8.289199,
  olY: 47.048084,
  urX: 8.289472,
  urY: 47.068011,
};

var merkur = {
  olX: 8.28987,
  olY: 47.068519,
  urX: 8.290307,
  urY: 47.068299,
};

var venus = {
  olX: 8.290254,
  olY: 47.068753,
  urX: 8.29068,
  urY: 47.068558,
};

var erde = {
  olX: 8.290568,
  olY: 47.068965,
  urX: 8.291063,
  urY: 47.068789,
};

var showModal = false;
var unlockedPlanet = "";
// eslint-disable-next-line no-unused-vars
var sonneUnl,
  merkurUnl,
  venusUnl,
  erdeUnl,
  mondUnl = false;
var test = true;
var planetenStorage = window.localStorage;
export default {
  components: { unlockPopup },
  name: "app",
  data: function () {
    return {
      showModal,
      unlockedPlanet,
    };
  },
  mounted() {
    this.interval = setInterval(() => this.checkIfinPlanetArea(), 5000);
  },
  methods: {
    checkIfinPlanetArea() {
      if (planetenStorage.getItem("StartPressed") != null) {
        navigator.geolocation.getCurrentPosition(
          (position) => {
            // Ist Benutzer bei Sonne?
            if (
              sonneUnl == false &&
              this.isInside(
                position.coords.longitude,
                position.coords.latitude,
                sonne.olX,
                sonne.olY,
                sonne.urX,
                sonne.urY
              )
            ) {
              this.unlockedPlanet = "Sonne";
              this.showModal = true;
              this.addEntry(unlockedPlanet);
              sonneUnl = true;
            }

            // Ist Benutzer bei Merkur?
            if (
              merkurUnl == false &&
              this.isInside(
                position.coords.longitude,
                position.coords.latitude,
                merkur.olX,
                merkur.olY,
                merkur.urX,
                merkur.urY
              )
            ) {
              this.unlockedPlanet = "Merkur";
              this.showModal = true;
              this.addEntry(unlockedPlanet);
              merkurUnl = true;
            }

            // Ist Benutzer bei Venus?
            if (
              venusUnl == false &&
              this.isInside(
                position.coords.longitude,
                position.coords.latitude,
                venus.olX,
                venus.olY,
                venus.urX,
                venus.urY
              )
            ) {
              this.unlockedPlanet = "Venus";
              this.showModal = true;
              this.addEntry(unlockedPlanet);
              venusUnl = true;
            }

            // Ist Benutzer bei Erde?
            if (
              erdeUnl == false &&
              this.isInside(
                position.coords.longitude,
                position.coords.latitude,
                erde.olX,
                erde.olY,
                erde.urX,
                erde.urY
              )
            ) {
              this.unlockedPlanet = "Erde";
              this.showModal = true;
              this.addEntry(unlockedPlanet);
              erdeUnl = true;
            }

            // Testing
            if (test && mondUnl == false) {
              this.unlockedPlanet = "Sonne";
              this.showModal = true;
              this.addEntry(unlockedPlanet);
              mondUnl = true;
            }
          },
          (error) => {
            console.log(error.message);
          }
        );
      }
    },

    isInside(x, y, z1, z2, z3, z4) {
      var x1 = Math.min(z1, z3);
      var x2 = Math.max(z1, z3);
      var y1 = Math.min(z2, z4);
      var y2 = Math.max(z2, z4);
      if (x1 <= x && x <= x2 && y1 <= y && y <= y2) {
        return true;
      } else {
        return false;
      }
    },
    closepopup() {
      this.showModal = false;
    },
    addEntry(unlockplanet) {
      if (planetenStorage.getItem(unlockplanet) == null) {
        planetenStorage.setItem(unlockplanet, "planet");
      }
    },
  },
};
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #b94295;
}

.maindiv {
  background-color: #b94295;
}

#popupOverlay {
  position: absolute;
  height: 100%;
  width: 100%;
  background: #173040;
  z-index: 2;
  border: #f2d7b6 10px solid;
}

#locationBtn {
  position: fixed;
  top: 60%;
  left: 50%;
}
#locLabel {
  position: fixed;
  top: 50%;
  left: 50%;
}

/* Levin */

/* Fonts */

@import url("https://fonts.googleapis.com/css2?family=Emblema+One&display=swap");
@import url("https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap");

/* Styles */

div,
html,
body,
h1,
h2,
h3,
h4,
p {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #173040;
  width: 100vw;
  height: 100vh;
  /* overflow: hidden; */
  font-family: "Roboto Mono", monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #f2d7b6;
}

h1,
h2,
h3,
h4 {
  font-family: "Emblema One", cursive;
  font-weight: 400;
  text-shadow: 3px 2px 0px #9e4c4e;
  display: inline-block;
}

h1 {
  font-size: 80px;
  line-height: 1;
}

h2 {
  font-size: 60px;
}

h3 {
  font-size: 46px;
}
h4 {
  font-size: 36px;
}

p {
  font-size: 18px;
  font-weight: 400;
  width: 100%;
}

a {
  color: #9e4c4e;
  text-decoration-line: none;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
  display: inline;
}

img {
  width: 100%;
}

button {
  display: inline-block;
  padding: 10px 40px;
  margin-top: 5vh;
  border: none;
  border-radius: 12px;
  background-color: #f2d7b6;
  color: #9e4c4e;
  font-family: "Roboto Mono", monospace;
  font-size: 18px;
  text-decoration-line: none;
  text-transform: uppercase;
  z-index: 10;
}

.bg-wrapper {
  width: 100vw;
  height: 100vh;
}

.bg {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background: none;
  border: #f2d7b6 10px solid;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 32px;
  z-index: 5;
}

.stars {
  position: absolute;
  height: 100vh;
  width: 100vw;
  top: 0;
  background: rgba(0, 0, 0, 0) 0px 0px url("assets/stars.svg") repeat-x;
  z-index: -1;
}

.starsFast {
  position: absolute;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0) 0px 0px url("assets/stars.svg") repeat;
  -webkit-animation: scroll 3s linear infinite;
  animation: scroll 3s linear infinite;
  z-index: -1;
}

.starsSlow {
  position: absolute;
  top: 0;
  height: 100vh;
  width: 100vw;
  background: rgba(0, 0, 0, 0) 0px 0px url("assets/starsTest.svg") repeat;
  -webkit-animation: scroll 30s linear infinite;
  animation: scroll 30s linear infinite;
  z-index: -1;
}

.btns {
  width: 100%;
  display: flex;
  flex-flow: row-reverse wrap;
  justify-content: space-between;
}

.marker {
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-size: cover;
}

.mapboxgl-ctrl-bottom-left,
.mapboxgl-ctrl-bottom-right {
  display: none; 
}


.marker.Sonne {
  background-image: url("~@/assets/Sonne.png");
}
.marker.Merkur {
  background-image: url("~@/assets/Merkur.png");
}
.marker.Venus {
  background-image: url("~@/assets/Venus.png");
}
.marker.Mond {
  background-image: url("~@/assets/Mond.png");
}
.marker.Erde {
  background-image: url("~@/assets/Erde.png");
}

@-webkit-keyframes scroll {
  0% {
    background-position: 0 -487px;
  }
  20% {
  }
  40% {
  }
  60% {
  }
  80% {
  }
  100% {
    background-position: 0 0;
  }
}

@keyframes scroll {
  0% {
    background-position: 0 -487px;
    opacity: 100%;
  }
  20% {
    opacity: 0%;
  }
  40% {
    opacity: 100%;
  }
  60% {
    opacity: 0%;
  }
  80% {
    opacity: 100%;
  }
  100% {
    background-position: 0 0;
  }
}

#nav {
  display: none;
}
</style>