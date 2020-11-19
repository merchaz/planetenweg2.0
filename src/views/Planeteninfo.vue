<template>
  <div class="bg-wrapper">
    <div class="bg">

      <div class="btns">
        <router-link to="/Walking"><img class="closeBtn" src="../assets/closeBtn.svg"></router-link>
        <router-link to="/MeineSammlung"><img class="sammlungBtn" src="../assets/sammlungBtn.svg"></router-link>
      </div> 

        <img v-if="imgUrl" class="planetImg" v-bind:src="myPlanet.fields.planetImg.fields.file.url">
        <h2 v-if="imgUrl">{{ myPlanet.fields.planetname }}</h2>
        <img v-if="imgUrl" class="logo" v-bind:src="myPlanet.fields.planetLogo.fields.file.url">

        <div v-if="imgUrl" class="planetEntdeckung"><p>{{ myPlanet.fields.planetEntdeckung }}</p></div>
        <div v-if="imgUrl" class="planetIntroduction"><p>{{ myPlanet.fields.planetIntroduction }}</p></div>
        <div v-if="imgUrl" class="planetDescription"><p>{{ myPlanet.fields.planetDescription.content[0].content[0].value }}</p></div>
      </div>

      <div class="stars"></div>
      
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