<template>
  <div class="walking">
    <router-link to="/showmap"><img id="mapBtn" src="~@/assets/mapBtn.svg"></router-link>
    <router-link to="/MeineSammlung"><img id="sammlungBtn" src="~@/assets/sammlungBtn.svg"></router-link>
    <h1>Walking</h1>
    <label id="distanzLabel">51.243 Millionen km</label>
    <img id="spaceship">
    <label id="speedLabel">8000 km/h</label>
  </div>
</template>

<script>
export default {
  name: 'walking',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>