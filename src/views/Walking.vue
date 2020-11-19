<template>
  <div class="bg-wrapper">
    <div class="bg">
      <div class="btns">
        <router-link to="/showmap"><img id="mapBtn" src="~@/assets/mapBtn.svg"></router-link>
        <router-link to="/MeineSammlung"><img id="sammlungBtn" src="~@/assets/sammlungBtn.svg"></router-link>
      </div>
      <h2 id="distanzLabel">5124300 km</h2>
      <img class="astronaut " src="../assets/astronaut.svg">
      <h3 id="speedLabel">8000 km/h</h3>
    </div>
    
    <div class="starsSlow"></div>

  </div>
</template>

<script>
export default {
  name: 'walking',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  .astronaut {
    width: 50%;
    transform: rotate(25deg);
    margin-top: 15%;
  }

  h2, h3 {
    text-align: center;
  }

  .bg {
    border-color: #173040;
  }

</style>