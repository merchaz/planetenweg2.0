<template>
  <div>
      <h1>
          {{person}}'s COMMUTE
      </h1>
      <p> {{person}} commutes from {{start}} to {{end}} </p>
  </div>
</template>

<script>
export default {
  name: 'Commute',
  props: {
    person: String,
    start: String,
    end: String
  }
  
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

</style>
