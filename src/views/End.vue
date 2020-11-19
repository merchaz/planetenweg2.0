<template>

  <div class="bg-wrapper">
    <div class="bg stars">
        <img class="astronaut" src="../assets/astronaut.svg">
        <p class="paragraph">Du hast alle Planeten unseres Sonneystems entdeckt!<br><br>Dein Weg war 5,906,380,000 km weit.<br>Für dich waren es nur 5,9 Kilometer.</p>
        <button id="startButton"><router-link to="/MeineSammlung">Zur Sammlung</router-link></button>
    </div>
    <img class="planet" src="../assets/planet2.svg">
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

</style>