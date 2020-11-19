<template>

  <div class="bg-wrapper">
    <div class="bg">
      <!-- <h1>{{ msg }}</h1>
      <img class="planetAsset">
      <h1>{{ $route.params.planetname }}</h1>
      <img class="logo">
      <div class="planetdescription">hier kommt text</div>
 -->
      <img class="starsbackground" src="../assets/stars2.svg">
      <div class="btns">
          <a href=""><img class="sammlungBtn" src="../assets/sammlungBtn.svg"> <router-link to="/sam"></router-link></a>
          <a href=""><img class="mapBtn" src="../assets/mapBtn.svg"> <router-link to="/loc"></router-link></a>
        </div>
    </div>
</div>
</template>

<script>
/* export default {
  name: 'planetenView',
  props: {
    msg: String
  }
} */
export default {
  name: 'planetenView',
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .starsbackground {
    position: fixed;
    top: 0;
    right: 0;
    width:75%;
  }

</style>