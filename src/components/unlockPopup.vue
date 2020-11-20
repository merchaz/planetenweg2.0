<template>
  <div class="">
    <div class="bg">
        <div class="btns">
          <router-link to="/Walking"><img id="closeBtn" src="~@/assets/closeBtn.svg" @click="closeBtnPressed"></router-link>
        </div>
        <div class="planetimage">
          <img v-if="imgUrl" id="unlockedPlanetImg" :src="imgUrl">
        </div>
        <div class="title">
          <h4>Du hast </h4><br>
          <h2>{{ planetName }} </h2><br>
          <h4>entdeckt</h4>
        </div>
      <router-link v-if="imgUrl" :to="mehrErfahrenLink"><button style="color:#f2d7b6;" id="mehrErfahrenBtn" @click="closeBtnPressed">Erfahre mehr</button></router-link>      
    </div>

    <div class="stars"></div>

  </div>
</template>

<script>

// eslint-disable-next-line no-unused-vars
var mehrErfahrenLink = "";
// eslint-disable-next-line no-unused-vars
var imgUrl = "";

export default {
  name: 'unlockPopup',
  props: {
    planetName: String
  },
  created: function (){
    this.imgUrl = require("../assets/" + this.planetName + ".png");
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

button {
  margin-top: 60%;
  color: #9E4C4E!important;
}

h2 {
  color: #54A1BF;
}

.bg {
  border: none;
  position: absolute;
  height: 100%;
  justify-content: space-between;
}

.title {
  margin-top: 10%;
  text-align: center;
}

.stars {
  width: 100%;
  height: 100%;
  background-repeat: repeat;
}

</style>
