<template>
  <div class="bg-wrapper">
    
    <div class="bg">
      <div class="btns">
        <router-link to="/showmap"><img id="mapBtn" src="~@/assets/mapBtn.svg"></router-link>
        <router-link to="/MeineSammlung"><img id="sammlungBtn" src="~@/assets/sammlungBtn.svg"></router-link>
      </div>
      <h3 id="distanzLabel">5'124'300 km</h3>
      <img class="astronaut " src="../assets/spaceship.svg">
      <h3 id="speedLabel">8'000 km/h</h3>
      <div class="starsSlow"></div>
    </div>
    
    


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
    width: 25%;
    margin-top: 20%;
  }

  h2, h3 {
    text-align: center;
  }

  .bg {
    border: none;
    padding: 42px;
  }

</style>