<template>
  <div class="popup">
    <div class="bgpopup">
      <img class="starsbackground" src="../assets/stars2.svg">
        <div class="crossbutton">
          <router-link to="/Walking"><img id="closeBtn" src="~@/assets/closeBtn.svg" @click="closeBtnPressed"></router-link>
          <img id="unlockedPlanetImg">
        </div>
    <div class="title">
    <h4>Du hast </h4><br>
    <h1>{{ planetName }} </h1><br>
    <h4>entdeckt</h4>
    </div>
    <button id="mehrErfahrenBtn" @click="closeBtnPressed"><router-link to="/Planeteninfo/Sonne">Erfahre mehr</router-link></button>
    </div>
  </div>
</template>

<script>

export default {
  name: 'unlockPopup',
  props: {
    planetName: String
  },
  methods: {
    closeBtnPressed() {
      this.$parent.closepopup();
  }
}
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.bgpopup {
  padding: 32px;
}
 .starsbackground {
    position: fixed;
    top: 20;
    right: 0;
    width:130%;
    transform: rotate(45deg);
  }

.title{
  margin-top: 70%;
  margin-left: 0%;
  text-align: center;
}

button{
  margin-top: 40%;
  margin-left: 15%;
  background-color: #9E4C4E;
}

.crossbutton{
  margin-left: 75%;
}
h1{
  color: #54A1BF;
}
a{
  color: #F2D7B6;
}
</style>
