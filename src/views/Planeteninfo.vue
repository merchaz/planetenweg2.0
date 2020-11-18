<template>
  <div class="main">
    <h1>{{ msg }}</h1>
    <img class="planetAsset">
    <h1>{{ $route.params.planetname }}</h1>
    <img class="logo">
    <div class="planetdescription">hier kommt text</div>
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
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>