<template>
  <div>
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
  margin-top: 30%;
  color: #9E4C4E!important;
}

h2 {
  color: #54A1BF;
}

.bg {
  border: none;
}

.title {
  margin-top: 70%;
  text-align: center;
}

.planetimage {
  border: aqua;
  border: #F2D7B6 1px solid;
  position: absolute;
}

.stars{
  margin-left: -32px;
  margin-top: -32px;
}

</style>
