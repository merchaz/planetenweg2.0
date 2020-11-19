<template>
  <div class="bg-wrapper">

    <div class="stars"></div>

    <div class="bg">
        <img class="planet2" src="../assets/planet2.svg">
        <div class="title">
          <h2>Beginne</h2><br>
          <h3>deine</h3><br>
          <h1>Reise</h1>
        </div>
        <p class="paragraph">Um deine Reise im Solarsystem zu starten, musst du deine Ortnungsdienste aktivieren.</p>
        <button id="startButton"><router-link to="/Walking">Start</router-link></button>
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

  .planet2 {
    position: fixed;
    top: 0;
    right: 0;
    width:75%;
  }

  .title {
  transform: rotate(-7.23deg);
  margin-top: 40%;
  margin-bottom: 40%;
  }

  .paragraph {
    text-align: center;
  }

  #canvas {
    height: 200vh;
    width: 200vw;
    position: fixed;
  }

</style>