<template>
  <div class="popup">
      <router-link to="/Walking"><img id="closeBtn" src="~@/assets/closeBtn.svg" @click="closeBtnPressed"></router-link>
      <img id="unlockedPlanetImg">
    <p>Du hast </p>
    <h1>{{ planetName }} </h1>
    <p>entdeckt</p>
    <button id="mehrErfahrenBtn" @click="closeBtnPressed"><router-link to="/Planeteninfo/Sonne">Mehr erfahren</router-link></button>
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

