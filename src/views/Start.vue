<template>
  <div class="bg-wrapper">
    <div class="bg">
        <img class="planet" src="../assets/planet2.svg">
        <div class="title">
          <h2>Beginne</h2><br>
          <h3>deine</h3><br>
          <h1>Reise</h1>
        </div>
        <p class="paragraph">Um deine Reise im Solarsystem zu starten, musst du deine Ortnungsdienste aktivieren.</p>
        <router-link to="/Walking"><button id="startButton" @click="startBtnPressed">Start</button></router-link>
    </div>
    <div class="stars"></div>

  </div>
</template>

<script>

export default {
  name: 'start',
  methods: {
    startBtnPressed() {
      //Set the startflag
      window.localStorage.setItem("StartPressed", "true");
    }
  }
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
   /*  background-color: #173040; */
  }

</style>