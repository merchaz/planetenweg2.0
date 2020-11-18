

<template>
<div id="popupOverlay" v-if="showModal">
  <unlock-popup :planetName="unlockedPlanet"></unlock-popup>
</div>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/loc">Location</router-link> 
  </div>
  <div id="testDiv"><label id="locLabel">click the button</label>
  <button id="locationBtn" v-on:click="locatorButtonPressed">get location</button></div>
  <router-view/>
  
</template>


<script>
import unlockPopup from './components/unlockPopup.vue';

var mercsHome = {
    olX: 8.482823,
    olY: 47.193124,
    urX: 8.483493,
    urY: 47.192853
}

var levinsHome = {
    olX: 8.285036,
    olY: 47.073229,
    urX: 8.285633,
    urY: 47.072837
}

var showModal = false;
var unlockedPlanet = "";
export default {
  components: { unlockPopup },
  name: 'app',
  data: function(){
      return {
        showModal, unlockedPlanet
      }
  },
  methods: {
    locatorButtonPressed() {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(showModal);
                console.log(unlockedPlanet);
                document.getElementById("locLabel").innerHTML  = "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude;
                if(this.isInside(position.coords.longitude, position.coords.latitude, levinsHome.olX, levinsHome.olY, levinsHome.urX, levinsHome.urY)){
                    this.showModal = true;
                    alert("youre at levins place")
                } else {
                    //alert("youre not at levins place")
                }    
                if(this.isInside(position.coords.longitude, position.coords.latitude, mercsHome.olX, mercsHome.olY, mercsHome.urX, mercsHome.urY)){
                    unlockedPlanet = "Mercs Place";
                    this.showModal = true;
                    //alert("youre at mercs place")
                } else {
                    alert("youre not at mercs place")
                }                
            },
            error => {
                console.log("rip");
            console.log(error.message);
            },
        )   
    },

    isInside(x, y, z1, z2, z3, z4)  {
        var x1 = Math.min(z1, z3);
        var x2 = Math.max(z1, z3);
        var y1 = Math.min(z2, z4);
        var y2 = Math.max(z2, z4);
        if ((x1 <= x ) && ( x <= x2) && (y1 <= y) && (y <= y2)) {
            console.log(x1 + "," + x + "," + x2);
            console.log(y1 + "," + y + "," + y2);
            return true;
        } else {
            return false;
        }
    }
  }
}
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

.maindiv{
  background-color: #b94295;
}

#popupOverlay{
  position: absolute;
  height: 100%;
  width: 100%;
  background: #173040;
  z-index: 2;
  border: #F2D7B6 10px solid;
}

#locationBtn {
  position: fixed;
  top: 60%;
  left: 50%;
}
#locLabel{
  position: fixed;
  top: 50%;
  left: 50%;
}

/* Levin */

/* Fonts */

@import url('https://fonts.googleapis.com/css2?family=Emblema+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

/* Styles */

div, html, body, h1, h2, h3, h4, p {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #173040;
  width: 100vw;
  height: 100vh;
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #F2D7B6;
}

h1,h2,h3 {
  font-family: 'Emblema One', cursive;
  font-weight: 400;
  text-shadow: 3px 2px 0px #9E4C4E;
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

p {
  font-size: 18px;
}

.bg {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background: none;
  border: #F2D7B6 10px solid;
  display: flex;
  width: 100vw;
  height: 100vh;
  padding: 32px;
}

#nav {
  display: none;
}

</style>
