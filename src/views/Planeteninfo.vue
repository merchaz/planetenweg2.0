<template>
  <div class="bg-wrapper">
    <div class="bg">
      <div class="btns">
        <a href=""><img class="sammlungBtn" src="../assets/sammlungBtn.svg"> <router-link to="/sam"></router-link></a>
        <a href=""><img class="closeBtn" src="../assets/closeBtn.svg"> <router-link to="/walking"></router-link></a>
      </div>
      <h1>{{ msg }}</h1> <!-- Planetname -->
      <img class="planetAsset">
      <h1>{{ $route.params.planetname }}</h1>
      <img class="logo">
      <div class="planetdescription">hier kommt text</div>

      <div class="stars"></div>
      
    </div>
  </div>
</template>

<script>
export default {
  name: 'planetenView',
  props: {
    msg: String
  }
} 
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bg {
  justify-content: flex-start;
}

.btns {
  z-index: 15;
}

</style>