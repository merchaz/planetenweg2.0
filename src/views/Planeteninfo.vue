<template>
  <div class="bg-wrapper">
    <div class="bg">

      <div class="btns">
        <router-link to="/MeineSammlung"><img id="sammlungBtn" src="~@/assets/sammlungBtn.svg"></router-link>
        <router-link to="/walking"><img id="closeBtn" src="~@/assets/closeBtn.svg"></router-link>
      </div>
     
      <img class="planetImg" v-bind:src="myPlanet.fields.planetImg.fields.file.url">
      <h1>{{ myPlanet.fields.planetname }}</h1>
      <img class="logo" v-bind:src="myPlanet.fields.planetLogo.fields.file.url">
      <div class="planetEntdeckung"><p>{{ myPlanet.fields.planetEntdeckung }}</p></div>
      <div class="planetIntroduction"><p>{{ myPlanet.fields.planetIntroduction }}</p></div>
      <div class="planetDescription"><p>{{ myPlanet.fields.planetDescription.content[0].content[0].value }}</p></div>

      <div class="stars"></div>
      
    </div>
  </div>
</template>

<script>
import contentfulClient from "@/module/contentful.js";

export default {
  name: 'planetenView',
  props: {
    msg: String
  },

   data: function() {
    return {
      planet: [],
      myPlanet: {}
    };
  },

  created: async function (){
    let result = await contentfulClient
      .getEntries({
        content_type: "planet"
      });
    this.planet =  result.items;
    this.myPlanet = result.items.find(obj => {
      return obj.fields.planetname.trim().toLowerCase() === this.$route.params.planetname.trim().toLowerCase()
    })  
    console.log(this.myPlanet);
    console.log(this.myPlanet.fields.planetLogo.fields.file.url)
  }
} 

</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>

.bg-wrapper {
  height: 100%;
}

.bg {
  justify-content: flex-start;
  height: 100%;
}

.btns {
  z-index: 15;
}

.stars {
  top: 0;
}

.logo {
  width: clamp(100px, 30%, 800px);
}

.logo,
.planetEntdeckung,
.planetIntroduction,
.planetDescription {
  margin-top: 5rem;
}

</style>