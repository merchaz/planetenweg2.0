<template>

  <div class="bg-wrapper">
    <img class="planet" src="../assets/planet2.svg">
    <div class="bg">
      <div class="title">
        <h3>Weltraum-</h3><br>
        <h3>Mission</h3><br>
        <h4>erfolgreich!</h4><br>
      </div>
      <img class="astronaut" src="../assets/astronaut.svg">
      <p class="paragraph">Du hast alle Planeten unseres Sonneystems entdeckt!<br><br>Dein Weg war 5,906,380,000 km weit.<br>Für dich waren es nur 5,9 Kilometer.</p>
      <button id="startButton"><router-link to="/MeineSammlung">Zur Sammlung</router-link></button>
    </div>

    <div class="stars"></div>

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
    position: absolute;
    top: 0;
    right: 0;
    width:75%;
  }

  .bg {
    justify-content: space-evenly;

  }

  .paragraph {
    text-align: left;
    background-color: #173040;
  }

  .astronaut {
    width: 50%;
    transform: rotate(25deg);
    margin: 15% 0;
  }
  
  .title {
    margin-top: 15%;
    transform: rotate(-25deg);
  }

</style>