<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/loc">Location</router-link>
  </div>
  <router-view/>
</template>

<style>

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #b94295;
}

.maindiv{
  background-color: #b94295;
}

/* Levin */

/* Fonts */

@import url('https://fonts.googleapis.com/css2?family=Emblema+One&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Roboto+Mono&display=swap');

/* Styles */

div, html, body, h1, h2, h3, h4, p {
  padding: 0;
  margin: 0;
  box-sizing: border-box;
}

body {
  background: #173040;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: 'Roboto Mono', monospace;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #F2D7B6;
}

h1,h2,h3 {
  font-family: 'Emblema One', cursive;
  font-weight: 400;
  text-shadow: 3px 2px 0px #9E4C4E;
  display: inline-block;
}

h1 {
  font-size: 80px;
  line-height: 1;
}

h2 {
  font-size: 60px;
}

h3 {
  font-size: 46px;
}

p {
  font-size: 18px;
  font-weight: 400;
}

a {
  color: #9E4C4E;
  text-decoration-line: none;
  font-size: 18px;
  font-weight: 400;
  text-transform: uppercase;
}

button {
  display: inline-block;
  padding: 10px 40px;
  margin-top: 5vh;
  border: none;
  border-radius: 12px;
  background-color: #F2D7B6;
  color: #9E4C4E;
  font-family: 'Roboto Mono', monospace;
  text-decoration-line: none;
  
}

.bg {
  box-sizing: border-box;
  -moz-box-sizing: border-box;
  -webkit-box-sizing: border-box;
  background: none;
  border: #F2D7B6 10px solid;
  display: flex;
  flex-flow: column wrap;
  justify-content: space-around;
  align-items: center;
  width: 100vw;
  height: 100vh;
  padding: 32px;
}

#nav {
  display: none;
}
</style>