<template>
      <form class="ui segment large form">
            <div class="container">
                <div><label id="locLabel">click the button</label></div>
                <div><button v-on:click="locatorButtonPressed">get location</button></div>
            </div>
      </form>
</template>

<style scoped>
    .container {
        display: flex;
        flex-direction: column;
    }

    .container div {
        width: 100%;
        margin: 1%;
    }
</style>


<script>
// y            x
// ul 47.328758, 8.573194
// ur 47.328758, 8.573721
// ol 47.328997, 8.573194
// or 47.328997, 8.573721
var isasHome = {
    olX: 8.573194,
    olY: 47.328997,
    urX: 8.573721,
    urY: 47.328758
}

var mercsHome = {
    olX: 8.482823,
    olY: 47.193124,
    urX: 8.483493,
    urY: 47.192853
}

var levinsHome = {
    olX: 8.285036,
    olY: 47.073229,
    urX: 8.285633,
    urY: 47.072837
}
export default {
  name: 'UserLocation',
  methods: {
    locatorButtonPressed() {
        navigator.geolocation.getCurrentPosition(
            position => {
                console.log(position.coords.longitude);
                document.getElementById("locLabel").innerHTML  = "Latitude: " + position.coords.latitude + ", " + "Longitude: " + position.coords.longitude;
                if(this.isInside(position.coords.longitude, position.coords.latitude, levinsHome.olX, levinsHome.olY, levinsHome.urX, levinsHome.urY)){
                    alert("youre at levins place")
                } else {
                    alert("youre not at levins place")
                }
                if(this.isInside(position.coords.longitude, position.coords.latitude, isasHome.olX, isasHome.olY, isasHome.urX, isasHome.urY)){
                    alert("youre at isas place")
                } else {
                    alert("youre not at isas place")
                }
                if(this.isInside(position.coords.longitude, position.coords.latitude, mercsHome.olX, mercsHome.olY, mercsHome.urX, mercsHome.urY)){
                    alert("youre at mercs place")
                } else {
                    alert("youre not at mercs place")
                }                
            },
            error => {
                console.log("rip");
            console.log(error.message);
            },
        )   
    },

    isInside(x, y, z1, z2, z3, z4)  {
        var x1 = Math.min(z1, z3);
        var x2 = Math.max(z1, z3);
        var y1 = Math.min(z2, z4);
        var y2 = Math.max(z2, z4);
        if ((x1 <= x ) && ( x <= x2) && (y1 <= y) && (y <= y2)) {
            console.log(x1 + "," + x + "," + x2);
            console.log(y1 + "," + y + "," + y2);
            return true;
        } else {
            return false;
        }
    }
  }
}






</script>