<template>

  <div class="bg-wrapper">
    <div class="bg stars">
        <img class="astronaut" src="../assets/astronaut.svg">
        <p class="paragraph">Du hast alle Planeten unseres Sonneystems entdeckt!<br><br>Dein Weg war 5,906,380,000 km weit.<br>Für dich waren es nur 5,9 Kilometer.</p>
        <button id="startButton"><router-link to="/MeineSammlung">Zur Sammlung</router-link></button>
    </div>
    <img class="planet" src="../assets/planet2.svg">
<div class="title">
        <h3>Weltraum-</h3><br>
        <h3>Mission</h3><br>
        <h4>abgeschlossen!</h4><br>
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

  .planet {
    position: fixed;
    top: 0;
    right: 0;
    width:75%;
  }

  .bg {
    justify-content: flex-end;
  }

  .paragraph {
    text-align: left;
    background-color: #173040;
  }

  .astronaut {
    width: 50%;
    transform: rotate(25deg);
    margin-bottom: 15%;
  }

  .h3 {
    transform: translateX(25vw);
    transform: rotate(-20deg);
    margin-right: 10%;
    margin-top: 5%;
  }
  .h4 {
    transform: translateX(25vw);
    transform: rotate(-20deg);
    margin-right: 10%;
    margin-top: -5%;
  }

  
  .title {
  transform: rotate(-7.23deg);
  margin-top: 30%;
  margin-left: 5%;
  /* margin-bottom: -0%; */
  position: fixed;
  }

</style>