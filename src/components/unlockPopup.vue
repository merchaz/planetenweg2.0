<template>
  <div class="popup">
    <div class="bgpopup">
      <!-- <img class="starsbackground" src="../assets/stars2.svg"> -->
        <div class="crossbutton">
          <img id="closeBtn" src="~@/assets/closeBtn.svg" @click="closeBtnPressed">
        </div>
        <div class="planetimage">
          <!-- <img id="unlockedPlanetImg"> -->
          <!-- <img src="../assets/Moon.png"> -->
        </div>
    <div class="title">
    <h4>Du hast </h4><br>
    <h1>{{ planetName }} </h1><br>
    <h4>entdeckt</h4>
    </div>
      <router-link v-if="mehrErfahrenLink" :to="mehrErfahrenLink"><button style="color:#f2d7b6;" id="mehrErfahrenBtn" @click="closeBtnPressed">Erfahre mehr</button></router-link>      
    </div>
  </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
var mehrErfahrenLink = ""
// eslint-disable-next-line no-unused-vars
var linkDone = false;
export default {
  name: 'unlockPopup',
  props: {
    planetName: String
  },
  
  created: function(){
    this.mehrErfahrenLink = "/Planeteninfo/" + this.planetName;
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
  margin-left: 78%;
}
h1{
  color: #54A1BF;
}
a{
  color: #F2D7B6;
}
.planetimage {
  border: aqua;
  border: #F2D7B6 1px solid;
  position: absolute;

}

</style>
