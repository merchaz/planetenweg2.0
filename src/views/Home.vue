<template>
  <div class="home">
    <ul>
      <!-- <li v-for="commute in commutes" :key="commute.name"> -->
        <!-- <Commute :person="commute.name" :start="commute.start" :end="commute.end" /> -->
        <li><router-link to="/Start">Start</router-link></li>
        <li><router-link to="/Planeteninfo">Planeteninfo</router-link></li>
        <li><router-link to="/MeineSammlung">Meine Sammlung</router-link></li>
        <li><router-link to="/Walking">Walking</router-link></li>
        <li><router-link to="/Unlock">Unlock</router-link></li>
        <li><router-link to="/sonne">Sonne</router-link></li>
        <li><router-link to="/erdemond">Erde und Mond</router-link></li>
        <li><router-link to="/map">Map</router-link></li>
    </ul>
    
  </div>
</template>

<script>
// @ is an alias to /src
//import Commute from '@/components/Commute.vue'
import contentful from '@/module/contentful.js'

export default {
  name: 'Home',
  components: {
    //Commute
  },
  data: function(){
    return {
      commutes: [
        { name: 'Merc' , start: "steinhuse", end: "emmebrugg"},
        { name: 'Levin' , start: "Bern", end: "emmebrugg"},
        { name: 'Seraphine' , start: "Biel", end: "emmebrugg"}
      ]
    }
  },
  created: async function() {
    console.log("created done")
    let result = await contentful.getEntries(
    {content_type : "commute"}
    );
    this.commutes = result.items;
    console.log(result)
  }
}
</script>
