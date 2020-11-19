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
        <p class="paragraph">Der Beginn des Weltraumabenteuers findet in Emmen statt. Der Planetenweg folgt dem Reussschachen vom Einmündung der Kleinen Emme und der Reuss bis nach Perlen.
Dein Abenteuer wird 5,91 km lang sein und dir erlauben, die Planeten unseres Sonnensystems zu entdecken. Die “Raumschiff Reise” dauert etwa 2 Stunden, aber gebe dir Zeit, dich im Weltraum zu verlieren.
(Besondere Hinweise: Einfacher Wander- bzw. Spazierweg entlang der Reuss, teilw. durch bewaldetes Gebiet.)
Wenn du dich verloren fühlst, kannst du dich auf der Karte orientieren. Du kannst auch während deine Reise deine gesammelten Planeten im Auge behalten.</p>
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
   /*  background-color: #173040; */
  }

  .bg-wrapper{
    height: 100%;
  }

</style>