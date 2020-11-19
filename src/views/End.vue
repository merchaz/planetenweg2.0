<template>

  <div class="bg-wrapper">
    <div class="stars"></div>
    <div class="bg">
        <img class="planet" src="../assets/planet2.svg">
        <p class="paragraph">Um deine Reise im Solarsystem zu starten, musst du deine Ortnungsdienste aktivieren.</p>
        <button id="startButton"><router-link to="/MeineSammlung">Zur Sammlung</router-link></button>
    </div>
  </div>

</template>

<script>

export default {
  name: 'start',
}

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

  h1 {
    transform: translateX(10vw);
  }

  h3 {
    transform: translateX(25vw);
  }

  .planet {
    position: fixed;
    top: -10px;
    right: 0;
    width: 70vw;
    transform: rotate(-90deg);
  }

  .paragraph {
    text-align: left;
  }

</style>