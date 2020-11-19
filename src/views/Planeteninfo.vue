<template>
  <div class="bg-wrapper">
    <div class="bg">

      <div class="btns">
        <router-link to="/MeineSammlung"><img class="sammlungBtn" src="../assets/sammlungBtn.svg"></router-link>
        <router-link to="/Walking"><img class="closeBtn" src="../assets/closeBtn.svg"></router-link>
      </div>     
        <img class="planetAsset">
        <h1 v-if="imgUrl">
          {{ myPlanet.fields.planetname }}
        </h1>
        <img v-if="imgUrl" class="logo" v-bind:src="myPlanet.fields.planetLogo.fields.file.url">
        <div class="planetdescription">
      </div>

      <div class="stars"></div>
      
    </div>
  </div>
</template>

<script>
import contentfulClient from "@/module/contentful.js";

var imgUrl = "";
export default {
  name: 'planetenView',
  // props: {
  //   msg: String
  // },

   data: function() {
    return {
      planet: [],
      myPlanet: {},
      imgUrl
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
    this.imgUrl = this.myPlanet.fields.planetLogo.fields.file.url;
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

.stars {
  top: 0;
}

</style>