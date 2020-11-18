<template>
  <div class="popup">
      <img id="closeBtn" @click="closeBtnPressed">
      <img id="unlockedPlanetImg">
    <p>Du hast </p>
    <h1>{{ planetName }} </h1>
    <p>entdeckt</p>
    <button id="mehrErfahrenBtn"><router-link to="/Planeteninfo/Sonne">Mehr erfahren</router-link></button>
  </div>
</template>

<script>
export default {
  name: 'unlockPopup',
  props: {
    planetName: String
  }
}
</script>

