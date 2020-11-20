<template>
  <div class="bg-wrapper">
    <div class="stars"></div>
    <div class="bg">
      <div class="btns">
        <router-link to="/Walking"><img id="closeBtn" src="~@/assets/closeBtn.svg"></router-link>
      </div>
      <h3>Meine Sammlung</h3>
      <div class="sammlung">
        <router-link to="/Planeteninfo/Sonne"><img class="planet Sonne" v-if="true" src="~@/assets/Sonne.png"></router-link>
        <router-link to="/Planeteninfo/Merkur"><img class="planet Merkur" v-if="true" src="~@/assets/Merkur.png"></router-link>
        <router-link to="/Planeteninfo/Venus"><img class="planet Venus" v-if="true" src="~@/assets/Venus.png"></router-link>
        <router-link to="/Planeteninfo/Erde"><img class="planet Erde" v-if="true" src="~@/assets/Erde.png"></router-link>
        <router-link to="/Planeteninfo/Mond"><img class="planet Mond" v-if="true" src="~@/assets/Mond.png"></router-link>
      </div>
      <router-link to="/impressum">Impressum</router-link>
    </div>
  </div>
</template>

<script>
var unlockedPlanets = [];
// eslint-disable-next-line no-unused-vars
var sonneUnl, merkurUnl, venusUnl, erdeUnl, mondUnl = false; 
var planetenStorage = window.localStorage;
export default {
  name: 'sammlung',
  mounted () {
    this.loadUnlockedPlanets();    
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

.bg {
  justify-content: flex-start;
}

.sammlung {
  margin-top: 5rem;
  display: flex;
  flex-flow: row wrap;
  justify-content: space-between;
  align-content: center;
  width: 100%;
}

.sammlung a {
  flex-grow: 0;
  width: 7rem;
}

.planet.Sonne {
  background-image: url("~@/assets/Sonne.png");
}
.planet.Merkur {
  background-image: url("~@/assets/Merkur.png");
}
.planet.Venus {
  background-image: url("~@/assets/Venus.png");
}
.planet.Erde {
  background-image: url("~@/assets/Erde.png");
}
.planet.Mond {
  background-image: url("~@/assets/Mond.png");
}

</style>