<template>
  <div class="sammlung">
    <h1>Meine Sammlung</h1>
    <router-link to="/Planeteninfo/Sonne"><img class="planet Sonne" v-if="true" src="~@/assets/Sun_withGlow.png"></router-link>
    <router-link to="/Planeteninfo/Merkur"><img class="planet Merkur" v-if="true" src="~@/assets/Mercury.png"></router-link>
    <router-link to="/Planeteninfo/Venus"><img class="planet Venus" v-if="true" src="~@/assets/Venus.png"></router-link>
    <router-link to="/Planeteninfo/Erde"><img class="planet Erde" v-if="true" src="~@/assets/Earth.png"></router-link>
    <router-link to="/Planeteninfo/Mond"><img class="planet Mond" v-if="true" src="~@/assets/Moon.png"></router-link>
  </div>
</template>

<script>
var unlockedPlanets = [];
var sonneUnl, merkurUnl, venusUnl, erdeUnl, mondUnl = false; 
var planetenStorage = window.localStorage;
export default {
  name: 'sammlung',
  created () {
    console.log(sonneUnl + merkurUnl + venusUnl + erdeUnl + mondUnl)
  },
  mounted () {
    this.loadUnlockedPlanets();
    console.log(unlockedPlanets);
    
  },
  data: function(){
    return unlockedPlanets },
  methods: {
    loadUnlockedPlanets (){
      if (planetenStorage.getItem("Sonne") != null) {
        unlockedPlanets.push("Sonne");
        this.sonneUnl = true;
      }
      if (planetenStorage.getItem("Sonne") != null) {
        unlockedPlanets.push("Merkur");
        merkurUnl = true;
      }
      if (planetenStorage.getItem("Venus") != null) {
        unlockedPlanets.push("Venus");
        venusUnl = true;
      }
      if (planetenStorage.getItem("Erde") != null) {
        unlockedPlanets.push("Erde");
        erdeUnl = true;
      }
      if (planetenStorage.getItem("Mond") != null) {
        unlockedPlanets.push("Mond");
        mondUnl = true;
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}

.planet{
  height: 80px;
  width: 80px;
}

.planet.Sonne {
  background-image: url("~@/assets/Sun_withGlow.png");
}
.planet.Merkur {
  background-image: url("~@/assets/Mercury.png");
}
.planet.Venus {
  background-image: url("~@/assets/Venus.png");
}
.planet.Erde {
  background-image: url("~@/assets/Earth.png");
}
.planet.Mond {
  background-image: url("~@/assets/Moon.png");
}
</style>