<template>
  <div class="bg-wrapper">
    <div class="stars"></div>
    <div class="bg">
        <img class="planet" src="../assets/planet2.svg">
        <div class="title">
          <h3>Impressum</h3>
        </div>

        <div class="center">
          <h4>Team:</h4>
          <p><br>
            Marc Häusler | Back-End Developer<br><br>
            Seraphine Thürler | Designerin<br><br>
            Levin Witjes | Front-End Developer & Designer<br><br>
          </p>
        </div>

        <div class="center">
          <p><strong>Quellen:</strong></p>
          <p>
            Spaceship | thenounproject.com<br><br>
            Planeten Infos | solarsystem.nasa
          </p>
        </div>

        <router-link to="/Walking"><button id="startButton" @click="startBtnPressed">Back</button></router-link>
    </div>
    

  </div>
</template>

<script>
export default {
  name: 'Impressum'
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h4 {
    text-align: left;
  }

  .planet {
    position: absolute;
    top: 0;
    right: 0;
    width:75%;
  }

  .title {
    transform: rotate(-7.23deg);
    margin-top: 35%;
    margin-bottom: 40%;
  }

  .center {
    width: 100%;
  }

  .bg-wrapper{
    min-height: 100vh;
    height: 100%;
  }

  .bg{
    min-height: 100vh;
    height: 100%;
  }


</style>
