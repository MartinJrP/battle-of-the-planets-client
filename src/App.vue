<template>
  <div id="app">

    <div class="container">

      <h1>Battle of the Planets</h1>

      <p class="description">Morbi leo risus, porta ac consectetur ac, vestibulum at eros. Nullam quis risus eget urna mollis ornare vel eu. Natoque leo penatibus et leo magnis dis parturient montes.</p>


      <button class="main-button">Start Game</button>

      


    </div>
  
  </div>
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  name: 'app'
});
</script>

<style lang="scss">

@import url('https://fonts.googleapis.com/css?family=Luckiest+Guy|Open+Sans:300,300i,400,400i,600,600i,700,700i,800,800i');

html, body {
  height: 100vh;
  width: 100%;
  margin: 0;
  padding: 0;
}

* {
  box-sizing: border-box;
}

#app {
  background-image: url(assets/img/stars-background.svg), linear-gradient(#21132C, #170F1F);
  height:100%;
}

h1 {
  font-family:"Luckiest Guy", sans-serif;
  color:white;
  text-transform: uppercase;
  font-size:88px;
  text-align: center;
  display: inline-block;
  margin: 96px auto 0px auto;
}

.description {
  font-family:"Open Sans", sans-serif;
  color:white;
  font-weight:400;
  text-align: center;
  line-height:36px;
  margin:8px auto 0px auto;
  width:730px;
  font-size:24px;
}

.main-button {
  color:white;
  font-family: "Luckiest Guy", sans-serif;
  font-size:40px;
  text-transform: uppercase;
  padding:24px 72px 9px 72px; // add 15 px to top
  margin:294px 0px 0px 0px;
  background-color:#522875;
  border: none;
  border-radius: 20px;
}

.container {
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  position: relative;
  height:100%;
  width:100%;
  background-size: cover;
  background-repeat: no-repeat;
  margin:0;
  padding:0;
}

.planet-column-1 {

}

.planet-column-2 {
  
}

.planet-column-3 {
  
}

.planet-column-4 {
  
}

.planet-column-5 {
  
}

.planet-column-6 {
  
}
</style>
