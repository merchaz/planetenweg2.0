<template>
  <div class="bg-wrapper">
    <div class="stars"></div>
    <div class="bg">
        <img class="planet" src="../assets/planet2.svg">
        <div class="title">
          <h2>Beginne</h2><br>
          <h3>deine</h3><br>
          <h1>Reise</h1>
        </div>
        <p class="paragraph">Der Beginn des Weltraumabenteuers findet in Emmen statt. <br><br> Der Planetenweg folgt dem Reussschachen vom Einmündung der Kleinen Emme und der Reuss bis nach Perlen.
Dein Abenteuer wird 5,91 km lang sein und dir erlauben, die Planeten unseres Sonnensystems zu entdecken.<br><br> Die “Raumschiff Reise” dauert etwa 2 Stunden, aber lass dir Zeit, dich im Weltraum zu verlieren.
Wenn du dich verloren fühlst, kannst du dich auf der Karte orientieren.</p>
        <router-link to="/Walking"><button id="startButton" @click="startBtnPressed">Start</button></router-link>
    </div>
    

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
    position: absolute;
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
    text-align: left;
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